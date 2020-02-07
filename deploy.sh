#!/bin/bash

npm run build

sed -i '' 's/\/ui\/css/http:\/\/bozhen.live\/css/g' ../src/main/resources/public/ui/index.html
sed -i '' 's/\/ui\/js/http:\/\/bozhen.live\/js/g' ../src/main/resources/public/ui/index.html

