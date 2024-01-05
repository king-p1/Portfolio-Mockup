const navMenu = document.getElementById('nav-menu'),
navClose = document.getElementById('nav-close'),
navToggle = document.getElementById('nav-toggle') 

if(navToggle){
    navToggle.addEventListener('click', ()=>{
        navMenu.classList.add('show-menu')
    })
}


if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

const navLink = document.querySelectorAll('.nav-link') 

const lnkAtn = () => {
    const navMenu = document.getElementById('nav-menu') 
    navMenu.classList.remove('show-menu')

} 

navLink.forEach(n => n.addEventListener('click', lnkAtn))

num1=3;
num2=3;
num3=3;

const Add = () =>{
return num1+num2+num3
}

const subtract = () =>{
    return num1-num2-num3
    }

    const divide = () =>{
        return num1/num2/num3
        }
console.log(Add(),subtract(),divide());



let swiperProjects = new Swiper(".projects-container", {
  loop:true,
  spaceBetween:24,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    breakpoints: {
        1200: {
          slidesPerView: 1,
          spaceBetween: 380,
        },
820: {
          slidesPerView: 1,
          spaceBetween: 300,
        },
        // 1024: {
        //   slidesPerView: 5,
        //   spaceBetween: 50,
        // },
      },
  });

  let swiperTestimonial = new Swiper(".testimonial-container", {
    grabCursor: true,
    loop:true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },})

const conForm = document.getElementById('contact-form'),
conName = document.getElementById('contact-name'),
conEmail = document.getElementById('contact-email'),
conProjeect = document.getElementById('contact-projects'),
conMessage = document.getElementById('contact-message')

const sendEmail = (e) =>{
e.preventDefault()

if(conName.value === '' || conEmail.value === '' || conProjeect.value === ''){
    conMessage.classList.remove('color-blue')
    conMessage.classList.add('color-red')

conMessage.textContent = 'Enter all input fields'

}else{
    emailjs.sendForm('service_q7l6l12','template_re84ts4','#contact-form','iBlWpuoiSEe6sHCGC')
    .then(() =>{
        conMessage.classList.add('color-green')
conMessage.textContent = 'Message Sent Successfully ✔'

setTimeout(() =>{
conMessage.textContent = ''
},5000)
    },(error)=>{
alert('Something is Wrong (⊙_⊙;)...',error)
    })

    conName.value = ''
    conEmail.value = ''
    conProjeect.value = ''

}}
conForm.addEventListener('submit',sendEmail)

//theme toggling
const change = document.getElementById('theme-buttons')

change.addEventListener('click', Click = () => {
        if(change.classList.contains('ri-moon-line')){
        change.classList.toggle('ri-sun-line')
        document.body.classList.toggle('dark-theme')
    }}

)



//sections scroll
const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop - 58,
        sectionId = current.getAttribute('id'),
        sectionsClass = document.querySelector('.nav-menu a[href*='+ sectionId +']')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        }else{
            sectionsClass.classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll',scrollActive)

const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up')
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll') : 
    scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll',scrollUp)

const scrollHeader = () => {
    const header = document.getElementById(header)

    this.scrollY >= 50 ? header.classList.add('bg-header') : header.classList.remove('bg-header')
}

window.addEventListener('scroll', scrollHeader)

const sr = ScrollReveal ({
    origin: 'top',
    distance: '60px',
    duration:2500,
    delay : 400,
    reset:true
})
sr.reveal(`.home-data, .projects-container, .testimonial-container, .footer-container`)
sr.reveal(`.home-info div`,{delay:600, origin:'bottom', interval:100})
sr.reveal(`.skills-content:nth-child(1)`, {origin:'bottom'})
sr.reveal(`.contact-content:nth-child(1)`, {origin:'left'})
sr.reveal(`.contact-content:nth-child(2)`, {origin:'right'})
sr.reveal(`.skills-content:nth-child(2)`, {origin:'top'})
sr.reveal(`.services-card`, {origin:'top'})
sr.reveal(`.qualification-content `, {origin:'bottom',interval:100})



























