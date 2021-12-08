import {Request, Response, NextFunction, response} from "express";
import Todo from "../schema/schema";


interface Post {
    id: string;
    title: string;
    isCheck: boolean
}

const getAllTasks = async (req: Request, res: Response, next: NextFunction) => {

    try {
        const result = await Todo.find()
        res.send({data: result})
        console.log(result)
    } catch (e) {
        console.log('im not working get request', e)
    }
}

const createNewTask = (req: Request, res: Response, next: NextFunction) => {
    const task = new Todo(req.body)
    task.save().then(result => {
        res.send(result)
    })
}

const deleteTask = async (req: Request, res: Response, next: NextFunction) => {
    try {
        if(req.query.id) {
            const response = await Todo.findOneAndDelete({'_id': {$eq: req.query.id}})
            console.log(response)
            res.send(response)
        } else {
            res.send('err: Invalid id Task')
        }
    } catch (e) {
        console.log(e)
    }
}
const updateTask = (req: Request, res: Response, next: NextFunction) => {
        if(req.body) {
            console.log('1111', req.body);
            Todo.updateOne({'_id': {$eq: req.body.id}}, {$set: {
                    isCheck: req.body.isCheck
                }}).then(response => {
                res.send(response)
            }).catch(err => res.send(err))
        }
}


export default {getAllTasks, createNewTask, deleteTask, updateTask}

