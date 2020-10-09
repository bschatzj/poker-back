const router = require('express-promise-router')()

const db = require('../../data/db');

router.post('/checkin', async (req, res) => {

    console.log(req.body)
    await db('waitlist')
        .insert({ "GameName": req.body.game, "DisplayName": req.body.name, "Phone": req.body.phone })
        .then(info => {
            console.log("working", info)
            res.status(200).json(info)
        })
        .catch(err => {
            console.log(err)
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

router.delete('/cancel', async (req, res) => {
    await db('waitlist')
        .where(req.user == waitlist)
        .delete()
        .then((deleted) => {
            res.status(204).json({ message: "success" })
        })
        .catch(err => {
            res.status(404).json({ message: "Something went wrong!!!" })
        })
})


module.exports = router