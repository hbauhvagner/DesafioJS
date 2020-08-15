function welcome() {
    let name = document.querySelector('input');

    let container = document.querySelector('#root');
    container.innerHTML = 'Seja bem-vindo ' + name.value.bold();

    name.value = '';
}