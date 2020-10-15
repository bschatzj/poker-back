const router = require('express-promise-router')()

const db = require('../../data/db');
const { all } = require('../api-router');


router.get('/', async (req, res) => {
    console.log('working')
    await db('calender')
        .then(allEvents => {
            console.log(allEvents)
            res.status(200).json(allEvents)
        })
        .catch(err => {
            console.log(err)
        })
})

module.exports = router