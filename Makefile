provider-build:
	docker build provider -t provider

provider-clean:
	docker rm provider

provider-run: provider-clean
	docker run --name provider provider

provider: provider-build provider-run

consumer-build:
	docker build consumer -t consumer

consumer-run:
	docker run -e PROVIDER_URL=$$(docker exec provider sh -c 'cat url.txt') consumer

consumer: consumer-build consumer-run

contract-build:
	docker build consumer/contract-tests -t consumer-contract

contract-run:
	docker run -e PROVIDER_URL=$$(docker exec provider sh -c 'cat url.txt') consumer-contract

contract: contract-build contract-run