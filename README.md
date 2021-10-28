# orm-express-api

This Object Relational Mapping project, using :
- Postgres 13 for DBSM
- Express JS 

# HOW TO MAKE THIS PROJECT FROM 0
1. ```npm init -y ``` at your directory project
2. install ```npm i sequelize pg ``` to install adapter than make Node Js can use Postgres
3. install ```npm i -D sequelize-cli```  this contain command for configuration Postgres <br>
  nb: use ```npx sequenlize``` to see all command 
4. ```npx sequelize init```
after install those modules, in project directory, there are some new folder

5. go to ```config.json``` at config directory and fill the development configuration <br> 
  nb: username default must be **postgres** _if you not change it_.
  
  **EXAMPLE :**
  
   "development": { <br>
    "username": "postgres", <br>
    "password": "password", _**use your password when setup postgres**_ <br>
    "database": "database_sequelize", ***name your database*** <br>
    "host": "localhost", <br>
    "dialect": "postgres" **_because use postgres_** <br> 
  }
  
6. ```npx sequenlize db:create``` to execute the configuration <br>
   nb: use ```npx sequenlize``` to see all command 

and from here the database is ready, for this case the name of the database is **database_sequelize**

7. ```px sequelize model:generate --name Article --attributes title:string,body:text,approved:boolean``` this for make the table in  the database
8. finally you're ready to try it by your self.

# HOW TO RUN THIS PROJECT
1. clone this project
2. ```npm i``` for install all module that used in this project
3. ```npm start``` to start this project

this is for the API Collection using POSTMAN 
https://www.getpostman.com/collections/95ea54f9d037bca9bf6d
