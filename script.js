let input = document.querySelectorAll(".sort");
let s_btn = document.querySelector(".submit_btn");
let form = document.querySelector(".form");
let resume = document.querySelector(".resume");
let output = document.querySelectorAll(".sort2");
let add_btn = document.querySelector(".add_btn");
let skill = document.querySelector("#skill");

s_btn.addEventListener("click", () => {
    if (input[0].value) {
        form.style.display = "none";
        resume.style.display = "block";
        putData();
    }
})

let putData = () => {
    let i = 0;
    for (data of input) {
        output[i].innerText = data.value;
        i++;
    }
}

let addSkill = () => {
    let newli = document.createElement("li");
    let ul = document.querySelector(".skl");
    newli.innerText = skill.value;
    let newSk = document.querySelector(".new_sk");
    let span = document.createElement("span");
    span.innerText = skill.value + " added";
    span.style.color="green";
    if (skill.value) {
        newSk.append(span);
        ul.append(newli);
    }
}

add_btn.addEventListener("click", () => {
    addSkill();
    skill.value = "";
})

function saveAsPDF() {
    const doc = new jsPDF();
    doc.text("Your Resume Content Here", 10, 10);
    doc.save("resume.pdf");
}

