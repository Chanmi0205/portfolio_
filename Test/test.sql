CREATE TABLE topic{
    id INT(11) NOT NULL AUTO_INCREMENT,
    title CARCHAR(100) NOT NULL,
    description TEXT NULL,
    created DATETIME NOT NULL,
    author VARCHAR(15) NULL,
    profile VARCHAR(200) NULL,
    PRIMARY KEY(id) 
}