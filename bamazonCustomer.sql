DROP DATABASE IF EXISTS bamazon_db;
CREATE DATABASE bamazon_db;
USE bamazon_db;
CREATE TABLE products (
  id INTEGER(11) AUTO_INCREMENT NOT NULL,
 
  product_name VARCHAR(100),
  department_name VARCHAR(100),
  stock_quantity INTEGER (100),
   item_id INTEGER(11),
--    not sure item_id (unique id for each product)--  
  PRIMARY KEY (id)
);
INSERT INTO products (product_name, department_name, stock_quantity)
VALUES ("earings", "jewlery", 50);
INSERT INTO products (product_name, department_name, stock_quantity)
VALUES ("shoes", "clothes", 20);
INSERT INTO products (product_name, department_name, stock_quantity)
VALUES ("icecream", "food", 2);
INSERT INTO products (product_name, department_name, stock_quantity)
VALUES ("computer", "electronics", 52);
INSERT INTO products (product_name, department_name, stock_quantity)
VALUES ("headphones", "electronics", 22);
INSERT INTO products (product_name, department_name, stock_quantity)
VALUES ("dress", "clothes", 12);
INSERT INTO products (product_name, department_name, stock_quantity)
VALUES ("pillow", "home", 34);
INSERT INTO products (product_name, department_name, stock_quantity)
VALUES ("broom", "cleaning supplies", 3);
INSERT INTO products (product_name, department_name, stock_quantity)
VALUES ("tshirts", "clothes", 15);
INSERT INTO products (product_name, department_name, stock_quantity)
VALUES ("cups", "kitchen", 11);


-- Updates the row where the column name is peter --
UPDATE people
SET has_pet = true, pet_name = "Franklin", pet_age = 2
WHERE id = 4;

SELECT * FROM people;
