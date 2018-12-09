const canvas = document.querySelector("canvas");

canvas.width = innerWidth;
canvas.height = innerHeight;

let c = canvas.getContext("2d");

// c.beginPath();
// c.arc(300,300,30,0,Math.PI *2,false);
// c.moveTo(300,300);
// c.lineTo(500,300);
// c.fill();
// c.stroke();


// c.beginPath();
// c.arc(500,300,30,0,Math.PI *2,false);
// c.fill();
// c.stroke();

// let buble = [];
// let balls = 100;
// let cir;
// for (let i = 0; i < balls; i ++){
//     buble.push({
//         x:Math.random() * innerWidth,
//         y:Math.random() * innerHeight,
//         vx:(Math.random() * 0.5) *2,
//         vy:(Math.random() * 0.5) *2
//     })
// }


// function draw(){

//     for( let i = 0; i < buble.length; i ++){
//         let cir = buble[i];
//         c.beginPath();
//         c.arc(cir.x,cir.y,10,0,Math.PI * 2,false);
//         c.stroke();
//         c.fill();
//     }

//     c.beginPath();
//     for ( let i = 0; i < buble.length; i++){
//         let line1 = buble[i];
//         c.moveTo(line1.x,line1.y);
//         for ( let j = 0; j < buble.length; j++){
//             var line2 = buble[j];
//             if( distance(line1,line2) <150) {
//                 c.lineTo(line2.x,line2.y);
//             } 
//         }
//     }
//     c.stroke();
// }





// function distance( point1, point2 ){
//     var xs = 0;
//     var ys = 0;
   
//     xs = point2.x - point1.x;
    
//     xs = xs * xs;
//    console.log("this is xs",xs);
   
//     ys = point2.y - point1.y;
    
//     ys = ys * ys;
//    console.log("this is ys",ys);
//     return Math.sqrt( xs + ys );
//   }

// function animation(){
    
//     requestAnimationFrame(animation);
//     c.clearRect(0,0,innerHeight,innerWidth);
//     draw();
//     update();
// }
// animation();





// class Buble{
//    constructor(x,y,dx,dy){
//        this.x = x;
//        this.y = y;
//        this.dx = dx;
//        this.dy = dy;
//    }
//     draw(){
//             // console.log(this.x);
//             c.beginPath();
//             c.arc(this.x, this.y,10,0, Math.PI*2,false);
//             c.stroke();
//             // c.fill();

//             c.beginPath();
//             c.moveTo(this.x,this.y);
//             c.lineTo(this.x,this.y);
//             c.stroke();


//     }
//     update(){
//         this.x += this.dx;
//         this.y += this.dy;
//         this.draw();
//         // console.log("buble class is this.x :::::",this.x);
//     }
// }
// let buble = [];

// for (let i = 0; i < 100; i ++){
//     // console.log(bubles[i].x);
//     let x = Math.random() * innerWidth;
//     let y = Math.random() * innerHeight;
//     let dx = (Math.random() - 0.5) * 2;
//     let dy = (Math.random() - 0.5) * 2;

//     buble.push(new Buble(x,y,dx,dy));
// }


// function animation(){
//     requestAnimationFrame(animation);
//     c.clearRect(0,0,canvas.width,canvas.height);


//     for ( let i = 0; i < buble.length;i++){
//         buble[i].update();
//         // console.log(buble[i]);
//     }
// }
// animation();

let mouse ={
    x:0,
    y:0
}
window.addEventListener("mousemove",function(e){
    mouse.x = e.x;
    mouse.y = e.y;
});

let bubles = [];
let balls = 400;

for (let i = 0; i < balls; i ++){
    bubles.push({
        x:Math.random() * innerWidth,
        y:Math.random() * innerHeight,
        radius:Math.floor(Math.random() * 5),
        dx:(Math.random() - 0.5) *2,
        dy:(Math.random() - 0.5) *2
    })
}


function draw(){

    for ( let i = 0; i < bubles.length; i++){
        let buble = bubles[i];
        c.beginPath();
        c.arc(buble.x,buble.y,buble.radius,0,Math.PI * 2, false);
        c.fill();
        c.fillStyle ="#fff";
        c.stroke();
    }
    c.beginPath();
    
    for(let i = 0; i < bubles.length;i++){
        let l1 = bubles[i];
        c.moveTo(l1.x,l1.y);
        

        for( let j = 0; j < bubles.length;j++){
            let l2 = bubles[j];
            if( distance(l1,l2) <70){
                c.lineTo(l2.x,l2.y);
            }
        }
        if( distance(mouse,l1) <70){
            c.lineTo(mouse.x,mouse.y);
        }
        
    }
    c.lineWidth = 0.05;
    c.strokeStyle ="#fff";
    c.stroke();
}


function update(){
    for ( let i = 0; i < bubles.length;i++){
        let s = bubles[i];

        if(s.x + s.radius < 0 || s.x + s.radius > canvas.width){
            s.dx = -s.dx;
        }
        if(s.y + s.radius < 0 || s.y + s.radius > canvas.height){
            s.dy = -s.dy;
        }
        s.x += s.dx;
        s.y +=s.dy;
    }
    draw();
}

function distance( point1, point2 ){
        var xs = 0;
        var ys = 0;

        xs = point2.x - point1.x;
        xs = xs * xs;
        ys = point2.y - point1.y;
        ys = ys * ys;


        return Math.sqrt( xs + ys );
}
    

function animation(){
        requestAnimationFrame(animation);
        c.clearRect(0,0,canvas.width,canvas.height);
        update();
}
animation();



