const router = require('express').Router();
const controllers= require('../../controllers');
const auth = require('../../auth/auth');

router.get('/',
        auth.isAuthenticated(),
        controllers.login.profile.serveProfilePage);

module.exports = router;