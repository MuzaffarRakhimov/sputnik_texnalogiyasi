"use strict";

const jonat = document.getElementById("root");
const nav = document.createElement("div"); 
const blog = document.createElement("div");
const bolim = document.createElement("div");

///////////////////////////////// navbar ///////////////////////////////////////////
function navbar() {
  nav.style.width = "100%";
  nav.style.height = "80px";
  nav.style.border = "1px solid";
  nav.classList.add("box2");
  nav.style.background = "darkslateblue";
  nav.innerHTML = `<button class='btn'  > <a href='/index.html' target="_self" class='aa'>Home</a></button>
                    <button class='btn' onmouseover="my(180)" onmouseout='out()'> <a href='#' class='aa'>home</a></button>
                    <button class='btn'onmouseover="my(350)" onmouseout='out()'> <a href='#' class='aa'>home</a></button>
                    <button class='btn' onmouseover="my(520)" onmouseout='out()'> <a href='#' class='aa'>home</a></button>
                    <button class='btn' onmouseover="my(680)" onmouseout='out()'> <a href='#' class='aa'>home</a></button>
                    <button class='btn' onmouseover="my(850)" onmouseout='out()'> <a href='#' class='aa'>home</a></button>
                    `;
  jonat.appendChild(nav);
}
navbar();
//---------------------------------------------------------
function my(may) {
  blog.style.width = "180px";
  blog.style.height = "200px";
  blog.style.marginLeft = `${may}px`;
  blog.style.display = "block";
  blog.style.position = "absolute";
  blog.style.backgroundColor = "aqua";
  blog.style.position= "fixed";
  blog.style.zIndex = "10";
  blog.classList.add("box");
  if (may == 20) {
  } else if (may == 180) {
    blog.innerHTML = `<ul id='ul' onclick='ul("iframe","5")'>home2</ul>
    <ul id='ul' onclick='ul("iframe","6")'>home2</ul>
    <ul id='ul' onclick='ul("iframe","7")'>home2</ul>
    <ul id='ul' onclick='ul("iframe","8")'>home2</ul>`;
  } else if (may == 350) {
    blog.innerHTML = `<ul id='ul' onclick='ul("iframe","9")'>home3</ul>
    <ul id='ul' onclick='ul("iframe","10")'>home3</ul>
    <ul id='ul' onclick='ul("iframe","11")'>home3</ul>
    <ul id='ul' onclick='ul("iframe","12")'>home3</ul>`;
  } else if (may == 520) {
    blog.innerHTML = `<ul id='ul' onclick='ul("iframe","13")'>home4</ul>
    <ul id='ul' onclick='ul("iframe","14")'>home4</ul>
    <ul id='ul' onclick='ul("iframe","15")'>home4</ul>
    <ul id='ul' onclick='ul("iframe","16")'>home4</ul>`;
  } else if (may == 680) {
    blog.innerHTML = `<ul id='ul' onclick='ul("iframe","17")'>home5</ul>
    <ul id='ul' onclick='ul("iframe","18")'>home5</ul>
    <ul id='ul' onclick='ul("iframe","19")'>home5</ul>
    <ul id='ul' onclick='ul("iframe","20")'>home5</ul>`;
  } else if (may == 850) {
    blog.innerHTML = `<ul id='ul' onclick='ul("iframe","21")'>home6</ul>
    <ul id='ul' onclick='ul("iframe","22")'>home6</ul>
    <ul id='ul' onclick='ul("iframe","23")'>home6</ul>
    <ul id='ul' onclick='ul("iframe","24")'>home66</ul>`;
  } else {
    console.log(Error);
  };
  nav.appendChild(blog);
};
//-------------------------------------------------
function out() {
  blog.style.display = "none";
}

function ul(e, b) {
  bolim.innerHTML = `<${e} src='/jssahifa${b}/index.html' class='bb' style="border: none;" scrolling="no"></$>`;
}
ul();

/////////////////////////////// asosiy //////////////////////////////////////

function asosiy() {
  bolim.style.width = "100%";
  bolim.style.height = "700px";
  bolim.style.marginTop = "80px";
  bolim.style.backgroundColor = "rgba(186, 186, 210, 0.295)";
  bolim.style.border = "0px";
  bolim.style.backgroundImage="url('/image/sputnik\ 5.png') ";
  bolim.classList.add("asos");
  bolim.innerHTML = " <h1></h1>";
  jonat.appendChild(bolim);
}
asosiy();


/////////////////////////////// footer ////////////////////////////////////////////
//-

