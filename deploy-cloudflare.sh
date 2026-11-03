#!/bin/sh
set -eu
cd "$(dirname "$0")"
for script in dist/*.js; do node --check "$script"; done
# Publish tracked service files only; local previews and original photos stay local.
stage_dir=$(mktemp -d)
trap 'rm -rf "$stage_dir"' EXIT
git archive HEAD dist | tar -x -C "$stage_dir"
npx --yes wrangler pages deploy "$stage_dir/dist" --project-name wonheung-machine-guide-1986 --branch main
