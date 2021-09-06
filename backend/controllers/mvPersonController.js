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
    res.status(401)
    throw new Error('Error occured. Please try again.')
  }

  if (year === '2017') {
    if (villageCode) {
      const persons = await MvPerson2017.find({ villageCode })

      if (!persons) {
        res.status(401)
        throw new Error('Error occured. Please try again.')
      }

      res.status(200).json(persons)
    } else {
      const persons = await MvPerson2017.find({})

      if (!persons) {
        res.status(401)
        throw new Error('Error occured. Please try again.')
      }

      res.status(200).json(persons)
    }
  } else if (year === '2021') {
    if (villageCode) {
      const persons = await MvPerson2021.find({ villageCode })

      if (!persons) {
        res.status(401)
        throw new Error('Error occured. Please try again.')
      }

      res.status(200).json(persons)
    } else {
      const persons = await MvPerson2021.find({})

      if (!persons) {
        res.status(401)
        throw new Error('Error occured. Please try again.')
      }
      res.status(200).json(persons)
    }
  } else {
    res.status(401)
    throw new Error('Error occured. Please try again.')
  }
})

// @desc    Update village id
// @route   GET /api/person/updatevillageid
// @access  Public
const updateVillageObjectId = asynchandler(async (req, res) => {
  let persons = await Person.find({}).lean()
  const villages = await Village.find({})

  persons = persons.map((pers) => {
    return {
      ...pers,
      village: villages.find((vill) => vill.villageCode === pers.villageCode)
        ._id
    }
  })

  await Person.bulkWrite(
    persons.map((pers) => ({
      updateOne: {
        filter: { _id: pers._id },
        update: pers,
        upsert: true
      }
    }))
  )

  res.json(persons)
})

export { getMvPersons, updateVillageObjectId }
