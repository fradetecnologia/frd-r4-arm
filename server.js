const util = require('util');
const express = require('express');
const exec = util.promisify(require('child_process').exec);
const app = express();

const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/on/:relay', async (req, res) => {
  await exec(`i2cset -y 1 0x10 0x${req.params.relay} 0xFF`)
  res.send('OK')
})

app.get('/off/:relay', async (req, res) => {
  await exec(`i2cset -y 1 0x10 0x${req.params.relay} 0x00`)
  res.send('OK')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})