let custom = document.getElementById("custom")
let auto = document.getElementById("auto")

custom.addEventListener('change', (e) => {e.target.checked ? auto.checked = false : console.log("")})
auto.addEventListener('change', (e) => {e.target.checked ? custom.checked = false : console.log("")})