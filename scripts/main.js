const path=window.location.pathname;
const page=path.split("/").slice(-1).pop()

if ( page==="john-wooden.html") {
    //The code below unitl fetch will toggle quote located in john wooden blog.
    let button=document.getElementById('togglebutton')
    let downbutton=document.getElementById('down-button')
    let quotes=document.getElementById('additionalquotes')

    button.addEventListener("click",(event)=>{
        if(quotes.style.display==="none") {
            quotes.style.display="block"
            button.style.display="none"
            downbutton.style.display="block"
        }
    })

    downbutton.addEventListener("click",(event)=>{
        quotes.style.display="none"
        downbutton.style.display="none"
        button.style.display="block"
    })

    //The code below will show READ THIS NEXT for john wooden blog.

    fetch("/scripts/readmore.min.html")
    .then(res=>res.text())
    .then(data=>{
        let parser=new DOMParser()
        let doc=parser.parseFromString(data,"text/html")
        let content=doc.getElementById("read-more")
        content.children[0].style.display="none"

        const container=document.getElementById('next-read').appendChild(content)
    })
}

if ( page==="ntc.html") {
    //The code below will show READ THIS NEXT for Ntc analysis blog.
    fetch("/scripts/readmore.min.html")
    .then(res=>res.text())
    .then(data=>{
        let parser=new DOMParser()
        let doc=parser.parseFromString(data,"text/html")
        let content=doc.getElementById("read-more")
        content.children[1].style.display="none"
        const container=document.getElementById('next-read').appendChild(content)
    })
}


//The code below is used for navbar.

const nav=document.querySelector(".navbar-container")
fetch("/scripts/navbar.min.html") 
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


