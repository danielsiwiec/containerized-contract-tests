# Producer

This is a simple HTTP server with a single endpoint **GET \\** returning a hardcoded JSON body.

## Running

Go into the producer directory:

```shell
cd producer
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


## Public tunnel (optional)
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

# Consumer

The **Consumer** is an application relying the **Producer** for it's functionality.


## Tests
http://docker.for.mac.localhost:3000