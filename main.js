let chores = [
  "Sweep",
  "Dishes",
  "Trash"
]

let unorderedList = document.getElementById('todo-list')

chores.forEach(function(chores) {
  unorderedList.innerHTML += `<li>${chores}</li>`
})
