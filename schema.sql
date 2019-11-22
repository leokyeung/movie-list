create database leodb;
use leodb;

create table movieinfo (
  id int not null auto_increment primary key,
  moviename varchar(100),
  movieyear varchar(100),
  score int,
  totalvote int,

)