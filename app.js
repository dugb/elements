const cors = require('cors');
const express = require('express');
const app = express();
app.use(cors());
const pt = require('./pt');

app.get('/api', (req, res) => {
	let result = {};
	result = { hello: 'world' };
	res.json(result);
});

app.get('/api/:p', (req, res) => {
	str = req.params.p.toLowerCase();
	// loop through each character of the string and check
	// the character and the character with its prefix and with its suffix
	let fnd1 = true;
	let fnd2 = true;
	let fnd3 = true;
	let fndFinal = true;
	for (let i = 0; i < str.length; i++) {
		//check the character
		if (pt.pt.indexOf(str[i]) > -1) {
			fnd1 = true;
		} else {
			fnd1 = false;
		}
		//check the character + its prefix
		if (pt.pt.indexOf(str[i - 1] + str[i]) > -1) {
			fnd2 = true;
		} else {
			fnd2 = false;
		}
		//check the character + its prefix
		if (pt.pt.indexOf(str[i] + str[i + 1]) > -1) {
			fnd3 = true;
		} else {
			fnd3 = false;
		}
		//console.log(str[i], fnd1, fnd2, fnd3);
		if ((fnd1 || fnd2 || fnd3) === false) {
			fndFinal = false;
			break;
		}
	}

	result = {
		name: str,
		result: fndFinal
	};
	res.json(result);
});

app.listen(3000, () =>
	console.log('Name from Elements App listening on port 3000!')
);
