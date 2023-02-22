#!/bin/bash

if [ ! $version ];
then npm version 0.1.0-`date "+%Y%m%d%H%M%S"`; 
else npm version $version; 
fi

npm install

if [ ! $componentName ];
then 
    npm run build:vue$vueVersion
else 
    npm run buildfuxi:vue$vueVersion 
fi

npm run releasefuxi$vueVersion

if [ $? -ne 0 ]
then
    echo "[ERROR] build falid!"
    exit 1
fi
echo '[INFO] build completed'

