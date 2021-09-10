set -e

git checkout build
git rebase master
yarn build
git add -A docs
git commit -m "Release"
echo "Now git push origin build"
