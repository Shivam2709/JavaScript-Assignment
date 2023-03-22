
  function capitalizeName(name) {
    const capitalized = name[0].toUpperCase() + name.slice(1);
    return name[0] === name[0].toLowerCase() ? capitalized : name;
  }
  
  const name1 = "john";
  const name2 = "Mary";
  
  console.log(capitalizeName(name1)); // "John"
  console.log(capitalizeName(name2)); // "Mary"

