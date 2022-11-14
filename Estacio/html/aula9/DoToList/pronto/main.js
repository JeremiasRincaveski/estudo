window.addEventListener('load', () => {
    //querySelector pega o primeira id que aparecer no script
    const form = document.querySelector("#new-task-form");
    const input = document.querySelector("#new-task-input");
    const list_el = document.querySelector("#tasks");
    const actions = ["beber agua", "beber cafe", "tomar remedio", "caminhar", "ler"]

    form.addEventListener('submit', (e) => {
        //pega o valor do imput e zera ele colocando um novo placeHodler
        e.preventDefault();
        const task = input.value;
        input.value = ""
        input.placeholder = actions[Math.floor(Math.random() * 5)]
        
        //cria a div aonde as tarefas irao ficar
        const task_el = document.createElement('div');
        task_el.classList.add('task');
        
        //cria a div aonde o conteudo da tarefa ira ficar
        const task_content_el = document.createElement('div');
        task_content_el.classList.add('content');
        
        //cria o input que vai guardar a tarefa digitada
        const task_input_el = document.createElement('input');
        task_input_el.classList.add('text');
        task_input_el.type = 'text';
        task_input_el.value = task;
        task_input_el.setAttribute('readonly', 'readonly');
        //só vai aparecer caso não tenha nada no input
        task_input_el.placeholder = input.placeholder
        
        //cria a div aonde vai ficar os botoes dentro das tarefas
        const task_actions_el = document.createElement('div');
        task_actions_el.classList.add('actions');

        //botão para editar o texto
        const task_edit_el = document.createElement('button');
        task_edit_el.classList.add('edit');
        task_edit_el.innerText = 'Editar';
        
        //botão para deletar o texto
        const task_delete_el = document.createElement('button');
        task_delete_el.classList.add('delete');
        task_delete_el.innerText = 'Deletar';
        
        //cria todos os elemntos quando o formulario apertar no botão submit
        list_el.appendChild(task_el);
        task_el.appendChild(task_content_el);
        task_content_el.appendChild(task_input_el);
        task_el.appendChild(task_actions_el);
        task_actions_el.appendChild(task_edit_el);
        task_actions_el.appendChild(task_delete_el);
        
        //
        task_edit_el.addEventListener('click', (e) => {
            if (task_edit_el.innerText.toLowerCase() == "editar") {
                task_edit_el.innerText = "salvar";
                task_input_el.removeAttribute("readonly");
                task_input_el.focus();
            } else {
                task_edit_el.innerText = "editar";
                task_input_el.setAttribute("readonly", "readonly");
            }
        });

        task_delete_el.addEventListener('click', (e) => {
            list_el.removeChild(task_el);
        });

        $(document).on('click', '.text', function () {
            $(this).toggleClass("scratch");
        })

    });
});