const router = require('express').Router()
const CheckInRouter = require('./CheckIn/CheckInRoutes')


router.get('/', (req, res) => {
    res.status(200).json("I HATE THIS...")
}
)

router.use('/', CheckInRouter)

module.exports = router