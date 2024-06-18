//generate a random color
const randomColor = function () {
  const hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

let ref; //for stoping the color

document.querySelector("#start").addEventListener("click", function (e) {
  if (!ref) {
    ref = setInterval(function () {
      document.querySelector("body").style.backgroundColor = randomColor();
    }, 1000);
  }
});

document.querySelector("#stop").addEventListener("click", function (e) {
  clearInterval(ref);
  ref = null;
});
