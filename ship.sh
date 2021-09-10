yarn build
git co build
mv dist docs
git add -A docs
git commit -m "Release"
echo "Now git push origin build"
