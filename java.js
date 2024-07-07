onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 1000);
  };
  const audio = document.getElementById("background-audio");
  document.addEventListener("DOMContentLoaded", () => {
    document.querySelector(".carelly").addEventListener("click", async () => {
      audio.setTimeout=0;
      audio.pause();
                if (confirm("¿Sabes que dia es hoooy?")) {
                  alert("eso es 'Aceptar', no es una respuesta como tal a mi pregunta, a ver de nuevo");
                  alert("¿Sabes que dia es hoy?");
                  alert("~(-_-~)");
                  alert("Si, eso sigue siendo 'Aceptar'");
                  alert("Bueno mira lo tomare como 'SI'");
                  audio.play().then(() => {
                    setTimeout(() => {
                      alert("siii, tu cumpleañooooos, tus 18 años");
                      alert("Felicidades Carelly, pasala bonito, te deseo lo mejor, que cumplas muchos años mas y que todos tus sueños se hagan realidad");
                      alert("Me guardas torta :D");
                    }, 100);
                  });
                }else{
                    alert("Cancelar? en serio?");
                    alert("mhhhm")
                    alert("No pense que le darias a cancelar")
                    alert("Segura que quieres cancelar?")
                    alert("Bueno, si tu lo dices")
                    window.location.href = "https://youtu.be/JhDIILjlhBQ?t=2";
                }
    }
    );
          });
