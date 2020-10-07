const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");

const tokens = require("./token.js");
const db = require("../../dbconfig");

router.post("/register", (req, res) => {
  const user = req.body;
  console.log(req.body)

  if (!user.password || !user.email ) {
    res.status(400).json({
      error: "Missing a required field"
    });
  } else {
    const hashed = bcrypt.hashSync(user.password, 10);
    user.password = hashed;
    console.log(user)
    db("users")
      .insert(user)
      .then(ids => {
        const user_id = ids[0];
        db("users")
          .where({ user_id })
          .first()
          .then(user => {
            const token = tokens.generateToken(user);
            res
              .status(201)
              .json({ id: user.user_id, email: user.email, token });
          })
          .catch(error => {
            console.log(error)
            res.status(500).json({
              error: "Couldn't add to database"
            });
          });
      })
      .catch(error => {
        console.log(error.message)
        res.status(400).json({
          error: "Must have a unique email!",
          response: error.response
        });
      });
  }
});

router.post("/login", (req, res) => {
  let { email, password } = req.body;
  if (!email || !password) {
    res.status(400).json({
      error: "Please provide a email and password."
    });
  } else {
    db("users")
      .where({ email })
      .first()
      .then(user => {
        if (user && bcrypt.compareSync(password, user.password)) {
          const token = tokens.generateToken(user);
          res
            .status(200)
            .json({ message: `${user.email} is logged in.`, id: user.id, token });
        } else {
          res.status(401).json({
            error: "Please provide the correct email and password."
          });
        }
      })
      .catch(error => {
        res.status(500).json({
          error: "There was an error while logging in."
        });
      });
  }
});

module.exports = router;