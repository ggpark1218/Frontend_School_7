import axios from 'axios';

export async function readData() {
    const data = await axios.get('http://localhost:3001/todolist');
    return data;
}