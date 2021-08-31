import asyncHandler from 'express-async-handler'
import Region from '../models/regionModel.js'
import Village from '../models/villageModel.js'

// @desc    Fetch all regions and villages
// @route   GET /api/region
// @access  Public
const getRegionVillage = asyncHandler(async (req, res) => {
  const regions = await Region.find({})
    .populate('villages', 'villageCode villageName', Village)
    .sort({ regionCode: 1, villageCode: 1 })

  res.status(200).json(regions)
})

export { getRegionVillage }
