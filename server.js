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

app.get('/rewaitapp', (req, res) => {
    res.send('Rewait API by Tifany');
});
app.use('/rewaitapp/api/quiz_rewait', quizRoute)
app.use('/rewaitapp/api/jobsheet_rewait', jobsheetRoute)
app.use('/rewaitapp/api/user_rewait', userRouter)

app.listen(port, () => console.log(`App listening on port http://localhost:${port}!`));