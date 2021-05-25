const Store = require("../models/store");
const User = require("../models/user");


module.exports = {
    index, 
    update,
    show, 
    create,
    submitSales,
    submitForm,
}

// refactored 
function create(req, res) {
  req.body.addedBy = req.user._id
  Store.create(req.body)
  .then(snippet => {res.json(snippet)})
  .catch(err => {res.json(err)})
}

function update(req,res) {
  console.log(`req.params.id: `, req.params.id)
  console.log(`req.body: `, req.body)
  Store.findByIdAndUpdate(req.params.id, req.body)
    .then(store => {res.json(store)})
    .catch(err => res.json(err))
}


//  not refactored
function submitForm(req, res) {
    Store.findById(req.params.id,)
    .then((stores) => {
      res.render('stores/submit', {
          title: 'Submit Daily Sales',   
          stores, 
          user: req.user
          })
      })
  }
  
function submitSales(req, res) {
  User.findById(req.user)
  .populate('storeId').exec(function(err, user) {
  Store.findById(user.storeId)
  .then((store) => {
    console.log(store)
    store.dailysales.push(req.body)
    store.save()
        .then(() => {
      res.redirect('/')
      });
    });
  })
}



function show(req, res) {
    Store.findById(req.params.id,)
    .then((stores) => {
      res.render('stores/show', {
          title: 'Store Details',   
          stores, 
          user: req.user
          })
      })
  }

  // refactor with fetch, possibly move out of this controller?
function index(req, res) {
  Store.findById({storeid: req.user._id})
  axios
  .get(`https://api.weatherapi.com/v1/current.json?key=${process.env.WEATHER_KEY}=Watauga,TX&aqi=no`)
  .then((response, store) => {
      console.log(response.data);
      res.render('stores/dashboard', {title: "Dashboard", user: req.user, results: response.data, store,})
  })
}
