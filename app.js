const express = require('express');
const { sequelize, config } = require('./configuration');

// Libraries
const cors = require('cors');

const app = express();
// Middlewares
app.use(cors());
app.use(express.json());

// Settings
const PORT = config.PORT || 3000;

// Routes
const routes = require('./api/routes');
app.use(routes);

// Connect to DB
sequelize
  .sync()
  .then(() => {
    console.log('Sync DB');
  })
  .catch((err) => console.log(err));

app.listen(PORT, () => {
  console.log(`La app ha arrancado en http://localhost:${PORT}`);
});
