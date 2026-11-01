#!/bin/sh
set -eu
cd "$(dirname "$0")"
node --check dist/app.js
if [ -n "$(git status --porcelain)" ]; then
  echo '변경 사항을 먼저 커밋해주세요.' >&2
  exit 1
fi
git push origin main
git subtree push --prefix dist origin gh-pages
