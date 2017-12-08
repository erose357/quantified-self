const $ = require('jquery')

function totalCalories() {
  totalCalorieCount('breakfast-table', 'breakfast-total-cal')
  totalCalorieCount('lunch-table', 'lunch-total-cal')
  totalCalorieCount('dinner-table', 'dinner-total-cal')
  totalCalorieCount('snack-table', 'snack-total-cal')
}

function remainingCalories() {
  remainingCalorieCount('#breakfast-remaining-cal', '#breakfast-total-cal', 400)
  remainingCalorieCount('#lunch-remaining-cal', '#lunch-total-cal', 600)
  remainingCalorieCount('#dinner-remaining-cal', '#dinner-total-cal', 800)
  remainingCalorieCount('#snack-remaining-cal', '#snack-total-cal', 200)
}

function remainingCalorieCount (remaining, total, cals) {
  let calsUsed = Number($(total)[0].innerHTML)
  let newRemaining = cals - calsUsed
  $(remaining)[0].innerHTML = newRemaining
  if(newRemaining < 0) {
    $(remaining).css("color", "red")
  } else {
    $(remaining).css("color", "green")
  }
}

function totalCalorieCount(tableId, calorieTotalId) {
  let diaryTable = document.getElementById(tableId)
  let x = diaryTable.getElementsByClassName('countCalories')
  let calorieValues = []

  for (var i = 0; i < x.length; i++) {
    let temp = x[i].innerHTML
    calorieValues.push(Number(temp))
  }

  myFunction(calorieValues, calorieTotalId)
}

function getSum(total, num) {
  return total + num
}

function myFunction(item, id) {
  document.getElementById(id).innerHTML = item.reduce(getSum);
}

module.exports = {totalCalories, remainingCalories, totalCalorieCount, remainingCalorieCount}
