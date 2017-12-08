const $ = require('jquery')
const responses = require('../ajax-requests/deleteFood.js')
const postItem = require('../ajax-requests/postMealItems')
const calories = require('../objects/diaryCalorieCounts')
const totals = require('../objects/totalsTable')

function addToMeal () {
  let mealId = getMealId(responses.getId(event.currentTarget))
  let checked = $(':checked').get()

  checked.forEach(function(item) {
    let itemId = item.className
    postItem.postMealItems(itemId, mealId)
  })
  uncheck(checked)
  calories.totalCalories()
  calories.remainingCalories()
  totals.loadTotals()
}

function uncheck(elements) {
  elements.forEach(function(elem) {
    $(`input.${elem.className}`).prop('checked', false)
  })
}

function getMealId(meal) {
  switch(meal) {
  case 'breakfast':
  return 1
  break
  case 'snack':
  return 2;
  break
  case 'lunch':
  return 3
  break
  case 'dinner':
  return 4
  break
  }
}

module.exports = {addToMeal}
