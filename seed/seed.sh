#!/bin/bash

echo 'Create local dynamodb tables:';

for folder in ./dynamodb/*; do
    $folder/create.sh
done
