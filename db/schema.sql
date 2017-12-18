### Schema

CREATE DATABASE burgers_db;
USE burgers_db;

#Burgers table layout
CREATE TABLE burgers
(
	id int(20) NOT NULL AUTO_INCREMENT,
	burger_name varchar(255) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	date_added TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
 	PRIMARY KEY (id)
);
