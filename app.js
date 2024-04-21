$btnsLanguages = document.querySelectorAll(".btn-languages")
$boxContent = document.getElementById("box-content")

$btnsLanguages.forEach($btnLanguages => {
    $btnLanguages.addEventListener("click", () => {
        changeContent($btnLanguages.textContent)
    })
});

async function changeContent(language) {
    try {
        const response = await fetch(`http://localhost:3000/lenguajes_docs/${language}.md`)
        const content = await response.text()
        $boxContent.innerHTML = marked.parse(content)
    } catch (error) {
        alert("ocurrio un error, lo sentimos")
        console.error(error)
    }
}

fetch(`http://localhost:3000/lenguajes_docs/HTML.md`)
    .then(content => content.text())
    .then(content => $boxContent.innerHTML = marked.parse(content))

