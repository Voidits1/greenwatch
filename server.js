const express = require('express');
const SerialPort = require('serialport');
const Readline = require('@serialport/parser-readline');

const app = express();
const port = 3000;

// Replace 'COM_PORT' with your Arduino port
const serialPort = new SerialPort({ path: 'COM_PORT', baudRate: 9600 });
const parser = serialPort.pipe(new Readline({ delimiter: '\n' }));

app.use(express.static('public')); // Serve static files

let currentTemperature = 'N/A';

parser.on('data', (data) => {
  currentTemperature = data.trim();
});

app.get('/data', (req, res) => {
  res.json({ temperature: currentTemperature });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});