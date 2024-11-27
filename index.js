const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const addSchoolRoute = require('./routes/addSchool');
const listSchoolsRoute = require('./routes/listSchools');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/addSchool', addSchoolRoute);
app.use('/listSchools', listSchoolsRoute);

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
// Testing the server
app.get("/", (req, res) => {
	return res.json({
		success: true,
		message: "Your server is up and running ...",
	});
});
