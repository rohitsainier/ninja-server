const express = require('express');
const app = express();

//To get data from post body in object form or json form
app.use(express.json());

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
        res.status(404).send('The course not available');
    }
    res.send(course);
});

app.post('/api/courses',(req,res) => {
    const course = {
        id: courses.length + 1,
        name:req.body.name
    };
    courses.push(course);
    res.send(course)
});

const port = process.env.PORT || 3000;
app.listen(port,() => console.log(`Listing on port ${port}...`));
