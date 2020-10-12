const router = require('express-promise-router')()

const db = require('../../data/db');

router.post('/newpicture', async (req, res) => {

    console.log(req.body)
    await db('Photo')
        .insert({ "URL": req.body.URL, "Title": req.body.Title, "Description": req.body.Description })
        .then(info => {
            console.log("working", info)
            res.status(200).json("Photo Added Successfully")
        })
        .catch(err => {
            console.log(err)
            res.status(500).json(err)
        })
})


router.get('/allphotos', async (req, res) => {
    await db('Photo')
        .then(response => {
            console.log(response)
            res.status(200).json(response)
        })
        .catch(err => {
            res.status(400).json(err)
        })
})

router.delete('/delete', async (req, res) => {
    await db('Photo')
        .where("Photo", req.body.id)
        .delete()
        .then((deleted) => {
            res.status(204).json({ message: "success" })
        })
        .catch(err => {
            res.status(404).json({ message: "Something went wrong!!!" })
        })
})


module.exports = router