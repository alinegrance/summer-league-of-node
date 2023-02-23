DROP DATABASE IF EXISTS LeagueOfNode;

CREATE DATABASE LeagueOfNode;

USE LeagueOfNode;

CREATE TABLE users (
  id INT NOT NULL auto_increment PRIMARY KEY,
  username VARCHAR(50) NOT NULL,
  email VARCHAR(50) NOT NULL,
  password VARCHAR (50) NOT NULL
) ENGINE=INNODB;

CREATE TABLE characters (
  id INT NOT NULL auto_increment PRIMARY KEY,
  name VARCHAR(50) NOT NULL
) ENGINE=INNODB;

CREATE TABLE skins (
  id INT NOT NULL auto_increment PRIMARY KEY,
  character_id INT NOT NULL,
  name VARCHAR(50) NOT NULL,
  FOREIGN KEY (character_id) REFERENCES characters (id) ON DELETE CASCADE
) ENGINE=INNODB;


CREATE TABLE user_aquired_characters (
  user_id INT NOT NULL,
  character_id INT NOT NULL,
  level INT NOT NULL DEFAULT 1,
  FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE CASCADE,
  FOREIGN KEY (character_id) REFERENCES characters (id) ON DELETE CASCADE
) ENGINE=INNODB;

CREATE TABLE user_aquired_skins (
  user_id INT NOT NULL,
  skin_id INT NOT NULL,
  FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE CASCADE,
  FOREIGN KEY (skin_id) REFERENCES skins (id) ON DELETE CASCADE
) ENGINE=INNODB;

SET SQL_SAFE_UPDATES = 0;