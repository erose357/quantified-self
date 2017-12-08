const $ = require('jquery')
const allFoods = require('../ajax-requests/getAllFoods')
const calories = require('../objects/diaryCalorieCounts')
const filterFoods = require('../objects/foodsTableFilter')
const addToMeal = require('../objects/addItemsToMeal')
const getMeals = require('../ajax-requests/getMeals')
const filterCalories = require('../objects/filterCalories')
const deleteMealItem = require('../ajax-requests/deleteMealItem')

$.fn.clicktoggle = function(a, b, c) {
    return this.each(function() {
        let clicked = 0;
        $(this).click(function() {
            if (clicked === 1) {
                clicked = 2;
                return b.apply(this, arguments);
            }else if (clicked === 2) {
                clicked = 0
                return c.apply(this, arguments)
            }
            clicked = 1;
            return a.apply(this, arguments);
        });
    });
};

$(document).ready(function() {
  $('body.diary').on('load', getMeals.loadMeals())
  $('body.diary').on('load', allFoods.getFoodsDiary())
  $('#diary-food-input').keyup(filterFoods.filterDiaryFoods)
  $('button.breakfast').on('click', addToMeal.addToMeal)
  $('button.lunch').on('click', addToMeal.addToMeal)
  $('button.dinner').on('click', addToMeal.addToMeal)
  $('button.snack').on('click', addToMeal.addToMeal)
  $("#calorie-filter").clicktoggle(filterCalories.ascending, filterCalories.descending, filterCalories.original)
  $('#breakfast-table').on('click', '.delete-food', deleteMealItem.deleteMealItem)
  $('#lunch-table').on('click', '.delete-food', deleteMealItem.deleteMealItem)
  $('#snack-table').on('click', '.delete-food', deleteMealItem.deleteMealItem)
  $('#dinner-table').on('click', '.delete-food', deleteMealItem.deleteMealItem)
})
