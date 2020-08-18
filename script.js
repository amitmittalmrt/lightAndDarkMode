const toggleSwitch = document.querySelector('input[type="checkbox"]');
const image1 =document.getElementById('image1');
const image2 =document.getElementById('image2');
const image3 =document.getElementById('image3');
const toggleIcon =document.getElementById('toggle-icon');
const nav =document.getElementById('nav');
const textBox =document.getElementById('text-box');

//template string for dark or light images
function imageMode(color){
    image1.src=`img/undraw_proud_coder_${color}.svg`;
    image2.src=`img/undraw_feeling_proud_${color}.svg`;
    image3.src=`img/undraw_conceptual_idea_${color}.svg`;

}

function toggleDarkLightMode(isDark){
    nav.style.backgroundColor =isDark? 'rgb(0 0 0 / 50%)':'rgb(255 255 255 / 50%)';
    textBox.style.backgroundColor=isDark?'rgb(255 255 255 / 50%)':'rgb(0 0 0 / 50%)';
    toggleIcon.children[0].textContent=isDark?'Dark Mode':'Light Mode';
    isDark? toggleIcon.children[1].classList.replace('fa-sun','fa-moon'):toggleIcon.children[1].classList.replace('fa-moon','fa-sun');
    isDark? ImageMode('dark'): imageMode('light');

}
// function t

// dark mode styles

// function darkMode(){
//     nav.style.backgroundColor = 'rgb(0 0 0 / 50%)';
//     textBox.style.backgroundColor='rgb(255 255 255 / 50%)';
//     toggleIcon.children[0].textContent='Dark Mode';
//     // toggleIcon.children[1].classList.remove('fa-sun');
//     // toggleIcon.children[1].classList.add('fa-moon');
//     toggleIcon.children[1].classList.replace('fa-sun','fa-moon');
//     // image1.src='img/undraw_proud_coder_dark.svg';
//     // image2.src='img/undraw_feeling_proud_dark.svg';
//     // image3.src='img/undraw_conceptual_idea_dark.svg';
//     imageMode('dark');
// }

// // lignt Mode styles funtion
// function lightMode(){
//     nav.style.backgroundColor = 'rgb(255 255 255 / 50%)';
//     textBox.style.backgroundColor='rgb(0 0 0 / 50%)';
//     toggleIcon.children[0].textContent='Light Mode';
//     // toggleIcon.children[1].classList.remove('fa-moon');
//     // toggleIcon.children[1].classList.add('fa-sun');
//     toggleIcon.children[1].classList.replace('fa-moon','fa-sun');
// // image1.src='img/undraw_proud_coder_light.svg';
// //     image2.src='img/undraw_feeling_proud_light.svg';
// //     image3.src='img/undraw_conceptual_idea_light.svg';
//    imageMode('light');
// }
// switch theme dynamically 
function switchTheme(event){
    if(event.target.checked){
        document.documentElement.setAttribute('data-theme','dark');
        localStorage.setItem('theme','dark')
        toggleDarkLightMode(true);
    }else{
        document.documentElement.setAttribute('data-theme','light');
        localStorage.setItem('theme','light')
       toggleDarkLightMode(true);
    }
}
// event listner 

toggleSwitch.addEventListener('change',switchTheme);

// check local storage for theme
const currentTheme = localStorage.getItem('theme');
if (currentTheme){
document.documentElement.setAttribute('data-theme',currentTheme);
if (currentTheme==='dark'){
    toggleSwitch.checked=true;
    toggleDarkLightMode(false);
}
}
