document.addEventListener("DOMContentLoaded", function(){
const canvas = document.getElementById('canvas');
canvas.width = 500;
canvas.height = 500;
ctx = canvas.getContext('2D');
ctx.fillStyle = 'red';
ctx.fillRect(0,0, 500, 500);

});
