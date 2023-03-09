const express = require('express');
const app = express();
const router = express.Router();
const userCtrl = require('../controllers/users.controller');

router.get('/', userCtrl.home);
router.post('/login', userCtrl.login);
//router.post('/signup', userCtrl.signup);

module.exports = router;
