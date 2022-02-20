const pg = require('pg')
const Client = pg.Client
const express = require('express')
const app = express();
const cors = require('cors');

const corsOption = {
    origin: '*',
    Credential: true
}

const client = new Client({
  user: "postgres",
  host: "localhost",
  database: "vue_toy_project",
  password: "111111",
  port: 5432,
});

client.connect((err) => {
  if (err) {
    console.log("connect fail");
  } else {
    console.log("connect success!");
  }
});

app.use(cors(corsOption));
app.use(express.json());

app.get("/api/todos", async (req, res) => {
  return new Promise((resolve, reject) => {
    client.query("SELECT * FROM test_table", (err, result) => {
      if (err) {
        reject(`${err}`);
      } else {
        resolve(res.send(result.rows));
      }
    });
  });
});
app.post('/api/addTodo', async (req, res) => { 
    console.log(req.body.path.subject)
    res.status(200).json({success:true})
    if(req.method == "POST") {
        return new Promise((resolve, reject) => {
            const path = req.body.path
            const sendQuery = 'INSERT INTO todos (subject, completed) VALUES($1, $2);'
            client.query(sendQuery, [path.subject, path.completed], (err) => {
                if(err) {
                    return reject(`${err}`)
                } else {
                    resolve({ success:true })
                }
            })
            
        })
    }
    
})

app.listen(3001, () => console.log("서버가동 : 3001"));
