# Property Registration System
A hyperledger fabric network for property registration system

## Fabric Network
- 2 Organizations (Users, Registrar)
- TLS Disabled
- 2 Peers for Registrar
- 3 peers for Users


## Network Setup

Move to the network folder inside the property-registration project. This folder contains the  script for network automation.

1. Docker Network Set up

    ./fabricNetwork.sh up

2. Chaincode Installation and Instantiation
	
    ./fabricNetwork.sh install


## Testing the chaincode:

1. requestNewUser(name, email, phone, aadharNo)

peer chaincode invoke -o orderer.property-registration-network.com:7050 -C registrationchannel -n regnet -c '{"Args":["org.property-registration-network.regnet-users:requestNewUser","Akash Sinha","akash.sinha@upgrad.com", "7091384117", "aad-001"]}'

peer chaincode invoke -o orderer.property-registration-network.com:7050 -C registrationchannel -n regnet -c '{"Args":["org.property-registration-network.regnet-users:requestNewUser","Ayush Deepankar","ayush.kumar@upgrad.com", "1234567891", "aad-002"]}'

2. approveNewUser(name, aadharNo)

peer chaincode invoke -o orderer.property-registration-network.com:7050 -C registrationchannel -n regnet -c '{"Args":["org.property-registration-network.regnet-registrar:approveNewUser","Akash Sinha", "aad-001"]}'

peer chaincode invoke -o orderer.property-registration-network.com:7050 -C registrationchannel -n regnet -c '{"Args":["org.property-registration-network.regnet-registrar:approveNewUser","Ayush Deepankar", "aad-002"]}'

3. rechargeAccount(name, aadharNo, bankTransactionID)

peer chaincode invoke -o orderer.property-registration-network.com:7050 -C registrationchannel -n regnet -c '{"Args":["org.property-registration-network.regnet-users:rechargeAccount","Akash Sinha", "aad-001","upg1000"]}'


peer chaincode invoke -o orderer.property-registration-network.com:7050 -C registrationchannel -n regnet -c '{"Args":["org.property-registration-network.regnet-users:rechargeAccount","Ayush Deepankar", "aad-002","upg1000"]}'


4. viewUser(ctx, name, aadharNo)

peer chaincode invoke -o orderer.property-registration-network.com:7050 -C registrationchannel -n regnet -c '{"Args":["org.property-registration-network.regnet-users:viewUser","Akash Sinha", "aad-001"]}'

peer chaincode invoke -o orderer.property-registration-network.com:7050 -C registrationchannel -n regnet -c '{"Args":["org.property-registration-network.regnet-users:viewUser","Ayush Deepankar", "aad-002"]}'

5. propertyRegistrationRequest(name, aadharNo, propertyID, price)

peer chaincode invoke -o orderer.property-registration-network.com:7050 -C registrationchannel -n regnet -c '{"Args":["org.property-registration-network.regnet-users:propertyRegistrationRequest","Akash Sinha", "aad-001", "001", "500"]}'

6. approvePropertyRegistration(propertyID)

peer chaincode invoke -o orderer.property-registration-network.com:7050 -C registrationchannel -n regnet -c '{"Args":["org.property-registration-network.regnet-registrar:approvePropertyRegistration","001"]}'

7. viewProperty(propertyID)

peer chaincode invoke -o orderer.property-registration-network.com:7050 -C registrationchannel -n regnet -c '{"Args":["org.property-registration-network.regnet-users:viewProperty","001"]}'

8. updateProperty(propertyID, name, aadharNo, status)

peer chaincode invoke -o orderer.property-registration-network.com:7050 -C registrationchannel -n regnet -c '{"Args":["org.property-registration-network.regnet-users:updateProperty", "001", "Akash Sinha", "aad-001", "onSale"]}'

9. purchaseProperty(propertyID, name, aadharNo)

peer chaincode invoke -o orderer.property-registration-network.com:7050 -C registrationchannel -n regnet -c '{"Args":["org.property-registration-network.regnet-users:purchaseProperty", "001", "Ayush Deepankar", "aad-002"]}'
