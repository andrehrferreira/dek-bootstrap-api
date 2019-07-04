# @dekproject/bootstrap-api

Basic API example in DEK

What does the API bootstrap do?

* Creates a server pointed to /api with some basic CRUD in Mongoose
* Create documentation with the help of the Swagger module in /api/docs

## Instalation

To install the bootstrap we recommend using the CLI

```bash
$ npm i -g @dekproject/cli
$ dek init
```

```
? What is the name of the project? myapi
? What is the author's name?
? What is the project description? Another DEK project
? What is the version of the project? 1.0.0
? Directory for your project: /media/myapi
? What is the repository of this project?
? Do you want to use default skeleton? bootstrap-api
? Do you want to install components for development mode? Yes
? Do you want to install some frontend framework? none
? Select plugins for your project: mongoose
```

or

```bash
$ git clone https://github.com/dekproject/bootstrap-api
$ git clone https://github.com/dekproject/mongoose ./src/plugins
$ yarn && yarn add mongoose --save
$ yarn dev
```

### Access

API
```
http://localhost:5555/api
```

Docs
```
http://localhost:5555/api/docs
```
