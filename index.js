function truthCheck(collection, pre) {

  return collection.slice().map((item)=> {
    if (item.hasOwnProperty(pre) && Boolean(item[pre])) {
      return true;
    } else {return false}
  }).every((item)=> item)
}

console.log(truthCheck([{name: "Quincy", role: "Founder", isBot: false}, {name: "Naomi", role: "", isBot: false}, {name: "Camperbot", role: "Bot", isBot: true}], "isBot"));
console.log(truthCheck([{name: "Quincy", role: "Founder", isBot: false}, {name: "Naomi", role: "", isBot: false}, {name: "Camperbot", role: "Bot", isBot: true}], "name"))
console.log(truthCheck([{name: "Quincy", role: "Founder", isBot: false}, {name: "Naomi", role: "", isBot: false}, {name: "Camperbot", role: "Bot", isBot: true}], "role"))

   //soln
  // false 
  //true 
  //false
