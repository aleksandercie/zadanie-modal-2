
// variables
const modal = document.getElementById("modal");
const btn = document.getElementById('btn');

// function closing modal on click by button
btn.onclick = () => {
  modal.style.display = "none";
}

// function closing modal outside modal box
window.onclick = (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
}