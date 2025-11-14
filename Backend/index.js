import express, { raw } from 'express';
import cors from 'cors';

const app = express();
app.use(express.json())
app.use(cors({origin:'*'}))
const PORT = 3000;

app.post("/", (req,res)=>{
    console.log(req.body.username)
    console.log(req.body.password)
})

app.listen(PORT, ()=>{
    console.log("Server is running", PORT)
})