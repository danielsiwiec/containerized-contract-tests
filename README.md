# Containerized Consumer Driven Contracts

This demo will walk you through the following steps:

1. Starting a provider service (express API)
1. Running a consumer application (node client)
1. Publishing a contract by a consumer
1. Exercising the contract against a provider

## Provider

This is a simple HTTP server with a single endpoint **GET \\** returning a hardcoded JSON body.

### Running

Go into the provider directory:

```shell
cd provider
```

Install node modules:

```shell
npm install
```

Run the service:

```shell
npm start
```

At this point, the server is running. You can exercise the endpoint in the following way:

```bash
curl http://localhost:3000/
```

You should see the following response:

```json
{
  "name": {
    "first": "Daniel",
    "last": "Siwiec",
    "nick": "Dan"
  }
}
```


### Public tunnel (optional)
In order to simulate a real-life scenario of the server running in the cloud, we will use a public tunnelling service [ngrok](https://ngrok.com/)

In a separate tab, run the following command:

```shell
npm run tunnel
```

This should produce an output similar to this:

```shell
Session Status                online
Session Expires               7 hours, 58 minutes
Version                       2.2.8
Region                        United States (us)
Web Interface                 http://127.0.0.1:4040
Forwarding                    http://33bbec96.ngrok.io -> localhost:3000
Forwarding                    https://33bbec96.ngrok.io -> localhost:3000
```

The local service that we started previously is now tunneled through a publicly accessible URL. You can test it by modifying the previous command:

```shell
curl https://33bbec96.ngrok.io
```

## Consumer

The **Consumer** is an application relying on the **Provider** for it's functionality.

### Running
The consumer application needs the provider's endpoint. It'll be passed through an environment variable like this (put in the correct ngrok endpoint for the provider):

```
PROVIDER_URL=https://4e9d9e28.ngrok.io npm start
```


## Tests
http://docker.for.mac.localhost:3000