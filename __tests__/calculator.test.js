import WeekdayCalculator from "../src/calculator";

describe('WeekdayCalculator', () => {

  test('should correctly create a WeekdayCalculator object that stores the outcome of a Date object', () => {
    let day = new WeekdayCalculator(5, 25, 2021);
    expect(day.date).toEqual(new Date(2021, 5, 25));
  })

  test('should return a numerical value for a weekday.', () => {
    let day = new WeekdayCalculator(5, 25, 2021);
    let weekday = DayOfTheWeek();
    expect(weekday).toEqual(5);
  })
})