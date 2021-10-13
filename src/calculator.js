export default class WeekdayCalculator {
  constructor(month, day, year) {
    this.date = new Date(year, (month - 1), day);
  }

  DayOfTheWeek() {
    let weekdayNumValue = this.date.getDay();
    return weekdayNumValue;
  }

  WhichDay(day) {
    if (day === 0) {
      return "Sunday";
    } else if (day === 1) {
      return "Monday";
    } else if (day === 2) {
      return "Tuesday";
    }
  }
}