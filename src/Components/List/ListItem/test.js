const array = [0, 1, 2, 3, 4, 5, 6, 7];

const rows = array.reduce((rows, key, index) => {
  debugger;
  if (index % 2 === 0) {
    rows.push([key]);
  } else {
    rows[rows.length - 1].push(key) && rows;
  }
  return rows;
}, []);
// return (index % 2 == 0 ? rows.push([key])
//   : rows[rows.length - 1].push(key)) && rows;

console.log(rows);
