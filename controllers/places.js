const router = require('express').Router()


router.post('/', (req, res) => {
    console.log(req.body)
    res.send('POST /places')
})
    

router.get('/new', (req, res) => {
    res.render('places/new')
})

router.get('/', (req, res) => {
    let places = [{
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: 'images/tacos.jpg'
    }, {
        name: 'Coding Cat Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: 'images/coffee.jpg'
    }]      
    res.render('places/index', {places})
})

// router.post('/', (req, res) => {
//     res.render('/places')
// })

module.exports = router