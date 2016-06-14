'use strict';

function fibonacci_series(n) {
  var arr = [];
    arr.push(0);
    if(n==1){
      arr.push(1);
    }else if(n>1){
    arr.push(1);
    for(var i = 1;i<n;i++){
      var sum = 0;
      sum = arr[i]+arr[i-1];
          arr.push(sum);
        }
      }
      return arr;
}

module.exports = fibonacci_series;
