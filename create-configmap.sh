#!/bin/bash
# Script to create Kubernetes ConfigMap from built files
# Run this after building your app: npm run build

echo "Creating ConfigMap from dist directory..."

# Create the ConfigMap YAML
cat > app-configmap.yaml << EOF
apiVersion: v1
kind: ConfigMap
metadata:
  name: app-files
data:
EOF

# Add index.html
echo "  index.html: |" >> app-configmap.yaml
cat dist/index.html | sed 's/^/    /' >> app-configmap.yaml

# Add all files from assets directory
for file in dist/assets/*; do
  filename=$(basename "$file")
  echo "  $filename: |" >> app-configmap.yaml
  cat "$file" | sed 's/^/    /' >> app-configmap.yaml
done

echo "ConfigMap YAML created: app-configmap.yaml"
echo "Apply with: kubectl apply -f k8s-deployment.yaml -f app-configmap.yaml"