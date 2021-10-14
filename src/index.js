import $ from 'jquery'
import WeekdayCalculator from './calculator'

$(document).ready(function() {
  $('#user-date-form').submit(function(event) {
    event.preventDefault();
    const userMonth = parseInt($('#month').val());
    const userDay = parseInt($('#day').val());
    const userYear = parseInt($('#year').val());
    const userDate = new WeekdayCalculator(userMonth, userDay, userYear);
    const dayOfTheWeekNum = userDate.DayOfTheWeek();
    const response = userDate.WhichDay(dayOfTheWeekNum);
    $('#response').append(`<p>${response}</p>`);
  });
});