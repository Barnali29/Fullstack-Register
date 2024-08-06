import express from 'express';
// Ensure this path is correct
import bcrypt from 'bcrypt';
import cors from 'cors';
import{router as  AuthRouter} from './Router/AuthRouter.js'
const app = express();
const corsOptions = {
    origin:'http://localhost:3000', // Replace with your frontend URL
    methods:["GET","POST"],
    Credential:true,
  };
  app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.send("my server is running");
});
 
app.use("/",AuthRouter);
app.listen(5000, () => {
    console.log("Server is running on port 5000");
});
