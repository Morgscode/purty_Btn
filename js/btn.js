let pageBtn = document.querySelector('.button-test__container a');
let btnContainer = document.querySelector('.button-test__container');  

pageBtn.addEventListener('mouseover', (e)=> {
e.target.innerHTML="click";
 

});

pageBtn.addEventListener('mouseleave', ()=> {
pageBtn.innerHTML="hover";


});

pageBtn.addEventListener('click', (e) => {
e.preventDefault;
let int = Math.floor(Math.random() * 10);
const btnColors = ["#9b59b6", "#f1c40f", "#ecf0f1", "#2ecc71", "#e74c3c", "#ff9ff3", "#00d2d3", "#5f27cd", "#48dbfb", "#B33771"];

pageBtn.style=`box-shadow: .1rem 0px 3rem ${btnColors[int]}`; 


});

