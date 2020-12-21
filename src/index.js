const express = require('express')
require('./db/mongoose')
// const User = require('./models/user')
// const Task = require('./models/task')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
// const port = process.env.PORT || 3000
const port = process.env.PORT

// app.use((req, res, next) => {
//     if (req.method === 'GET') {
//         res.send('Get requests are disabled')
//     } else {
//         next()
//     }
// })

// app.use((req, res, next) => {
//     res.status(503).send('Site is currently down.Check back soon')

// })

// const multer = require('multer')
// const upload = multer({
//     dest: 'images',
//     limits: {
//         fileSize: 1000000

//     },
//     fileFilter(req, file, cb) {
//         // if (!file.originalname.endsWith('.pdf')){
//         // return cb(new Error('File must be a PDF'))
//         // }
//         if (!file.originalname.match(/\.(doc|docx)$/)) {
//             return cb(new Error('Please upload a word document'))
//         }
//         cb(undefined, true)


//     }
// })


// // const errorMiddleware = (req, res, next) => {
// //     throw new Error('From my middleware')
// // }

// app.post('/upload', upload.single('upload'), (req, res) => {
//     res.send()

// }, (error, req, res, next) => {
//     res.status(400).send({ error: error.message })
// })



// app.post('/upload', upload.single('upload'), (req, res) => {
//     res.send()

// })



app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

// const router = new express.Router()
// router.get('/test', (req, res) => {
//     res.send('This is from my other router')
// })
// app.use(router)

// app.post('/users', async (req, res) => {
//     const user = new User(req.body)

//     try {
//         await user.save()
//         res.status(201).send(user)
//     } catch (e) {
//         res.status(400).send(e)
//     }

//     // user.save().then(() => {
//     //     res.status(201).send(user)
//     // }).catch((e) => {
//     //     res.status(400).send(e)
//     //     // res.send(e)
//     // })
//     // console.log(req.body)
//     // // res.send('testing')
// })

// app.get('/users', async (req, res) => {
//     try {
//         const users = await User.find({})
//         res.send(users)
//     } catch (e) {
//         res.status(500).send()
//     }

//     // User.find({}).then((users) => {
//     //     res.send(users)
//     // }).catch((e) => {
//     //     res.status(500).send(e)
//     // })
// })

// app.get('/users/:id', async (req, res) => {
//     const _id = req.params.id
//     try {
//         const user = await User.findById(_id)
//         if (!user) {
//             return res.status(404).send()
//         }
//         res.send(user)
//     } catch (e) {
//         res.status(500).send()

//     }


//     // User.findById(_id).then((user) => {
//     //     if (!user) {
//     //         return res.status(404).send()
//     //     }
//     //     res.send(user)
//     // }).catch((e) => {
//     //     res.status(500).send()
//     // })
// })

// app.patch('/users/:id', async (req, res) => {
//     const updates = Object.keys(req.body)
//     const allowedUpdates = ['name', 'email', 'password', 'age']
//     const isValidOperation = updates.every((update) => allowedUpdates.includes(update))
//     if (!isValidOperation) {
//         return res.status(400).send({ error: 'Invalid updates' })
//     }

//     try {
//         const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
//         if (!user) {
//             return res.status(404).send()
//         }
//         res.send(user)
//     } catch (e) {
//         res.status(400).send(e)
//     }
// })

// app.delete('/users/:id', async (req, res) => {
//     try {
//         const user = await User.findByIdAndDelete(req.params.id)
//         if (!user) {
//             return res.status(404).send()
//         }
//         res.send(user)
//     } catch (e) {
//         res.status(500).send()
//     }
// })

// app.post('/tasks', async (req, res) => {
//     const task = new Task(req.body)

//     try {
//         await task.save()
//         res.status(201).send(task)
//     } catch (e) {
//         res.status(400).send()
//     }
//     //     task.save().then(() => {
//     //     res.status(201).send(task)
//     // }).catch((e) => {
//     //     res.status(400).send(e)
//     // })
// })


// app.get('/tasks', async (req, res) => {

//     try {
//         const tasks = await Task.find({})
//         res.send(tasks)
//     } catch (e) {
//         res.status(500).send(e)
//     }
//     //    Task.find({}).then((tasks) => {
//     //         res.send(tasks)
//     //     }).catch((e) => {
//     //         res.status(500).send(e)
//     //     })
// })


// app.get('/tasks/:id', async (req, res) => {
//     const _id = req.params.id
//     console.log(_id)
//     try {
//         const task = await Task.findById(_id)
//         if (!task) {
//             return res.status(404).send()
//         }
//         res.send(task)
//     } catch (e) {
//         res.status(500).send()
//     }
//     // Task.findById(_id).then((task) => {
//     //     if (!task) {
//     //         return res.status(404).send()
//     //     }
//     //     res.send(task)
//     // }).catch((e) => {
//     //     res.status(500).send(e)
//     // })
// })

// app.patch('/tasks/:id', async (req, res) => {
//     const updates = Object.keys(req.body)
//     const allowedUpdates = ['description', 'completed']
//     const isValidOperation = updates.every((update) => allowedUpdates.includes(update))
//     if (!isValidOperation) {
//         return res.status(400).send({ error: 'Invalid updates' })
//     }

//     try {

//         const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
//         if (!task) {
//             return res.status(404).send()
//         }
//         res.send(task)
//     } catch (e) {
//         res.status(400).send(e)
//     }



// })

// app.delete('/tasks/:id', async (req, res) => {
//     try {
//         const task = await Task.findByIdAndDelete(req.params.id)
//         if (!task) {
//             res.status(404).send()
//         }
//         res.send(task)
//     } catch (e) {
//         res.status(500).send
//     }

// })

app.listen(port, () => {
    console.log('Server is up on ' + port)
})

// const pet = {
//     name: 'Hal'
// }



// pet.toJSON = function () {
//     console.log(this)
//     return this
// }

// console.log(JSON.stringify(pet))




// const jwt = require('jsonwebtoken')
// // const bcrypt = require('bcryptjs')

// const myFunction = async () => {
//     const token = jwt.sign({ _id: 'abc123' }, 'thisismynewcourse', { expiresIn: '7 days' })
//     console.log(token)
//     const data = jwt.verify(token, 'thisismynewcourse')
//     console.log(data)
// }
// myFunction()

// const myFunction = async () => {
//     const password = 'Red12345!'
//     const hashedPassword = await bcrypt.hash(password, 8)
//     console.log(password)
//     console.log(hashedPassword)
//     const isMatch = await bcrypt.compare('red12345!', hashedPassword)
//     console.log(isMatch)
// }
// myFunction()

const Task = require('./models/task')
const User = require('./models/user')

// const main = async () => {
//     const task = await Task.findById('5fd5ad7d2a53191f54befaf9')
//     await task.populate('owner').execPopulate()
//     console.log(task.owner)
// }

// main()


// const main = async () => {
//     const user = await User.findById('5fd5aa00c2683f4650c5be16')
//     await user.populate('tasks').execPopulate()
//     console.log(user.tasks)


// }

// main()