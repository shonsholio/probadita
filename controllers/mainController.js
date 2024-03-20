const controller = {};
const props = require('../src/props.json')

controller.main = (req,res) => {
  res.render('main');
}

controller.luisfer = (req,res) => {
  res.render('luisfer', {
    data: props
  }); 
}  

  // const info = {
  //                 propiedad: 409,
  //                 ubicacion: 'Ciudad Jardin',
  //                 habitacion: 1
  // };

  // const info = JSON.parse(props);

  // const data = fs.readFileSync('./src/props.json', 'utf8');

  // res.render('luisfer');
  // info.forEach(element => {
  // });

module.exports = controller
