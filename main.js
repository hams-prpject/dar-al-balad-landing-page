const goUpEl = document.querySelector(".goUp");
const headerEl = document.querySelector("header");
const menuBtn = document.querySelector(".menuBtn");
const menuList = document.querySelector(".menuListSm");
// show/hide mune sm
menuBtn.onclick = _ => {
    menuList.classList.toggle('show')
}

// ------ when scroll in the page 
//  1- add effect header  
//  2- show /hide up btn
//  -----------------------------

onscroll = _ => {
    if (scrollY > 200) {
        goUpEl.classList.add('show');
        headerEl.classList.add("scroll");

    } else {
        goUpEl.classList.remove('show');
        headerEl.classList.remove("scroll");

    }


}

// ------ scroll whene press btn -----
/*
goUpEl.onclick = _ => {
    window.scrollTo(0, 0);
    window.scrollTo(
        {
            top: 200,
            behavior: "smooth"
        }
    );
    scrollBy(0, -200)
}
 */



// slide show for main section
const nextBtn = document.querySelector("main .next")
const prevBtn = document.querySelector("main .prev")
const imgAll = document.querySelectorAll('main img')
let indexImg = 0
nextBtn.onclick = _ => {
    removeClassShow()
    if (indexImg == imgAll.length - 1) {
        indexImg = 0
    } else {
        indexImg++
    }
    imgAll[indexImg].classList.add("show")
}
prevBtn.onclick = _ => {
    removeClassShow()
    if (indexImg == 0) {
        indexImg = imgAll.length - 1
    } else {
        indexImg--
    }
    imgAll[indexImg].classList.add("show")
}

function removeClassShow() {
    imgAll.forEach(img => img.classList.remove("show"))
}

window.setInterval(_ => {
    removeClassShow()
    if (indexImg == imgAll.length - 1) {
        indexImg = 0
    } else {
        indexImg++
    }
    imgAll[indexImg].classList.add("show")
}, 3000)