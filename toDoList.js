document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('#sub').disabled = true;
    document.querySelector('#task').onkeyup = function () {
        if (document.querySelector('#task').value.length > 0) {
            document.querySelector('#sub').disabled = false;
        } else {
            document.querySelector('#sub').disabled = true;
        }
    }
    document.querySelector('form').onsubmit = function () {
        const task = document.querySelector('#task').value;
        const li = document.createElement('li');
        li.innerHTML = task;
        document.querySelector('#tasks').append(li);
        document.querySelector('#task').value = '';
        document.querySelector('#sub').disabled = true;
        return false;
    }
});