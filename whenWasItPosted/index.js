const whenWasItPosted = date => {
  // do code here

  const currentDate = new Date().getTime()
  const inputDate = new Date(date).getTime()

  var minutes = 1000 * 60;
  var hours = minutes * 60;
  var days = hours * 24;
  var weeks = days * 7
  var months = days * 30
  var years = days * 365;

  const difference = currentDate - inputDate

  if (difference >= years) {
    const yearDiff = Math.floor(difference / years)
    return ` ${yearDiff} year ago`
  } else if (difference >= months) {
    const monthDiff = Math.floor(difference / months)
    return ` ${monthDiff} month ago`
  } else if (difference >= weeks) {
    const weekDiff = Math.floor(difference / weeks)
    return ` ${weekDiff} week ago`
  } else if (difference >= days) {
    const dayDiff = Math.floor(difference / days)
    return ` ${dayDiff} day ago`
  } else {
    return 'Please Check your date. This is only check : Years, Months, Weeks, and Days.'
  }
}

console.log(whenWasItPosted("12 January 2021"))


// do not change this code below
const test = (testCase, result) => console.log(testCase == result);

// test(whenWasItPosted("3 January 2020"), '11 month ago')
// test(whenWasItPosted("26 November 2020"), '2 week ago')
// test(whenWasItPosted("11 December 2020"), '3 day ago')
// test(whenWasItPosted("2 December 2019"), '1 year ago')
// test(whenWasItPosted("24 October 2000"), '20 year ago')