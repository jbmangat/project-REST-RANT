const router = require("express").Router();
const db = require("../models");
const Comment = require("../models/comment.js");
// const places = require('../models/places')

router.get("/", (req, res) => {
  db.Place.find()
    .then((places) => {
      res.render("places/index", { places });
    })
    .catch((err) => {
      console.log(err);
      res.render("error404");
    });
});

// new
router.post("/", (req, res) => {
  db.Place.create(req.body)
    .then(() => {
      res.redirect("/places");
    })
    .catch((err) => {
      console.log("err", err);
      res.render("error404");
    });
});

// SHOW
router.get("/:id", (req, res) => {
  db.Place.findById(req.params.id)
    .populate("comments")
    .then((place) => {
      // console.log(place.comments);
      res.render("places/show", { place });
    })
    .catch((err) => {
      console.log("err", err);
      res.render("error404");
    });
});

//  update
router.put("/:id", (req, res) => {
  res.send("PUT /places/:id stub");
});

//  delete
router.delete("/:id", (req, res) => {
  res.send("DELETE /places/:id stub");
});

router.get("/:id/edit", (req, res) => {
  res.send("GET edit form stub");
});
// new form
router.get("/:id/newComments", (req, res) => {
  const placeId = req.params.id;
  res.render("places/newComments", { placeId: placeId });
});

// Handle submit
router.post("/:id/newComments", (req, res) => {
  const placeId = req.params.id;

  db.Place.findById(placeId)
    .then((place) => {
      db.Comment.create(req.body)
        .then((comment) => {
          place.comments.push(comment);
          place.save();
          res.redirect(`/places/${placeId}`);
        })
        .catch((err) => {
          console.log("err", err);
          res.render("error404");
        });
    })
    .catch((err) => {
      console.log("err", err);
      res.render("error404");
    });
});





// router.post('/:id/rant', (req, res) => {
//   res.send('GET /places/:id/rant stub')
// })

// router.delete('/:id/rant/:rantId', (req, res) => {
//     res.send('GET /places/:id/rant/:rantId stub')
// })

module.exports = router;

