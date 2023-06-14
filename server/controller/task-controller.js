
import Task from "../model/Task.js";


export const addTask = async (request, response) => {
  try {
    const newTask = await Task.create ({
        data: request.body.data,
        createdAt: Date.now()
    })

    await newTask.save();

    return response.status(200).json(newTask);
    } catch (error) {
        return response.status(500).json(error.message);
    }
}

export const getAllTasks = async (request, response) => {
    try {
       const tasks = await Task.find({}).sort({ 'createdAt': -1})
        return response.status(200).json(tasks);
        } catch (error) {
            return response.status(500).json(error.message);
        }
}


export const toggleTaskDone = async (request, response) => {
    try {
        const taskRef = await Task.findById(request.params.id);

        const task = await Task.findOneAndUpdate(
            { _id: request.params.id },
            { done: !taskRef.done }
        )

        await task.save();

        return response.status(200).json(task);
    } catch (error) {
        return response.status(500).json(error.message);
    }
}

export const updateTask = async (request, response) => {
    try {
        await Task.findOneAndUpdate(
            { _id: request.params.id },
            { data: request.body.data }
        )

        const task = await Task.findById(request.params.id);

        return response.status(200).json(task);
    } catch (error) {
        return response.status(500).json(error.message);
    }
}

export const deleteTask = async (request, response) => {
    try {
        const task = await Task.findByIdAndDelete(request.params.id)

        return response.status(200).json(task);
    } catch (error) {
        return response.status(500).json(error.message);
    }
}
        