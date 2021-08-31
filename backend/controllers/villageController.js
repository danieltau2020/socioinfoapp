import asynchandler from 'express-async-handler'
import Village from '../models/villageModel.js'
import Region from '../models/regionModel.js'

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

export { updateRegionObjectId }
