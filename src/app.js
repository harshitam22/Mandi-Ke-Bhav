const express = require("express");
const path = require("path");
const app = express();
const hbs = require("hbs");
require("./db/conn");
const Register = require("./models/register");
const async = require("hbs/lib/async");
const exp = require("constants");
const Feedback = require('./models/feedback');


const port=process.env.PORT || 3300;


const static_path="C:/Users/DELL/Desktop/Projects/Mandi Ke Bhav/public"
const template_path="C:/Users/DELL/Desktop/Projects/Mandi Ke Bhav/templates/views"
const partials_path="C:/Users/DELL/Desktop/Projects/Mandi Ke Bhav/templates/partials"

app.use(express.json());
app.use(express.urlencoded({extended:false}));


app.use(express.static(static_path));
app.set("view engine","hbs");
app.set("views",template_path);
hbs.registerPartials(partials_path);


app.get("/",(req, res)=>{
    res.render("index");
})

app.get("/register",(req, res)=>{
    res.render("register");
})

app.get("/login" , (req,res)=>{
    res.render("login");
})

app.get("/feedback" , (req,res)=>{
    res.render("feedback");
})

app.get("/FAQ" , (req,res)=>{
    res.render("FAQ");
})

app.get("/fruits" , (req,res)=>{
    res.render("fruits");
})

app.get("/vegetables" , (req,res)=>{
    res.render("vegetables");
})

app.get("/services",(req, res)=>{
    res.render("services");
})

app.get('*', (req, res) => {
    res.redirect('/');
});

app.post("/register", async (req, res) => {
    try {
        const registerEmployee = new Register({
            full_name: req.body.full_name,
            email: req.body.email,
            password: req.body.password,
        });

        const registered = await registerEmployee.save();
        res.render("register", { success: "Registration successful!." });
    } catch (error) {
        res.status(400).send(error);
    }
});

app.post("/login", async (req, res) => {
    try {
        const email = req.body.email;
        const password = req.body.password;

        const user = await Register.findOne({ email: email });

        if (user && user.password === password) {
            // Successful login
            res.render("index", { success: "Login successful! Welcome back." });
        } else {
            res.render("login", { error: "Invalid email or password. Please try again." });
        }
    } catch (error) {
        res.status(400).send("Invalid");
    }
});

app.post("/feedback", async(req, res)=>{
    try {
                const feed = new Feedback({
                textAreaData: req.body.textAreaData,
               
                createdAt: Date.now()
            })
    
            const newFeedback = await feed.save();
            res.status(201).render("index");
       
    } catch (error) {
        res.status(400).send(error);
    }
})


app.listen(port, ()=>{
    console.log(`Server is Running at http://localhost:${port}`);
})

