# workday-graphql

My project @ 2016 Hackathon

## what is this?

This is an npm module wrapping some of the existing Workday APIs (REST) into graphql. 
It also provides an HTTP server which exposes GraphiQL to make it easily explorable.

## how to get it running?

You need nodejs and npm installed. 

You also need a running Workday tenant, an exposed REST API on the given tenant, and
an access token to the API. Then perform these commands in your commandline:

```bash
git clone https://github.com/bali182/workday-graphql.git
cd workday-graphql
npm install
```
Now you have the full source!

You need to place the tenant information into `config.json`:

```json
{
  "endpoint": "<endpoint>",
  "tenant": "<tenant>",
  "accessToken": "<accessToken>",
  "timeout": 10000
}
```

**Mind what tenant are you using!** In theory you could try this on a production tenant, 
since this module is not capable of any mutations on it, but it's better to work on a 
development tenant, since the amount of queries send to it can be extensive.

Once that's done, simply hit in your terminal

```bash
npm start
```
Now you can access and query the GraphiQL interface (or graphql from any compatible language):

http://localhost:8080/graphql

