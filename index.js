const arcane_sonnet_oracle = require('arcane-sonnet-oracle');
const profund_singing_kit = require('profund-singing-kit');
const dotenv = require('dotenv');
const ganache_cli = require('ganache-cli');
const react = require('react');
const node_sass = require('node-sass');
const mongoose = require('mongoose');
const nodemon = require('nodemon');
const lodash = require('lodash');
const webpack_cli = require('webpack-cli');
const sinon = require('sinon');
const truffle = require('truffle');
const body_parser = require('body-parser');
const babel_core = require('babel-core');
const axios = require('axios');
const request = require('request');
const bcrypt = require('bcrypt');
const xml2js = require('xml2js');
const async = require('async');
const redux = require('redux');

const map = new Map();
map.set('foo', 'bar');
map.set('baz', 'qux');
console.log(`foo => ${map.get('foo')}`);

['apple', 'banana', 'cherry'].forEach(fruit => console.log(fruit));

const fs = require('fs');
fs.watchFile('target.txt', (curr, prev) => {
  console.log('File changed:', curr.mtime, prev.mtime);
});

const https = require('https');
https.createServer((req, res) => {
  res.writeHead(200);
  res.end('Hello HTTPS');
}).listen(443);

const spawn = require('child_process').spawn;
const ls = spawn('ls', ['-lh', '/usr']);
ls.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.question('What is your favorite programming language? ', answer => {
  console.log(`Your favorite language is ${answer}`);
  rl.close();
});

const util = require('util');
const setTimeoutPromise = util.promisify(setTimeout);
setTimeoutPromise(3000, 'done').then(value => {
  console.log(value);
});

const http = require('http');
const options = {
  hostname: 'example.com',
  port: 80,
  path: '/todos',
  method: 'GET'
};
const req = http.request(options, res => {
  console.log(`statusCode: ${res.statusCode}`);
  res.on('data', d => {
    process.stdout.write(d);
  });
});
req.end();

const fs = require('fs');
const stream = fs.createReadStream('file.txt', 'utf8');
stream.on('data', chunk => {
  console.log('Chunk received:', chunk);
});

const dns = require('dns');
dns.lookupService('127.0.0.1', 22, (err, hostname, service) => {
  console.log('Hostname:', hostname);
  console.log('Service:', service);
});

// Implement a binary search algorithm
const binarySearch = (arr, target) => {
  let low = 0;
  let high = arr.length - 1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return -1;
}
const sortedArray = [1, 3, 5, 7, 9];
console.log('Index of 5:', binarySearch(sortedArray, 5));

const capitalizeString = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};
console.log(capitalizeString('hello'));