const whatTimeIsIt = time => {
  // do code here

  const countWords = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven',
    'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
  const tens = ['twenty', 'thirty', 'forty', 'fifty']

  const splitTime = time.split(":")
  const split = splitTime[1].split(" ")
  const splitMinute = split[0].split('')

  function getAM() {
    if (split[1] == 'pm') {
      return 'in the afternoon'
    } else {
      return 'in the morning'
    }
  }

  function convertTens() {
    if (splitMinute[0] == '2') {
      return tens[0]
    } else if (splitMinute[0] == '3') {
      return tens[1]
    } else if (splitMinute[0] == '4') {
      return tens[2]
    } else if (splitMinute[0] == '5') {
      return tens[3]
    }
  }

  function convertMinute(minute) {
    if (minute === '00') {
      return "o'clock"
    } else if (minute < 20) {
      return "past" + " " + countWords[minute - 1]
    } else if (splitMinute[1] == '0') {
      return "past" + " " + convertTens()
    } else {
      const words = countWords[splitMinute[1] - 1]
      return "past" + " " + convertTens() + " " + `${words}`
    }
  }

  if (splitTime[0] == '12' && split[0] == '00') {
    if (split[1] == 'pm') {
      return "It's noon"
    } else {
      return "It's midnight"
    }
  } else {
    // cek apakah pm atau am
    const getAMPM = getAM()

    const hour = countWords[splitTime[0] - 1]

    const minute = convertMinute(split[0])

    return "It's" + " " + `${hour}` + " " + `${minute}` + " " + `${getAMPM}`
  }

}

console.log(whatTimeIsIt("12:00 am"))

// do not change this code below
const test = (testCase, result) => console.log(testCase === result);

test(whatTimeIsIt("12:00 pm"), "It's noon")
test(whatTimeIsIt("3:49 pm"), "It's three past forty nine in the afternoon")
test(whatTimeIsIt('12:00 am'), "It's midnight")
test(whatTimeIsIt("5:31 am"), "It's five past thirty one in the morning")
test(whatTimeIsIt("9:11 am"), "It's nine past eleven in the morning")