#!/bin/sh

firefox -CreateProfile "$1"
sleep 2 # give firefox time to create the new profile
dir=$(find $HOME/.mozilla/firefox/ -maxdepth 1 -name "*.$1")
cp -r user.js chrome/ $dir
