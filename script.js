let d = document.getElementsByClassName('menu');
// let s = document.getElementsById('ms');


console.log(d[0])
d[0].addEventListener('click',()=>{
    let s = document.getElementsByClassName('appear');
    s[0].classList.remove('disappear')
})

let ds = document.getElementById('close')

ds.addEventListener('click',()=>{

    let s = document.getElementsByClassName('appear');
    s[0].classList.add('disappear')

})


// d.addEventListener('click', () =>{
//    let s = document.getElementsByClassName('appear');

//    s.classList.add('disappear')
// })

