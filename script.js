var EMAIL_TO = "vanshsaini9311@gmail.com";
var GITHUB_URL = "https://github.com/vanshsaini9311/";


/* ---------- Projects data ---------- */

var projects = [
  {
    title: "X (Twitter) Clone",
    description: "A clone of X's home feed: sidebar, composer, feed posts and a 'Today's News' panel.",
    techStack: ["React", "Express", "Bootstrap"],
    category: "fullstack",
    image: "assets/twitter-clone.png",
    videos: [
      { label: "Website demo",    src: "assets/videos/twitter-website-demo.mp4" },
      { label: "Responsive demo", src: "assets/videos/twitter-responsive-demo.mp4" }
    ],
    repoName: "X-Twitter-Clone-UI-UX-"
  },
  {
    title: "Tic Tac Toe",
    description: "Two-player 3×3 game with turn tracking, win detection and a reset button.",
    techStack: ["HTML", "CSS", "JavaScript"],
    category: "frontend",
    image: "assets/tic-tac-toe.png",
    videos: [
      { label: "Working demo", src: "assets/videos/tic-tac-toe-demo.mp4" }
    ],
    repoName: "Tic-Tac-Toe-Mini-Project-HTML-CSS-JAVASCRIPT-"
  },
  {
    title: "Currency Converter",
    description: "Converts any amount between currencies using live exchange rates from a REST API.",
    techStack: ["JavaScript", "REST API"],
    category: "api",
    image: "assets/currency-converter.png",
    videos: [
      { label: "Working demo", src: "assets/videos/currency-converter-demo.mp4" }
    ],
    repoName: "Currency-Converter"
  },
  {
    title: "Rock Paper Scissor",
    description: "Play against the computer with a live scoreboard and win/lose messages.",
    techStack: ["HTML", "CSS", "JavaScript"],
    category: "frontend",
    image: "assets/rock-paper-scissor.png",
    videos: [
      { label: "Working demo", src: "assets/videos/rock-paper-scissor-demo.mp4" }
    ],
    repoName: "Rock-Paper-Scissor"
  }
];

// [category value, button label]
var filters = [
  ["all", "All"],
  ["frontend", "Front-end"],
  ["fullstack", "Full-stack"],
  ["api", "API"]
];

var filterBar = document.getElementById("filterBar");
var projectList = document.getElementById("projectList");
var lightbox = document.getElementById("lightbox");


/* ---------- Filter buttons ---------- */

filterBar.innerHTML = filters.map(function (filter, index) {
  return '<button class="chip' + (index ? '' : ' on') + '" data-filter="' + filter[0] + '">' + filter[1] + '</button>';
}).join("");


/* ---------- Project cards ---------- */

projectList.innerHTML = projects.map(function (project, index) {
  return '<article class="card proj" data-category="' + project.category + '">' +
    '<div>' +
      '<span class="tag">project / 0' + (index + 1) + '</span>' +
      '<h3>' + project.title + '</h3>' +
      '<p>' + project.description + '</p>' +
      '<div class="skills">' +
        project.techStack.map(function (tech) {
          return '<span class="chip">' + tech + '</span>';
        }).join("") +
      '</div>' +
      '<div class="links">' +
        '<a target="_blank" rel="noopener" href="' + GITHUB_URL + project.repoName + '">Source code ↗</a>' +
      '</div>' +
    '</div>' +
    '<div class="media" data-project="' + index + '">' +
      '<div class="tabs">' +
        '<button class="chip on" data-media="-1">Screenshot</button>' +
        (project.videos || []).map(function (video, videoIndex) {
          return '<button class="chip" data-media="' + videoIndex + '">▶ ' + video.label + '</button>';
        }).join("") +
      '</div>' +
      '<div class="shot">' +
        '<img loading="lazy" src="' + project.image + '" alt="' + project.title + ' screenshot">' +
      '</div>' +
    '</div>' +
  '</article>';
}).join("");


/* ---------- Filtering projects ---------- */

