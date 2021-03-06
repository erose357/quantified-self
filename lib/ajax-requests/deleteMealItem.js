const $ = require('jquery')
import {errorLog} from '../ajax-responses/foodResponses'
import {totalCalories, remainingCalories, totalCalorieCount, remainingCalorieCount} from '../objects/diaryCalorieCounts'
import {loadTotals} from '../objects/totalsTable'


export function deleteMealItem() {
    let ids = getIds(this)
    return $.ajax({
      url: `https://qs-node-api.herokuapp.com/api/v1/meals/${ids.mealId}/foods/${ids.foodId}`,
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
      totalCalorieCount(tableId, td)
      return {meal: meal, tableId: tableId, td: td}
    })
    .then(function(ids) {
      let remaining = `#${ids.meal}-remaining-cal`
      let total = `#${ids.td}`
      let cals = findCals(ids.meal)
      remainingCalorieCount(remaining, total, cals)
    })
    .then(loadTotals)
    .catch(errorLog)
}

function getIds(element) {
  let rawIds, rowId, mealId, foodId;
  rawIds = $(element).parents()[1].className.split(' ')
  rowId = rawIds[0]
  mealId = diaryIds(rawIds[2])
  foodId = diaryIds(rawIds[1])
  return { foodId: foodId, mealId: mealId, rowId: rowId }
}

function diaryIds(string) {
  let rawArray = string.split(/(\D)/)
  return rawArray[rawArray.length - 1]
}

function removeMealItem(ids) {
  $(`tr.${ids.rowId}.food${ids.foodId}.meal${ids.mealId}`).remove()
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
