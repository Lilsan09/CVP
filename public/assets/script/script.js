// ***********************ABOUT TABS**********************
// const tabsContainer = document.querySelector(".about-tabs"),
// aboutSection = document.querySelector(".about-section");
// let xp = document.querySelector(".tab-item:nth-child(2)");
// console.log(xp);
// tabsContainer.addEventListener("click", (e) => {
//     console.log(e.target.classList.contains("active"));
//     if (xp.classlist.contains("tab-item") && !e.target.classList.contains("active")){
        
//         tabsContainer.querySelector(".active").classList.remove("active");
//         e.target.classList.add("active");
//         const target = e.target.getAttribute("data-target");
//         aboutSection.querySelector(".tab-content.active").classList.remove("active");
//         aboutSection.querySelector(target).classList.add("active");
//         console.log(target);

//     }
// });
// *******************************************************************
///////// *********************** VIDEO 1H44 et 35secondes **********************//////////
// Toggle Navbar
const navToggler = document.querySelector(".nav-toggler");
function hideSection(){
    document.querySelector("section.active").classList.toggle("fade-out");
}
function toggleNavbar(){
    document.querySelector(".header").classList.toggle("active");
}
navToggler.addEventListener("click", () => {
    hideSection();
    toggleNavbar();
});


const lBtn = document.querySelector(".tab-item-left");
const rBtn = document.querySelector(".tab-item-right");
const studies = document.querySelector("#education");
const xp = document.querySelector("#experience");

rBtn.addEventListener("click", () => {
    if(!rBtn.classList.contains("active")){
        rBtn.classList.add("active");
        lBtn.classList.remove("active");
        studies.classList.remove("active");
        xp.classList.add("active");
    }
});
lBtn.addEventListener("click", () => {
    if(!lBtn.classList.contains("active")){
        lBtn.classList.add("active");
        rBtn.classList.remove("active");
        xp.classList.remove("active");
        studies.classList.add("active");
    }
});


/* -------------------- Portfolio Item Details Popup ------------------- */
document.addEventListener("click", (e) => {
    if(e.target.classList.contains("view-project-btn")){
        togglePortfolioPopup();

        document.querySelector(".portfolio-popup").scrollTo(0,0);
        portfolioItemDetails(e.target.parentElement);
    }
})
function togglePortfolioPopup(){
    document.querySelector(".portfolio-popup").classList.toggle("open");
    document.body.classList.toggle("hider-scrolling");
    document.querySelector(".main").classList.toggle("fade-out");
}

document.querySelector(".pp-close").addEventListener("click", togglePortfolioPopup);

//hide popup when clicking outside of it
document.addEventListener("click", (e) => {
    if(e.target.classList.contains("pp-inner")){
        togglePortfolioPopup();
    }
})

function portfolioItemDetails(portfolioItem){
    document.querySelector(".pp-thumbnail img").src = 
    portfolioItem.querySelector(".portfolio-item-thumbnail img").src;

    document.querySelector(".pp-header h3").innerHTML = 
    portfolioItem.querySelector(".portfolio-item-title").innerHTML;

    document.querySelector(".pp-body").innerHTML = 
    portfolioItem.querySelector(".portfolio-item-detail").innerHTML;
}


//**************************** 1h08m50s ****************************