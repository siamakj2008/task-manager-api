const express = require('express')
const { update, findOne } = require('../models/task')
const auth = require('../middleware/auth')
const router = new express.Router()
const Task = require('../models/task')

router.post('/tasks', auth, async (req, res) => {
    // const task = new Task(req.body)
    const task = new Task({
        ...req.body,
        owner: req.user._id
    })
    try {
        await task.save()
        res.status(201).send(task)
    } catch (e) {
        res.status(400).send()
    }
    //     task.save().then(() => {
    //     res.status(201).send(task)
    // }).catch((e) => {
    //     res.status(400).send(e)
    // })
})


// Get /tasks?completed=true
// Get/ tasks?limit=10&skip=20
// Get/tasks?sortBy=createdAt_desc
router.get('/tasks', auth, async (req, res) => {
    const match = {}
    const sort = {}

    if (req.query.completed) {
        match.completed = req.query.completed === 'true'

    }

    if (req.query.sortBy) {
        const parts = req.query.sortBy.split(':')
        console.log(req.query.sortBy)
        sort[parts[0]] = parts[1] === 'desc' ? -1 : 1
    }
    try {
        // const tasks = await Task.find({ owner: req.user._id })
        await req.user.populate({
            path: 'tasks',
            match,
            options: {
                limit: parseInt(req.query.limit),
                skip: parseInt(req.query.skip),
                // sort: {
                //     // createdAt: 1
                //     completed: 1
                // }
                sort
            }

        }).execPopulate()

        res.send(req.user.tasks)
    } catch (e) {
        res.status(500).send(e)
    }
    //    Task.find({}).then((tasks) => {
    //         res.send(tasks)
    //     }).catch((e) => {
    //         res.status(500).send(e)
    //     })
})


router.get('/tasks/:id', auth, async (req, res) => {
    const _id = req.params.id
    // console.log(_id)
    try {
        const task = await Task.findOne({ _id, owner: req.user._id })
        // const task = await Task.findById(_id)
        if (!task) {
            return res.status(404).send()
        }
        res.send(task)
    } catch (e) {
        res.status(500).send()
    }
    // Task.findById(_id).then((task) => {
    //     if (!task) {
    //         return res.status(404).send()
    //     }
    //     res.send(task)
    // }).catch((e) => {
    //     res.status(500).send(e)
    // })
})

router.patch('/tasks/:id', auth, async (req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['description', 'completed']
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))
    if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid updates' })
    }

    try {
        const task = await Task.findOne({ _id: req.params.id, owner: req.user._id })
        // const task = await Task.findById(req.params.id)

        // const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
        if (!task) {
            return res.status(404).send()
        }
        updates.forEach((update) =>
            task[update] = req.body[update])
        await task.save()
        console.log(task)
        res.send(task)
    } catch (e) {
        res.status(400).send(e)
    }



})


// router.patch('/tasks/:id', async (req, res) => {
//     const updates = Object.keys(req.body)
//     const allowedUpdates = ['description', 'completed']
//     const isValidOperation = updates.every((update) => allowedUpdates.includes(update))
//     if (!isValidOperation) {
//         return res.status(400).send({ error: 'Invalid updates' })
//     }

//     try {
//         const task = await Task.findById(req.params.id)
//         updates.forEach((update) => 
//             task[update] = req.body[update])
//         // const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
//         if (!task) {
//             return res.status(404).send()
//         await task.save
//         res.send(task)
//     } catch (e) {
//         res.status(400).send(e)
//     }



// })






router.delete('/tasks/:id', auth, async (req, res) => {
    try {
        const task = await Task.findOneAndDelete({ _id: req.params.id, owner: req.user._id })
        if (!task) {
            res.status(404).send()
        }
        res.send(task)
    } catch (e) {
        res.status(500).send
    }

})


module.exports = router