
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};


exports.rjs = function(req, res){
  res.render('index_r', { title: 'Express rjs' });
};
