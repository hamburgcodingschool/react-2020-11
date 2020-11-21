const jwt = require('jsonwebtoken');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const port = process.env.PORT || 8000;
const secretKey = process.env.SECRET_KEY || 'keyToSignUserTokensWith';

async function validateAuth(req, res, next) {
	if (req.headers && req.headers.authorization) {
		const token = req.headers.authorization.replace('Bearer ', '');
		try {
			const { username } = await jwt.verify(token, secretKey);
			req.user = { username };
			return next();
		} catch (e) {
			console.error(e);
		}
	}
	res.status(403).json({ error: 'you must be logged in to access this resource'});
}

app.use(bodyParser.json());
app.get('/', (req, res) => {
  res.json({message: 'Hello World'})
})
app.post('/login', async (req, res) => {
	console.log(req.body)
	const { username, password } = req.body;

	if (username !== 'admin' || password !== 'demo') {
		res.status(401).json({ error: 'Invalid user or password'});
	}

	const token = await jwt.sign({ username }, secretKey);
	res.json({ token });
})
app.get('/user/me', validateAuth, (req, res) => {
	res.json(req.user);
});

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`)
})
