import asynchandler from 'express-async-handler'
import Village from '../models/villageModel.js'

// @desc    Fetch mine villages
// @route   GET /api/villages/mv
// @access  Private
const getMineVillages = asynchandler(async (req, res) => {
  const villages = await Village.find({ villageCode: '101' }).sort({
    villageCode: 1
  })

  res.status(200).json(villages)
})

const updateRegionObjectId = asynchandler(async (req, res) => {
  let villages = await Village.find({}).lean()
  const regions = await Region.find({})

  villages = villages.map((vill) => {
    return {
      ...vill,
      region: regions.find((reg) => reg.regionCode === vill.regionCode)._id
    }
  })

  await Village.bulkWrite(
    villages.map((vill) => ({
      updateOne: {
        filter: { _id: vill._id },
        update: vill,
        upsert: true
      }
    }))
  )

  res.json(villages)
})

export { getMineVillages, updateRegionObjectId }
