const router = require('express-promise-router')()

const db = require('../../data/db');


router.get('/', async (req, res) => {
    await db('calender')
        .then(
            res.status(200).json(allEvents)
        )
        .catch(err => {
            console.log(err)
        })
})