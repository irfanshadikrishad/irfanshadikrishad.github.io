// darkness
function dark() {
  // defining body & toggling dark-mode class to it
  document.body.classList.add("dark-mode");
  document.body.classList.remove("light-mode");

  //SET DATA TO LOCAL STORAGE
  let key = "theme";
  let data;
  if (document.body.classList.contains("dark-mode")) {
    data = "dark";
    console.log("dark");
  } else {
    console.log("light");
    data = "light";
  }

  localStorage.setItem(key, data);
}
function light() {
  // defining body & toggling dark-mode class to it
  document.body.classList.remove("dark-mode");
  document.body.classList.add("light-mode");

  //SET DATA TO LOCAL STORAGE
  let key = "theme";
  let data;
  if (document.body.classList.contains("dark-mode")) {
    data = "dark";
    console.log("dark");
  } else {
    console.log("light");
    data = "light";
  }

  localStorage.setItem(key, data);
}

// Retrive data from localStorage
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark-mode");
}