filterBar.onclick = function (event) {
  var clickedButton = event.target.closest("button");
  if (!clickedButton) return;

  // highlight the active filter
  document.querySelectorAll("#filterBar .chip").forEach(function (chip) {
    chip.classList.toggle("on", chip === clickedButton);
  });

  // show / hide project cards
  document.querySelectorAll(".proj").forEach(function (card) {
    var hideCard = clickedButton.dataset.filter != "all" && card.dataset.category != clickedButton.dataset.filter;
    card.classList.toggle("hide", hideCard);
  });

  // stop any video that was playing
  document.querySelectorAll("#projectList video").forEach(function (video) {
    video.pause();
  });
};


/* ---------- Lightbox + screenshot/video tabs ---------- */

projectList.onclick = function (event) {
  var clickedTab = event.target.closest(".tabs .chip");

  if (clickedTab) {
    var mediaBox = clickedTab.closest(".media");
    var project = projects[mediaBox.dataset.project];
    var mediaIndex = +clickedTab.dataset.media;   // -1 means screenshot
    var shotBox = mediaBox.querySelector(".shot");

    mediaBox.querySelectorAll(".tabs .chip").forEach(function (chip) {
      chip.classList.toggle("on", chip === clickedTab);
    });

    document.querySelectorAll("#projectList video").forEach(function (video) {
      video.pause();
    });

    shotBox.className = mediaIndex < 0 ? "shot" : "shot vid";
    shotBox.innerHTML = mediaIndex < 0
      ? '<img src="' + project.image + '" alt="' + project.title + ' screenshot">'
      : '<video controls playsinline preload="metadata" src="' + project.videos[mediaIndex].src + '"></video>';

    return;
  }

  // clicking a screenshot opens it in the lightbox
  var clickedShot = event.target.closest(".shot:not(.vid)");
  if (clickedShot) {
    lightbox.querySelector("img").src = clickedShot.querySelector("img").src;
    lightbox.classList.add("on");
  }
};

lightbox.onclick = function () {
  lightbox.classList.remove("on");
};

document.onkeydown = function (event) {
  if (event.key == "Escape") lightbox.classList.remove("on");
};


/* ---------- Skills ---------- */

var skillDescriptions = {
  HTML: "Semantic markup for every project.",
  CSS: "Layouts, responsive design and styling.",
  JavaScript: "Game logic, DOM updates and API calls.",
  React: "Component-based UI, used in the X clone.",
  Express: "Backend server for the X clone.",
  Bootstrap: "Fast, responsive layouts.",
  "REST API": "Fetching live data, like exchange rates."
};

var skillList = document.getElementById("skillList");
var skillInfo = document.getElementById("skillInfo");

skillList.innerHTML = Object.keys(skillDescriptions).map(function (skill) {
  return '<button class="chip" data-skill="' + skill + '">' + skill + '</button>';
}).join("");

skillList.onclick = function (event) {
  var clickedButton = event.target.closest("button");
  if (!clickedButton) return;

  skillList.querySelectorAll(".chip").forEach(function (chip) {
    chip.classList.toggle("on", chip === clickedButton);
  });

  skillInfo.textContent = skillDescriptions[clickedButton.dataset.skill];
};


/* ---------- Typing effect in the hero card ---------- */

var typingWords = [
  "a Tic Tac Toe game",
  "an X (Twitter) clone",
  "a currency converter",
  "a Rock Paper Scissor game"
];
var wordIndex = 0;        // which word we're on
var charIndex = 0;        // how many letters are showing
var isDeleting = false;   // typing or deleting
var typedText = document.getElementById("typedText");

(function typeNextLetter() {
  var currentWord = typingWords[wordIndex];
  charIndex += isDeleting ? -1 : 1;
  typedText.textContent = currentWord.slice(0, charIndex);

  var delay = isDeleting ? 35 : 70;

  if (!isDeleting && charIndex == currentWord.length) {
    // finished typing, wait a bit before deleting
    isDeleting = true;
    delay = 1400;
  } else if (isDeleting && charIndex == 0) {
    // finished deleting, move to the next word
    isDeleting = false;
    wordIndex = (wordIndex + 1) % typingWords.length;
    delay = 300;
  }

  setTimeout(typeNextLetter, delay);
})();


