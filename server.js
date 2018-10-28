var express = require('express');

var apiProxy;
var cors = require('cors');

var corsOptions = {
  origin: /hackjunction\.com$/
};

if (process.env.NODE_ENV === 'development') {
  apiProxy = require('./server/apiProxy');
} else {
  apiProxy = require('./build/apiProxy').default;
}

const app = express();
const port = process.env.PORT || 3000;
const public_path = express.static(__dirname + '/public');
const index_path = __dirname + '/public/index.html';

app.use(cors(corsOptions));
app.use(public_path);
app.use('/api', apiProxy);

const register = (req, res) => {
  res.redirect('https://register.hackjunction.com');
};
app.use('/apply', register);
app.use('/register', register);
app.get('*', function(request, response) {
  response.sendFile(index_path, function(error) {
    if (error) {
      console.log(error);
    }
  });
});
app.listen(port);
console.log('Listening at http://localhost:' + port);
