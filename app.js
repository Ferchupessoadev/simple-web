import { marked } from "https://cdn.jsdelivr.net/npm/marked/lib/marked.esm.js"

let $btnsLanguages = document.querySelectorAll(".btn-languages")
const $boxContent = document.getElementById("box-content")

$btnsLanguages.forEach($btnLanguages => {
    $btnLanguages.addEventListener("click", () => {
        changeContent($btnLanguages.textContent)
    })
});

async function changeContent(language) {
    try {
        const response = await fetch(`https://Ferchupessoadev.github.io/simple-web/lenguajes_docs/${language}.md`)
        const content = await response.text()
        $boxContent.innerHTML = marked.parse(content)
    } catch (error) {
        alert("ocurrio un error, lo sentimos")
        console.error(error)
    }
}

fetch(`https://Ferchupessoadev.github.io/simple-web/lenguajes_docs/HTML.md`)
    .then(content => content.text())
    .then(content => $boxContent.innerHTML = marked.parse(content))

