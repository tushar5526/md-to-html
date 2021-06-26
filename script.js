const preview = document.querySelector(".html-data");
const preview_md = document.querySelector(".preview_md");
const active_link = document.querySelector(".html_links");
const html_css = document.querySelector(".html_css");
const card_text_full = document.querySelector(".card-text-full");

const mdContent = document.querySelector('.md-text');
const htmlContent = document.querySelector('.html-text');

function preview_html() {

    if (preview_md.style.display === "block") {
        preview_md.style.display = "none";
        preview.style.display = "block";
    } else {
        preview_md.style.display = "block";
        preview.style.display = "none";
    }
}

function active_class3() {
    card_text_full.style.display = "none";
    html_css.style.display = "block";
}

function active_class() {
    card_text_full.style.display = "block";
    html_css.style.display = "none";

}

function fetchRawHTML() {

    fetch('https://api.github.com/markdown/raw', {
            method: 'POST',
            headers: {
                'Accept': 'application/vnd.github.v3+json',
                "Content-type": "text/plain; charset=UTF-8"
            },
            body: mdContent.value
        })
        .then(response => response.text())
        .then(data => {
            htmlContent.value = data;
            // console.log('Success:', data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}