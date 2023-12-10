let correct_result;

function generate_problem() {
    let a = Math.floor(Math.random() * 10);
    let b = Math.floor(Math.random() * 10);
    correct_result = a + b;
    document.getElementById('math_problem').textContent = a + ' + ' + b + ' = ?';
}

function check_answer() {
    let user_answer = parseInt(document.getElementById('user_answer').value);
    let result_element = document.getElementById('result');
    if (user_answer === correct_result) {
        result_element.textContent = '¡Correcto!';
        result_element.style.color = 'green';
    } else {
        result_element.textContent = 'Incorrecto. La respuesta correcta es ' + correct_result;
        result_element.style.color = 'red';
    }
    generate_problem();
}

generate_problem();