/* ---------- Certificates ---------- */

var certificates = [
  {
    title: "REST API (Intermediate)",
    details: "HackerRank · earned 29 Sep 2026",
    image: "assets/certs/restapi.jpg"
  },
  {
    title: "JavaScript (Intermediate)",
    details: "HackerRank · earned 28 Sep 2026",
    image: "assets/certs/javascript.jpg"
  },
  {
    title: "OCI Gen AI Professional",
    details: "Oracle Certified Professional · Sep 2025",
    image: "assets/certs/oracle_pro.jpg"
  },
  {
    title: "OCI AI Foundations Associate",
    details: "Oracle Certified Foundations Associate · Sep 2025",
    image: "assets/certs/oracle_found.jpg"
  },
  {
    title: "Data Science — Summer School",
    details: "Dronacharya College of Engineering · 2026",
    image: "assets/certs/internship.jpg"
  }
];

var certGrid = document.getElementById("certGrid");

certGrid.innerHTML = certificates.map(function (cert) {
  return '<article class="card cert">' +
    '<img loading="lazy" src="' + cert.image + '" alt="' + cert.title + ' certificate">' +
    '<div>' +
      '<h4>' + cert.title + '</h4>' +
      '<p>' + cert.details + '</p>' +
    '</div>' +
  '</article>';
}).join("");

certGrid.onclick = function (event) {
  var clickedImage = event.target.closest("img");
  if (clickedImage) {
    lightbox.querySelector("img").src = clickedImage.src;
    lightbox.classList.add("on");
  }
};


/* ---------- Highlight the nav link of the section in view ---------- */

var navLinks = [].slice.call(document.querySelectorAll("nav a"));
var sections = navLinks.map(function (link) {
  return document.querySelector(link.getAttribute("href"));
});

var observer = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      var activeIndex = sections.indexOf(entry.target);
      navLinks.forEach(function (link, index) {
        link.classList.toggle("on", index == activeIndex);
      });
    }
  });
}, { rootMargin: "-45% 0px -50% 0px" });

sections.forEach(function (section) {
  observer.observe(section);
});


/* ---------- Toast message ---------- */

var toastBox = document.getElementById("toast");

function showToast(message) {
  toastBox.textContent = message;
  toastBox.classList.add("show");
  setTimeout(function () {
    toastBox.classList.remove("show");
  }, 3500);
}


/* ---------- Contact form (opens the mail app) ---------- */

document.getElementById("sendBtn").addEventListener("click", function (event) {
  event.preventDefault();

  var nameInput = document.getElementById("nameInput");
  var emailInput = document.getElementById("emailInput");
  var messageInput = document.getElementById("messageInput");
  var formIsValid = true;

  // check each field, mark the bad ones red
  [
    [nameInput, nameInput.value.trim()],
    [emailInput, /^\S+@\S+\.\S+$/.test(emailInput.value.trim())],
    [messageInput, messageInput.value.trim()]
  ].forEach(function (field) {
    var fieldIsValid = !!field[1];
    field[0].classList.toggle("err", !fieldIsValid);
    if (!fieldIsValid) formIsValid = false;
  });

  if (!formIsValid) {
    showToast("Please fill in every field with a valid email.");
    return;
  }

  var mailBody = "Name: " + nameInput.value + "\nEmail: " + emailInput.value + "\n\n" + messageInput.value;
  var mailUrl = "mailto:" + EMAIL_TO +
    "?subject=" + encodeURIComponent("Portfolio message from " + nameInput.value) +
    "&body=" + encodeURIComponent(mailBody);

  window.location.href = mailUrl;
  showToast("Opening your email app…");
});


/* ---------- Footer year ---------- */

document.getElementById("year").textContent = new Date().getFullYear();
