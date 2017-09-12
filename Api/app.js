const express = require("express")
const app = express();
const bodyParser = require("body-parser")
const mustache = require("mustache")
const models = require("./models")

app.use(bodyParser.json())

app.get("/api/customer/items", function (req, res){
  models.vendingItems.findaAll()
  .then(function(items){
    res.json(items);
  })
})

// let vendingItems = []
//
// app.get("/vendingItems", function (req, res) {
//   odels.vendingItems.findAll().then(function(item){
//     res.render("index", {
//       item: item
//   })
// })
//
//   vendingItems.push({name :'Iphone 8', cost:699, quantity:10, description:"wow"})
//   vendingItems.push({name :'car', cost:700, quantity:10, description:"wow"})
//   vendingItems.push({name :'house', cost:800, quantity:8, description:"wow"})
//   vendingItems.push({name :'Jewelry', cost:344, quantity:7, description:"wow"})
//   vendingItems.push({name :'Laptop', cost:1200, quantity:10, description:"wow"})
//
//   res.json({vending : vendingItems})
// })

app.post("/api/customer/items", function(req, res){
  const newVending = models.vendingItems.build({
    "name": req.body.name,
    "cost": req.body.cost,
    "quantity": req.body.quantity,
    "description": req.body.description
  })
  newVending.save()
  .then(function(newItem){
    res.send("saved")
  })
})

app.listen(3000, function(req, res){
  console.log("listening on port 3000");
})
