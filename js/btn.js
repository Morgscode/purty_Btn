let pageBtn = document.querySelector('.button-hover__container a');
let clickBtn = document.querySelector('.button-click__container a');
 

pageBtn.addEventListener('mouseover', (e)=> {
    e.target.innerHTML="click";
    
    });

pageBtn.addEventListener('mouseleave', ()=> {
    pageBtn.innerHTML="hover";
    pageBtn.style=`box-shadow: none;`;


});

clickBtn.addEventListener('mouseover', (e)=> {
    e.target.innerHTML="click";
    
    });

clickBtn.addEventListener('mouseleave', (e)=> {
    clickBtn.innerHTML="hover";
    clickBtn.style=`box-shadow: none;`;


});

pageBtn.addEventListener('click', (e) => {
    e.preventDefault;
    let int = Math.floor(Math.random() * 10);
    const btnColors = ["#9b59b6", "#f1c40f", "#ecf0f1", "#2ecc71", "#e74c3c", "#ff9ff3", "#00d2d3", "#5f27cd", "#48dbfb", "#B33771"];
    pageBtn.style=`box-shadow: .1rem 0px 4.5rem ${btnColors[int]}`; 

});

