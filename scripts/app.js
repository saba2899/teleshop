const burgerMenu = document.getElementById('burgerMenu');
const navMenu = document.getElementById('navMenu');
const themeToggle = document.getElementById('themeToggle');
const navMenuText = document.querySelectorAll('.navMenu a');

burgerMenu.addEventListener('click', () => {
    burgerMenu.classList.toggle('active');
    navMenu.classList.toggle('active');
});


function checktheme() {
    const currentTheme = localStorage.getItem('theme');
    if(currentTheme === 'dark') {
        document.body.classList.add('dark')
        themeToggle.style.color = "white";
        navMenuText.forEach(link => {
            link.style.color = "white"
        })
    } else {
        document.body.classList.add('light')
        themeToggle.style.color = "black";
        navMenuText.forEach(link => {
            link.style.color = "black"
        })
    }
}

checktheme();

function themeChange() {
    if (document.body.classList.contains('dark')) {
        document.body.classList.remove('dark');
        document.body.classList.add('light');
        localStorage.setItem('theme', 'light');
        themeToggle.style.color = "black";
        navMenuText.forEach(link => {
            link.style.color = "black"
        })
    } else {
        document.body.classList.remove('light');
        document.body.classList.add('dark');
        localStorage.setItem('theme', 'dark')
        themeToggle.style.color = "white";
        navMenuText.forEach(link => {
            link.style.color = "white"
        })
    }
}

themeToggle.addEventListener('click', themeChange);
