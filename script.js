const preview = document.querySelector(".html-data");
const preview_md = document.querySelector(".preview_md");
const html_css = document.querySelector(".html_css");
const card_text_full = document.querySelector(".card-text-full");
const html_preview_links = document.querySelectorAll('.html-preview-links');

const md_content = document.querySelector('.md-text');
const html_content = document.querySelector('.html-text');

function preview_html() {

    if (preview_md.style.display === "block") {
        preview_md.style.display = "none";
        preview.style.display = "block";
    } else {
        preview_md.style.display = "block";
        preview.style.display = "none";
    }
}

function active_class() {
    html_preview_links.forEach(element => {
        element.classList.remove('active')
    })
    this.classList.add('active');
}

function fetchRawHTML() {

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