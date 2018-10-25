module.exports = {
    getCouches: (req, res) => {
        req.app.get('db').get_couches().then(couches => {
            res.json(couches); 
        }).catch(error => {
            console.log('ERROR getting couches', error); 
            res.status(500).json({ message: 'Blah blah' }); 
        }); 
    }, 
    postCouch: (req, res) => {
        req.app.get('db').create_couch({
            user_id: req.session.user.id,
            name: req.body.name, 
            price: req.body.price, 
            image: req.body.image
        }).then(couches => {
            res.json(couches[0]); 
        }).catch(error => {
            console.log('ERROR getting couches', error); 
            res.status(500).json({ message: 'Blah blah blah' }); 
        }); 
    }
}
