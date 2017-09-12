<script src="https://cdnjs.cloudflare.com/ajax/libs/fetch/2.0.3/fetch.min.js"></script>
function getAllTasks() {
fetch('http://localhost:3000')
.then(function(response) {
return response.json()
}).then(function(json) {
  // display on the screen
  let items = json.vendingItem
  var vending = document.querySelector("#vendingItems")
  for(var i = 0; i<vendingItems.length;i++) {
        let li = document.createElement("li")
        li.innerHTML = items[i].name
        vending.appendChild(li)
  }
}).catch(function(ex) {
console.log('parsing failed', ex)
})
}
getAllTasks()
