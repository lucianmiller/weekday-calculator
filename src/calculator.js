export default class WeekdayCalculator {
  constructor(month, day, year) {
    this.date = new Date(year, month, day);
  }

  DayOfTheWeek() {
    let weekdayNumValue = this.date.getDay();
    return weekdayNumValue;
  }
}