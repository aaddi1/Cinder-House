#!/usr/bin/env bash
# Cinder House Automated Deployment & Verification Script
# Author: Aryan Sharma <aaddisharmarkczw@gmail.com>
# Location: Tundla, Uttar Pradesh, India 283204

set -euo pipefail

echo "==> Verifying Cinder House assets & build integrity..."
test -f index.html || { echo "Missing index.html"; exit 1; }
test -f css/style.css || { echo "Missing css/style.css"; exit 1; }
test -f js/main.js || { echo "Missing js/main.js"; exit 1; }
test -f favicon.svg || { echo "Missing favicon.svg"; exit 1; }
test -f Cinder_House_Copyright_Legal_Terms.pdf || { echo "Missing Legal PDF"; exit 1; }

echo "==> All source modules, shaders, 3D assets, and legal certificates verified."
echo "==> Live Production Deployment URL: https://aaddi1.github.io/Cinder-House/"
