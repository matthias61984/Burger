DROP DATABASE IF EXISTS vamax5zpswezdzz8;
CREATE DATABASE vamax5zpswezdzz8;
USE vamax5zpswezdzz8;

CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	burger_name varchar(255) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);
