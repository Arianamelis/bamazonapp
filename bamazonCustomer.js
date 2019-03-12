var mysql = require("mysql");
var inquirer = require("inquirer");

// create the connection information for the sql database
var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "Bayside94!",
  database: "bamazon_DB"
});

// connect to the mysql server and sql database
connection.connect(function(err) {
  if (err) throw err;
  // run the start function after the connection is made to prompt the user
  start();
});

// function which prompts the user for what action they should take
function start() {
  inquirer
    .prompt([
        {
        name: "item",
        type: "input",
        message: "What is the  ID of the product they would like to buy?"
        },
        // .then(function(answer) {
        //   // get the information of the chosen item
        //   var chosenItem;
        //   for (var i = 0; i < results.length; i++) {
        //     if (results[i].item_name === answer.choice) {
        //       chosenItem = results[i];
        //     }
        //   }
  
        
      ])
      .then(function(answer) {
        inquirer
        .prompt([
          {
              name: "inventory",
              type: "input",
              message: "how many units of the product would u  like to buy?"
            },
          
        ])
    })
    validate: function(value) {
      if (isNaN(value) === false) {
        return true;
      }
      return false;
    }
  }
])
.then(function(answer) {
  // when finished prompting, insert a new item into the db with that info
  connection.query(
    if (answer.postOrBid === "POST") {
    // Once the customer has placed the order, your application should check if your store has enough of the product to meet the customer's request.
    // validate function
    // Once the customer has placed the order, your application should check if your store has enough of the product to meet the customer's request.

// determine if bid was high enough/////determine if there inventory for order
if (chosenItem.highest_bid < parseInt(answer.bid)) {
  // bid was high enough, so update db, let the user know, and start over
  connection.query(
    "UPDATE auctions SET ? WHERE ?",
    [
      {
        highest_bid: answer.bid
      },
      {
        id: chosenItem.id
      }
    ],
    function(error) {
      if (error) throw err;
      console.log("Bid placed successfully!");
      start();
    }
  );
}
else {

// If not, the app should log a phrase like Insufficient quantity!, and then prevent the order from going through.



// However, if your store does have enough of the product, you should fulfill the customer's order.


// This means updating the SQL database to reflect the remaining quantity.
function updateProduct (){
  var query = connection.query(
    "UPDATE products SET ? WHERE ?",
    [
      {
        quantity: 100
      },
      {
        flavor: "Rocky Road"
      }
    ],
    function(err, res) {
      console.log(res.affectedRows + " products updated!\n");
      // Call deleteProduct AFTER the UPDATE completes
      deleteProduct();
    }
  );
  }
// Once the update goes through, show the customer the total cost of their purchase.
function readProducts ()

// why is choices an option ?