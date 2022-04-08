const body = document.getElementById("temp");

const appear = function () {
    const getUl = document.getElementById("hamburger");
    getUl.parentNode.classList.toggle("appear");
};

const takeThisColorMyFriend = function (color, element) {
    body.classList = [color];
    document.querySelector(".textcontainer").innerHTML = `The color is ${color}`;
    element.parentNode.classList.remove("appear");
};

const toggleMenu = function () {
    const hamburgerMenu = document.querySelector("nav");
    hamburgerMenu.addEventListener("mouseenter", appear);
    hamburgerMenu.addEventListener("mouseleave", appear);
};

const toggleMenuItems = function () {
    const menuItems = document.querySelectorAll("ul li");
    menuItems.forEach((element) => {
        element.addEventListener("click", function () {
            takeThisColorMyFriend(element.classList[1], element);
        });
    });
};

// For pressing the 1,2,3,4,5 keys on the keyboard
const toggleWithKeyboard = function () {
    window.addEventListener("keydown", function (e) {
        if (e.keyCode == 49) {
            body.classList = ["red"];
        } else if (e.keyCode == 50) {
            body.classList = ["green"];
        } else if (e.keyCode == 51) {
            body.classList = ["blue"];
        } else if (e.keyCode == 52) {
            body.classList = ["yellow"];
        } else if (e.keyCode == 53) {
            body.classList = ["clown"];
        }
    });
};

toggleMenu();
toggleMenuItems();
toggleWithKeyboard();
