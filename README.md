# Welcome to the Flight Service

## Project Setup
- clone the project on your local
- Execute `npm install` on the same path as of your root directory of the downloaded project
- Create a `.env` file in the root directory and add the following environment variable 
- `PORT = 3000`
- Inside `src/config` folder create a new file `config.json`  and then add the following piece of json



{
  "development": {
    "username": <you DB login name>
    "password": <your DB password>,
    "database": "Flight_Search_DB",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
```

```
- once you've added your db config as listed above, go to the src folder from your terminal and execute this command
`npx sequelize db:create`
and then execute

`npx sequelize db:migrate`

```

## DB Design 
  - Airplane Table
  - Flight
  - Airport
  - City

  - A flight belongs to an airplane but one airplane can be used in multiple flights
  - A city has many airports but one airport belongs to a city
  - One airport can have many flights, but a flight belongs to one airport 





/
    -src/
        index.js //server
        models/
        controllers/
        middlewares/
        services/
        utils/
        config/ 
        /repository 
    -tests / [later]

