function scuberGreetingForFeet(feet) {
  // Write your code here!
  if (feet <= 400) {
    return "This one is on me!";
  } else if (feet > 400 && feet < 2000) {
    return "That will be twenty bucks.";
  } else if (feet >= 2000) {
    if (feet > 2500) {
      return "No can do.";
    }
    return "I will gladly take your thirty bucks.";
  }
}

console.log(scuberGreetingForFeet(10099));

function ternaryCheckCity(city) {
  // Write your code here!
  return city == "NYC" ? "Ok, sounds good." : "No go.";
}

console.log(ternaryCheckCity("NYC"));

function switchOnCharmFromTip(tip) {
  // Write your code here!
  switch(tip) {
    case "generous":
      return "Thank you so much.";
      break;
    case "not as generous":
      return "Thank you.";
      break;
    default:
      return "Bye.";
      break;
  }
}

console.log(switchOnCharmFromTip("hello"));