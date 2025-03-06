// let str = "The rain in SPAIN stays mainly in the plain"
// console.log(str.match('rin'));  // no match it give a null
// console.log(str.match(/in/));
// console.log(str.match(/in/g));
// console.log(str.match(/in/gi));

function UstelephoneCheck(str) {
  let regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-])?\d{3}[\s\-]?\d{4}$/;

  return regex.test(str);
}
console.log(UstelephoneCheck("1 (555) 555-5555"));

// const patt = /^Geeks/i;
// const s1 = "geeksforgeeks";
// const s2 = "forgeeks";

// console.log(patt.test(s1));
// console.log(patt.test(s2));
