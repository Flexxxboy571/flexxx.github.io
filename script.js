document.addEventListener("DOMContentLoaded", function () {
    const events = document.querySelectorAll(".event");
    let currentEventIndex = 0;
    const tooltip = document.createElement("div");
    tooltip.id = "tooltip";
    document.body.appendChild(tooltip);

    // Agregar botones de imagen para retroceder y avanzar
    const backButton = document.createElement("img");
    backButton.src = "flecha-izquierda.png"; // Ruta relativa a la imagen de retroceso
    backButton.alt = "Retroceder";
    backButton.id = "back-button";
    document.body.appendChild(backButton);

    const nextButton = document.createElement("img");
    nextButton.src = "flecha-derecha.png"; // Ruta relativa a la imagen de avance
    nextButton.alt = "Avanzar";
    nextButton.id = "next-button";
    document.body.appendChild(nextButton);

    // Mostrar el evento actual
    function showCurrentEvent() {
        if (currentEventIndex >= 0 && currentEventIndex < events.length) {
            events.forEach((event, index) => {
                if (index === currentEventIndex) {
                    event.style.display = "block";
                } else {
                    event.style.display = "none";
                }
            });
        } else if (currentEventIndex >= events.length) {
            document.getElementById("quiz-form").style.display = "block"; // Mostrar el formulario de preguntas
        }
    }

    // Agregar controladores de clic a los botones de imagen
    const backBtn = document.getElementById("back-button");
    const nextBtn = document.getElementById("next-button");

    backBtn.addEventListener("click", function () {
        if (currentEventIndex > 0) {
            currentEventIndex--; // Retroceder al evento anterior
            showCurrentEvent(); // Mostrar el evento anterior
        }
    });

    nextBtn.addEventListener("click", function () {
        if (currentEventIndex < events.length - 1) {
            currentEventIndex++; // Avanzar al siguiente evento
            showCurrentEvent(); // Mostrar el siguiente evento
        }
    });

    // Deshabilitar o habilitar los botones de navegación según la posición actual
    function updateNavigationButtons() {
        backBtn.disabled = currentEventIndex === 0;
        nextBtn.disabled = currentEventIndex === events.length - 1;
    }

    // Variables para el sistema de puntos y para controlar si el quiz ya se completó
    let correctAnswers = 0;
    let quizSubmitted = false;

    // Mostrar el primer evento al cargar la página
    showCurrentEvent();
    updateNavigationButtons();

    // Agregar controlador de envío del formulario de preguntas
    const quizForm = document.getElementById("quiz-form");
    const quizResult = document.getElementById("quiz-result");

    quizForm.addEventListener("submit", function (e) {
        e.preventDefault(); // Evitar el envío del formulario por defecto

        if (!quizSubmitted) { // Verificar si el formulario aún no se ha enviado
            quizSubmitted = true;

            // Obtener respuestas del formulario
            const q1 = document.querySelector('input[name="q1"]:checked').value;
            const q2 = document.querySelector('input[name="q2"]:checked').value;
            const q3 = document.querySelector('input[name="q3"]:checked').value;
            const q4 = document.querySelector('input[name="q4"]:checked').value;
            const q5 = document.querySelector('input[name="q5"]:checked').value;
            const q6 = document.querySelector('input[name="q6"]:checked').value;
            const q7 = document.querySelector('input[name="q7"]:checked').value;
            const q8 = document.querySelector('input[name="q8"]:checked').value;
            const q9 = document.querySelector('input[name="q9"]:checked').value;
            const q10 = document.querySelector('input[name="q10"]:checked').value;
            const q11 = document.querySelector('input[name="q11"]:checked').value;
            const q12 = document.querySelector('input[name="q12"]:checked').value;
            const q13 = document.querySelector('input[name="q13"]:checked').value;

            // Calcular puntaje
            correctAnswers = (q1 === "a") + (q2 === "b") + (q3 === "b") + (q4 === "a") + (q5 === "a") + (q6 === "a") + (q7 === "a") + (q8 === "a") + (q9 === "c") + (q10 === "d") + (q11 === "c") + (q12 === "a") + (q13 === "a");

            // Mostrar resultado
            quizResult.textContent = `Obtuviste ${correctAnswers} de 13 respuestas correctas.`;
            quizResult.style.display = "block";

            // Ocultar el formulario de preguntas
            quizForm.style.display = "none";

            // Mostrar el evento actual
            currentEventIndex++;
            showCurrentEvent();
            updateNavigationButtons();
        }
    });
});

