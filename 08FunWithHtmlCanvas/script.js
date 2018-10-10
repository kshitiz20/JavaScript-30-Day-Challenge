var canvas= document.querySelector('canvas');
var ctx= canvas.getContext("2d");
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;
ctx.strokeStyle='#BADA55'
ctx.lineCap='round';
ctx.lineJoin='round';
var lastX=0;
var lastY=0;
ctx.lineWidth=100;
// ctx.globalCompositeOperation='destination-over';
var h=0;

var drawing=false;
var direction= true;
function draw(e){
    if(drawing==true){
        ctx.strokeStyle=`hsl(${h},100%,50%)`;
        ctx.beginPath();
        ctx.moveTo(lastX,lastY);
        ctx.lineTo(e.offsetX, e.offsetY);
        ctx.stroke();
        lastX=e.offsetX;
        lastY=e.offsetY;
        h++;

        if(h>=360){
            h=0;
        }
        if(ctx.lineWidth>=100||ctx.lineWidth<=1){

            direction=!direction;

        

        }

        if(direction){
            ctx.lineWidth++;
        }
        else{
            ctx.lineWidth--;
        }
    }


}

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mousedown',(e)=>{
    lastX=e.offsetX;
    lastY=e.offsetY;
    drawing=true;
});
canvas.addEventListener('mouseup',()=> drawing=false);
canvas.addEventListener('mouseout',()=> drawing=false);

