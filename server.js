const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;
const quizRoute = require('./router/quiz')
const jobsheetRoute = require('./router/jobsheet')
const userRouter = require('./router/user')

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

const db = require('./models')
db.Sequelize.sync()

app.get('/', (req, res) => {
    res.send('Quiz ExpressJS API by Shinta');
});

app.use('/api/quiz_rewait', quizRoute)
app.use('/api/jobsheet_rewait', jobsheetRoute)
app.use('/api/user_rewait', userRouter)

app.listen(port, () => console.log(`App listening on port http://localhost:${port}!`));