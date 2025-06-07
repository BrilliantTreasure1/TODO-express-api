const tasks = require('../data/tasks');
const Task = require('../models/Task')

exports.getTasks = async (req , res) => {
    try {
        const tasks = await Task.find();
        res.status(200).json(tasks);
      } catch (error) {
        res.status(500).json({ message: 'خطا در دریافت تسک‌ها', error });
      }
}

exports.createTasks = async (req ,res) => {
    const {title} = req.body;
    if (!title) {
        return console.log(`there is no title`)
    }
    const newTasks = {id: tasks.length +1 , title};
    tasks.push(newTasks);

    try {
        const newTask = new Task(req.body);
        await newTask.save();
        res.status(201).json(newTask);
      } catch (error) {
        res.status(400).json({ message: 'خطا در ایجاد تسک', error });
      }

    res.send(`task added ${title}`);

}

exports.updateTasks = async (req, res) => {
    const {title} = req.body;
    const taskId = parseInt(req.params.id)

    if (!title) {
        return console.log(`there is no title`)
    }

    const task = tasks.find(t => t.id === taskId)

    task.title = title;

    try {
        const updatedTask = await Task.findByIdAndUpdate(
          req.params.id,
          req.body,
          { new: true, runValidators: true }
        );
        if (!updatedTask) return res.status(404).json({ message: 'تسک پیدا نشد' });
        res.status(200).json(updatedTask);
      } catch (error) {
        res.status(400).json({ message: 'خطا در به‌روزرسانی تسک', error });
      }

    res.send(`task (${taskId}) updated to ${title}`);

}

exports.deleteTasks = async (req ,res) => {
    const taskId = parseInt(req.params.id)

    const task = tasks.findIndex(t => t.id === taskId)

    tasks.splice(task,1)[0];

    try {
        const deletedTask = await Task.findByIdAndDelete(req.params.id);
        if (!deletedTask) return res.status(404).json({ message: 'تسک پیدا نشد' });
        res.status(200).json({ message: 'تسک با موفقیت حذف شد' });
      } catch (error) {
        res.status(500).json({ message: 'خطا در حذف تسک', error });
      }

    res.send(`task (${taskId}) deleted`);
}

