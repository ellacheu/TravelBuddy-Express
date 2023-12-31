DROP DATABASE IF EXISTS travel_db;

CREATE DATABASE travel_db;

USE travel_db;

-- CREATE TABLE user (
--     id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
--     name VARCHAR(50) NOT NULL,
--     email VARCHAR(50) NOT NULL,
--     password VARCHAR(50) NOT NULL
-- );

-- CREATE TABLE trip (
--     trip_id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
--     name VARCHAR(50) NOT NULL,
--     flight VARCHAR(50),
--     activity VARCHAR(50),
--     hotel VARCHAR(50),
--     user_id INT,
--     FOREIGN KEY (user_id) 
--     REFERENCES user(id)
-- );

-- CREATE TABLE flight (
--     flight_id  INT PRIMARY KEY NOT NULL,
--     airline VARCHAR(50) NOT NULL,
--     departing_from  VARCHAR(50),
--     destination VARCHAR(50),
--     is_round_trip BOOLEAN,
--     price DECIMAL,
--     trip_id INT,
--     FOREIGN KEY (trip_id)
--     REFERENCES trip(trip_id)
-- );

-- CREATE TABLE hotel (
--     hotel_id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
--     name VARCHAR(50) NOT NULL,
--     address VARCHAR(50),
--     price DECIMAL,
--     trip_id INT,
--     FOREIGN KEY (trip_id)
--     REFERENCES trip(trip_id)
-- );

-- CREATE TABLE activity (
--     activity_id INT PRIMARY KEY NOT NULL,
--     name VARCHAR(50),
--     description VARCHAR(50),
--     location VARCHAR(50) NOT NULL,
--     price DECIMAL,
--     trip_id INT,
--     FOREIGN KEY (trip_id)
--     REFERENCES trip(trip_id)
-- );