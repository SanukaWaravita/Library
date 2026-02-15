# 1. Setup & Run

```js
node -v             # check version
npm init -y         # create packagee.json
node index.js       # run file 
```

# 2. Core Modules

```js
const fs = require('fs');
const path = require('path');
const os = require('os');

// Reading file
fs.readfile('file.txt', 'utf8', (err, data) => {
    console.log(data);
});

// Writing file
fss.writeFile('file.txt', 'Hello Node', () => {});
```

# 3. Creating a Server

```js
const http = require('http');

http.createServer((req, res) => {
    res.write('Hello World');
    res.end();
}).listen(3000);
```

# 4. Express.js Basics

```js
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello Express');
});

app.listen(3000);
```

# 5. Middleware in Express

```js
app.use(express.json());    // built-in middleware

// Custom middleware
app.use((req, res, next) => {
    console.log('Request recieved');
    next();
});
```

# 6. REST API with Express

```js
app.get('/users', getUsers);
app.post('/users', addUser);
app.put('/users/:id', updateUser);
app.delete('/users/:id', deleteUser);
```

# 7. Working with JSON

```js
const data = {
    name: "Node",
    version: "18"
};

const str = JSON.stringify(data);
const obj = JSON.parse(str);
```

# 8. Module System

```js
// utils.js
function greet(name) {
    return 'Hello ${name}';
}
module.exports = greet;

// index.js
const greet = require('./utils');
console.log(greet('Nikhil'));
```

# 9. Environment Variables

```js
# .env file
PORT = 5000

// index.js
require('dotenv').config();
console.log(process.env.PORT);
```

# 10. Error Handling

```js
app.user((err, req, res, next) => {
    res.status(500).send({ message: err.message });
});
```

# 11. File Uploads

```js
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

app.post('/upload', upload.single('file'), (req, res) => {
    res.send('File uploaded');
});
```

# 12. JWT Authentication

```js
const jwt = require('jsonwebtoken');

const token = jwt.sign({ id: 1 }, 'secret', { expiresIn: '1h' });

jwt.verify(token, 'secret', (err, decoded) => {
    console.log(decoded);
});
```

# 13. Async/ Await

```js
async function getData() {
    try{
        const res = await fetch('url');
        const data = await res.json();
    } catch (err) {
        console.error(err);
    }
}
```

# 14. Connecting to MongoDB

```js
const mongoose - require('mongoose');

mongooese.connect('mongodb://localhost/test')
    .then(() => console.log('connected'))
    .catch(err => console.error(err));
```

# 15. Events & EventEmitter

```js
const EventEmitter = require('events');
const emitter = new EventEmitter();

emitter.on('message', () => {
    console.log('Message event triggered');
});

emitter.emit('message');
```

# 16. Nodemon (Auto-reload)

```js
npm install -D nodemon
# package.json
"scripts": {
    "dev": "nodemon index.js"
}
npm run dev
```