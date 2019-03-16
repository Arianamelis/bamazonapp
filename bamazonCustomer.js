// Initializes the npm packages used
var mysql = require("mysql");
var inquirer = require("inquirer");
require("console.table");
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "Bayside94!",
  database: "bamazon_db"
  // reject UNATHORIZED?
});
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
  }
  allProducts();
});

function allProducts() {
    connection.query("SELECT * FROM products", function(err, res) {
      if (err) throw err;
      console.table(res);
   promptCustomer(res);
    });
  }


function promptCustomer(inventory) {

  inquirer
.prompt([
      {
        type: "input",
        name: "choice",
        message: "What is the ID of the item ?",
        validate: function(val) {
          return !isNaN(val);
        }
      }
    ])
    .then(function(val) {
      var choiceId = parseInt(val.choice);
      var product = checkInventory(choiceId, inventory);
if (product) {
       promptCustomerForQuantity(product);
      }
      else {
        console.log("\nThat item is not in the inventory.");
        allProducts();
      }
    });
  
}

function promptCustomerForQuantity(product) {
  inquirer
    .prompt([
      {
        type: "input",
        name: "quantity",
        message: "How many would you like? ",
        validate: function(val) {
          return val > 0 || val.toLowerCase() === "q";
        }
      }
    ])
    .then(function(val) {
      var quantity = parseInt(val.quantity);

      // If there isn't enough of the chosen product and quantity, let the user know and re-run allProducts
      if (quantity > product.stock_quantity) {
        console.log("\nInsufficient quantity!");
        allProducts();
      }
      else { makePurchase(product, quantity);
      }
    });
}
function makePurchase(product, quantity) {
  connection.query(
    "UPDATE products SET stock_quantity = stock_quantity - ? WHERE item_id = ?",
    [quantity, product.item_id],
    function(err, res) {console.log("\nSuccessfully purchased " + quantity + " " + product.product_name + "'s!");
      allProducts();
    }
  );
}
function checkInventory(choiceId, inventory) {
  for (var i = 0; i < inventory.length; i++) {
    if (inventory[i].item_id === choiceId) {
      return inventory[i];
    }
  }
  return null;
}

  



