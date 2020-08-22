#!/bin/bash

echo 'Creating local dynamodb tables:';

function createTable () {
  aws dynamodb create-table --cli-input-json file://$2/table.json --endpoint-url $DB_URL || echo "$1: table already exists";
}

function seedTable() {
  buffer=();

  jq -c '.[]'  $2/data.json | while read item; do # loop json file
    buffer+=($item); # add to array
    if [ ${#buffer[@]} != 25 ]; then continue; fi; # batch-write-item cant write more than 25 items

    printf -v bufferJoined '%s,' "${buffer[@]}"; # join array with commas

    aws dynamodb batch-write-item --request-items='{"'$1'": ['${bufferJoined%,}']}' --endpoint-url $DB_URL;
    buffer=();
  done
}

for folderPath in ./dynamodb/*; do
  tableName=$(echo $folderPath | cut -d/ -f3);

  createTable $tableName $folderPath;
  seedTable $tableName $folderPath;
done
