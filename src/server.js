const { PORT } = require('./config')
const app = require('./app')


app.listen(PORT, () => {
  console.log('Serving on 8080');
});