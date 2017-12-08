const $ = require('jquery')
const requests = require('../ajax-responses/foodResponses')

function postMealItems(itemId, meal) {
  return $.ajax({
    url: `https://api-qs.herokuapp.com/api/v1/meals/${meal}/foods/${itemId}`,
    method: 'POST',
  })
  .catch(requests.errorLog)
}

module.exports = {postMealItems}
