const inputBtn = document.getElementById("input-btn")
let inputEl = document.getElementById("input-el")
let myLead = ["www.awsomelead.com","www.lead2.com", "www.greatelead.com"]
let ulEl = document.getElementById("ul-el")

inputBtn.addEventListener("click", function() {
    myLead.push(inputEl.value)
})

let list = ""
for (let i = 0; i < myLeads.length; i++) {
    list += "<li>" + myLeads[i] + "</li>"
}
ulEl.innerHTML = list