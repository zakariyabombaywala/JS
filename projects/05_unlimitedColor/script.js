const randomColor = function () {
  const hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  //   console.log(color);
  return color;
};

let intervalId;

const startChnageColor = function () {
  if (!intervalId) {
    intervalId = setInterval(changeBgColor, 1000);
  }
};

function changeBgColor() {
  document.body.style.backgroundColor = randomColor();
}

const stopChangeColor = function () {
  clearInterval(intervalId);
  intervalId = null;
};

document.querySelector("#start").addEventListener("click", startChnageColor);

document.querySelector("#stop").addEventListener("click", stopChangeColor);
