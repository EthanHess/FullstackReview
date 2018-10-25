drop table if exists couches; 
drop table if exists users; 

create table users (
    id serial primary key, 
    auth0_id text not null, 
    email text not null,
    name text not null, 
    picture text not null 
); 

create table couches (
    id serial primary key, 
    user_id int references users (id), 
    name text not null, 
    price int not null, 
    image text not null
); 