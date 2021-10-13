import WeekdayCalculator from "../src/calculator";

describe('WeekdayCalculator', () => {

  test('should correctly create a WeekdayCalculator object that stores the outcome of a Date object', () => {
    let day = new WeekdayCalculator(6, 25, 2021);
    expect(day.date).toEqual(new Date(2021, 5, 25));
  })

  test('should return a numerical value for a weekday.', () => {
    let day = new WeekdayCalculator(6, 25, 2021);
    const weekday = day.DayOfTheWeek();
    expect(weekday).toEqual(5);
  })

  test('should return sunday if day equals 0.', () => {
    let day = new WeekdayCalculator(10, 3, 2021);
    const weekday = day.DayOfTheWeek();
    const weekdayString = day.WhichDay(weekday);
    expect(weekdayString).toEqual("Sunday");
  })

  test('should return monday if day equals 1.', () => {
    let day = new WeekdayCalculator(10, 11, 2021);
    const weekday = day.DayOfTheWeek();
    const weekdayString = day.WhichDay(weekday);
    expect(weekdayString).toEqual("Monday");
  })

  test('should return tuesday if day equals 2.', () => {
    let day = new WeekdayCalculator(10, 12, 2021);
    const weekday = day.DayOfTheWeek();
    const weekdayString = day.WhichDay(weekday);
    expect(weekdayString).toEqual("tuesday");
  })
})