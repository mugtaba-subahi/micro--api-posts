#!/bin/bash

name=Dogs
dir=dynamodb/$name

aws dynamodb create-table --cli-input-json file://$dir/table.json --endpoint-url $DB_URL || echo "$name: table already exists";

echo "$name: populating table";
aws dynamodb batch-write-item --request-items file://$dir/data.json --endpoint-url $DB_URL;
