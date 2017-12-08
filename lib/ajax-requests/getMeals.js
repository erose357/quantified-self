const $ = require('jquery')
const requests = require('../ajax-responses/foodResponses')
const calories = require('../objects/diaryCalorieCounts')
const totals = require('../objects/totalsTable')

function loadMeals (){
  return $.get("https://api-qs.herokuapp.com/api/v1/meals")
    .done(function(data) {
      data.forEach(function(mealObject) {
        return requests.appendFood(mealObject)
      })
    })
    .then(calories.totalCalories)
    .then(calories.remainingCalories)
    .then(totals.loadTotals)
    .catch(requests.errorLog)
}

module.exports = {loadMeals}
