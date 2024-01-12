const form = document.querySelector("#form");
    const nameInput = document.querySelector("#name");
    const emailInput = document.querySelector("#email");

    form.addEventListener("submit", async (event) => {
        event.preventDefault();
        if (nameInput.value === "") {
            alert("Por favor, preencha o seu nome completo");
            return;
            }
        if (emailInput.value === "") {
            alert("Por favor, preencha o seu Email");
            return;
            }
        try {
            const response = await fetch("https://formspree.io/f/xqkraejk", {
                method: "POST",
                body: new FormData(form),
                headers: {
                    Accept: "application/json",
                },
            });

            
        if (response.ok) {
                nameInput.value = "";
                emailInput.value = "";
                alert("Inscrição enviada com sucesso!");
            } else {
                
                alert("Ocorreu um erro ao enviar a inscrição. Tente novamente.");
            }
            } catch (error) {
            console.error("Erro ao enviar a inscrição:", error);
            alert("Ocorreu um erro ao enviar o a sua inscrição. Tente novamente.");
        }
    });








   window.sr = ScrollReveal({reset:true});
   sr.reveal('#quadro1', {duration:1500});

   window.sr = ScrollReveal({reset:true});
   sr.reveal('#quadro2', {duration:1500});

   window.sr = ScrollReveal({reset:true});
   sr.reveal('#area1', {duration:1500});

   window.sr = ScrollReveal({reset:true});
   sr.reveal('#area2', {duration:1500});

   window.sr = ScrollReveal({reset:true});
   sr.reveal('#area3', {duration:1500});

   window.sr = ScrollReveal({reset:true});
   sr.reveal('#area4', {duration:1500});

   window.sr = ScrollReveal({reset:true});
   sr.reveal('#area5', {duration:1500});

   window.sr = ScrollReveal({reset:true});
   sr.reveal('#contact', {duration:1500});

 
