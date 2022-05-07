# Script to configure project

#1. Swap out files
fileToReplace=$(find ./ios -name '*AppDelegate.m*')
cp -f "./.swappable/AppDelegate.m" $fileToReplace
cp -f "./.swappable/README.md" "README.md"
mv .swappable/gitignore.example.txt .
mv gitignore.example.txt .gitignore

# 2. Clean up
rm -f beanstalk.sh
rm -rf .swappable

tput setaf 2; echo "========================================\n\nYour beanstalk has grown :)\n\n========================================"