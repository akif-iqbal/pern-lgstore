const express = require('express');
const app = express();
const cors = require('cors');
const pool = require('./db');

//middleware
app.use(cors());
app.use(express.json());        //req.body

app.listen(5000, () => {
    console.log('server has started on port 5000');
});

//ROUTES

//create a employee

app.post("/employee", async(req,res) => {
    try{

        const { eid, ename } = req.body;
        const newEmp = await pool.query(
            "INSERT INTO employee (eid, ename) VALUES($1, $2) RETURNING *",
            [eid, ename]
        );

        res.json(newEmp);
    } catch (err) {
        console.error(err.message);
    }
});

//get all employees

app.get("/employee", async(req,res) => {
    try{

        const allEmp = await pool.query("SELECT * FROM employee");

        res.json(allEmp.rows);

    } catch (err){
        console.error(err.message);
    }
});

//get an employee

app.get("/employee/:eid", async(req,res) => {
    try{

        const { eid } = req.params;
        const getEmp = await pool.query("SELECT * FROM employee WHERE eid = $1", [eid]);

        res.json(getEmp.rows);

    } catch (err) {
        console.error(err.message);
    }
});

//update an employee

app.put("/employee/:eid", async(req,res) =>{
    try{

        const { eid } = req.params;
        const { ename } = req.body;
        const updateEmp = await pool.query(
            "UPDATE employee SET ename = $1 WHERE eid = $2", [ename, eid]);
        
        res.json("Employee was updated");

    } catch (err) {
        console.error(err.message);
    }

});

//delete an employee