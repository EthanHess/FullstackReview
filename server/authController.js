
const axios = require('axios'); 

module.exports = {
    logout: (req, res) => {
        req.session.destroy(); 
        res.status(200).json({ message: "Succesfully logged out" }); 
    }, 
    handleCallback: (req, res) => {

        exchangeCodeForAccessToken()
        .then(exchangeAccessTokenForUserInfo)
        .then(storeUserInfoInDatabase)
        .catch(error => {
            console.error(error)
            res.status(500).send('--- Server error')
        }); 

        function exchangeCodeForAccessToken() {
            const payload = {
                client_id: process.env.REACT_APP_AUTH0_CLIENT_ID, 
                client_secret: process.env.AUTH0_CLIENT_ID, 
                code: requ.query.code, 
                grant_type: 'authorization_code', 
                redirect_uri: `http://${req.headers.host}/auth/callback`
            }
            console.log('--- payload', payload); 
            return axios.post(`https://${process.env.REACT_APP_AUTH0_DOMAIN}/oauth/token`, payload); 
        }  

        function exchangeAccessTokenForUserInfo(accessTokenResponse) {
            const accessToken = accessTokenResponse.data.access_token; 
            console.log('--- access token', accessToken); 
            const url = `https://${process.env.REACT_APP_AUTH0_DOMAIN}/userinfo?access_token=${accessToken}`; 
            console.log('--- user info url', url); 
            return axios.get(url); 
        }

        function storeUserInfoInDatabase(userInfoResponse) {
            const userData = userInfoResponse.data; 
            console.log('--- user data', userData); 
            return req.app.get('db').get_user({ auth0Id: userData.sub }).then(users => {
                if (users.length) {
                    const user = users[0]; 
                    req.session.user = user; 
                    res.redirect('/cool-couches'); 
                } else {
                    return req.app.get('db').create_user({
                        auth0_id: userData.sub, 
                        email: userData.email, 
                        name: userData.name, 
                        picture: userData.picture
                    }).then(newUsers => {
                        const newUser = newUsers[0]; 
                        req.sessionuser = newUser; 
                        res.redirect('/cool-couches'); 
                    }).catch(error => {
                        console.log('--- error inserting user into databse', error); 
                        res.status(500).send('An unexpected error happened server side'); 
                    })
                }
            })
        }
    }
}