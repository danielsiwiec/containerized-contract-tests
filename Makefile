provider-build:
	docker build provider -t provider

provider-run:
	docker run provider

provider: provider-build provider-run

consumer-build:
	docker build consumer -t consumer

consumer-run:
	docker run -e PROVIDER_URL=$$PROVIDER_URL consumer

consumer: consumer-build consumer-run

contract-build:
	docker build consumer/contract-tests -t consumer-contract

contract-run:
	docker run -e PROVIDER_URL=$$PROVIDER_URL consumer-contract

contract: contract-build contract-run