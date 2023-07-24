
"use strict";

const yubor = document.getElementById("root");

// setTimeout((e) => {
//     alert('salom');
// },2000);

const sahifa = document.createElement("div");
const ichki = document.createElement("div");
function bolim() {
  sahifa.style.width = "100%";
  sahifa.style.height = "690px";
  sahifa.style.border = "1px solid";
  sahifa.style.backgroundColor = "rgba(255, 255, 255, 0.585)";
  sahifa.classList.add("sahifa1_img");
  yubor.appendChild(sahifa);
}
bolim();

function bolim2() {
  ichki.style.width = "600px";
  ichki.style.height = "660px";
  ichki.style.border = "0px";
  ichki.style.marginTop = "1px";
  ichki.style.marginLeft = "748px";
  ichki.style.backgroundColor = "rgba(49, 79, 79, 0.582)";
  sahifa.appendChild(ichki);
}
bolim2();
function kattaYozuv() {
  ichki.innerHTML = `<h1 id="spk">Sputnik Bu Tarraqiyot</h1> </br>
 <h3>Yaratilishi</h3>
<p>Lorem ipsum dolor sit amet consectetur
adipisicing elit. Voluptates, quo. Temporibus
 sit debitis sapiente, repudiandae sunt saepe!</p><hr >
 <p>  Perspiciatis inventore nam recusandae laborum
fugit laboriosam reiciendis itaque repellat iste
 facere voluptas, odit ex libero magnam vitae 
 obcaecati placeat expedita quibusdam veritatis!</p><hr>
 <p>  Adipisci fugiat dolore a veritatis quo fugit iusto,
   recusandae, quibusdam exercitationem odit ullam 
   debitis eos error ea natus voluptates voluptatem,
    sint possimus quisquam facilis doloribus eveniet.</p><hr>
    <p> Deleniti amet fugiat modi quo nobis eos quod esse
      magnam asperiores dolor ipsa ut excepturi vitae
       quasi assumenda, sequi non reiciendis! Rem similique odio,
    accusantium earum voluptate iusto sunt praesentium 
    impedit maiores mollitia libero.</p>
                     `;
}
kattaYozuv();
