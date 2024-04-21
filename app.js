$btnsLanguages = document.querySelectorAll(".btn-languages")
$boxContent = document.getElementById("box-content")

$btnsLanguages.forEach($btnLanguages => {
    $btnLanguages.addEventListener("click", () => {
        changeContent($btnLanguages.textContent)
    })
});

async function changeContent(language) {
    try {
        const response = await fetch(`https://ferchupessoadev.github.io/lenguajes_docs/${language}.md`)
        const content = await response.text()
        $boxContent.innerHTML = marked.parse(content)
    } catch (error) {
        alert("ocurrio un error, lo sentimos")
        console.error(error)
    }
}

fetch(`https://ferchupessoadev.github.io/lenguajes_docs/HTML.md`)
    .then(content => content.text())
    .then(content => $boxContent.innerHTML = marked.parse(content))

