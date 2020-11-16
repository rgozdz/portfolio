
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
    scrollElementIntoView(aboutSectionHeight,'smooth');
})

const introductionBtn = document.querySelector("a[href='#introduction']");
introductionBtn.addEventListener('click' ,(e)=>{
    e.preventDefault();  
    const scrollHeight = document.querySelector(".introduction");
    scrollInto(scrollHeight);
});

const projectsBtn = document.querySelector("a[href='#projects']");
projectsBtn.addEventListener('click' ,(e)=>{
    e.preventDefault();
    var projectsSectionHeight = document.querySelector(".projects");
    scrollElementIntoView(projectsSectionHeight,'smooth');
})

const arrow = document.querySelector(".arrow");
arrow.addEventListener('click' ,(e)=>{
    e.preventDefault();
    var aboutSectionHeight = document.querySelector(".about");
    scrollElementIntoView(aboutSectionHeight,'smooth');
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


/** Scrolls the element into view
 * Manually created since Safari does not support the native one inside an iframe
*/
const scrollElementIntoView = (element, behavior) => {

    let scrollTop = window.pageYOffset || element.scrollTop
  
     // Furthermore, if you have for example a header outside the iframe 
     // you need to factor in its dimensions when calculating the position to scroll to
     const headerOutsideIframe = window.parent.document.getElementsByClassName('navigation')[0].clientHeight
  
    const finalOffset = element.getBoundingClientRect().top + scrollTop - headerOutsideIframe
  
    window.parent.scrollTo({
      top: finalOffset,
      behavior: behavior || 'auto'
    })
  }

