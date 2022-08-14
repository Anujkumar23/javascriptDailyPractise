// Cretae a date object for date:Feb20,2012,3:12
let date = new Date(2012, 1, 20, 3, 12);
console.log(date);

// Write a function getWeekDay(day) to show the weekday is short format:"MO","TU","WE","TH","FR","SA","SU"

function getWeekDay(date) {
  let days = ["SU", "MO", "TU", "WE", "TH", "FR", "SA", "SU"];
  return days[date.getDay()];
}
date = new Date(2014, 0, 3);
console.log(getWeekDay(date));

// Write a function getLocalDay(date) that return the "European" day of week for day.

function getLocalDay() {
  let day = date.getDay();

  if (day == 0) {
    day = 7;
  }
  return day;
}

// Write a function getLastDayOfMonth(year,month) that return the last day of month.

function getLastDayOfMonth(year, month) {
  let date = new Date(year, month + 1, 0);
  return date.getDate();
}
console.log(getLastDayOfMonth(2012, 0)); //31
console.log(getLastDayOfMonth(2012, 1)); //29
console.log(getLastDayOfMonth(2013, 1)); //28

// Write a function getSecondsToday() that return the number of seconds from the beginning of today.

function getSecondsToday() {
  let now = new Date();

  // create a object using the current day/month/year
  let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

  let diff = now - today;

  return Math.round(diff / 1000);
}
console.log(getSecondsToday());

