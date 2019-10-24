import { html, render} from 'https://unpkg.com/lit-html?module';

let checkedItems = [];
let todoInputValue = '';

const inputOnChange = (value) => {
    todoInputValue = `${todoInputValue}${value.data}`;
}

const readTodo = () => {
    return fetch('http://localhost:5050/api/todo', { method: 'GET' })
        .then(function(response) {
            return response.json().then(function(data) {
                    return data.items;
                });
            })
        .catch(function(error) {
            console.error('error', error);
        });   
}

const deleteItems = (itemId) => {}

const addItem = () => {}

const loadTodoItem = () => {
    let checked = true;
    readTodo().then(items => {
        const todoListTemplate = (name) => html`
            <h2 class="header_text">Todo App</h2>
            <input class="add_inp" type="text" placeholder="todo item" @input="${inputOnChange}"/> 
            <button class="add_btn" @click=${() => addItem()}>Add Item</button>

            <ul>
                ${items.map((item) => html`
                        <li>
                            <div class="delete_inp">${item.title}</div>
                            <button class="delete_btn"  @click=${() => deleteItems(item.id)}>X</button>
                        </li>
                    `)
                }
            </ul>
        `;

    render(todoListTemplate(), document.body);

    })
    
}

const projectTemplate = () => html`
        <div>${(loadTodoItem())}</div>
    `;
render(projectTemplate(), document.body);