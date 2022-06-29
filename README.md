# ORM-E-Commerce

## Table of Content

-[Description](#description)
-[Usage](#usage)
-[Installation](#installation)
-[Visuals](#visuals)
-[Resources](#resources)
-[Authors and Acknowledgement](#authors-and-acknowledgement)

## Description 

This is a ORM E-Commerce Back End Application that works with Express.js API and configure using Sequeilize to interact with the MySQL database. This application works on the command line and below is a demo showing how to run and use this application.

## Usage

How to use this ORM E-Commerce Back End Application

- Step 1: Download all the require installation

- Step 2: Go into MySQL shell to create the schema for the database

- Step 3: Exit MySQL shell, and in terminal, type npm install seed, to seed the database 

- Step 4: Type in "nodemon" to start the server and open the server in the Insomnia Core

- Step 5: Test the CRUD operation in Insomnia and you are able to create, read, update, delete either the Cateogry, Product, or Tag model

## Installation

Since all the dependencies/packages are listed in the package.json, you can just run the command  
```
npm i
```

If you prefer downloading/packages each package one by one, these are the command for it 

```
npm i dotenv
```

```
npm i express
```

```
npm i mysql2
```

```
npm i sequelize
```

## Visuals

## Resources

- [GitHub Repo](https://github.com/VanessaLiaw021/orm-e-commerce)

DEMO: How to create the schema from the MySQL shell and How to seed the database 
- [Demo-SQL-Command]()

DEMO: Insonmia Core, GET all Categories, GET all Product, GET all Tags
- [Demo-All-Model]()

DEMO: Insonmia Core, GET a Single Category, GET a Single Product, Get A Single Tag
- [Demo-Single-Model]()

DEMO: Insonmia Core, POST, UPDATE, DELETE Operation for Category, Product, and Tag
- [Demo-POST-UPDATE-DELETE-Model]()

## Authors and Acknowledgement

Starter Code provided by Bookcamp programmers

Coded models and routes folder by Vanessa Liaw