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