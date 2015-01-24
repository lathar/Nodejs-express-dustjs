
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Welcome to Base App with Express and dust' });
};