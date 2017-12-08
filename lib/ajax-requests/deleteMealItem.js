const $ = require('jquery')
const requests = require('../ajax-responses/foodResponses')
const totals = require('../objects/totalsTable')
const calories = require('../objects/diaryCalorieCounts')

function deleteMealItem() {
    let ids = getIds(this)
    return $.ajax({
      url: `https://api-qs.herokuapp.com/api/v1/meals/${ids.mealId}/foods/${ids.foodId}`,
      method: 'DELETE',
    })
    .then(function() {
      removeMealItem(ids)
      return ids
    })
    .then(function(ids) {
      let meal = findTable(ids.mealId)
      let tableId = `${meal}-table`
      let td = `${meal}-total-cal`
      calories.totalCalorieCount(tableId, td)
      return {meal: meal, tableId: tableId, td: td}
    })
    .then(function(ids) {
      let remaining = `#${ids.meal}-remaining-cal`
      let total = `#${ids.td}`
      let cals = findCals(ids.meal) 
      calories.remainingCalorieCount(remaining, total, cals)
    })
    .then(totals.loadTotals)
    .catch(requests.errorLog)
}

function getIds(element) {
  let rawIds, mealId, foodId; 
  rawIds = $(element).parents()[1].className.split(' ')
  mealId = diaryIds(rawIds[1]) 
  foodId = diaryIds(rawIds[0])
  return { foodId: foodId, mealId: mealId }
}

function diaryIds(string) {
  let rawArray = string.split(/(\D)/)
  return rawArray[rawArray.length - 1]
}

function removeMealItem(ids) {
  $(`tr.food${ids.foodId}.meal${ids.mealId}`).remove()
}

function findTable(id) {
  switch(id) {
    case "1":
      return 'breakfast'
      break
    case "2":
      return 'snack'
      break
    case "3":
      return 'lunch'
      break
    case "4":
      return 'dinner'
      break
  }
}

function findCals(meal) {
  switch(meal) {
    case 'breakfast':
      return 400
      break
    case 'lunch':
      return 600
      break
    case 'dinner':
      return 800
      break
    case 'snack':
      return 200
      break
  }
}

module.exports = {deleteMealItem}
