// const validator = require('validator')
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    // useCreateIndex: true
    useUnifiedTopology: true,
    useFindAndModify: false
})

// const User = mongoose.model('User', {
//     name: {
//         type: String,
//         required: true,
//         trim: true
//     },

//     email: {
//         type: String,
//         required: true,
//         trim: true,
//         lowercase: true,
//         validate(value) {
//             if (!validator.isEmail(value)) {
//                 throw new Error('Email is invalid')
//             }
//         }
//     },
//     password: {
//         type: String,
//         required: true,
//         trim: true,
//         // minlength:7,
//         validate(value) {
//             if (value.length < 6) {
//                 throw new Error('Password should be at least 6 characters')
//             }
//             if (value.toLowerCase().includes('password')) {
//                 throw new Error('Password should not include "password"')
//             }
//         }

//     },
//     age: {
//         type: Number,
//         default: 0,
//         validate(value) {
//             if (value < 0) {
//                 throw new Error('Age must be a positive number')
//             }
//         }
//     }
// })

// const me = new User({
//     name: '   mike',
//     email: '                siaMAkj2008@gmail.com',
//     password: '           ghassword'

// })

// me.save().then(() => {
//     console.log(me)
// }).catch((error) => {
//     console.log('Error', error)
// })

// const Task = mongoose.model('Task', {
//     description: {
//         type: String,
//         required: true,
//         trim: true
//     },
//     completed: {
//         type: Boolean,
//         default: false
//     }

// })

// const task = new Task({
//     description: ' Do nothing!',
//     // completed: true
// })
// task.save().then(() => {
//     console.log(task)
// }).catch((error) => {
//     console.log(error)
// })