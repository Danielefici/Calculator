const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());


app.post('/calcolatrice', (req, res) => {
  const {oper1,oper2,op} = req.body;
  
  
  let risultato = { "risultato": 0 };

  switch (op) {
    case 'add':
      risultato.risultato = oper1 + oper2;
      break;
    case 'sott':
      risultato.risultato = oper1 - oper2;
      break;
    case 'molt':
      risultato.risultato = oper1 * oper2;
      break;
    case 'divi':
      if (oper2 !== 0) {
        risultato.risultato = oper1 / oper2;
      } else {
        risultato.risultato = 'errore';
      }
      break;
    default:
      risultato.risultato = 0;
  }
  
   res.setHeader('Content-Type', 'application/json; charset=utf-8'); 
   res.json(risultato);
   
   
});

app.listen(port, () => {
  console.log(`In ascolto sul porto ${port}`);
});
