let pageBtn = document.querySelector('.button-test__container a');
let btnContainer = document.querySelector('.button-test__container');  

pageBtn.addEventListener('mouseover', (e)=> {
e.target.innerHTML="click";
 

});

pageBtn.addEventListener('mouseleave', ()=> {
pageBtn.innerHTML="hover";


});