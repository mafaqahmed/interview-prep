// Write a JavaScript program to convert a string to title case (capitalize the first letter of each word). 

function toTitleCase(str) { 

    return str.replace(/\b\w/g, l => l.toUpperCase()); 
  
  } 
  