const tasks = require('../data/tasks');

exports.getTasks = (req , res) => {
    res.json(tasks);
}

exports.createTasks = (req ,res) => {
    const {title} = req.body;
    if (!title) {
        return console.log(`there is no title`)
    }
    const newTasks = {id: tasks.length +1 , title};
    tasks.push(newTasks);

    res.send(`task added ${title}`);

}

exports.updateTasks = (req, res) => {
    const {title} = req.body;
    const taskId = parseInt(req.params.id)

    if (!title) {
        return console.log(`there is no title`)
    }

    const task = tasks.find(t => t.id === taskId)

    task.title = title;

    res.send(`task (${taskId}) updated to ${title}`);

}

exports.deleteTasks = (req ,res) => {
    const taskId = parseInt(req.params.id)

    const task = tasks.findIndex(t => t.id === taskId)

    tasks.splice(task,1)[0];

    res.send(`task (${taskId}) deleted`);
}

