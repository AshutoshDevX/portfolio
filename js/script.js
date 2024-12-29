const navLinks = document.querySelectorAll('header nav a');
const logoLink = document.querySelectorAll('.logo');
const sections = document.querySelectorAll('section');
const menuIcon = document.querySelector('#menu-icon');
const navBar = document.querySelector('header nav');
const navLink = document.querySelector('a');


menuIcon.addEventListener('click',()=>{
    menuIcon.classList.toggle('bx-x');

    navBar.classList.toggle('active');
})

navLink.addEventListener('click',()=>{
    console.log('fgh')
})


// const activePage = () =>{
//     navLinks.forEach(link => {
//         link.classList.remove('active');
//     })

//     sections.forEach(section=>{
//         section.classList.remove('active'); 
//     })
// }

// navLinks.forEach((link,idx)=>{
//     link.addEventListener('click',()=>{
//         if(!link.classList.contains('active'));
//         activePage();

//         link.classList.add('active');

        
//         sections[idx].classList.add('active');
//     })
// })

// logoLink.addEventListener('click',()=>{
//     if(!navLinks(0).classList.contains('active')){
//         activePage();
        
//         navLinks[0].classList.add('active');
//     }
// })

const arrowRight = document.querySelector('.project-box .navigation .arrow-right');
const arrowLeft = document.querySelector('.project-box .navigation .arrow-left');


let index = 0;

const activeProject = ()=>{
    const imgSlide = document.querySelector('.project-carousel .img-slide');
    const projectDetails = document.querySelectorAll('.project-detail');

    imgSlide.style.transform = `translateX(calc(${index* -100}% - ${index*2}rem))`; 

    projectDetails.forEach(details=>{
        details.classList.remove('active');
    })

    projectDetails[index].classList.add('active');
}

arrowRight.addEventListener('click',()=>{
    if(index<2){
        index++;
        arrowLeft.classList.remove('disabled')
    } 
    else{ 
        index=3;
        arrowRight.classList.add('disabled')
    }

    activeProject();
});


arrowLeft.addEventListener('click',()=>{
    if(index>1){
        index--;
        arrowRight.classList.remove('disabled')
    }
    else{
        index=0;
        arrowLeft.classList.add('disabled')
    }
    activeProject();
});
