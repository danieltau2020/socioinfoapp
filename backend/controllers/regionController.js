import asynchandler from 'express-async-handler'
import Region from '../models/regionModel.js'
import Village from '../models/villageModel.js'

// @desc    Fetch all regions and villages
// @route   GET /api/region
// @access  Private
const getRegionVillage = asynchandler(async (req, res) => {
  const regionCode = req.query.regionCode

  if (regionCode) {
    const regions = await Region.find({ regionCode })
      .populate('villages', 'villageCode villageName', Village)
      .sort({ regionCode: 1, villageCode: 1 })

    if (!regions) {
      res.status(401)
      throw new Error('Error occured. Please try again.')
    }

    res.status(200).json(regions)
  } else {
    const regions = await Region.find({ regionCode: { $ne: '1' } })
      .populate('villages', 'villageCode villageName', Village)
      .sort({ regionCode: 1, villageCode: 1 })

    if (!regions) {
      res.status(401)
      throw new Error('Error occured. Please try again.')
    }

    res.status(200).json(regions)
  }
})

export { getRegionVillage }
