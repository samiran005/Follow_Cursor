const circles = document.querySelectorAll('.circle');

//cordinate of cursor store
const cordes  = {
    x: 0,
    y: 0
}


//making x and y property for each circle element object
circles.forEach((circle)=>{
    circle.x = 0;
    circle.y = 0;
})

function changeCordes(){
    let x = cordes.x;
    let y = cordes.y;

    circles.forEach((circle, index)=>{

        //To set the circle attach to the cursor.
        circle.style.left = `${x - 12}px`;
        circle.style.top = `${y - 12}px`;


        //This porsition is for cashMemory mean you store previous cordinate for further position.
        circle.x = x;
        circle.y = y;
        
        //To make current circle slightly behind the cursor.
        const nextCircle = circles[index + 1] || circles[0];
        x += (nextCircle.x - x) * 0.3;
        y += (nextCircle.y - y) * 0.3;


        //for scaling or making tail to follow.
        circle.style.scale = (circles.length - index) / circles.length;
        
    })

    //for Animation to prevent the sutck when your cursor out of the window.
    requestAnimationFrame(changeCordes);

}

changeCordes();

window.addEventListener('mousemove',(e)=>{
    cordes.x = e.clientX;
    cordes.y = e.clientY;
})


