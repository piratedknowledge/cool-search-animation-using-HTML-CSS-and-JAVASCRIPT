window.onload = () => {
    document.querySelector(".search-icon")
    .addEventListener("click",toggleSearchbar);
}

function toggleSearchbar(e){
    let sb = 
document.querySelector(".search-bar");
    if(sb.getAttribute("data-state") == "closed")
{
        sb.setAttribute("data-state","")
    }else {
        sb.setAttribute("data-state","closed");
    }
}

