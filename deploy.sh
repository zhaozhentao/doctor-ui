#!/bin/bash

npm run build

sed -i '' 's/\/css/http:\/\/bozhen.live\/css/g' ./dist/index.html
sed -i '' 's/\/js/http:\/\/bozhen.live\/js/g' ./dist/index.html

