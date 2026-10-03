// ==================== SETTINGS ====================

var TO = "vanshsaini9311@gmail.com";

var GH = "https://github.com/vanshsaini9311/";


// ==================== PROJECTS ====================

var P = [
    {
        t: "X (Twitter) Clone",
        d: "A clone of X's home feed: sidebar, composer, feed posts and a 'Today's News' panel.",
        s: ["React", "Express", "Bootstrap"],
        c: "fullstack",
        i: "assets/twitter-clone.png",

        v: [
            {
                l: "Website demo",
                s: "assets/videos/twitter-website-demo.mp4"
            },
            {
                l: "Responsive demo",
                s: "assets/videos/twitter-responsive-demo.mp4"
            }
        ],

        g: "X-Twitter-Clone-UI-UX-"
    },

    {
        t: "Tic Tac Toe",
        d: "Two-player 3×3 game with turn tracking, win detection and a reset button.",
        s: ["HTML", "CSS", "JavaScript"],
        c: "frontend",
        i: "assets/tic-tac-toe.png",

        v: [
            {
                l: "Working demo",
                s: "assets/videos/tic-tac-toe-demo.mp4"
            }
        ],

        g: "Tic-Tac-Toe-Mini-Project-HTML-CSS-JAVASCRIPT-"
    },

    {
        t: "Currency Converter",
        d: "Converts any amount between currencies using live exchange rates from a REST API.",
        s: ["JavaScript", "REST API"],
        c: "api",
        i: "assets/currency-converter.png",

        v: [
            {
                l: "Working demo",
                s: "assets/videos/currency-converter-demo.mp4"
            }
        ],

        g: "Currency-Converter"
    },

    {
        t: "Rock Paper Scissor",
        d: "Play against the computer with a live scoreboard and win/lose messages.",
        s: ["HTML", "CSS", "JavaScript"],
        c: "frontend",
        i: "assets/rock-paper-scissor.png",

        v: [
            {
                l: "Working demo",
                s: "assets/videos/rock-paper-scissor-demo.mp4"
            }
        ],

        g: "Rock-Paper-Scissor"
    }
];


// ==================== PROJECT FILTERS ====================

var F = [
    ["all", "All"],
    ["frontend", "Front-end"],
    ["fullstack", "Full-stack"],
    ["api", "API"]
];


// Create project filter buttons
document.getElementById("fl").innerHTML = F
    .map(function (f, k) {
        return (
            '<button class="chip' +
            (k ? "" : " on") +
            '" data-f="' +
            f[0] +
            '">' +
            f[1] +
            "</button>"
        );
    })
    .join("");


// ==================== PROJECT CARDS ====================

document.getElementById("pl").innerHTML = P
    .map(function (p, k) {

        return (
            '<article class="card proj" data-c="' +
            p.c +
            '">' +

            '<div>' +

            '<span class="tag">project / 0' +
            (k + 1) +
            "</span>" +

            "<h3>" +
            p.t +
            "</h3>" +

            "<p>" +
            p.d +
            "</p>" +

            '<div class="skills">' +

            p.s
                .map(function (x) {
                    return '<span class="chip">' + x + "</span>";
                })
                .join("") +

            "</div>" +

            '<div class="links">' +
            '<a target="_blank" rel="noopener" href="' +
            GH +
            p.g +
            '">' +
            "Source code ↗" +
            "</a>" +
            "</div>" +

            "</div>" +

            '<div class="media" data-p="' +
            k +
            '">' +

            '<div class="tabs">' +

            '<button class="chip on" data-m="-1">' +
            "Screenshot" +
            "</button>" +

            (p.v || [])
                .map(function (v, j) {
                    return (
                        '<button class="chip" data-m="' +
                        j +
                        '">' +
                        "▶ " +
                        v.l +
                        "</button>"
                    );
                })
                .join("") +

            "</div>" +

            '<div class="shot">' +
            '<img loading="lazy" src="' +
            p.i +
            '" alt="' +
            p.t +
            ' screenshot">' +
            "</div>" +

            "</div>" +

            "</article>"
        );
    })
    .join("");


