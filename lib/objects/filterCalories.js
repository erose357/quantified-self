const $ = require('jquery')
const allFoods = require('../ajax-requests/getAllFoods')

function sortCalories (sortOrder) {
  let table, rows, switching, i, x, y, shouldSwitch
  table = document.getElementById("diary-foods-table")
  switching = true

  while (switching) {
    switching = false
    rows = table.getElementsByTagName("TR")

    for (i = 1; i < (rows.length - 1); i++) {
      shouldSwitch = false;
      x = rows[i].getElementsByTagName("TD")[2]
      y = rows[i + 1].getElementsByTagName("TD")[2];
      if (sortOrder === 'ascend') {
        if (Number(x.innerHTML) > Number(y.innerHTML)) {
          shouldSwitch= true;
          break
        }
      } else {
        if (Number(x.innerHTML) < Number(y.innerHTML)) {
          shouldSwitch= true;
          break
        }
      }
    }
    if (shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i])
      switching = true
    }
  }
}

function descending() {
  sortCalories('descend')
}

function ascending() {
  sortCalories('ascend')
}

function original () {
  $('.food').remove()
  allFoods.getFoodsDiary()
}

module.exports = {ascending, descending, original}
