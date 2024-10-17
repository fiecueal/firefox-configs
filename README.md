## What it does

`chrome/userChrome.css`:
- puts url & tab bars in the same row
- removes margins/padding/borders in various places

`user.js` changes miscellaneous settings which are commented in the file itself

## Usage

For an existing profile, use this command to copy the files.
If they already exist in the profile, this will back them up.
`cp -r --backup=numbered user.js chrome/ <profile directory here>`

To make a new one, just run the shell script.
