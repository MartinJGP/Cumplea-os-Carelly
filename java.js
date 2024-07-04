onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 1000);
  };
  document.addEventListener("DOMContentLoaded", () => {
    // Reproducir el audio y abrir la nueva página cuando el usuario haga clic en el div "carelly"
    document.querySelector(".carelly").addEventListener("click", async () => {
            const audio = document.getElementById("background-audio");

            await Promise.all([audio.play(), new Promise(resolve => {
                resolve();
            })])
            .then(() => {
                alerta=alert("Feliz 18 añoooos :) espero que te guste el regalo");
            })
    });
});
