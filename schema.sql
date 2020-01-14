CREATE DATABASE if not exists leodb1;
use leodb1;

CREATE TABLE movielist (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    Title VARCHAR(100),
    Year int,
    Score int,
    Total_Vote int,
    img VARCHAR(100)
)
    