// ==================== PROJECT FILTERING ====================

document.getElementById("fl").onclick = function (e) {

    var button = e.target.closest("button");

    if (!button) {
        return;
    }

    // Update active filter
    document.querySelectorAll("#fl .chip").forEach(function (chip) {
        chip.classList.toggle("on", chip === button);
    });

    // Show / hide projects
    document.querySelectorAll(".proj").forEach(function (project) {

        var shouldHide =
            button.dataset.f !== "all" &&
            project.dataset.c !== button.dataset.f;

        project.classList.toggle("hide", shouldHide);
    });

    // Stop any playing videos
    document.querySelectorAll("#pl video").forEach(function (video) {
        video.pause();
    });
};


// ==================== LIGHTBOX ====================

var lb = document.getElementById("lb");


// Project media click
document.getElementById("pl").onclick = function (e) {

    var tab = e.target.closest(".tabs .chip");

    // Video / screenshot tab
    if (tab) {

        var media = tab.closest(".media");
        var project = P[media.dataset.p];
        var mediaIndex = +tab.dataset.m;

        // Update active tab
        media.querySelectorAll(".tabs .chip").forEach(function (chip) {
            chip.classList.toggle("on", chip === tab);
        });

        // Stop other videos
        document.querySelectorAll("#pl video").forEach(function (video) {
            video.pause();
        });

        var shot = media.querySelector(".shot");

        // Show screenshot
        if (mediaIndex < 0) {

            shot.className = "shot";

            shot.innerHTML =
                '<img src="' +
                project.i +
                '" alt="' +
                project.t +
                ' screenshot">';

        }

        // Show video
        else {

            shot.className = "shot vid";

            shot.innerHTML =
                '<video controls playsinline preload="metadata" src="' +
                project.v[mediaIndex].s +
                '"></video>';
        }

        return;
    }


    // Open screenshot in lightbox
    var screenshot = e.target.closest(".shot:not(.vid)");

    if (screenshot) {

        lb.querySelector("img").src =
            screenshot.querySelector("img").src;

        lb.classList.add("on");
    }
};


// Close lightbox
lb.onclick = function () {
    lb.classList.remove("on");
};


// Close lightbox using Escape key
document.onkeydown = function (e) {

    if (e.key === "Escape") {
        lb.classList.remove("on");
    }
};


// ==================== SKILLS ====================

var SK = {
    HTML: "Semantic markup for every project.",
    CSS: "Layouts, responsive design and styling.",
    JavaScript: "Game logic, DOM updates and API calls.",
    React: "Component-based UI, used in the X clone.",
    Express: "Backend server for the X clone.",
    Bootstrap: "Fast, responsive layouts.",
    "REST API": "Fetching live data, like exchange rates."
};


var sk = document.getElementById("sk");
var skd = document.getElementById("skd");


// Create skill buttons
sk.innerHTML = Object.keys(SK)
    .map(function (key) {
        return (
            '<button class="chip" data-k="' +
            key +
            '">' +
            key +
            "</button>"
        );
    })
    .join("");


// Skill button click
sk.onclick = function (e) {

    var button = e.target.closest("button");

    if (!button) {
        return;
    }

    sk.querySelectorAll(".chip").forEach(function (chip) {
        chip.classList.toggle("on", chip === button);
    });

    skd.textContent = SK[button.dataset.k];
};


// ==================== TYPING ANIMATION ====================

var W = [
    "a Tic Tac Toe game",
    "an X (Twitter) clone",
    "a currency converter",
    "a Rock Paper Scissor game"
];

var wi = 0;
var ci = 0;
var del = false;

var ty = document.getElementById("ty");


(function tick() {

    var word = W[wi];

    ci += del ? -1 : 1;

    ty.textContent = word.slice(0, ci);

    var delay = del ? 35 : 70;


    // Start deleting after completing the word
    if (!del && ci === word.length) {

        del = true;
        delay = 1400;
    }


    // Move to the next word
    else if (del && ci === 0) {

        del = false;
        wi = (wi + 1) % W.length;

        delay = 300;
    }


    setTimeout(tick, delay);

})();


