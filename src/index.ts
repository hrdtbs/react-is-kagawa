;(() => {
    const kill = () => {
        alert("日本ではこのページを見ることができません")
        document.body.innerHTML = ""
        document.head.innerHTML = ""
    }
    if (navigator.language !== "ja") return
    navigator.geolocation.getCurrentPosition(
        position => {
            const lat = position.coords.latitude
            const lng = position.coords.longitude
            if ((30.591 <= lat && lat <= 45.3122) || (129.339 <= lng && lng <= 145.49)) {
                kill()
            }
        },
        () => {
            kill()
        }
    )
})()
