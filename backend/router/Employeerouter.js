
const express = require('express')

const { createWorkers,getAllWorkers,
    getSingleWorker,getDeleteWorker,updateWorker
} = require('../controllers/Employeecontrollers')

const router = express.Router()

router.post('/', createWorkers )

router.get('/', getAllWorkers )

router.get('/:id', getSingleWorker )

router.delete('/:id', getDeleteWorker )

router.patch('/:id', updateWorker)

module.exports = router