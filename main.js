let chores = [
  "Sweep",
  "Dishes",
  "Trash",
  "Take a break"
]

let unorderedList = document.getElementById('todo-list')

chores.forEach(function(chores) {
  unorderedList.innerHTML += `<li>${chores}</li>`
})
