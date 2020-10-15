const router = require('express').Router()
const CheckInRouter = require('./CheckIn/CheckInRoutes')
const Photos = require('./Photos/PhotoRoutes')
const Events = require('./Events/EventsRoutes')

router.get('/', (req, res) => {
    res.status(200).json("I HATE THIS...")
}
)

router.use('/', CheckInRouter)
router.use('/photos', Photos)
router.use('/calendar', Events)

module.exports = router