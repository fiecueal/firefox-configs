## What it does

`chrome/userChrome.css`:
- puts url & tab bars in the same row
- removes margins/padding/borders in various places

`user.js` are extra configs to slap under [Betterfox](https://github.com/yokoffing/Betterfox) `user.js`.
Found Betterfox just after making this repo and decided to use that instead of making a `user.js` from scratch.

## Usage

Install Betterfox then do:

```sh
# new profile
name="new profile name here"
firefox -CreateProfile "$name"
sleep 2 # give firefox time to create the new profile
dir=$(find $HOME/.mozilla/firefox/ -maxdepth 1 -name "*.$name")
# new profile

# assumes Betterfox repo exists in $HOME/Projects/Betterfox
cp -r --backup=numbered chrome/ $HOME/Projects/Betterfox/user.js $dir
# append personal configs to the user.js that is now in the profile dir
cat user.js >> $dir/user.js
```
