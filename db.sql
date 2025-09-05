-- Create database (run in your MySQL client)
CREATE DATABASE IF NOT EXISTS schooldb;
USE schooldb;


-- Create schools table
CREATE TABLE IF NOT EXISTS schools (
id INT AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(255) NOT NULL,
address VARCHAR(500) NOT NULL,
latitude FLOAT NOT NULL,
longitude FLOAT NOT NULL,
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);