const controller = {};
const props = require('../src/props.json');

controller.main = (req,res) => {
  res.render('main');
}

controller.plantilla = (req,res) => {
  var prueba = req.url;
  if (prueba == '/ciudad-jardin'){
    var info = '409'
  } else if (prueba =='/granadillo'){
    var info = '306A'
  }
  res.render('plantilla', {
    data: props,
    apto: info
  });
}  

module.exports = controller
