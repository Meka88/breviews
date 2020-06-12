// const config = require("config");
// const db = config.get("mongoURI");
const mongoose = require('mongoose');

// keys for production are setup in heroku dashboard
const db = `mongodb+srv://${process.env.DATABASE_USER}:${process.env.DATABASE_PASSWORD}@users-rsup3.mongodb.net/${process.env.DATABASE_NAME}?retryWrites=true&w=majority`

const connectDB = async () => {
	try {
		await mongoose.connect(db, {
			useNewUrlParser: true,
			useCreateIndex: true,
			useFindAndModify: false,
			useUnifiedTopology: true
		});
		console.log('MongoDB Running...');

	} catch (err) {
		console.error(err.message);
		// Exit process with failure
		process.exit(1);
	}
};

module.exports = connectDB;


