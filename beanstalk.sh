# Script to configure project

# 1. Git
git branch -m master main

# 2. Configure project
yarn eject

# 3. Swap out files
find ./ios -name '*AppDelegate.m*'
read fileToReplace
cp -f "./.swappable/AppDelegate.m" $fileToReplace
cp -f "./.swappable/README.md" "README.md"

# 4. Clean up
rm -f beanstalk.h
rm -f ".swappable/"

tput setaf 2; echo "========================================\n\nYour beanstalk has grown :)\n\n========================================"

# Script to configure project

# 1. Git
git branch -m master main

# 2. Configure and swap
yarn eject || find ./ios -name '*AppDelegate.m*' || read fileToReplace || cp -f "./.swappable/AppDelegate.m" $fileToReplace

# 3. Swap README
cp -f "./.swappable/README.md" "README.md"

# 4. Clean up
rm -f beanstalk.h
rm -f ".swappable/"

tput setaf 2; echo "========================================\n\nYour beanstalk has grown :)\n\n========================================"