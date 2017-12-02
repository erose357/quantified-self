const $ = require('jquery')

function filterFoods() {
  console.log('filterFoods')
  let input, filter, table, tr, td, i;
  input = document.getElementById('food-input')
  filter = input.value.toUpperCase()
  table = document.getElementById('foods-table')
  tr = table.getElementsByTagName('tr')

  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName('td')[0]
    if (td) {
      debugger
      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = ''
      } else {
        tr[i].style.display = 'none'
      }
    }
  }
}

module.exports = {filterFoods}