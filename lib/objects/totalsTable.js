const $ = require('jquery')

function loadTotals (){
  let x = document.getElementsByClassName('total-cals')
  let calorieValues = []
  let calorieTotalId = "totals-total-cal"

  for (var i = 0; i < x.length; i++) {
    let temp = x[i].innerHTML
    calorieValues.push(Number(temp))
  }

  myFunction(calorieValues, calorieTotalId)
  remainingCals()
}

function getSum(total, num) {
  return total + num
}

function myFunction(item, id) {
  document.getElementById(id).innerHTML = item.reduce(getSum);
}

function remainingCals () {
  let totalCal = document.getElementById('totals-total-cal').innerHTML
  let remainingCal = 2000 - totalCal
  document.getElementById('totals-remaining-cal').innerHTML = remainingCal
  if(remainingCal < 0) {
    $('th#totals-remaining-cal').css("color", "red")
  } else {
    $('th#totals-remaining-cal').css("color", "green")
  }
}


module.exports = {loadTotals}
