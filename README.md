# Frontend Project

This project is composed of a demo api and a demo React website.

in the website through `/` the user can see the company list

![Companies](companies.png "Companies")

*clicking on a company the navigation goes to `/companies/:companyId`*

in `/companies/:companyId` the user can see a table of numbers that belong to that company

![Local Public Office](companynums.png "Local Public Office")

*clicking on a number should navigate to `/numbers/:numberId`*

in `/numbers/:numberId` the user can see the number details

![351910000000](num.png "351910000000")

in both `/numbers/:numberId` and `/companies/:companyId` there is a `Go Back` button that goes to the previous page

# Prerequisites
Install [node.js](https://nodejs.org/en/) which includes [npm](https://npmjs.com)

## Get it up and running

### With Node and NPM Installed

1 - Install the dependencies

```bash
yarn install
```

2 - Execute the demo website project
```bash
yarn start
```

3 - Execute the web demo api project
```bash
yarn run server
```

You should then have the demo website running in `http://localhost:8080` and the demo api runnin in `http://localhost:3000`

## API

The REST API is based on [json-server](https://www.npmjs.com/package/), and the data is defined in [db.json](db.json) file. To start it simply run:


You should then have the API running in http://localhost:3000.
