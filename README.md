run locally with npm:

1. npm install
2. npm run start

run locally with docker:

1. docker-compose run --rm api npm install
2. docker-compose up

Easy online json generator for tests files:
https://www.json-generator.com

```
[
    '{{repeat(50)}}',
  {
    "PutRequest": {
      "Item":{
          "id": { "S":"{{guid()}}" },
          "name": { "S": "{{firstName()}}" },
          "date": { "S": '{{date(new Date(2014, 0, 1), new Date(), "YYYY-MM-ddThh:mm:ss")}}' }

      }}}

]
```
