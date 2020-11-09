
document.addEventListener('scroll', () =>{
    let navbar = document.querySelector('.navigation');

   if(this.scrollY> 50){
    navbar.classList.add('sticky');
   } else {
       navbar.classList.remove('sticky');
   }
});

const aboutBtn = document.querySelector("a[href='#about']");
aboutBtn.addEventListener('click' ,(e)=>{
    e.preventDefault();
    var aboutSectionHeight = document.querySelector(".about");
    aboutSectionHeight.scrollIntoView({
        behavior: 'smooth',
    });
})

const projectsBtn = document.querySelector("a[href='#projects']");
projectsBtn.addEventListener('click' ,(e)=>{
    e.preventDefault();
    var aboutSectionHeight = document.querySelector(".projects");
    aboutSectionHeight.scrollIntoView({
        behavior: 'smooth'
    });
})

const homeBtn = document.querySelector("a[href='#introduction']");
homeBtn.addEventListener('click' ,(e)=>{
    e.preventDefault();  
    const scrollHeight = document.querySelector(".introduction");
    scrollInto(scrollHeight);
});

const arrow = document.querySelector(".arrow");
arrow.addEventListener('click' ,(e)=>{
    e.preventDefault();  
    var aboutSectionHeight = document.querySelector(".about");
    aboutSectionHeight.scrollIntoView({
        behavior: 'smooth'
    }); 
});

function scrollInto(scrollHeight) {
    window.scrollTo(0, scrollHeight)
}

let activeElement = 1;
const titles = ["I'm Creative.", "I'm Freelancer.", "I'm Test Developer." , "I'm Rafał Góźdź."]

function changeTitle() {

    if (activeElement >= titles.length) {
        activeElement = 0;
    }

    const title = document.querySelector(".words-wrapper b");
    title.textContent = titles[activeElement];
    
    activeElement ++;
}

var shortage = document.querySelector('.shortage'),
skils = document.querySelector('.skils'),
about = document.querySelector('.about');

window.addEventListener("scroll", function(){
  
    var aboutOffset =about.offsetHeight;
    var windowsOffset = window.pageYOffset;
    var offsetDiff = aboutOffset -windowsOffset;

    if(offsetDiff< aboutOffset/2){
        shortage.style.opacity =1;
        skils.style.opacity =1;
        shortage.style.transform = "translateX(-100%)";
        skils.style.transform = "translateX(50%)";
    }
    else {
        shortage.style.opacity =0;
        skils.style.opacity =0;
        shortage.style.transform = "translateX(100%)";
        skils.style.transform = "translateX(-100%)";
    }

  })

setTimeout(changeTitle, 1500);
setTimeout(() => {setInterval(changeTitle, 3000)}, 1500);


