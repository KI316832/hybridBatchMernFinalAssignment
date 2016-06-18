var express = require('express');
var router = express.Router();
var body=require('body-parser');
var Article = require('../../../models/article/article');

//save article
router.route('/saveArticle')
.post(function(req, res) {
  console.log("----save article---");

      var article = new Article();
      article.title = req.body.title;
      article.image =  req.body.image;
      article.description = req.body.description;

      article.save(function(err) {
          if (err)
              res.send(err);
          res.json({ message: 'Movie added!' });
            });
});

router.route('/getAllArticles')
.get(function(req, res){
      Article.find(function(err, articles) {
            if (err)
                res.send(err);
            res.json(articles);
        });
    })



module.exports= router;
