#!/bin/bash
# call an API via the gateway to test out a lambda function
curl -H "Content-Type: application/json" -X POST -d "{\"articleTitle\": \"Big News Story\"}" https://lo70zhk44f.execute-api.us-west-2.amazonaws.com/prod

echo
