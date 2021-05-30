const express = require('express');
const app = express();
const path = require('path');

const port = process.env.PORT || 3000;

const staticFilePath = path.join(__dirname, '../public');
const templatesPath = path.join(__dirname, '../public/templates');
app.use(express.static(staticFilePath));

app.get('/about', (req, res) => {
   res.sendFile(path.join(templatesPath, '/about.html'));
});

app.get('/help', (req, res) => {
   res.sendFile(path.join(templatesPath, '/help.html'));
});


app.get('/product', (req, res) => {
   if (!req.query.address) {
      return res.status(400).send({ error: 'Address is missing' })
   }

   return res.status(200).send({ products: [] });
});


const server = app.listen(port, () => {
   console.log(`Server is running at port ${port}`);
});
