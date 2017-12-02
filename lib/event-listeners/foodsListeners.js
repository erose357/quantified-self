const $ = require('jquery')
const allFoods = require('../ajax-requests/getAllFoods')
const createNewFood = require('../ajax-requests/postFood')
const deleteFood = require('../ajax-requests/deleteFood')

$(document).ready(function() {
  $('window').on('load', allFoods.getFoods())

  $('.foods-table').on('click', '.delete-food', deleteFood.deleteFood)
  $('.new-food-form input[type="submit"]').on('click', createNewFood.createNewFood)

  $('table td').keyup(function() {
    clearTimeout($.data(this, 'timer'));
    const wait = setTimeout(saveData(), 500); // delay after user types
    $(this).data('timer', wait);
  });

  function saveData() {
    const nameID = $(".foods-table input[name='update-id']").val();//change these inputs
    const calorieID = $(".foods-table input[name='post-description']").val();

    return $.ajax({
      url: 'https://api-qs.herokuapp.com/api/v1/foods/:id',
      method: 'PUT',
      data: { food: {name: nameID, calories: calorieID} }
    })//.done(function(data) {
      //$('#latest-posts').append('<p class="post">New post has been updated.</p>');
    //}).fail(function() {
      //handleError();
    //})
  }


//   $('.new-food-form input[type="submit"]').on('click', createNewFood.createNewFood)

//   $('table td').keyup(function() {
//     clearTimeout($.data(this, 'timer'));
//     const wait = setTimeout(saveData(), 500); // delay after user types
//     $(this).data('timer', wait);
//   });

//   function saveData() {
//     const nameID = $(".foods-table input[name='update-id']").val();//change these inputs
//     const calorieID = $(".foods-table input[name='post-description']").val();

//     return $.ajax({
//       url: 'https://api-qs.herokuapp.com/api/v1/foods/:id',
//       method: 'PUT',
//       data: { food: {name: nameID, calories: calorieID} }
//     })//.done(function(data) {
//       //$('#latest-posts').append('<p class="post">New post has been updated.</p>');
//     //}).fail(function() {
//       //handleError();
//     //})
//   }


  $('.new-food-form input[type="submit"]').on('click', function() {
    const postName = $('.new-food-form input[name=food-name]').val()
    const postCalories = $('.new-food-form input[name=food-calories').val()
    if (postName.length === 0 || postCalories.length === 0) {
      event.preventDefault()
      $('.food-placeholders').toggle()
    } else {
      createNewFood.createNewFood()
    }
  })
})
