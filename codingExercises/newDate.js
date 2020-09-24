function newDate(start, duration) {
  //extract two pieces of information from duration: the amount of time and the unit of time
  const d = parseInt(duration.split(" ")[0], 10); //parse the time into a number
  const unit = duration.split(" ")[1];
  let startArr = start.split(" "); //split the start date/time string
  let date = startArr[0];
  const dateArr = date.split("-"); //split the date
  const time = startArr[1];
  const timeArr = time.split(":"); //split the time

  function modifyYear(y, add) {
    const newYear = parseInt(y, 10) + add; //add to hour
    dateArr[0] = intToString(newYear); //update hour index with updated hour
  }

  function modifyMonth(m, add) {
    m = parseInt(m, 10); //convert month to integer
    const addYears = Math.floor(add / 12); //find how many years has passed
    const addMonths = add % 12; //find out how many months has passed

    //check if new month is larger than 12. If so than subtract 12 to get true month
    if (m + addMonths > 12) dateArr[1] = intToString(m + addMonths - 12);
    else dateArr[1] = intToString(m + addMonths);

    //update year
    modifyYear(dateArr[0], addYears);
  }

  function modifyDay(d, add) {
    d = parseInt(d, 10); //convert month to integer
    const addMonths = Math.floor(add / 30); //find how many months has passed
    const addDays = add % 30; //find out how many days has passed

    //check if new day is larger than 30. If so than subtract 30 to get true month
    if (d + addDays > 30) dateArr[2] = intToString(d + addDays - 12);
    else dateArr[2] = intToString(d + addDays);

    //update month
    modifyMonth(dateArr[1], addMonths);
  }

  if (unit === "years") {
    modifyYear(dateArr[0], d);
    startArr[0] = dateArr.join("-");
    return startArr.join(" ");
  } else if (unit === "months") {
    modifyMonth(dateArr[1], d);
    startArr[0] = dateArr.join("-");
    return startArr.join(" ");
  } else if (unit === "days") {
    modifyDay(dateArr[2], d);
    startArr[0] = dateArr.join("-");
    return startArr.join(" ");
  }

  function modifyHours(h, add) {
    const newHour = parseInt(h, 10) + add;
    timeArr[0] = intToString(newHour % 24);
  }

  function modifyMinutes(m, add) {
    const newMin = parseInt(m, 10) + add;
    timeArr[1] = intToString(newMin % 60);
    const addHours = Math.floor(newMin / 60);
    modifyHours(timeArr[0], addHours);
  }

  function modifySeconds(s, add) {
    const newSec = parseInt(s, 10) + add;
    timeArr[2] = intToString(newSec % 60);
    const addMinutes = Math.floor(newSec / 60);
    modifyMinutes(timeArr[1], addMinutes);
  }

  if (unit === "hours" || unit === "hour") {
    modifyHours(timeArr[0], d);
    startArr[1] = timeArr.join(":");
    return startArr.join(" ");
  } else if (unit === "minutes") {
    modifyMinutes(timeArr[1], d);
    startArr[1] = timeArr.join(":");
    return startArr.join(" ");
  } else if (unit === "seconds") {
    modifySeconds(timeArr[2], d);
    startArr[1] = timeArr.join(":");
    return startArr.join(" ");
  }
}

function intToString(num) {
  let str;
  str = num < 10 ? "0" : "";
  str += num.toString();
  return str;
}

console.log(newDate("2020-01-01 00:00:00", "3604 seconds"));
