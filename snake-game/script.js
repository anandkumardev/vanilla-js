const board = document.querySelector(".board");
const blockHeight = 80;
const blockWidth = 80;

const cols = Math.floor(board.clientWidth / blockWidth);
const rows = Math.floor(board.clientHeight / blockHeight);

for (let row = 0; row < rows; row++) {
  for (let col = 0; col < cols; col++) {
    const block = document.createElement("div");
    block.classList.add("block");
    board.appendChild(block);
    block.innerText = `${row}-${col}`;
  }
}
