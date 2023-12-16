let MenuBtn = document.getElementById('MenuBtn')

MenuBtn.addEventListener('click', function(e) {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    this.classList.toggle('fa-xmark')
})

let typed = new Typed('.auto-input',{
    strings: ['Front-End Developer!','Back-End Developer!','Full-Stack Developer!','Freelancer!'],
    typeSpeed:100,
    backSpeed:100,
    backDelay:2000,
    loop:true,
})

let navLinks = document.querySelectorAll('nav ul li a')
let sections=document.querySelectorAll('section')

window.addEventListener('scroll', function(){
    const scrollPos=this.window.scrollY + 20
    sections.forEach(section =>{
        if (scrollPos>section.offsetTop && scrollPos<(section.offsetTop + section.offsetHeight)){
            navLinks.forEach(link =>{
                link.classList.remove('active');
                if(section.getAttribute('id')=== link.getAttribute('href').substring(1)){
                    link.classList.add('active')
                }
            });
        }
    });
});