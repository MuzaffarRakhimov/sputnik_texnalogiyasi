// "use strict";

// const yubor=document.getElementById("root");

// // setTimeout((e) => {
// //     alert('salom');
// // },2000);

// const sahifa=document.createElement('div');
// function bolim(){
//     sahifa.style.width = "100%";
//     sahifa.style.height = "600px";
//     sahifa.style.border = "1px solid";
//     sahifa.style.backgroundColor = "rgba(0, 0, 0, 0.158)";
//     yubor.appendChild(sahifa);
// }
// bolim();

// function bolim2(){
// sahifa.innerHTML='<h1 id="spk">sputnik tenalogiyasi</h1>';
// }
// bolim2();


"use strict";

const yubor=document.getElementById("root");

// setTimeout((e) => {
//     alert('salom');
// },2000);

const sahifa=document.createElement('div');
const bolim2=document.createElement('div');

function bolim(){
    sahifa.style.width = "100%";
    sahifa.style.height = "690px";
    sahifa.style.border = "1px solid";
    sahifa.style.backgroundColor = "rgba(0, 0, 0, 0.358)";
    yubor.appendChild(sahifa);
}
bolim();

function sahifa2(){
    bolim2.style.width = "100%";
    bolim2.style.height = "400px";
    bolim2.style.border = "1px solid";
    bolim2.style.marginTop = "290px";
    bolim2.style.backgroundColor = "rgba(0, 0, 0, 0.558)";
    sahifa.appendChild(bolim2);

}
sahifa2()

function mavzu(){
bolim2.innerHTML=`<h1 id="spk">Moviy Osmon Sari</h1>
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
mavzu();