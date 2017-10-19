# octoblu-site

## About
## Octoblu Platform Features
 Open source
 Container based runs on [https://docker.com](Docker). Octoblu can be deployed in different
 cloud environments (AWS, Microsoft, Google)
 Multi-Protocol (HTTP/S, WebSockets, MQTT, AMQP)
 Security with transport layer encryption, message encryption and a device permissions model
 Supports integrations with many different internet services (Link to supported things)
 Built on NodeJS

## Platform components

Meshblu - Device Registry and Messaging Platform.
Flow Engine - Orchestrates and runs IoT Automations securely on top of the meshblu platform  
Octoblu Application - Connect and manage things, visually design and deploy automations. Built on top of Meshblu APIs
(Show Images of Octoblu)


## Getting Started
Each of these components can be installed separately as  a group or stack of micro-services.  
Installing Meshblu
Installing Octoblu (requires Meshblu)
Installing Flow Engine (requires Meshblu)

## Stacks

When we refer to stacks, we are talking about a group micro-services that run in a container environment that perform a specific function on the platform.

__api-octoblu__ - collection of services that provide rest APIs for the Octoblu web application
__octoblu__ - A collection of services used to run the octoblu web application
__meshblu-core__ - collection of services for running the meshblu IoT messaging platform
__flows__ - collection of services for running Flows. Flows are IoT automations that can be executed while running in a container.


## Meshblu

What is Meshblu?
Link to Meshblu Docs

## Building IoT Solutions
Registering
Configuring Devices
Building Flows

## Things
Whether it is a physical device, an API gateway or a person.
Connectors - Drivers that provide an interface between a device and meshblu.
Endos - An interface for pull based REST apis that allow you to securely separate api credentials <Provide Links>
Slurrys - An interface for stream based APIs (push)  <Provide Links>


## Developers
Contributing on Github
Meshblu Documentation
API Documentation
