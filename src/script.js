// -------------------------------------
// Preloader
// -------------------------------------
window.addEventListener("load", () => {
  document.getElementById("pre-loader").style.display = "none";
  document.getElementById("post-loader").style.display = "inline-block";
});

// -------------------------------------
// Website Views
// -------------------------------------
UpdateViews();
function UpdateViews() {
  fetch(
    "https://api.countapi.xyz/update/irfanshadikrishad.github.io/visits/?amount=1"
  )
    .then((res) => res.json())
    .then((data) => {
      console.log(data["value"]);
      document.getElementById("views").innerHTML = data["value"];
    });
}
