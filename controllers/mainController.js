const controller = {};
const props = require('../src/props.json');

controller.main = (req,res) => {
  res.render('main');
}

controller.luisfer = (req,res) => {
  res.render('luisfer', {
    data: props
  }); 
}  

module.exports = controller
