const raw_html = document.querySelector(".raw-html-data");
const preview_html = document.querySelector(".preview-html");

// get all the links
const html_preview_links = document.querySelectorAll('.html-preview-links');
const card_text_full = document.querySelector(".card-text-full");
const md_content = document.querySelector('.md-text');
const html_content = document.querySelector('.html-text');
const css_content = document.querySelector('.css-text');
const html_css = document.querySelector('.html-css');
// get all the input text are
const content_textarea = document.querySelectorAll(".content")

html_preview_links.forEach(element =>{
    element.addEventListener('click', active_class);
})

function toggle_view() {

    if (preview_html.style.display === "block") {
        preview_html.style.display = "none";
        raw_html.style.display = "block";
    } else {
        preview_html.style.display = "block";
        raw_html.style.display = "none";
    }
}

function active_class() {
    html_preview_links.forEach(element => {
        element.classList.remove('active');
    })
    console.log(this)

    this.classList.add('active');

    content_textarea.forEach(element => element.style.display = "none");
    console.log(this.textContent);

    switch (this.textContent) {
        case "HTML":
            html_content.style.display = "block";
            break;
        case "CSS":
            css_content.style.display = "block";
            break;
        default:
            html_css.style.display = "block";
    }
}

function fetch_raw_html() {

    fetch('https://api.github.com/markdown/raw', {
            method: 'POST',
            headers: {
                'Accept': 'application/vnd.github.v3+json',
                "Content-type": "text/plain; charset=UTF-8"
            },
            body: md_content.value
        })
        .then(response => response.text())
        .then(data => {
            html_content.value = data;
            // console.log('Success:', data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}