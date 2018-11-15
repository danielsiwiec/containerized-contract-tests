# Containerized Consumer Driven Contracts

This demo will walk you through the following steps:

1. Starting a provider service (express API)
1. Running a consumer application (node client)
1. Publishing a contract by a consumer
1. Exercising the contract against a provider

## Typical workflow

1. The *Provider* builds a service
1. The *Consumer* integrates with it and has now a dependency on part of the *Provider* service
1. The *Consumer* specifies its dependency in a suite of Contract Tests, in a technology of their choosing
1. The *Consumer* publishes the image
1. The *Provider* picks up the image and runs it in a container, passing pre-defined variables (hostname, etc)
1. The *Provider* subscribes to new versions of the image and runs it on every new version

## Prerequisites

* Docker

## Provider

This is a simple HTTP server with a single endpoint **GET \\** returning a hardcoded JSON body. In this section we will start the API and exercise its endpoint.

### Running

Start the *Provider* service:

```shell
make provider
```

This will build a Docker image for the *Provider* and start a container.

At this point, the server is running. In order to simulate a real-life scenario of the server running in the cloud, a tunneling service ([ngrok](https://ngrok.com/)) has been used. The output will give you a publicly accessible endpoint for the service (e.g. https://c0587a05.ngrok.io)

You can exercise the endpoint in the following way:

```bash
curl https://c0587a05.ngrok.io
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

## Consumer

The *Consumer* is an application relying on the *Provider* for it's functionality. In this section we will run the consumer client application, as well as run contract tests against the provider.

### Running

The consumer application needs the provider's endpoint. It'll be read from the *Provider* container and passed through an environment variable. Run the *Consumer* client:

```shell
make consumer
```

This command builds a consumer image and runs the container, passing in the endpoint as an environment variable. The variable is read from the *Provider* container.

You should see a similar output to this:

```shell
His first name is Daniel, but he goes by Dan
```

## Publishing and exercising the contract
In this section, we will do the following:

1. (Consumer) Build and publish the contract test Docker image
1. (Provider) Start the container and run the contract tests against the instance

### Build and publish the contract image

Go to the contract folder:

```shell
make contract-build
```

This will build a Docker image with the contract tests in it.

### Exercise the contract against the provider

Start a container to run the contract tests and pass the PROVIDER_URL variable:

```shell
make contract-run
```

Similar as before - the variable is read from the *Provider* container.

You should see an output similar to this:

```shell
PASS tests/name.test.js
  Name service
    ✓ should have the right schema (569ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        0.986s
Ran all test suites.
```