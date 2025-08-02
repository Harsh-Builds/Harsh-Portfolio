// ?*==================== MENU SHOW Y HIDDEN ====================*/
const navmenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')



/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navmenu.classList.add('show-menu')
    })
}
/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
    navClose.addEventListener('click', ()=>{
        navmenu.classList.remove('show-menu')
    })
}

/*==================== REMOVE MENU MOBILE ====================*/
const navlink = document.querySelectorAll('.nav_link')

function linkaction(){
    // when we click on each nav_link , we remove the show-menu class.
    navmenu.classList.remove('show-menu')
}
navlink.forEach(n => n.addEventListener('click', linkaction))

/*==================== ACCORDION SKILLS ====================*/
const skillsContent = document.getElementsByClassName('skills_content'),
      skillsHeader = document.querySelectorAll('.skills_header')

function skillstoggle() {
    let itemclass = this.parentNode.className

    for( i = 0; i < skillsContent.length; i++){
        skillsContent[i].className = 'skills_content skills_close'
    }
    if(itemclass === 'skills_content skills_close'){
        this.parentNode.className = 'skills_content skills_open'
    }
}

skillsHeader.forEach((elemnt) => {
    elemnt.addEventListener('click', skillstoggle)
})


/*==================== QUALIFICATION TABS ====================*/
const tabs = document.querySelectorAll('[data-target]'),
        tabsContent = document.querySelectorAll('[data-content]')

        tabs.forEach( tab =>{
            tab.addEventListener('click', ()=>{
                const target = document.querySelector(tab.dataset.target)
               
                tabsContent.forEach(tabcontent =>{
                    tabcontent.classList.remove('qualification_active')
                })
                target.classList.add('qualification_active')

                tabs.forEach(tab =>{
                    tab.classList.remove('qualification_active')
                })
                tab.classList.add('qualification_active')
            })
        })
/*==================== SERVICES MODAL ====================*/

const modelView = document.querySelectorAll('.service_model'),
        modelbtns = document.querySelectorAll('.service_button'),
        modelclose = document.querySelectorAll('.service_model-close')
  
        // The forEach goes through each button with its index

        modelbtns.forEach((mdlbtn, i) => {
            mdlbtn.addEventListener('click', () =>{
                model(i)
            })
        })

        let model = function (modelClick) {
            modelView[modelClick].classList.add('active_model')
        }

       modelclose.forEach(n => {
        n.addEventListener('click', ()=>{
            modelView.forEach(n =>{
                n.classList.remove('active_model')
            })
        })
       })

/*==================== PORTFOLIO SWIPER  ====================*/

 let swiperPortfolio = new Swiper(".mySwiper", {
  loop: true,
  cssMode: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});


/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/


/*==================== CHANGE BACKGROUND HEADER ====================*/ 


/*==================== SHOW SCROLL UP ====================*/ 


/*==================== DARK LIGHT THEME ====================*/ 