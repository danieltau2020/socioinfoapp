import asynchandler from 'express-async-handler'
import MvPerson2017 from '../models/mvPerson2017Model.js'
import MvPerson2021 from '../models/mvPerson2021Model.js'
import Village from '../models/villageModel.js'

// @desc    Fetch all persons from mine villages
// @route   GET /api/person/mv
// @access  Private
const getMvPersons = asynchandler(async (req, res) => {
  const villageCode = req.query.villageCode
  const year = req.query.year

  if (!year) {
    res.status(400)
    throw new Error('Error occured. Please try again.')
  }

  if (year === '2017') {
    if (villageCode) {
      const persons = await MvPerson2017.find({ villageCode })

      if (!persons) {
        res.status(400)
        throw new Error('Error occured. Please try again.')
      }

      res.status(200).json(persons)
    } else {
      const persons = await MvPerson2017.find({})

      if (!persons) {
        res.status(400)
        throw new Error('Error occured. Please try again.')
      }

      res.status(200).json(persons)
    }
  } else if (year === '2021') {
    if (villageCode) {
      const persons = await MvPerson2021.find({ villageCode })

      if (!persons) {
        res.status(400)
        throw new Error('Error occured. Please try again.')
      }

      res.status(200).json(persons)
    } else {
      const persons = await MvPerson2021.find({})

      if (!persons) {
        res.status(400)
        throw new Error('Error occured. Please try again.')
      }
      res.status(200).json(persons)
    }
  } else {
    res.status(400)
    throw new Error('Error occured. Please try again.')
  }
})

export { getMvPersons }
