const $ = require('jquery')
const requests = require('../ajax-responses/foodResponses')

function saveData() {
  const parent = this.parentNode
  const foodEditId = parent.className.slice(4)
  const foodNameId = parent.children[0].innerHTML
  const calorieId = parent.children[1].innerHTML
  return $.ajax({
    url: `https://api-qs.herokuapp.com/api/v1/foods/${foodEditId}`,
    method: 'PATCH',
    data: { food: {name: foodNameId, calories: calorieId} },
  }).done(function(data) {
  }).catch(requests.errorLog)
}

module.exports = {saveData}