function welcomeUser() {

    document.getElementById("welcomeText").innerText =
    "Welcome to my portfolio!";
}

function toggleTheme() {

    document.body.classList.toggle("dark-mode");
}

function toggleAbout() {

    let about =
    document.getElementById("about");

    if (about.style.display === "none") {

        about.style.display = "block";

    } else {

        about.style.display = "none";
    }
}

function greetUser() {

    let name =
    document.getElementById("userName").value;

    document.getElementById("greeting").innerText =
    "Hello " + name + ", Welcome to Dev's Portfolio!";
}

function changeBackground() {

    let colors = [
        "#dbeafe",
        "#dcfce7",
        "#fce7f3",
        "#fef9c3",
        "#e0e7ff"
    ];

    let randomIndex =
    Math.floor(Math.random() * colors.length);

    document.body.style.background =
    colors[randomIndex];
}

function highlightSkill(skill) {

    let buttons =
    document.querySelectorAll(".skill-btn");

    buttons.forEach(function(btn) {

        btn.classList.remove("active");
    });

    skill.classList.add("active");
}

function countCharacters() {

    let text =
    document.getElementById("message").value;

    let count = text.length;

    document.getElementById("counter").innerText =
    "Characters Typed: " + count;
}

function validateForm() {

    let name =
    document.getElementById("contactName").value;

    if (name === "") {

        document.getElementById("formMessage").innerText =
        "Please enter your name";

    } else {

        document.getElementById("formMessage").innerText =
        "Form submitted successfully!";
    }
}

function changeImage() {

    let image =
    document.querySelector(".profile-img");

    image.classList.toggle("image-effect");
}

function showStats() {

    let stats =
    document.getElementById("stats");

    if (stats.style.display === "none") {

        stats.style.display = "block";

    } else {

        stats.style.display = "none";
    }
}

let Text=
    document.getElementById("copyText");
    
const Hello =
    document.getElementById("Hello");
    Hello.addEventListener("click",()=>{
        navigator.clipboard.writeText(Text.innerText);
        Hello.innerText = "Copied";
    });

    