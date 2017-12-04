const $ = require('jquery')

  function appendFoods(data) {
    for (let i = 0; i < data.length; i++) {
      $('.headings')
        .after(
        `<tr class="food${data[i].id}">
          <td contenteditable="true">${data[i].name}</td>
          <td contenteditable="true">${data[i].calories}</td>
          <td class="delete-button"><button class="delete-food ${data[i].id}"></button></td>
        </tr>`
        )
    }
  }

  function appendFoodsDiary(data) {
    for (let i = 0; i < data.length; i++) {
      $('.headings-diary')
        .after(
        `<tr class="food${data[i].id}">
          <td class="food-checkbox"><input type="checkbox" name="food-checkbox"></td>
          <td class="name">${data[i].name}</td>
          <td class="calories">${data[i].calories}</td>
        </tr>`
      )
    }
  }

  function appendFood(data, meal) {
    $(meal)
      .after(
      `<tr class="food${data.id}">
        <td class="name">${data.name}</td>
        <td class="calories">${data.calories}</td>
        <td class="delete-button">
        <button class="delete-food ${data.id}"><i class="material-icons md-18 gray">remove_circle_outline</i></button></td>
      </tr>`
    )
  }


  function errorLog(error) {
    console.error(error)
  }

module.exports = {appendFoods, appendFood, appendFoodsDiary, errorLog}
