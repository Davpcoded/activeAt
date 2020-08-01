const router = require("express").Router();

const db = require("../models")
​/* 

router.get("/api", (req, res) => {
  // Use a regular expression to search titles for req.query.q
  // using case insensitive match. https://docs.mongodb.com/manual/reference/operator/query/regex/index.html
  db.Recipe.find({
    title: { $regex: new RegExp(req.query.q, 'i')}
  })
    .then(recipes => res.json(recipes))
    .catch(err => res.status(422).end());
}); */
/* const User = require("../models/user.js");
const Event = require("../models/event.js"); */
​
​
router.post("/api/user", ({body}, res) => {
​
  User.create(body)
​
    .then(dbTransaction => {
​
      res.json(dbTransaction);
​
    })
​
    .catch(err => {
​
      res.status(404).json(err);
​
    });
​
});
​
router.post("/api/event", ({body}, res) => {
​
    Event.create(body)
  
      .then(dbTransaction => {
  
        res.json(dbTransaction);
  
      })
  
      .catch(err => {
  
        res.status(404).json(err);
  
      });
  
  });
​
​
​
router.put("/api/event", ({body}, res) => {
​
  Event.insertMany(body)
​
    .then(dbTransaction => {
​
      res.json(dbTransaction);
​
    })
​
    .catch(err => {
​
      res.status(404).json(err);
​
    });
​
});
​
router.put("/api/user", ({body}, res) => {
​
    User.insertMany(body)
  
      .then(dbTransaction => {
  
        res.json(dbTransaction);
  
      })
  
      .catch(err => {
  
        res.status(404).json(err);
  
      });
  
  });
​
  router.put("/api/event", ({body}, res) => {
​
    Event.insertMany(body)
  
      .then(dbTransaction => {
  
        res.json(dbTransaction);
  
      })
  
      .catch(err => {
  
        res.status(404).json(err);
  
      });
  
  });
​
​
​
router.get("/api/user", (req, res) => {
​
  User.find({}).sort({date: -1})
​
    .then(dbTransaction => {
​
      res.json(dbTransaction);
​
    })
​
    .catch(err => {
​
      res.status(404).json(err);
​
    });
    
router.get("/api/event", (req, res) => {
​
    Event.find({}).sort({date: -1})
    
        .then(dbTransaction => {
    
        res.json(dbTransaction);
    
        })
    
        .catch(err => {
    
        res.status(404).json(err);
    
        });
    });
​
});
​
​
​
module.exports = router;