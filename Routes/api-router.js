const router = require('express').Router()



router.get('/', (req, res) => {
    res.status(200).json("I HATE THIS...")
}
)


module.exports = router