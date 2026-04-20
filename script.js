
/* for hero*/

const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
        if (entry.isIntersecting) {
            entry.target.classList.add("scale");
        }


    })
}, { threshold: 0.10 });

const airplane = document.querySelector(".airplane");

if (airplane) {
    observer.observe(airplane);
}



/* for about*/


const observer2 = new IntersectionObserver(function (entries2) {
    entries2.forEach(function (entry2) {
        if (entry2.isIntersecting) {
            entry2.target.classList.add("fadeUp");
        }

    });
}, { threshold: 0.30 });

const aboutElements = document.querySelectorAll(".about-animate");

aboutElements.forEach(el => {
    observer2.observe(el);
})



/* for about*/


const observer3 = new IntersectionObserver(function (entries3) {
    entries3.forEach(function (entry3) {
        if (entry3.isIntersecting) {
            entry3.target.classList.add("fade-service");

        }

    });
}, { threshold: 0.30 });

const serviceList = document.querySelectorAll(".service-item ");

serviceList.forEach(serviceEl => {
    observer3.observe(serviceEl);
})



// faqs


const accordionItems = document.querySelectorAll(".accordion-item");

accordionItems.forEach(item => {
    item.addEventListener("click", function () {
        const accordion = item.parentElement;
        const isOpen = item.classList.contains("open");
        accordionItems.forEach(i => i.classList.remove("open"));

        if (!isOpen) {
            item.classList.add("open");
        }
    });


});



// booking page back button

const backBtn = document.querySelector(".back-btn");

if (backBtn) {
    backBtn.addEventListener("click", function () {
        if (window.history.length > 1) {
            window.history.back();
            return;
        }

        window.location.href = "index.html";
    });
}


// mobile menu

const openMenu = document.getElementById("open");
const closeMenu = document.getElementById("close");
const mobMenu = document.querySelector(".mob-menu");

openMenu.addEventListener("click", function () {
    mobMenu.classList.add("open");
});

closeMenu.addEventListener("click", function () {
    mobMenu.classList.remove("open");
}); 
