function addTask() {
    let form = document.getElementById('form');
    let task = document.createElement('input');
    let label = document.createElement('label');
    let container = document.createElement('div');
    let remove = document.createElement('i');

    remove.setAttribute('class', 'fa-solid fa-xmark');
    remove.style = "position: absolute; scale: 1.5; top: 55%; left: 97%; transform: translate(-97%, -50%);";
    container.style = "display: flex; flex-direction: row; position: relative;";

    task.setAttribute('type', 'checkbox');
    task.setAttribute('class', 'task');
    task.addEventListener('change', function () {
        if (task.checked) {
            label.style.textDecoration = "line-through";
        } else {
            label.style.textDecoration = "none";
        }
    })

    remove.addEventListener('click', function () {
        container.remove();
    });
    task.style = "outline: none;border: solid 3px;height: 30px;width: 30px;padding: 20px;float: left; margin: 15px;";

    var taskText = document.getElementById('input').value;

    // label.setAttribute('for', 'task');
    label.setAttribute('class', 'label');
    label.innerHTML = taskText;
    label.style = "text-align: left; width: 80%; float: right; padding-left: 10px; font-size: 1.7em; padding-top: 12px;"

    container.appendChild(task);
    container.appendChild(label);
    container.appendChild(remove);

    form.appendChild(container);
    document.getElementById('input').value = '';
}

const icon = document.getElementById('icon');
icon.addEventListener('click', addTask);
