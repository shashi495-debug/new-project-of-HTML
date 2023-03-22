const prompt=require('prompt-sync')();



function summation(n) {
  let a = new Array(n);
    for (let i = 0; i <= n; i++) {
      a[i]=parseInt(prompt());
    }
    for (let i = 0; i <= n; i++) {
      console.log(a[i]);
      

    }
  }
  summation(5);
  