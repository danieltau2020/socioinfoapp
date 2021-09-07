import asynchandler from 'express-async-handler'
import CmcaPerson2017 from '../models/cmcaPerson2017Model.js'
import CmcaPerson2021 from '../models/cmcaPerson2021Model.js'

// @desc    Fetch all persons from cmca regions
// @route   GET /api/person
// @access  Private
const getCmcaPersons = asynchandler(async (req, res) => {
  const villageCode = req.query.villageCode
  const year = req.query.year

  if (!year) {
    res.status(400)
    throw new Error('Error occured. Please try again.')
  }

  if (year === '2017') {
    if (villageCode) {
      const persons = await CmcaPerson2017.find({ villageCode })

      if (!persons) {
        res.status(400)
        throw new Error('Error occured. Please try again.')
      }

      res.status(200).json(persons)
    } else {
      const persons = await CmcaPerson2017.find({})

      if (!persons) {
        res.status(400)
        throw new Error('Error occured. Please try again.')
      }

      res.status(200).json(persons)
    }
  } else if (year === '2021') {
    if (villageCode) {
      const persons = await CmcaPerson2021.find({ villageCode })

      if (!persons) {
        res.status(400)
        throw new Error('Error occured. Please try again.')
      }

      res.status(200).json(persons)
    } else {
      const persons = await CmcaPerson2021.find({})

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

export { getCmcaPersons }
