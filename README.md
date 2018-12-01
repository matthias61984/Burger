# Devour-A-Burger

This browser-based application lets you create, then devour, any burger your heart desires! The app utilizes JawsDB to connect to a database through deployment on Heroku where the user can then use CRUD commands to manipulate the database. Burger objects can be added to the burgers table using the form field, which then show up in the left column, ready to be eaten. Clicking on the devour button for each created burger will change it's boolean value "devoured" from the default value false to true, moving into the right (or devoured) column. 

## Getting Started

To install, pull files from Github into your desired directory.

### Prerequisites

Run npm init in the terminal, then install these node modules:

```
express
mysql
```

## Deployment

Deployed on heroku at https://burger-destroy.herokuapp.com/

## Built With

HTML, CSS, Javascript, Node, Express, Mysql, Handlebars

## Authors

* **Corey Walsh** 

## Acknowledgments

* The Rubber Ducky
* Carl's Jr.
