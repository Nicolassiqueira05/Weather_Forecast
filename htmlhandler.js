let custom = document.getElementById("custom")
let auto = document.getElementById("auto")

function block(id){
    switch (id) {
        case "custom":
            
            break;
    
        case "auto":

            break;    

        default:
            break;
    }
}

custom.addEventListener('change', (e) => {e.target.checked ? auto.checked = false : console.log("")})
auto.addEventListener('change', (e) => {e.target.checked ? custom.checked = false : console.log("")})

let search = document.getElementById("search")

search.addEventListener('click', (e) => {
    if(custom.checked)
    {
        
    }
    else if(auto.checked)
    {

    }
    else
    {
        window.alert("You must choose a location method")
    }

})