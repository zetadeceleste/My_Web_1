// Header fade on cover & Header scroll up on Mobile
let header = document.getElementById('header');
let cover = document.getElementById('cover');
let coverPosBot = cover.getBoundingClientRect().bottom + window.scrollY;
let coverPosTop = cover.getBoundingClientRect().top + window.scrollY;
let skills = document.getElementById('skills');
let skillsPos = skills.getBoundingClientRect().top + window.scrollY;
let stickyBlur = document.getElementById('stickyBlur');
let prevScrollPos = window.pageYOffset;
let currentScrollPos;

window.onscroll = () => {
    currentScrollPos = window.pageYOffset;
    if (currentScrollPos >= coverPosBot) {
        header.classList.add('header-white');
        // DRY! :(
        if (screen.width <= 768) {
            if (currentScrollPos < prevScrollPos) {
                header.style.top = '0vh';
            } else {
                header.style.top = '-10vh';
            }
            prevScrollPos = currentScrollPos;
        }
    } else {
        header.classList.remove('header-white');
        // DRY!! :(
        if (screen.width <= 768) {
            if (currentScrollPos < prevScrollPos) {
                header.style.top = '0vh';
            } else {
                header.style.top = '-10vh';
            }
            prevScrollPos = currentScrollPos;
        }
    }
    // DIY fade appears from About to Skills
    if (currentScrollPos >= coverPosTop && currentScrollPos <= skillsPos) {
        stickyBlur.style.display = 'block';
    } else {
        stickyBlur.style.display = 'none';
    }
}

// Animation for "Details"
let details = document.getElementById('details');
let detailsIcon = document.getElementById('details-icon');
window.onload = () => {
    details.addEventListener('click', () => {
        details.classList.add('details-activate');
        detailsIcon.classList.add('details-icon-activate');
    })
}