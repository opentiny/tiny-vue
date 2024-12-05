#!/bin/bash

for file in ./examples/sites/dist/\@demos/app/*
do
  component=${file##*/}
  cp ./examples/sites/dist/\@demos/app/${component}/webdoc/*.md ./_site/\@demos/app/${component}/webdoc
done
