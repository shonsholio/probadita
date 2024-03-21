const controller = {};
const props = require('../src/props.json');

controller.main = (req,res) => {
  res.render('main');
}

controller.plantilla = (req,res) => {
  var url = req.url;
  if (url == '/ciudad-jardin'){
    var info = '409'
  } else if (url =='/granadillo'){
    var info = '306A'
  } else if (url =='/la-campina'){
    var info = '501A'
  }
  
  res.render('plantilla', {
    data: props,
    apto: info
  });
}  

module.exports = controller
