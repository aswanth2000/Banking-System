import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import sql from 'mysql'
var app = express();

app.use(cors());
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

var sqlConnection = sql.createConnection({
    host: "database-1.c37nk9ni00r8.us-east-1.rds.amazonaws.com",
    user: "root",
    port: "3306",
    password: "12345678",
    database: "banking",
    multipleStatements: true
});
sqlConnection.connect(function(err) {
    if (!err) {
        console.log("Connected to SQL");
    } else {
        console.log("Connection Failed" + err);
    }
});

app.get("/api/", async function(req, res) {
    await sqlConnection.query(`Select * from customer`, function(err, result) {
        if (err) {
            console.log(err)
        } else {
            res.status(200).json(result);
        }
    })
})

app.post("/api/transact", async function(req, res) {
    // console.log(req.body);
    await sqlConnection.query(`select * from customer where AcNo='${req.body.to}'`, async function(err, result) {
        if (err) {
            console.log(err)
        } else {
            var newBal = result[0].Balance + Number(req.body.Amount);
            await sqlConnection.query(`update customer set ? where AcNo='${req.body.to}'`, { Balance: newBal }, async function(err1, result2) {
                if (err1) {
                    console.log(err1)
                } else {
                    console.log(result2)
                    await sqlConnection.query(`select * from  customer where AcNo='${req.body.from}'`, async function(err2, result3) {
                        if (err2) {
                            console.log(err2)
                        } else {
                            var newBal1 = result3[0].Balance - Number(req.body.Amount);
                            await sqlConnection.query(`update customer set ? where AcNo='${req.body.from}'`, { Balance: newBal1 }, async function(err3, result4) {
                                if (err3) {
                                    console.log(err3)
                                } else {
                                    console.log(result4)
                                    var from = req.body.from;
                                    var to = req.body.to;
                                    var Amount = req.body.Amount;
                                    var status = 'Success';
                                    await sqlConnection.query(`Insert into transaction set ?`, { from, to, status, Amount }, async function(err4, result5) {
                                        if (err4) {
                                            console.log(err4)

                                        } else {
                                            res.status(200).json("Success");

                                        }
                                    })

                                }

                            })

                        }
                    })
                }

            })

        }
    })
})

app.get("/api/transact", async function(req, res) {

    await sqlConnection.query(`Select * from transaction`, function(err, result) {
        if (err) {
            console.log(err)
        } else {
            res.status(200).json(result);
        }
    })
})

app.listen(process.env.PORT || 5000, function() {
    console.log("Server Running at 3000");
})