const block = document.querySelector(".block");
const h1 = document.querySelector(".h1");
const in1 = document.querySelector(".in1");
const in2 = document.querySelector(".in2");
const in3 = document.querySelector(".in3");
const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
const container = document.querySelector(".container");
const create = document.querySelector(".create");
const box = document.querySelector(".blocks");
const x = document.querySelector(".close");

btn1.addEventListener("click", () => {
  addcontact();
});

function addcontact() {
  if (
    in1.value.trim() !== "" &&
    in2.value.trim() !== "" &&
    in3.value.trim() !== ""
  ) {
    const boxes = document.createElement("div");
    boxes.classList.add("boxes");
    box.appendChild(boxes);
    boxes.innerHTML += `
        <div class="contact">
        <img src="${in3.value}" alt="">
        <div class="names">
            <h4><span>name:</span>${in1.value}</h4>
            <h4><span>email:</span>${in2.value}</h4>
        </div>
        <button class="del">delete</button>
        </div>
        
              `;

    const del = boxes.querySelector(".del");
    del.addEventListener("click", () => {
        box.removeChild(boxes);
    });

    in1.style.border = "";
    in2.style.border = "";
    in3.style.border = "";
  } else {
    in1.style.border = "1px solid red";
    in2.style.border = "1px solid red";
    in3.style.border = "1px solid red";
  }
}

btn2.addEventListener("click", () => {
  create.style.transform = 'translate(0px)';
});

x.addEventListener("click", () => {
    create.style.transform = 'translate(1000px)';
});
