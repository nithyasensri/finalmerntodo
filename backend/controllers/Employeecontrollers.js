

const  mongoose  = require('mongoose')
const EmployeeModels = require('../models/Employeemodels')

const createWorkers = async (req, res) => {
    const { name, designation } = req.body

    try {
        const workers = await EmployeeModels.create({ name, designation })
        res.status(200).json(workers)
    }
    catch (error) {
        res.status(400).json({ msg: error.message })
    }

}

const getAllWorkers = async (req, res) => {

    const workers = await EmployeeModels.find({}).sort({ createdAt: -1 })
    res.status(200).json(workers)

    console.log(workers)

}

const getSingleWorker = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        res.status(404).json({ error: 'No such workout' })
    }

    const workout = await EmployeeModels.findById(id)

    if (!workout) {
        res.status(400).json({ error: 'No such workout' })
    }

    res.status(200).json(workout)

}

const getDeleteWorker = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        res.status(404).json({ error: 'No such workout' })
    }

    const workout = await EmployeeModels.findByIdAndDelete({ _id: id })

    if (!workout) {
        res.status(400).json({ error: 'No such workout' })
    }

    res.status(200).json(workout)

}

const updateWorker = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        res.status(404).json({ error: "No such Workout" })
    }

    const worker = await EmployeeModels.findOneAndUpdate({_id: id}, {
        ...req.body
      })

    if (!worker) {
        res.status(400).json({ error: "No such Workout" })
    }

}


module.exports = {
    createWorkers, getAllWorkers,
    getSingleWorker, getDeleteWorker,updateWorker
}