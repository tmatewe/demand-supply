let buttons = document.querySelectorAll("button");
let img = document.querySelector("img");
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", (e) => {
    if (buttons[i].value == "1") {
      `<h2>HIGH</h>`;
      img.src = "images/img1.jpeg";
      buttons[i].style.backgroundColor = "#C8C8C8";
      console.log("Option 1");
    } else if (buttons[i].value == "2") {
      buttons[i].style.backgroundColor = "#C8C8C8";
      img.src = "images/img2.jpeg";
      console.log("Option 2");
    } else if (buttons[i].value == "3") {
      buttons[i].style.backgroundColor = "#C8C8C8";
      img.src = "images/img3.jpeg";
      console.log("Option 3");
    } else if (buttons[i].value == "4") {
      img.src = "images/img4.jpeg";
      buttons[i].style.backgroundColor = "#C8C8C8";
      console.log("Option 4");
    } else if (buttons[i].value == "5") {
      img.src = "images/img5.jpeg";
      buttons[i].style.backgroundColor = "#87CEEB";
      console.log("Option 5");
    } else if (buttons[i].value == "6") {
      img.src = "images/img6.jpeg";
      buttons[i].style.backgroundColor = "#C8C8C8";
      console.log("Option 6");
    } else if (buttons[i].value == "7") {
      img.src = "images/img7.jpeg";
      buttons[i].style.backgroundColor = "#C8C8C8";
      console.log("Option 7");
    } else if (buttons[i].value == "8") {
      img.src = "images/img8.jpeg";
      buttons[i].style.backgroundColor = "#C8C8C8";
      console.log("Option 8");
    } else if (buttons[i].value == "9") {
      img.src = "images/img9.jpeg";
      buttons[i].style.backgroundColor = "#C8C8C8";
    } else if (buttons[i].value == "10") {
      img.src = "images/img10.jpeg";
      buttons[i].style.backgroundColor = "#C8C8C8";
      console.log("Option 10");
    } else if (buttons[i].value == "11") {
      img.src = "images/img11.jpeg";
      buttons[i].style.backgroundColor = "#C8C8C8";
      console.log("Option 11");
    } else if (buttons[i].value == "12") {
      img.src = "images/img12.jpeg";
      buttons[i].style.backgroundColor = "#C8C8C8";
      console.log("Option 12");
    }
  });
}
