
module.exports = function towelSort (matrix) {
  if ( matrix === undefined || matrix.length === 0 ) {
    return [];
  } else {
   let arr = [];
   for (i = 0; i < matrix.length; i++) {
     if (i % 2 === 0) {
        arr.push(matrix[i]);
     };
     if (i % 2 !== 0) {
        arr.push(matrix[i].reverse()) ;
     };
   }
   return arr.flat();
  }
}
