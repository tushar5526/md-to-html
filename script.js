const preview= document.querySelector(".html-data");
const preview_md= document.querySelector(".preview_md");
const active_link= document.querySelector(".html_links");

const html_css= document.querySelector(".html_css");

const  card_text_full= document.querySelector(".card-text-full");
function preview_html(){
    if(preview.style.display==="none")
    {
        preview_md.style.display="none";
        preview.style.display="block";
    }
    else{
        preview_md.style.display="block";
        preview.style.display="none";
    }
}
function active_class3(){
    card_text_full.style.display="none";
    html_css.style.display="block";
}
function active_class(){
    card_text_full.style.display="block";
    html_css.style.display="none";
    
}


 

