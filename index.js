let main=document.querySelector(".main")


let color=["#856088","#6f00ff","#bf00ff","#003153","#40e0d0","#2a52be","#800020","#bdb76b","#daa520","#d2b48c","#c2b280","#ffef00","#808000","#7fff00","#00ffff","#3b3c36","#ff69b4"]

const changebc =()=>{
    const indexcolor= parseInt(Math.random()*color.length)
    main.style.backgroundColor = color[indexcolor]
    }

let btn=document.querySelector(".btn");
btn.addEventListener("click", changebc);

