drop database IF EXISTS lg;
create database lg;
\c lg

CREATE TABLE EMPLOYEE(
    eID int NOT NULL PRIMARY KEY,
    eName varchar(50)
);

