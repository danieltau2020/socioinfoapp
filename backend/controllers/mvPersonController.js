import asynchandler from 'express-async-handler'
import MvPerson2017 from '../models/mvPersonModel2017.js'
import MvPerson2021 from '../models/mvPersonModel2021.js'
import Village from '../models/villageModel.js'

// @desc    Fetch all persons from mine villages
// @route   GET /api/person/mv
// @access  Private
const getMvPersons = asynchandler(async (req, res) => {
  const villageCode = req.query.villageCode
  const year = req.query.year

  if (year === '2017') {
    if (villageCode) {
      const persons = await MvPerson2017.find({ villageCode })

      res.status(200).json(persons)
    } else {
      const persons = await MvPerson2017.find({})

      res.status(200).json(persons)
    }
  } else if (year === '2021') {
    if (villageCode) {
      const persons = await MvPerson2021.find({ villageCode })
      res.status(200).json(persons)
    } else {
      const persons = await MvPerson2021.find({})
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
