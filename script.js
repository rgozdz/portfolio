
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
    aboutSectionHeight.scrollIntoView();
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
    aboutSectionHeight.scrollIntoView(); 
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

setTimeout(changeTitle, 1500);
setTimeout(() => {setInterval(changeTitle, 3000)}, 1500);


