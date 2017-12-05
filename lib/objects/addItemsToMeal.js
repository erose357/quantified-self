const $ = require('jquery')
const responses = require('../ajax-requests/deleteFood.js')
const single = require('../ajax-requests/getSingleFood')

function addToMeal () {
  let i, currentRow, verify;
  let target = event.currentTarget
  let meal = responses.getId(target) 
  let table = document.getElementById('diary-foods-table')
  let tr = table.getElementsByTagName('tr')
  let checked = []

  for (i = 0; i < tr.length; i++) {
    currentRow = tr[i]
    if (currentRow.className === 'headings-diary') {
      continue
    } else {
      verify = $(`.${responses.getId(currentRow)} input:checkbox`)[0].checked
      if (verify === true) {
        checked.push(responses.getId(currentRow))
      }
    }
  }
  mealItems(checked, meal)
}

function formatTableClass (meal) {
  return `.${meal}-heading`
}

function mealItems (foodIds, meal) {
  foodIds.forEach(function(foodId) {
    let heading = formatTableClass(meal)
    single.getSingleFood(foodId, heading)
  })
}

module.exports = {addToMeal}
