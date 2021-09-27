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
      res.status(400)
      throw new Error('Error occured. Please try again.')
    }

    res.status(200).json(regions)
  } else {
    const regions = await Region.find({ regionCode: { $ne: '1' } })
      .populate('villages', 'villageCode villageName', Village)
      .sort({ regionCode: 1, villageCode: 1 })

    if (!regions) {
      res.status(400)
      throw new Error('Error occured. Please try again.')
    }

    res.status(200).json(regions)
  }
})

// @desc    Fetch sml villages
// @route   GET /api/region/sml
// @access  Private
const getSmlVillages = asynchandler(async (req, res) => {
  const villages = await Village.find({
    $or: [
      { villageCode: '101' },
      { villageCode: '102' },
      { villageCode: '103' },
      { villageCode: '104' },
      { villageCode: '208' },
      { villageCode: '210' }
    ]
  })

  if (!villages) {
    res.status(400)
    throw new Error('Error occured. Please try again.')
  }

  res
    .status(200)
    .json([
      { _id: '10', regionCode: '10', regionName: 'SML Villages', villages }
    ])
})

export { getRegionVillage, getSmlVillages }
