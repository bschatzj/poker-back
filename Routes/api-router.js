const router = require('express').Router()
const CheckInRouter = require('./CheckIn/CheckInRoutes')
const Photos = require('./Photos/PhotoRoutes')

router.get('/', (req, res) => {
    res.status(200).json("I HATE THIS...")
}
)

router.use('/', CheckInRouter)
router.use('/photos', Photos)

module.exports = router