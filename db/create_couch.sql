insert into couches (user_id, name, price, image) 
values 
(${user_id}, ${name}, ${price}, ${image}) 
returning *; 