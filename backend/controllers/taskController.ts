const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const ApiError = require('../error/apiError');

class TaskController {
    async addNewTask(req: any, res: any, next: any) {
        try {
            const { title, description } = req.body;
            if (!title || !description) {
                return next(ApiError.badRequest('Нет заголовка и/или описания.'))
            }

            const newTask = await prisma.task.create({
                data: {
                    title,
                    description
                }
            });

            return res.json(newTask);
        } catch (err) {
            return next(ApiError.internal('Произошла ошибка на сервере.'))
        }
    }

    async getAllTasks(req: any, res: any, next: any) {
        try {
            const tasks = await prisma.task.findMany();
            if (!tasks) {
                return next(ApiError.notFound('Не удалось получить список задач'))
            }
            return res.json(tasks);
        } catch (err) {
            return next(ApiError.internal('Произошла ошибка на сервере'))
        }
    }

    async updateStatus(req: any, res: any, next: any) {
        try {
            const { id, status } = req.body;
            if (!status) {
                return next(ApiError.badRequest('Не передан статус.'))
            }
            const updatedTask = await prisma.task.update({
                where: { id },
                data: {
                    status
                }
            })
            return res.json(updatedTask);
        } catch (err) {
            return next(ApiError.internal('Произошла ошибка на сервере'))
        }
    }

    async deleteTask(req: any, res: any, next: any) {
        try {
            const { id } = req.params;
            if (!id) {
                return next(ApiError.badRequest('Не передан ID задачи'))
            }
            const deletedTask = await prisma.task.delete({
                where: { id }
            });

            return res.json(deletedTask);
        } catch (err) {
            return next(ApiError.internal('Произошла ошибка на сервере'))
        }
    }
}

module.exports = new TaskController();