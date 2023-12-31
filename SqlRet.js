const express = require("express");
const sql = require('msnodesqlv8');
const cors = require('cors');
const server = 'W-674PY03-2';
const driver = 'ODBC Driver 17 for SQL Server';
const db = 'Abhilash_DB';
const pwd = 'Password@123456-=';
const uid = 'SA'
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const conString = `Driver=${driver};Server=${server};Database=${db};uid=${uid};pwd=${pwd};`;
app.get("/Users", (req, res) => {
    const query = "SELECT * FROM UserTable01";
    sql.query(conString, query, (err, rows) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send(rows);
        }
    })
});

app.get("/GetOtp", (req, res) => {
    const query = "SELECT OTP FROM UserTable01 where Flag=2";
    sql.query(conString, query, (err, rows) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send(rows);
        }
    })
});

app.get("/UsersCount", (req, res) => {
    const query = "SELECT Count(UserId) FROM UserTable01 where Flag=3";
    sql.query(conString, query, (err, rows) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send(rows);
        }
    })
});

app.get("/UserPremium", (req, res) => {
    const query = "SELECT HealthPremium FROM UserTable01 where Flag=3";
    sql.query(conString, query, (err, rows) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send(rows);
        }
    })
});

app.get("/Users/:id", (req, res) => {
    const id=req.params.id;
    const query = `SELECT * FROM UserTable01 where UserId=${id}`
    sql.query(conString, query, (err, rows) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send(rows);
        }
    })
});

app.get("/GetTenure", (req, res) => {
    const id=req.params.id;
    const query = `SELECT Tenure FROM UserTable01 where Flag=3`
    sql.query(conString, query, (err, rows) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send(rows);
        }
    })
});

app.get("/UserByFlag", (req, res) => {
    const id=req.params.id;
    const query = `SELECT * FROM UserTable01 where Flag=3`
    sql.query(conString, query, (err, rows) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send(rows);
        }
    })
});

app.get("/Vehicles", (req, res) => {
    const query = "SELECT * FROM VehicleTable";
    sql.query(conString, query, (err, rows) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send(rows);
        }
    })
});

app.get("/getUserName",(req,res)=>{
    const query = "SELECT UserName FROM UserTable01 where Flag=3";
    sql.query(conString, query, (err, rows) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send(rows);
        }
    })
})
 
app.get("/Vehicles/:id", (req, res) => {
    const id=req.params.id;
    const query = `SELECT * FROM VehicleTable where VehicleId=${id}`
    sql.query(conString, query, (err, rows) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send(rows);
        }
    })
});


app.get("/Dependents", (req, res) => {
    const query="SELECT * FROM Dependents01";
    sql.query(conString, query, (err, rows) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send(rows);
        }
    })
});

 
app.get("/Dependents/:id", (req, res) => {
    const id=req.params.id;
    const query=`SELECT * FROM Dependent01 where DependentId=${id}`;
    sql.query(conString, query, (err, rows) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send(rows);
        }
    })
});

app.get("/UserDependents/:id", (req, res) => {
    const id=req.params.id;
    const query=`select DependentId,DependentName,DependentAge,Relationship from UserTable01,Dependents01 where UserTable01.Flag=${id} and UserTable01.UserId=Dependents01.UserId;`;
    sql.query(conString, query, (err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send(row);
        }
    })
});
 
app.get("/DependentsCount", (req, res) => {
    const query=`select count(DependentId) from Dependents01,UserTable01 where UserTable01.Flag=3 and Dependents01.UserId=UserTable01.UserId`;
    sql.query(conString, query, (err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send(row);
        }
    })
});

app.get("/Emails",(req, res) => {
    const id=req.params.email;
    const query=`SELECT Email FROM UserTable01`;
    sql.query(conString, query, (err, rows) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send(rows);
        }
    })
});
 

app.delete("/Users/:id", (req, res) => {
    const id=req.params.id;
    query2=`Delete from UserTable01 where UserId=${id}`
    sql.query(conString, query2, (err,rows) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send(rows);
        }
    })
});

 
app.get("/UserId", (req, res) => {
    const flag=req.params.flag;
    query2=`Select Flag from UserTable01 where Flag=3`
    sql.query(conString, query2, (err, rows) => {
        if (err) {
            res.send(err);
        }
        else {

            res.send(rows);
        }
    })
});

app.delete("/Vehicles/:id", (req, res) => {
    const id=req.params.id;
    query2=`Delete from VehicleTable where VehicleId=${id}`
    sql.query(conString, query2, (err, rows) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send(rows);
        }
    })
});

 
app.delete("/Dependents/:id", (req, res) => {
    const id=req.params.id;
    query2=`Delete from Dependents01 where DependentId=${id}`
    sql.query(conString, query2, (err, rows) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send(rows);
        }
    })
});

 
app.post("/Dependents", (req, res) => {
    const body = req.body;
    const query1 = `Insert into Dependents01 values('${body.DependentName}','${body.DependentAge}',${body.UserId},'${body.Relationship}')`;
    sql.query(conString, query1, (err, rows) => {
        if (err) {

            res.status(400).send(err.message);
        }
        else {
            res.status(200).send(rows);
        }
    })
})


app.post("/AddVehicleDate/:id/:date", (req, res) => {
    const id = req.params.id;
    const date=req.params.date;
    const query1 = `Insert into VehicleInsuranceDate values('${date}',${id})`;
    console.log(body.RegistrationNumber);
    sql.query(conString, query1, (err, rows) => {
        if (err) {
            res.status(400).send(err.message);
        }
        else {
            res.status(200).send("Vehicles added successfully");
        }
    }) 
})

