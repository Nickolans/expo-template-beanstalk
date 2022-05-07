# Script to configure project

# 1. Git
git branch -m master main

# 2. Configure project
yarn
yarn eject

# 3. Swap out files
cp -f "./.swappable/README.md" "README.md"
mv .swappable/.gitignore .

# 4. Clean up
rm -f beanstalk.sh
rm -rf .swappable

tput setaf 2; echo "========================================\n\nYour beanstalk has grown :)\n\n========================================"