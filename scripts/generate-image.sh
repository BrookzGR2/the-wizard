#!/bin/bash
# generate-image.sh — Generate AI header images for The Wizard articles
# Usage: ./scripts/generate-image.sh <slug> "<prompt>"
# Cost: ~$0.08 per image (DALL-E 3 standard, 1792x1024)

set -euo pipefail

SLUG="${1:-}"
PROMPT="${2:-}"

if [ -z "$SLUG" ] || [ -z "$PROMPT" ]; then
  echo "Usage: $0 <slug> \"<prompt>\""
  echo "Example: $0 my-article \"A wizard casting spells in an enchanted library\""
  exit 1
fi

# Read API key from credentials
CREDS_FILE="$HOME/.openclaw/credentials/openai.json"
if [ ! -f "$CREDS_FILE" ]; then
  echo "Error: OpenAI credentials not found at $CREDS_FILE"
  exit 1
fi

OPENAI_API_KEY=$(cat "$CREDS_FILE" | python3 -c "import sys,json; print(json.load(sys.stdin)['openai_api_key'])")

if [ -z "$OPENAI_API_KEY" ]; then
  echo "Error: Could not read openai_api_key from $CREDS_FILE"
  exit 1
fi

# Output path
SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
REPO_ROOT="$(dirname "$SCRIPT_DIR")"
OUTPUT_DIR="$REPO_ROOT/public/images/articles"
OUTPUT_FILE="$OUTPUT_DIR/$SLUG.png"

mkdir -p "$OUTPUT_DIR"

echo "🎨 Generating image for: $SLUG"
echo "📝 Prompt: $PROMPT"
echo ""

# Call DALL-E 3 API
RESPONSE=$(curl -s https://api.openai.com/v1/images/generations \
  -H "Authorization: Bearer $OPENAI_API_KEY" \
  -H "Content-Type: application/json" \
  -d "{
    \"model\": \"dall-e-3\",
    \"prompt\": \"$PROMPT\",
    \"n\": 1,
    \"size\": \"1792x1024\",
    \"quality\": \"standard\"
  }")

# Check for errors
ERROR=$(echo "$RESPONSE" | python3 -c "import sys,json; d=json.load(sys.stdin); print(d.get('error',{}).get('message',''))" 2>/dev/null || true)
if [ -n "$ERROR" ]; then
  echo "❌ API Error: $ERROR"
  exit 1
fi

# Extract image URL
IMAGE_URL=$(echo "$RESPONSE" | python3 -c "import sys,json; print(json.load(sys.stdin)['data'][0]['url'])")

if [ -z "$IMAGE_URL" ]; then
  echo "❌ No image URL in response"
  exit 1
fi

# Download the image
echo "⬇️  Downloading image..."
curl -sL "$IMAGE_URL" -o "$OUTPUT_FILE"

# Verify
FILE_SIZE=$(wc -c < "$OUTPUT_FILE" | tr -d ' ')
echo ""
echo "✅ Image saved: $OUTPUT_FILE"
echo "📏 Size: $(echo "scale=1; $FILE_SIZE / 1024 / 1024" | bc)MB"
echo ""
echo "📌 Add to article frontmatter:"
echo "   coverImage: \"/images/articles/$SLUG.png\""
