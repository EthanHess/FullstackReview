module.exports = {
    getUserData: (res, req) => {
        res.status(200).json(req.session.user); 
    }
}