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
    expect(weekdayString).toEqual("Tuesday");
  })

  test('should return wednesday if day equals 3.', () => {
    let day = new WeekdayCalculator(10, 13, 2021);
    const weekday = day.DayOfTheWeek();
    const weekdayString = day.WhichDay(weekday);
    expect(weekdayString).toEqual("Wednesday");
  })

  test('should return thursday if day equals 4.', () => {
    let day = new WeekdayCalculator(10, 14, 2021);
    const weekday = day.DayOfTheWeek();
    const weekdayString = day.WhichDay(weekday);
    expect(weekdayString).toEqual("Thursday");
  })

  test('should return friday if day equals 5.', () => {
    let day = new WeekdayCalculator(10, 15, 2021);
    const weekday = day.DayOfTheWeek();
    const weekdayString = day.WhichDay(weekday);
    expect(weekdayString).toEqual("Friday");
  })

  test('should return saturday if day equals 6.', () => {
    let day = new WeekdayCalculator(10, 16, 2021);
    const weekday = day.DayOfTheWeek();
    const weekdayString = day.WhichDay(weekday);
    expect(weekdayString).toEqual("Saturday");
  })
})