app.put("/Users/:id/:flag", (req, res) => {
    const id=req.params.id;
    const flag=req.params.flag;
    const query1 = `Update UserTable01 set Flag=${flag} where UserId=${id}`;
    sql.query(conString, query1, (err, rows) => {
        if (err) {
            res.status(400).send(err.message);
        }
        else {
            res.status(200).send("User updated successfully");
        }
    })
})

app.put("/SetFlagOnRetype", (req, res) => {
    const query1 = `update UserTable01 set Flag=0 where Flag=2;`;
    sql.query(conString, query1, (err, rows) => {
        if (err) {
            res.status(400).send(err.message);
        }
        else {
            res.status(200).send("User updated successfully");
        }
    })
})

app.put("/setTenure/:year", (req, res) => {
    const year=req.params.year;
    const flag=req.params.flag;
    const query1 = `Update UserTable01 set Tenure=${year} where Flag=3`;
    sql.query(conString, query1, (err, rows) => {
        if (err) {
            res.status(400).send(err.message);
        }
        else {
            res.status(200).send("User updated successfully");
        }
    })
})

app.put("/SetFlagZero", (req, res) => {
    const query1 = `Update UserTable01 set Flag=0 where Flag=3`;
    sql.query(conString, query1, (err, rows) => {
        if (err) {
            res.status(400).send(err.message);
        }
        else {
            res.status(200).send("User updated successfully");
        }
    })
})

 
app.get("/getPremiumLevel",(req,res)=>{
    const query1 = `Select PackageLevel from UserTable01 where Flag=3`;
    sql.query(conString, query1, (err, rows) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send(rows);
        }
    })
})

app.put("/UserPackage/:level", (req, res) => {
    const level=req.params.level;
    const query1 = `Update UserTable01 set PackageLevel='${level}' where Flag=3`;
    sql.query(conString, query1, (err, rows) => {
        if (err) {
            res.status(400).send(err.message);
        }
        else {
            res.status(200).send("User updated successfully");
        }
    })
})

app.put("/updateFlag/:email", (req, res) => {
    const email=req.params.email;
    const query1 = `Update UserTable01 set Flag=2 where Email='${email}'`;
    console.log(query1);
    sql.query(conString, query1, (err, rows) => {
        if (err) {
            res.status(400).send(err.message);
        }
        else {
            res.status(200).send("User updated successfully");
        }
    })
})

app.put("/updatePassword/:pwd",(req,res)=>{
    const pwd=req.params.pwd;
    const query1 = `Update UserTable01 set Password='${pwd}' where Flag=2`;
    console.log(query1);
    sql.query(conString, query1, (err, rows) => {
        if (err) {
            res.status(400).send(err.message);
        }
        else {
            res.status(200).send("User updated successfully");
        }
    })
})
 
app.put("/UserPremium/:premium", (req, res) => {
    const premium=req.params.premium;
    const query1 = `Update UserTable01 set HealthPremium=${premium} where Flag=3`;
    sql.query(conString, query1, (err, rows) => {
        if (err) {
            res.status(400).send(err.message);
        }
        else {
            res.status(200).send("User updated successfully");
        }
    })
})

app.put("/UpdateVehicle/:year", (req, res) => {
    const year=req.params.year;
    console.log(year);
    const query1 = `Update VehicleTable set Year=${year} where Year=0`;
    sql.query(conString, query1, (err, rows) => {
        if (err) {
            res.status(400).send(err.message);
        }
        else {
            res.status(200).send("User updated successfully");
        }
    })
})

app.put("/UpdateVehiclePremium/:id", (req, res) => {
    const id=req.params.id;
    console.log(id);
    const query1 = `Update VehicleTable set VehiclePremium=${id} where VehiclePremium=0`;
    console.log(query1);
    sql.query(conString, query1, (err, rows) => {
        if (err) {
            res.status(400).send(err.message);
        }
        else {
            res.status(200).send("User updated successfully");
        }
    })
})

app.post("/Users", (req, res) => {
    const body = req.body;
    const query1 = `Insert into UserTable01 values('${body.UserName}','${body.Email}','${body.Password}','${body.Mobile}',${body.Age},${body.Flag},'${body.PackageLevel}',${body.HealthPremium},${body.Tenure},'${body.OTP}')`;
    sql.query(conString, query1, (err, rows) => {
        if (err) {
            res.status(400).send(err.message);
        }
        else {
            res.status(200).send("Users added successfully");
        }
    })
})

app.get("/VehicleDependents", (req, res) => {
    const id=req.params.id;
    const query=`select VehicleId,RegistrationNumber,Model,Type from UserTable01,VehicleTable where UserTable01.Flag=3 and UserTable01.UserId=VehicleTable.UserId;`;
    sql.query(conString, query, (err, row) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send(row);
        }
    })
});

 
app.post("/Vehicles", (req, res) => {
    const body = req.body;
    const query1 = `Insert into VehicleTable values('${body.RegistrationNumber}','${body.Model}',${body.Year},'${body.Type}',${body.UserId},${body.VehiclePremium},${body.VehicleFlag})`;
    console.log(query1);
    sql.query(conString, query1, (err, rows) => {
        if (err) {
            res.status(400).send(err.message);
        }
        else {
            res.status(200).send("Vehicles added successfully");
        }
    })
})
app.listen(2210, () => {

    console.log("Server at 2210");

});