const router = require('express-promise-router')()

const db = require('../../data/db');

router.post('/checkin', (req, res) => {
    let user = { GameName: req.body.game, DisplayName: req.body.name, Phone: req.body.phone }

    await db('waitlist')
        .insert(user)
        .then(info => {
            res.status(200).json(info)
        })
        .catch(err => {
            res.status(500).json(err)
        })
})


router.get('/allgames', (req, res) => {
    await db('waitlist')
        .then(res => {
            res.status(200).json(res)
        })
        .catch(err => {
            res.status(400).json(err)
        })
})




module.exports = router