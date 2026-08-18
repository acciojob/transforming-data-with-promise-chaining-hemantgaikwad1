
let btn = document.getElementById("btn");
let ip = document.getElementById("ip");
let output = document.getElementById("output");

btn.onclick = () => {
  let num = Number(ip.value);

  
  new Promise((res, rej) => {
    setTimeout(() => {
      output.innerHTML = `Result: ${num}`;
      res(num);
    }, 2000);
  })

  .then((val) => {
    return new Promise((res, rej) => {
      setTimeout(() => {
        let result = val * 2;
        output.innerHTML = `Result: ${result}`;
        res(result);
      }, 2000);
    });
  })
 
  .then((val) => {
    return new Promise((res, rej) => {
      setTimeout(() => {
        let result = val - 3;
        output.innerHTML = `Result: ${result}`;
        res(result);
      }, 1000);
    });
  })

  .then((val) => {
    return new Promise((res, rej) => {
      setTimeout(() => {
        let result = val / 2;
        output.innerHTML = `Result: ${result}`;
        res(result);
      }, 1000);
    });
  })

  .then((val) => {
    return new Promise((res, rej) => {
      setTimeout(() => {
        let result = val + 10;
        output.innerHTML = `Final Result: ${result}`;
        res(result);
      }, 1000);
    });
  });
};
