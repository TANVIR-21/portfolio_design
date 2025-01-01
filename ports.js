let toggle = document.querySelector('#dark');
let body = document.querySelector('body');

toggle.addEventListener('click', function(){
    this.classList.toggle('bi-moon');
    if(this.classList.toggle('bi-brightness-high-fill')){
        body.style.background ='white';
        body.style.color = 'black';
        body.style.transition = '2s';
    }
    else{
        body.style.background ='black';
        body.style.color = 'white';
        body.style.transition = '2s';
    }
})


let typed = new Typed(".auto-type",{
   strings : ["Student", "Web Designer", "Fontend Developer"],
   typeSpeed : 150,
   backSpeed : 150,
   loop : true
})

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
        else {
            entry.target.classList.remove('show');
        }
    });
});



const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));