const Task = require('../models/todoList');

exports.getList = (req, res, next)=>{
    Task.find().then(taskList => {
        res.render('index', {tasks: taskList, pageTitle: 'All Tasks'})
    })
    .catch(err=>{
        console.log(err);
    })
}

exports.getAddTask = (req, res, next)=>{
    res.render('new', {pageTitle: 'New task'});
}

exports.postAddTask = (req, res, next)=>{
    const title = req.body.title;
    const description = req.body.description;
    const task = new Task({
        title: title,
        description: description
    });
    task
        .save()
        .then(result => {
            console.log('task added successfully');
            res.redirect('/');
        })
        .catch(err => console.log(err));
}

exports.postDeleteTask = (req, res, next)=>{
    const taskId = req.body.taskId;
    Task.findByIdAndRemove(taskId)
        .then(()=>{
            console.log('task removed');
            res.redirect('/');
        })
        .catch(err=> console.log(err));
}