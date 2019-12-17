# Zenduty JavaScript SDK

Javascript SDK to communicate with zenduty endpoints

## Installing

Installation can be done through npm, as follows:
```
$ npm install zenduty-sdk
```
or you may grab the latest source code from GitHub:
```
$ git clone https://github.com/Zenduty/zenduty-js.git
```
<python3 setup.py install>

## Contents
1) zenduty/api : contains the functions to communicate with zenduty API endpoints
2) zenduty/    : contains the common required files
3) bin/		   : contains sample script to run zenduty functions

## Getting started

Before you begin making use of the SDK, make sure you have your Zenduty Access Token.

You can then import the package into your JavaScript script.
```
const zenduty=require('zenduty-sdk')
```
Based on the endpoint you want to communicate with, create an object of the required class. For example, to create an incident:
```
api_obj = zenduty.IncidentsApi(zenduty.ApiClient('your-access-token'))
payload = {"service":"c7fff4c5-2def-41e8-9120-c63f649a825c",
        "escalation_policy":"a70244c8-e343-4dd0-8d87-2f767115568a",
        "user":null,
        "title":"Name of trial",
        "summary":"summary of trial"}
api_obj.create_incident(payload).then(myJson=>{
        console.log(JSON.stringify(myJson))
        });
```
Refer the comments under each function for a detailed description of it's parameters.
<It is important to note that each function returns a urllib3.response.HTTPResponse object.>

## Running tests

There is a sample skeleton code in bin/. Add your access token to it and modify the object and function name for testing purposes.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
