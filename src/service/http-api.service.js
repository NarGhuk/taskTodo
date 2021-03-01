import axios from "axios";

const apiBase = 'https://todo.eachbase.com/api/NarekGhukasyan/todos/';

export async function getAllTodo() {
    const response = await axios.get(`${apiBase}`);
    return response.data
}
export async function addTodo(sendData) {
    const response = await axios.post(`${apiBase}`,sendData);
    return response.data
}
export async function update(prefixId,bodyData) {
    const response = await axios.patch(`${apiBase}${prefixId}`,bodyData);
    return response
}
export async function remove(id) {
    return await axios.delete(`${apiBase}${id}`);
}