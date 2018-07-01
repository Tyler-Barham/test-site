# Website Test

## Requirements
* Node Version 10.4.1
* NPM Version 6.1.0
* PHP Version 7.1.16
* MySql Version 8.0.11

## Setup
    $ cd FrontEnd/
    $ npm install

Copy [these](./BackEnd/mysql_setup.txt) commands into a MySql database to set it up and populate it.

## Running Locally

The Frontend and Backend need to be run in their own terminals.

### Backend
    $ cd BackEnd/
    $ php -S 127.0.0.1:8090 -t ./

### Frontend
    $ cd FrontEnd/
    $ npm start

Navigate to [http://localhost:4200/](http://localhost:4200)