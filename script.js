const nav=document.querySelector(".navbar-container")
fetch("/navbar.html")
.then(res=>res.text())
.then(data=>{
    nav.innerHTML+=data
})
const quote=document.querySelector(".more-quote")
const button=document.querySelector(".read-more")

quote.style.display="none"
ishide=true;

function togglequote() {
    if(ishide===true) {
        quote.style.display="block"
        ishide=false;
        button.innerHTML="Show Less..."
    }
    else{
        quote.style.display="none"
        ishide=true;
    }
}