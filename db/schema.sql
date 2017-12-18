### Schema

CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers
(
	id int(20) NOT NULL AUTO_INCREMENT,
	burger_name varchar(200) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	date_added TIMESTAMP,
 PRIMARY KEY (id)
);
