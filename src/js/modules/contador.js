const countdown = () => {

    // Função para animar o contador
    function animarContador(entries, observer) {
    const contadorElement = document.getElementById("contador");
    let contador = 0;
    
    console.log("aqui mostrar")

    if (entries[0].isIntersecting) {
        const intervalo = setInterval(function () {
        contadorElement.textContent = contador;
        contador++;

        if (contador > 116456) {
            clearInterval(intervalo); // Parar o contador quando atingir 100
        }
        }, 0.25); // Intervalo de atualização (em milissegundos)

        observer.unobserve(contadorElement); // Parar de observar quando a animação começar
    }
    }

    // Criar um observador de interseção
    const contadorElement = document.getElementById("contador");
    const observer = new IntersectionObserver(animarContador, {
    threshold: 0.5,
    });

    console.log(observer)

    // Iniciar a observação do elemento do contador
    observer.observe(contadorElement);

}

export { countdown }

