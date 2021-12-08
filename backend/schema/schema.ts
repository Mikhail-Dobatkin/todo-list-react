import mongoose from "mongoose";
import {ITask} from "../interface/interface";

export const todoSchema = new mongoose.Schema({
    id: {
        type: String,
        required: false
    },
    title: {
        type: String,
        required: true
    },
    isCheck: {
        type: Boolean,
        required: true
    }
})

const Todo = mongoose.model<ITask>('Todo', todoSchema)

export default Todo
