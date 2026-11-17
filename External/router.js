import express from 'express';
const app = express();
const router = express.Router();


router.get('/', (req, res) => {
    res.send("Home Page!");
});

router.get('/details', (req,res) => {
    res.send("Details Page");
})

app.use('/', router);
app.listen(3000, () => {
  console.log(`Server is running at http://localhost:3000`);
});