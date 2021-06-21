# Kwetter

## Information

All microservices are developed with Spring framework, the front-end is developed in React and the serverless function in NodeJS.

### Folders

Each folder in this project I tell you what it means.

1. development
    - In the first stage of this project, I have used this folder a lot of times to run all services in Docker Compose.
    - Local images that were pulled.
2. kubernetes
    - In this folder there are some YML files. The deployment.yml file is used by Kubernetes (via Azure DevOps).
    - The other YML files, are test YML's, for testing some services separately.
3. production
    - Docker compose files, with images from Docker Hub.
4. repositories
    - All code of this project can be found here. 
    - Every service has an seperate folder of his own.
5. services
    - All repositories from Github.
    - Referred via gitmodules to other Github repositories.

### Techniques

Here an overview of techniques / frameworks.

* Backend
    - ♨ [Java](https://www.java.com/nl/) - Programming language.
    - 🍃 [Spring Framework](https://spring.io/) - API framework in Java.
    - 🔱 [Kafka](https://kafka.apache.org/) - Message Broker Apache Kafka.
    - 5️⃣ [JUnit](https://junit.org/junit5/) - Testing framework in Java.
    - 🐒 [Mockito](https://site.mockito.org/) - Mocking framework for unit tests in Java.
    - 🟩 [NodeJS](https://nodejs.org/en/) -  An open source JavaScript runtime built.
    - 🐬 [MySql](https://www.mysql.com/) - An open source project for relational databases.
    - 🌿 [MongoDB](https://www.mongodb.com/) - An open source document oriented database.
    - 📕 [Hibernate](https://hibernate.org/) - An Object relational Mapping library in Java.
    - 📩 [Stomp](https://spring.io/guides/gs/messaging-stomp-websocket/) - Websocket messaging in Springboot

* Front-end
    - 💻 [React](https://reactjs.org/) - A javascript library for building user interfaces.
    - 🧦 [SockJS](https://www.npmjs.com/package/sockjs) - Javascript library (for browsers) that provides a Websocket-like object.

* Other
    - 🐝 [SonarCloud](https://sonarcloud.io/) — A cloud-based code quality and security service.
    - 🐳 [Docker & Docker Hub](https://www.docker.com/)(https://hub.docker.com/) - Container images virtualization. 
    - 🛳 [Kubernetes](https://kubernetes.io/) - An open source system for automating deployment, scaling and management of containerized applications.


## Setup and run
Step 1: Clone the repository

```sh
git clone https://github.com/FritsvanLieshout/kwetter-microservices
```

Step 2:  Checkout to development in the root of the project and init the submodules

```sh
git checkout development
git submodule init
git submodule update
```

# Kwetter platform (Front-end)

## Install packages / Dependencies
Step 1: Install NodeJS

```sh
https://nodejs.org/en/
```

Step 2: Go to the repositories folder, here can you find all the code of this project.
Step 3: Open the folder 'kwetter-app' in an editor of your choice.

Step 4: Install the packages

- `npm install` or `npm i` - Install al the dependecies of this project.
- `npm start` - Start the project.
- `npm run build` - Create a build of the project.


# Handover

In the coming months I want continue with this project. There are still few things to do. 

### Issues / Bugs
- Via the cloud some issues with Google Chrome. (Firefox works).

### Todo
- Fallback for some microservices.
- Search function.
- UX report & apply the feedback of this report.
