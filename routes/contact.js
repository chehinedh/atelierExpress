var express = require('express');
var router = express.Router();
var Contact = require('../model/contact');

router.get('/', function(req, res){

Contact.find(function(err, data){
    if(err) throw err;

    res.json(data);
}); 
});


router.post('/add', function(req, res) {

    var c = new Contact({
        name : req.body.name,
        phone : req.body.phone,
        email : req.body.email
    });
    c.save();
});

router.get('/delete/:id', (req,res) => {
    var ident = req.params.id;
    Contact.findByIdAndDelete({_id : ident}, (err) => {
        if (err) throw err;
    });
    res.redirect('/contact/')
});

router.post('/update/:id', (req,res) => {
    var ident = req.params.id;
    Contact.findById({_id: ident}, (err,data) => {
        data.name = req.body.name;
        data.phone = req.body.phone;
        data.email = req.body.email;
        data.save();
    });
});

module.exports = router;