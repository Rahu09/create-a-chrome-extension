let myLead = []
const inputBtn = document.getElementById("input-btn")
const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
const deleteBtn = document.getElementById("delete-btn")
const tabBtn = document.getElementById("tab-btn")

if (leadsFromLocalStorage) {
    myLead = leadsFromLocalStorage
    render(myLead)
}
function render(lead){
    let list = ""
    for (let i = 0; i < lead.length; i++) {
        list += `
            <li>
                <a target="_blank" href="${lead[i]}">
                    ${lead[i]}
                </a>
            </li>
        `
    }
    ulEl.innerHTML = list
}
deleteBtn.addEventListener("dblclick", function () {
    localStorage.clear()
    myLead = []
    ulEl.innerHTML = ""
})
inputBtn.addEventListener("click", function() {
    myLead.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLead))
    render(myLead)
})

tabBtn.addEventListener("click", function(){
    chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
        console.log(tabs[0].url);
        myLead.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLead))
        render(myLead)
    });
})