const controller = {};
const fs = require('fs');

controller.main = (req,res) => {
    // res.send('ARRANCAMOS')
  res.render('main');
}

controller.luisfer = (req,res) => {
    // res.send('SOY LUISFER')
  res.render('luisfer');
}

// controller.cj = (req,res) => {
//   const data = fs.readFileSync('./src/props.json', 'utf8');
//   const info = JSON.parse(data);

//   info.forEach(element => {
//   });
//   res.render('ciudad-jardin', {
//     data: info
//   }); 
// }

module.exports = controller ;