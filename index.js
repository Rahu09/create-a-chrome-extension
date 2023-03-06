const inputBtn = document.getElementById("input-btn")
const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")
let myLead = []

inputBtn.addEventListener("click", function() {
    myLead.push(inputEl.value)
    inputEl.value = ""
    renderLeads()
})
function renderLeads(){
    let list = ""
    for (let i = 0; i < myLead.length; i++) {
        list += `
            <li>
                <a target="_blank" href="${myLead[i]}">
                    ${myLead[i]}
                </a>
            </li>
        `
    }
    ulEl.innerHTML = list
}