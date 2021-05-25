const router = require("express").Router();
const storesCtrl = require('../controllers/stores.js')


//store 
router.get('/dashboard', checkAuth,  storesCtrl.index,)
router.get('/', checkAuth, storesCtrl.show)
router.post('/', checkAuth, storesCtrl.create)
// daily sales 
router.get('/submit', checkAuth, storesCtrl.submitForm)
router.post('/submit', checkAuth, storesCtrl.submitSales)



function checkAuth(req, res, next) {
  return req.user ? next() : res.status(401).json({msg: 'Not Authorized'});
}

module.exports = router; 