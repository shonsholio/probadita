const controller = {};
const fs = require('fs');

controller.main = (req,res) => {
  res.render('main');
}

controller.luisfer = (req,res) => {
  // res.render('luisfer');

  const data = fs.readFileSync('./src/props.json', 'utf8');
  const info = JSON.parse(data);

  info.forEach(element => {
  });
  res.render('luisfer', {
    data: info
  }); 
}  

module.exports = controller