

let quote=document.querySelector(".more-quote")
let button=document.querySelector(".read-more")

let ishide=true;
try{
quote.style.display="none"
}
catch(e){
    console.log("Dom not found use multiple js")
}
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



const nav=document.querySelector(".navbar-container")
fetch("/scripts/navbar.html") //using two .. so that blog(john-wooden.html) can access you can use as much .. as you like.
.then(res=>res.text())
.then(data=>{


    let parser= new DOMParser();
    let doc= parser.parseFromString(data,"text/html")

    var path = window.location.pathname;
    var page = path.split("/").slice(1,2).toString();

    if(page==="blog")
    {
        let blog=doc.getElementById('inner-blog')
        // let blog=doc.getElementById('blog')
        blog.style.textDecoration='line-through' 
        blog.style.color='#8f00f1'
    }
    else if(page==="resume")
    {
        let resume=doc.getElementById('inner-nav') 
        resume.style.textDecoration='line-through'
        resume.style.color='#8f00f1'
    }
    else{
        let logo=doc.getElementById('inner-home')
        logo.style.textDecoration='line-through'
        logo.style.color='#8f00f1'

    }

    let body=doc.getElementsByTagName('body')[0].outerHTML
    nav.innerHTML+=body
})


