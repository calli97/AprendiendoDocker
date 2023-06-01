const express = require("express");
const cors = require("cors");
const app = express();

const { Client } = require("pg");
const client = new Client(process.env.DATABASE_URL);

app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {
    res.json({ msg: "OK" });
});

app.get("/env", (req, res) => {
    res.json({ msg: process.env });
});

app.listen(3001, async () => {
    console.log("Server running on port 3001");
    try {
        await client.connect();
        console.log("Database Successfully connect");
    } catch (error) {
        console.log(error);
    }
});
