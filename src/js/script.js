const searchInput = document.querySelector("#searchbar > input")
const searchButton = document.querySelector("#searchbar > button")

const lookup = { "deepl": "https://deepl.com/", "reddit": "https://reddit.com/", "maps": "https://maps.google.com/", "youtube": "https://www.youtube.com/", "jarvis": "purmerend.jarvis.bit-academy.nl/" }
const engine = "google"
const engineUrls = {
    google: "https://www.google.com/search?q=",
}

const isWebUrl = value => {
    try {
        const url = new URL(value)
        return url.protocol === "http:" || url.protocol === "https:"
    } catch {
        return false
    }
}

const getTargetUrl = value => {
    if (isWebUrl(value)) return value
    if (lookup[value]) return lookup[value]
    return engineUrls[engine] + value
}

const search = () => {
    const value = searchInput.value
    const targetUrl = getTargetUrl(value)
    window.open(targetUrl, "_self")
}

searchInput.onkeyup = event => event.key === "Enter" && search()
searchButton.onclick = search