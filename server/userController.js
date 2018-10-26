module.exports = {
    getUserData: (req, res) => {
        res.status(200).json(req.session.user); 
    }
}