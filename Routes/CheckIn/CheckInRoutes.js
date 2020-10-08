const router = require('express-promise-router')()

const { response } = require('express');
const db = require('../../data/db');

router.post('/checkin', async (req, res) => {
    let user = { GameName: req.body.game, DisplayName: req.body.name, Phone: req.body.phone }

    await db('waitlist')
        .insert(user)
        .then(info => {
            console.log(info)
            res.status(200).json(info)
        })
        .catch(err => {
            res.status(500).json(err)
        })
})


router.get('/allgames', async (req, res) => {
    await db('waitlist')
        .then(response => {
            console.log(response)
            res.status(200).json(response)
        })
        .catch(err => {
            res.status(400).json(err)
        })
})




module.exports = router