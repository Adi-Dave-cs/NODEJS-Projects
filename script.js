window.addEventListener("mousemove", (event) => {
  const elem = document.querySelector("#mover");
  elem.style.top = `${event.clientY - 25}px`;
  elem.style.left = `${event.clientX - 25}px`;
});

const centerElem = document.querySelector("#centerText");
window.addEventListener("mousemove", (e) => {
  const elem = document.querySelector("#mover");
  const posCenterElem = centerElem.getBoundingClientRect();
  if (
    posCenterElem.left < e.x + 100 &&
    posCenterElem.right > e.x - 100 &&
    posCenterElem.top < e.y + 100 &&
    posCenterElem.bottom > e.y - 100
  ) {
    elem.style.transform = "scale(4)";
    centerElem.style.color = "rebeccapurple";
    centerElem.zindex = "2";
    elem.zindex = "0";
  } else {
    elem.style.transform = "scale(1)";
    centerElem.style.color = "black";
    centerElem.zindex = "0";
    elem.zindex = "0";
  }
});
