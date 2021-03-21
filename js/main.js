(() => {
    const hamburgerBtn = document.querySelector(".hamburger-btn"),
        navMenu = document.querySelector(".nav-menu"),
        closeBtn = navMenu.querySelector(".close-nav-menu");

    hamburgerBtn.addEventListener("click", showMNavMenu);
    closeBtn.addEventListener("click", hideNavMenu);
    function showMNavMenu() {
        navMenu.classList.add("open");
        bodyScrolllingToggle();
    }
    function hideNavMenu() {
        fadeOutEffect();
        navMenu.classList.remove("open");
        bodyScrolllingToggle();

    }
    function fadeOutEffect() {
        document.querySelector(".fade-out-effect").classList.add("active");
        setTimeout(() => {
            document.querySelector(".fade-out-effect").classList.remove("active");
        }, 300)
    }

    document.addEventListener("click", (event) => {
        if (event.target.classList.contains('link-item')) {
            if (event.target.hash !== "") {
                // event.preventDefault();

                // const hash = event.target.hash;
                // console.log(hash)
                // // deactive existing active 'section'
                // document.querySelector(".section.active").classList.add("hide");
                // document.querySelector(".section.active").classList.remove("active");
                // // active new 'section'
                // document.querySelector(hash).classList.add("active");
                // document.querySelector(hash).classList.remove("hide");

                // deactive active navigation menu'link-iem'
                navMenu.querySelector(".active").classList.add("outer-shadow", "hover-in-shadow");
                navMenu.querySelector(".active").classList.remove("active", "inner-shadow");


                if (navMenu.classList.contains("open")) {
                    //active new nav nemu item
                    event.target.classList.add("active", "inner-shadow");
                    event.target.classList.remove("outer-shadow", "hover-in-shadow");
                    hideNavMenu();
                }
                else{
                    let naVItems = navMenu.querySelectorAll(".link-item");
                    naVItems.forEach((item)=>{
                        if(hash === item.hash){
                            item.classList.add("active", "inner-shadow");
                            item.classList.remove("outer-shadow", "hover-in-shadow");
                        }
                    })
                    fadeOutEffect();
                }
                
            }
        }

    })
})();


(() => {
    const aboutSection = document.querySelector(".about-section"),
        tabsContainer = document.querySelector(".about-tabs");

    tabsContainer.addEventListener("click", (event) => {
        // console.log(event.target);
        if (event.target.classList.contains("tab-item") && !event.target.classList.contains("active")) {
            // console.log("not contain active");
            const target = event.target.getAttribute("data-target");

            tabsContainer.querySelector(".active").classList.remove("outer-shadow", "active");

            event.target.classList.add("active", "outer-shadow");

            aboutSection.querySelector(".tab-content.active").classList.remove("active");

            aboutSection.querySelector(target).classList.add("active");
        }
    })
})();
function bodyScrolllingToggle() {
    document.body.classList.toggle("stop-scrolling");
}
(() => {
    const filterContainer = document.querySelector(".portfolio-filter"),
        portfolioItemsContainer = document.querySelector(".portfolio-items"),
        portfolioItems = document.querySelectorAll(".portfolio-item"),
        popup = document.querySelector(".portfolio-popup"),
        prevBTn = popup.querySelector(".pp-prev"),
        nextBtn = popup.querySelector(".pp-next"),
        closeBtn = popup.querySelector(".pp-close"),
        projectDetailsContainer = popup.querySelector(".pp-details"),
        projectDetailsBtn = popup.querySelector(".pp-project-details-btn");

    let itemIndex, slideIndex, screenshots;

    filterContainer.addEventListener("click", (event) => {
        // console.log(event.target);
        if (event.target.classList.contains("filter-item") && !event.target.classList.contains("active")) {
            // console.log("true"); check active filter
            filterContainer.querySelector(".active").classList.remove("outer-shadow", "active");

            //active 
            event.target.classList.add("active", "outer-shadow");
            const target = event.target.getAttribute("data-target");
            // console.log(target); get attr of filter-item
            portfolioItems.forEach((item) => {
                // console.log(item.getAttribute("data-category"));
                if (target === item.getAttribute("data-category") || target === 'all') {
                    item.classList.remove("hide");
                    item.classList.add("show");
                }
                else {
                    item.classList.remove("show");
                    item.classList.add("hide")
                }
            })

        }

    })
    portfolioItemsContainer.addEventListener("click", (event) => {
        if (event.target.closest(".portfolio-item-inner")) {
            const portfolioItem = event.target.closest(".portfolio-item-inner").parentElement;
            //    console.log(portfolioItem);
            itemIndex = Array.from(portfolioItem.parentElement.children).indexOf(portfolioItem);
            // console.log(itemIndex); get index of each item
            screenshots = portfolioItems[itemIndex].querySelector(".portfolio-item-img img").getAttribute("data-screenshot");
            // console.log(screenshots); get url of img array
            // convert img string to array
            screenshots = screenshots.split(",");

            if (screenshots.length === 1) {
                prevBTn.style.display = "none";
                nextBtn.style.display = "none";
            }
            else {
                prevBTn.style.display = "block";
                nextBtn.style.display = "block";
            }
            // console.log(screenshots);
            slideIndex = 0;
            popupToggle();
            popupSlideShow();
            popupDetails();
        }
    })
    // 

})();

// // prevent scrolling info
// (() => {
//     const sections = document.querySelectorAll(".section");
//     // console.log(sections);
//     sections.forEach((section) => {
//         if (!section.classList.contains("active")) {
//             section.classList.add("hide");
//         }
//     })
// })();

window.addEventListener("load",()=>{
    document.querySelector(".preloader").classList.add("fade-out");
    setTimeout(()=>{
        document.querySelector(".preloader").style.display="none";
    },2000)
})