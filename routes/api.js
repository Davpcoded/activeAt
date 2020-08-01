const router = require("express").Router();
​
const User = require("../models/user.js");
const Event = require("../models/event.js");
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