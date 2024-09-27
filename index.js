// code your solution here

// 1) Defines saturdayFun as a function declaration
function saturdayFun(activity = 'roller-skate') {
    // 2) Uses the default activity 'roller-skate' when no arguments are passed
    // 3) Allows the default activity to be overridden if an argument is passed
    return `This Saturday, I want to ${activity}!`;
  }
  
  // 4) Defines mondayWork as a function expression
  const mondayWork = function(activity = 'go to the office') {
    // 5) Uses the default activity 'go to the office' when no arguments are passed
    // 6) Allows the default activity to be overridden if an argument is passed
    return `This Monday, I will ${activity}.`;
  };
  function wrapAdjective(wrapper = "*") {
    // 8 & 9) Returns a function that wraps an adjective in the specified wrapper
    return function(adjective) {
      return `You are ${wrapper}${adjective}${wrapper}!`;
    };
  }
  
  
  // Example usage:
  console.log(saturdayFun());              // Output: "This Saturday, I want to roller-skate!"
  console.log(saturdayFun('swim'));        // Output: "This Saturday, I want to swim!"
  
  console.log(mondayWork());               // Output: "This Monday, I will go to the office."
  console.log(mondayWork('work from home')); // Output: "This Monday, I will work from home."
  const wrapWithStars = wrapAdjective('*');
console.log(wrapWithStars('amazing'));  // Output: "You are *amazing*!"

// Initialized with '||'
const wrapWithBars = wrapAdjective('||');
console.log(wrapWithBars('brilliant'));