// ==================== CERTIFICATES ====================

var C = [
    {
        t: "REST API (Intermediate)",
        d: "HackerRank · earned 29 Sep 2026",
        i: "assets/certs/restapi.jpg"
    },

    {
        t: "JavaScript (Intermediate)",
        d: "HackerRank · earned 28 Sep 2026",
        i: "assets/certs/javascript.jpg"
    },

    {
        t: "OCI Gen AI Professional",
        d: "Oracle Certified Professional · Sep 2025",
        i: "assets/certs/oracle_pro.jpg"
    },

    {
        t: "OCI AI Foundations Associate",
        d: "Oracle Certified Foundations Associate · Sep 2025",
        i: "assets/certs/oracle_found.jpg"
    },

    {
        t: "Data Science — Summer School",
        d: "Dronacharya College of Engineering · 2026",
        i: "assets/certs/internship.jpg"
    }
];


// Create certificate cards
document.getElementById("cg").innerHTML = C
    .map(function (certificate) {

        return (
            '<article class="card cert">' +

            '<img loading="lazy" src="' +
            certificate.i +
            '" alt="' +
            certificate.t +
            ' certificate">' +

            "<div>" +

            "<h4>" +
            certificate.t +
            "</h4>" +

            "<p>" +
            certificate.d +
            "</p>" +

            "</div>" +

            "</article>"
        );
    })
    .join("");


// Open certificate in lightbox
document.getElementById("cg").onclick = function (e) {

    var image = e.target.closest("img");

    if (image) {

        lb.querySelector("img").src = image.src;

        lb.classList.add("on");
    }
};


// ==================== NAVIGATION ====================

var links = [].slice.call(
    document.querySelectorAll("nav a")
);

var secs = links.map(function (link) {
    return document.querySelector(
        link.getAttribute("href")
    );
});


// Highlight navigation link based on current section
var io = new IntersectionObserver(
    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                var index = secs.indexOf(entry.target);

                links.forEach(function (link, key) {

                    link.classList.toggle(
                        "on",
                        key === index
                    );
                });
            }
        });
    },
    {
        rootMargin: "-45% 0px -50% 0px"
    }
);


secs.forEach(function (section) {
    io.observe(section);
});


// ==================== TOAST MESSAGE ====================

var toastEl = document.getElementById("toast");


function toast(message) {

    toastEl.textContent = message;

    toastEl.classList.add("show");

    setTimeout(function () {
        toastEl.classList.remove("show");
    }, 3500);
}


// ==================== CONTACT FORM ====================

document
    .getElementById("sendBtn")
    .addEventListener("click", function (e) {

        e.preventDefault();

        var name = document.getElementById("n");
        var email = document.getElementById("e");
        var message = document.getElementById("m");
        var form = document.getElementById("f");

        var ok = true;


        // Validate form fields
        [
            [name, name.value.trim()],
            [
                email,
                /^\S+@\S+\.\S+$/.test(
                    email.value.trim()
                )
            ],
            [message, message.value.trim()]
        ].forEach(function (field) {

            var valid = !!field[1];

            field[0].classList.toggle(
                "err",
                !valid
            );

            if (!valid) {
                ok = false;
            }
        });


        // Stop if validation fails
        if (!ok) {

            toast(
                "Please fill in every field with a valid email."
            );

            return;
        }


        // Create email body
        var body =
            "Name: " +
            name.value +
            "\nEmail: " +
            email.value +
            "\n\n" +
            message.value;


        // Create mailto URL
        var mailUrl =
            "mailto:" +
            TO +
            "?subject=" +
            encodeURIComponent(
                "Portfolio message from " + name.value
            ) +
            "&body=" +
            encodeURIComponent(body);


        // Open email application
        window.location.href = mailUrl;

        form.reset();

        toast("Opening your email app…");
    });


// ==================== FOOTER YEAR ====================

document.getElementById("yr").textContent =
    new Date().getFullYear();
