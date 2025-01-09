const homePage = document.getElementById("home-page");
const editorPage = document.getElementById("editor-page");
const catalogRows = document.getElementsByClassName("catalog-row");

let onHomePage = true;

editorPage.style.display = "none";

// let selectedTemplate = "";

// function selectTemplate(selectedTemplate) {
//     if (onHomePage == true) {
//         //hide the landing page, move the template selector to the top of the page and load the template editor
//         onHomePage = false;
//         homePage.style.opacity = 0;
//         document.getElementsByClassName("editor-preview")[0].src = this.selectedTemplate;
//         setTimeout(() => {
//             homePage.style.display = "none";
//             editorPage.style.display = "block";
//             editorPage.style.opacity = 1;
//         }, 396);
//         //load template into editor
//     } 
//     else {
//         //load the template into the editor and carry on as usual
//     }
// }


const templates = ["templates/template_1.png"];

for(let i = 0; i < catalogRows.length; i++){
    templates.forEach(template => {
        const catalogItem = document.createElement("img");
        catalogItem.className = "catalog-item";
        catalogItem.src = template;
        catalogItem.addEventListener("click", e => {
            if (onHomePage == true) {
                //hide the landing page, move the template selector to the top of the page and load the template editor
                onHomePage = false;
                homePage.style.opacity = 0;
                document.getElementsByClassName("editor-preview")[0].src = template;
                setTimeout(() => {
                    homePage.style.display = "none";
                    editorPage.style.display = "block";
                    editorPage.style.opacity = 1;
                }, 396);
                //load template into editor
            } 
            else {
                //load the template into the editor and carry on as usual
            }
        });
        catalogRows[i].append(catalogItem);
    });
}

const greetingsInput = document.getElementById("greeting");
const messageInput = document.getElementById("message");
const closerInput = document.getElementById("closer");
const inputFields = [greetingsInput, messageInput, closerInput];

inputFields.forEach(inputField => {
    inputField.addEventListener("input", e => {
        const previewText = document.getElementById("editor-preview-content-".concat(inputField.id));
        if(inputField.id == "message"){
            if(inputField.value.length >= 32){
                console.log("Test");
                previewText.innerHTML = inputField.value.concat("<br>");
            }
        }
        previewText.innerHTML = inputField.value;
    })
});

//Gebruiker waarschuwen als ze javascript blokkeren?