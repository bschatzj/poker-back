const router = require('express-promise-router')()

const db = require('../../data/db');


router.get('/', async (req, res) => {
    console.log('working')
    await db('calendar')
        .then(allEvents => {
            console.log(allEvents)
            res.status(200).json(allEvents)
        })
        .catch(err => {
            console.log(err)
        })
})


router.post('/newevent', async (req, res) => {
    await db('calendar')
        .insert(req.body)
        .then(event => {
            console.log(event)
            res.status(200).json("Event Added")
        })
        .catch(err => {
            console.log(err)
            res.status(500).json("Error Adding Event")
        })
})

module.exports = router