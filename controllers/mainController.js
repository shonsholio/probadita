const controller = {};
const props = require('../src/props.json');
const info = '409'

controller.main = (req,res) => {
  res.render('main');
}

controller.plantilla = (req,res) => {
  res.render('plantilla', {
    data: props,
    apto: info
  });
}  

module.exports = info
module.exports = controller
