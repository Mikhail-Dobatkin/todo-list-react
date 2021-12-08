import { ITodo } from '../../models/interface/interface'
import axios, { AxiosResponse } from 'axios'

const instance = axios.create({
  baseURL: 'http://localhost:8080',
  headers: { 'Content-Type': 'application/json' }
})

class TodoService {
     public static getAllTodos = async (): Promise<ITodo[]> => {
       try {
         const response: AxiosResponse = await instance.get('/allTasks')
         return response.data.data
       } catch (e) {
         console.log('Error GET query', e)
         return []
       }
     }

   public static createNewTodo = async (body: ITodo) => {
     try {
       const response: AxiosResponse = await instance.post('/addTask', body)
       return response.data
     } catch (e) {
       console.log('Error POST query', e)
     }
   }

    public static deleteTodo = async (id: ITodo['_id']) => {
      try {
        const response: AxiosResponse = await instance.delete(`/deleteTask?id=${id}`)
        return response.data
      } catch (e) {
        console.log('Error on DELETE query', e)
      }
    }

    public static updateTodo = async (body: ITodo) => {
      try {
        const response: AxiosResponse = await instance.patch('/editTask', body)
        return response.data
      } catch (e) {
        console.log('Error on PATCH query', e)
      }
    }
}

export default TodoService
