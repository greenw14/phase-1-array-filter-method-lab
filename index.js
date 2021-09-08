// Code your solution here
function findMatching(drivers, name){
    return  drivers.filter(item => item == name || item == name.toLowerCase())
}
   
function fuzzyMatch(drivers, firstLetter){
    return  drivers.filter(item => item[0] === firstLetter[0])
}
function matchName(drivers, name){
    return drivers.filter(function(driver){
      return driver.name === name
    })
  }