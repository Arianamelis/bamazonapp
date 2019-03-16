DROP DATABASE IF EXISTS bamazon_db;
CREATE DATABASE bamazon_db;
USE bamazon_db;


CREATE TABLE products(
  item_id INT AUTO_INCREMENT NOT NULL,
  product_name VARCHAR(45) NOT NULL,
  department_name VARCHAR(45) NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  stock_quantity INT(10) NOT NULL,
  primary key(item_id)
);

SELECT * FROM products;

INSERT INTO products (product_name, department_name, price, stock_quantity) 
VALUES ("earings",  "jewlery",  50.20, 20),
  ("icecream", "food", 2.00, 600),
  ("computer", "electronics", 52.50, 45),
  ("headphones", "electronics", 22.00, 60),
  ("dress", "clothes", 87.30, 60),
  ("pillow", "home", 65.60, 34),
  ("broom", "cleaning supplies", 15.20, 40),
  ("tshirts", "clothes", 19.40, 30),
  ("cups", "kitchen", 11.20, 30);


-- Updates the row where the column name is peter --
UPDATE people
SET has_pet = true, pet_name = "Franklin", pet_age = 2
WHERE id = 4;

SELECT * FROM people;
