var express = require('express');
var q = require('q'); 
var app = express();

var router = express.Router();



router.get('/',function(req,res,next){
	console.log('in');
	var response = "Hello World";
	changeResponse().then(function(newRes){
		res.status(200).send(newRes)
	});
	function changeResponse(){
		var deferred =q.defer();
		setTimeout(function(){
		 response = "Another response ";
		deferred.resolve(response);
	},1000);
	return deferred.promise;
	}
	
});
app.use('/',router);
app.use(function(req, res) {
	console.log();
    res.status(404).send(req.url+' Route Not Found');
});

app.use(function(req, res, next){
  res.status(404);

  res.format({
    html: function () {
      res.render('404', { url: req.url })
    },
    json: function () {
      res.json({ error: 'Not found' })
    },
    default: function () {
      res.type('txt').send('Not found')
    }
  })
});

app.set('port',process.env.PORT || 3000);

app.listen(app.get('port') ,function(){
	console.log('Application is runnig on port '+app.get('port'));
}); 

//module.exports = router;