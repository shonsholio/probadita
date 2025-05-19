const controller = {};
const props = require('../src/props.json');

controller.main = (req,res) => {
  res.render('main');
}

controller.plantilla = (req,res) => {
  var url = req.url;
  if (url == '/ciudad-jardin'){
    var info = '409'
  } else if (url =='/buenavista'){
      var info = '704'
  } else if (url =='/granadillo'){
    var info = '306'
  } else if (url =='/la-campina'){
    var info = '501'
  } else if (url =='/paraiso'){
    var info = '100'
  } else if (url =='/tivoli'){
    var info = '102'
  } else if (url =='/villa-carolina'){
    var info = '702'
  }

  res.render('plantilla', {
    data: props,
    apto: info
  });
}  

module.exports = controller
