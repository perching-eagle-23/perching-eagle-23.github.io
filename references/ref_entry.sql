USE mathsite;

/* success */
/* CREATE TABLE reference (
   id MEDIUMINT NOT NULL AUTO_INCREMENT,
   title CHAR(30) NOT NULL DEFAULT '', 
   author VARCHAR(200),
   link VARCHAR(2083),
   published DATE,
   publication VARCHAR(100),
   pages VARCHAR(20),
   description VARCHAR(200),
   doi VARCHAR(80),
   mr VARCHAR(15),
   isbn VARCHAR(13),
   PRIMARY KEY (id)
);  */

LOAD DATA LOCAL INFILE "C:/xampp/htdocs/learn/persistence/math/site philosophy and unfinished topics/references.txt" INTO TABLE reference 
   FIELDS TERMINATED BY '::'
   LINES TERMINATED BY '\n'
   IGNORE 1 LINES;