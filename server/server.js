
const express = require('express');
require('dotenv').config();

const app = express();
const bodyParser = require('body-parser');
const sessionMiddleware = require('./modules/session-middleware');

const passport = require('./strategies/user.strategy');

// Route includes
const userRouter = require('./routes/user.router');
const taskRouter = require('./routes/task.router');
const personRouter = require('./routes/person.router');
const todoRouter = require('./routes/todo.router');
const galleryRouter = require('./routes/gallery.router');
const completeRouter = require('./routes/complete.router');
const feedbackRouter = require('./routes/feedback.router');

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Passport Session Configuration //
app.use(sessionMiddleware);

// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

/* Routes */
app.use('/api/person', personRouter);
app.use('/api/task', taskRouter);
app.use('/api/todo', todoRouter);
app.use('/api/user', userRouter);
app.use('/api/gallery', galleryRouter);
app.use('/api/complete', completeRouter);
app.use('/api/feedback', feedbackRouter);


// Serve static files
app.use(express.static('build'));

// App Set //
const PORT = process.env.PORT || 5000;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
