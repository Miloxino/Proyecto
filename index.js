
    

    let RELOJ = ()=>{
      const fecha = new Date();
      const hora = fecha.getHours();
      const minutos = fecha.getMinutes();
      const segundos = fecha.getSeconds();
      const dia = fecha.toLocaleDateString();
      
      document.getElementById("clock").innerHTML = `${hora}:${minutos}:${segundos} <br> ${dia}`;
    
      requestAnimationFrame(RELOJ);
      
    }
    function easteregg() {
        alert ("Hello World")
    }
    RELOJ();