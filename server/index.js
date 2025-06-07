//CLI: npm install express body-parser --save
const express = require('express');
const app = express();
// middlewares
const bodyParser = require('body-parser');
app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '10mb' }));
// apis
app.get('/hello', (req, res) => { res.json({ message: 'Hello from server!' }); });
app.use('/api/admin', require('./api/admin'));
app.use('/api/customer', require('./api/customer'));

// deployment
const path = require('path');
const fs = require('fs');
// '/admin' serve the files at client-admin/build/* as static files
const adminBuildPath = path.resolve(__dirname, '../client-admin/build');
if (fs.existsSync(adminBuildPath)) {
  app.use('/admin', express.static(adminBuildPath));
  app.get('/admin/*', (req, res) => {
    res.sendFile(path.join(adminBuildPath, 'index.html'));
  });
}
// '/' serve the files at client-customer/build/* as static files
const customerBuildPath = path.resolve(__dirname, '../client-customer/build');
if (fs.existsSync(customerBuildPath)) {
  app.use('/', express.static(customerBuildPath));
  app.get('*', (req, res) => {
    res.sendFile(path.join(customerBuildPath, 'index.html'));
  });
}

// export for serverless
module.exports = app;

if (!process.env.VERCEL) {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
  });
}

