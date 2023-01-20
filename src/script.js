// darkness
function dark() {
  // defining body & toggling dark-mode class to it
  document.body.classList.remove("dark-blue");
  document.body.classList.add("dark-mode");
  document.body.classList.remove("light-mode");

  //SET DATA TO LOCAL STORAGE
  let key = "theme-irfanshadik.github.io";
  let data;
  if (document.body.classList.contains("dark-mode")) {
    data = "darkk";
    console.log("darkk");
  }

  localStorage.setItem(key, data);
}
function light() {
  // defining body & toggling dark-mode class to it
  document.body.classList.remove("dark-blue");
  document.body.classList.remove("dark-mode");
  document.body.classList.add("light-mode");

  //SET DATA TO LOCAL STORAGE
  let key = "theme-irfanshadik.github.io";
  let data;
  if (document.body.classList.contains("light-mode")) {
    data = "light";
    console.log("lightt");
  }

  localStorage.setItem(key, data);
}

function dark_blue() {
  // defining body & toggling dark-mode class to it
  document.body.classList.remove("dark-mode");
  document.body.classList.remove("light-mode");
  document.body.classList.add("dark-blue");

  //SET DATA TO LOCAL STORAGE
  let key = "theme-irfanshadik.github.io";
  let data;
  if (document.body.classList.contains("dark-blue")) {
    data = "dark-blue";
    console.log("dark-blue");
  }

  localStorage.setItem(key, data);
}

// Retrive data from localStorage
if (localStorage.getItem("theme-irfanshadik.github.io") === "darkk") {
  document.body.classList.add("dark-mode");
} else if (localStorage.getItem("theme-irfanshadik.github.io") === "lightt") {
  document.body.classList.add("light-mode");
} else if (
  localStorage.getItem("theme-irfanshadik.github.io") === "dark-blue"
) {
  document.body.classList.add("dark-blue");
}
