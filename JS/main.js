const landing_page = document.querySelector(".landing-page");
const gear = document.querySelector(".gear");
const setting_box = document.querySelector(".setting-box");
const fa_gear = document.querySelector(".fa-gear");
const listLi = document.querySelectorAll(".color-setting li");

gear.onclick = () => {
  setting_box.classList.toggle("open");
  fa_gear.classList.toggle("fa-spin");
};

listLi.forEach((li) => {
  li.addEventListener("click", (e) => {
    document.documentElement.style.setProperty(
      "--main-color",
      e.target.dataset.color
    );
    localStorage.setItem("color", e.target.dataset.color);

    e.target.parentElement.querySelectorAll(".active").forEach((elem) => {
      elem.classList.remove("active");
    });
    e.target.classList.add("active");
  });
});

if (localStorage.getItem("color")) {
  document.documentElement.style.setProperty(
    "--main-color",
    localStorage.getItem("color")
  );

  listLi.forEach((li) => {
    if (li.dataset.color === localStorage.getItem("color")) {
      li.classList.add("active"); // active
    }
  });
}
let backgroundInterval;
let backgroundOpation = true;
const backGrEl = document.querySelectorAll(".random-backGr span");

if (localStorage.getItem("background-Option") !== null) {
  if (localStorage.getItem("background-Option") === true) {
    backgroundOpation = true;
  } else {
    backgroundOpation = false;
  }

  backGrEl.forEach((ele) => {
    ele.classList.remove("active");
    if (localStorage.getItem("background-Option") !== true) {
      document.querySelector(".random-backGr .no").classList.add("active");
    } else {
      console.log("no");
      document.querySelector(".random-backGr .yes").classList.add("active");
    }
  });
}

backGrEl.forEach((span) => {
  span.addEventListener("click", (e) => {
    e.target.parentElement.querySelectorAll(".active").forEach((ele) => {
      ele.classList.remove("active");
    });
    e.target.classList.add("active");

    if (e.target.dataset.background === "yes") {
      backgroundOpation = true;
      randomizImages();
      localStorage.setItem("background-Option", true);
    } else {
      backgroundOpation = false;
      clearInterval(backgroundInterval);
      localStorage.setItem("background-Option", false);
    }
  });
});

let images = [
  "../images/pexels-digital-buggu-136320.jpg",
  "../images/pexels-markus-spiske-4383298.jpg",
  "../images/pexels-philippe-donn-1169754.jpg",
  "../images/pexels-pixabay-459653.jpg",
  "../images/pexels-veeterzy-303383.jpg",
];

function randomizImages() {
  if ((backgroundOpation = true)) {
    backgroundInterval = setInterval(() => {
      let imageNumber = Math.floor(Math.random() * images.length);
      landing_page.style.backgroundImage = `url(imgs/${images[imageNumber]})`;
    }, 1000);
  }
}

// randomizImages()
