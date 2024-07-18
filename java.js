onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 1000);

    const targetDate = new Date(new Date().getFullYear(), 7, 13);
    const now = new Date();
    const difference = targetDate - now;
    if (difference > 0) {
        window.location.href = "index.html";
    }
  }
  const audio = document.getElementById("background-audio");
  document.addEventListener("DOMContentLoaded", () => {
    document.querySelector(".carelly").addEventListener("click", async () => {
      audio.setTimeout=0;
      audio.pause();
                  audio.play().then(() => {
                    setTimeout(() => {
                      alert("Me guardas torta :D");
                    }, 100);
                  });
              
    }
    );
          });
//regalo
          
