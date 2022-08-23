/*-------------------------- loading --------------------------*/

let loader = document.querySelector(".load");
setTimeout(function(){loader.style.display = 'none';}, 5000);

/*-------------------------- up --------------------------*/

let span = document.querySelector(".up");

window.onscroll = function(){
	if(this.scrollY >= 610){span.classList.add("show");}
	else{span.classList.remove("show");}}

span.onclick = function(){window.scrollTo({top: 0,  behavior: "smooth"})}

/*-------------------------- chair --------------------------*/

document.querySelectorAll('.chair .boxs .card .secon').forEach(box => {
	box.onclick = () => {
		document.querySelector('.chair .show1').style.display = 'block';}})

document.querySelector('.chair .show1 .pop .btn').onclick = () => {
	document.querySelector('.chair .show1').style.display = 'none';}

/*------------- show2 ---------------*/
	
document.querySelectorAll('.chair .boxs .card .primary').forEach(box => {
	box.onclick = () => {
		document.querySelector('.chair .show2').style.display = 'block';}})

document.querySelector('.chair .show2 form .x').onclick = () => {
	document.querySelector('.chair .show2').style.display = 'none';}

document.querySelector('.chair .show2 form .btn').onclick = () => {
	document.querySelector('.chair .show2').style.display = 'none';}

/*------------- show3 ---------------*/
	
document.querySelectorAll('.chair .show2 form .btn').forEach(box => {
	box.onclick = () => {
		document.querySelector('.chair .show3').style.display = 'block';}})

document.querySelector('.chair .show3 .pop .btn').onclick = () => {
	document.querySelector('.chair .show3').style.display = 'none';}

/*-------------------------- living --------------------------*/

let preveiwContainer = document.querySelector('.products-preview');
let previewBox = preveiwContainer.querySelectorAll('.preview');

document.querySelectorAll('.living .boxs .box').forEach(product =>{
  product.onclick = () =>{
    preveiwContainer.style.display = 'flex';
    let name = product.getAttribute('data-name');
	  
    previewBox.forEach(preview =>{
      let target = preview.getAttribute('data-target');
      if(name === target){preview.classList.add('active');}})
}})

previewBox.forEach(close =>{
  close.querySelector('.fa-times').onclick = () =>{
    close.classList.remove('active');
    preveiwContainer.style.display = 'none';}});

/*------------- show2 ---------------*/
	
document.querySelectorAll('.products-preview  .preview .buttons .buy').forEach(box => {
	box.onclick = () => {
		document.querySelector('.living .show2').style.display = 'block';}})

document.querySelector('.living .show2 form .x').onclick = () => {
	document.querySelector('.living .show2').style.display = 'none';}

document.querySelector('.living .show2 form .btn').onclick = () => {
	document.querySelector('.living .show2').style.display = 'none';}

/*------------- show3 ---------------*/
	
document.querySelectorAll('.living .show2 form .btn').forEach(box => {
	box.onclick = () => {
		document.querySelector('.living .show3').style.display = 'block';}})

document.querySelector('.living .show3 .pop .btn').onclick = () => {
	document.querySelector('.living .show3').style.display = 'none';}

/*-------------------------- bed --------------------------*/

document.querySelectorAll('.bed .boxs .box img').forEach(box => {
	box.onclick = () => {
		document.querySelector('.bed .show').style.display = 'block';
		document.querySelector('.bed .show img').src = box.getAttribute('src')}})
	
document.querySelector('.bed .show span').onclick = () => {
	document.querySelector('.bed .show').style.display = 'none';}

/*-------------------------- deal --------------------------*/

document.querySelector('.deal .row .content .btn').onclick = () => {
		document.querySelector('.deal .show1').style.display = 'block';}

document.querySelector('.deal .show1 .x').onclick = () => {
	document.querySelector('.deal .show1').style.display = 'none';}

/*------------- show2 ---------------*/
	
document.querySelectorAll('.deal .boxs .card .primary').forEach(box => {
	box.onclick = () => {
		document.querySelector('.deal .show2').style.display = 'block';}})

document.querySelector('.deal .show2 form .x').onclick = () => {
	document.querySelector('.deal .show2').style.display = 'none';}

document.querySelector('.deal .show2 form .btn').onclick = () => {
	document.querySelector('.deal .show2').style.display = 'none';}

/*------------- show3 ---------------*/
	
document.querySelectorAll('.deal .show2 form .btn').forEach(box => {
	box.onclick = () => {
		document.querySelector('.deal .show3').style.display = 'block';}})

document.querySelector('.deal .show3 .pop .btn').onclick = () => {
	document.querySelector('.deal .show3').style.display = 'none';}

/*-------------------------- contact --------------------------*/

document.querySelector('.contact .row form .btn').onclick = () => {
		document.querySelector('.contact .show1').style.display = 'block';}

document.querySelector('.contact .show1 .pop .btn').onclick = () => {
	document.querySelector('.contact .show1').style.display = 'none';}
