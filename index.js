const validate = require('./validator');
const limiter = require('./rate-limitator');
const express = require('express');
//const email = require('./send-email');
const app = express();

//To get data from post body in object form or json form
app.use(express.json());

//apply to all requests (Limit the api requests per IP)
//app.use(limiter.limit);



//middleware with rate limiter
app.get('/',limiter.limit,(req,res,next) => {
     console.log('I am middleware');
     next();
});

const courses = [
    {id:1,name:'course1'},
    {id:2,name:'course2'},
    {id:3,name:'course3'}
];

app.get('/',(req,res) => {
    res.send("Hello My first route is working...");
});

app.get('/api/courses',(req,res) => {
    res.send(courses);
});


app.get('/api/courses/:id',(req,res) => {
    //Tell me how this arrow functiona is working i am little confuse about this
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course){
        return res.status(404).send('The course not available');
    }
    res.send(course);
});

app.post('/api/courses',(req,res) => {
    const { error } = validate.validator(req.body); //result.error
    if (error){
        return res.status(400).send(error.details[0].message)
    };

    const course = {
        id: courses.length + 1,
        name:req.body.name
    };
    courses.push(course);
    res.send(course)
});



app.put('/api/courses/:id',(req,res) =>{
    //if course doest not exist
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course){
        return res.status(404).send('The course not available'); 
    }

    //validate
    const { error } = validate.validator(req.body); //result.error
    
    if (error){
        return res.status(400).send(error.details[0].message) 
    };

    course.name = req.body.name;
    res.send(course);
});

app.delete('/api/courses/:id',(req,res) => {
    //if course doest not exist
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course){
        return res.status(404).send('The course not available'); 
    }

    const index = courses.indexOf(course);
    courses.splice(index,1);

    res.send(course);
});



const port = process.env.PORT || 3000;
app.listen(port,() => console.log(`Listing on port ${port}...`));
