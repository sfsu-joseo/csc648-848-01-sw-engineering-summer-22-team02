const express = require("express");
const { query } = require("../conn");
const con = require("../conn");

const articleRouter = express.Router();

articleRouter.post("/getArticle",(req,res)=>{
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    let articleID = req.body.articleID == null || req.body.articleID.trim() == "" ? 'NULL' : '"'+req.body.articleID.trim().toLowerCase()+'"';

    let query = 'CALL GetNewsArticleByArticleID('+articleID+');';
    
    con.query(query,(error, results, fields) => {
        if(error)
        {
            res.json(error);
        }
        else
        {
            let result = results[0][0];
            res.json(result);
        }
    })
})

articleRouter.post("/insertArticle",(req,res)=>{
    
    
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    
    let postDate = req.body.postDate == null || req.body.postDate.trim() == "" ? 'NULL' : '"'+req.body.postDate.trim().toLowerCase()+'"';
    let imageURL  = req.body.imageURL == null || req.body.imageURL.trim() == "" ? 'NULL' : '"'+req.body.imageURL.trim().toLowerCase()+'"';
    let heading = req.body.heading == null || req.body.heading.trim() == "" ? 'NULL' : '"'+req.body.heading.trim()+'"';
    let subHeading = req.body.subHeading == null || req.body.subHeading.trim() == "" ? 'NULL' : '"'+req.body.subHeading.trim()+'"';
    let introduction = req.body.introduction == null || req.body.introduction.trim() == "" ? 'NULL' : '"'+req.body.introduction.trim()+'"';
    let content = req.body.content == null || req.body.content.trim() == "" ? 'NULL' : '"'+req.body.content.trim()+'"';
    let conclusion = req.body.conclusion == null || req.body.conclusion.trim() == "" ? 'NULL' : '"'+req.body.conclusion.trim()+'"';
    let sport = req.body.sport == null || req.body.sport.trim() == "" ? 'NULL' : '"'+req.body.sport.trim().toLowerCase()+'"';
    let authorID = req.body.authorID == null || req.body.authorID.trim() == "" ? 'NULL' : '"'+req.body.authorID.trim().toLowerCase()+'"';

    if(imageURL=='NULL')
    {
        res.json("Thumbnail is required");
    }
    else if(sport=='NULL')
    {
        res.json("Please select the sport that the article is talking about");
    }
    else if (postDate== 'NULL' || heading == 'NULL' || subHeading == 'NULL' || introduction == 'NULL' || content == 'NULL' || conclusion == 'NULL' || authorID=='NULL')
    {
        res.json("Heading, subHeading, Introduction, Content and Conclusion need to have atleast one character that is not a space");
    }
    else
    {
        console.log("Test Article Upload");
        let query = 'CALL InsertArticle('+postDate+','+imageURL+','+heading+','+subHeading+','+introduction+','+content+','+conclusion+','+sport+','+authorID+');';
        con.query(query, (error, results, fields) => {
            if (error) {
                console.log(error);
              res.json(error);
            }
            res.json("Article Uploaded Succesfully");
          });
    }

})

articleRouter.post("/insertComment",(req,res)=>{
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    let postDate = req.body.postDate == null || req.body.postDate.trim() == "" ? 'NULL' : '"'+req.body.postDate.trim().toLowerCase()+'"';
    let content = req.body.content == null || req.body.content.trim() == "" ? 'NULL' : '"'+req.body.content.trim()+'"';
    let authorID = req.body.authorID == null || req.body.authorID.trim() == "" ? 'NULL' : '"'+ req.body.authorID.trim().toLowerCase()+'"';
    let articleID = req.body.articleID == null || req.body.articleID.trim() == "" ? 'NULL' : '"'+req.body.articleID.trim().toLowerCase()+'"';
    

    if(authorID == 'NULL')
    {
        res.json("Login Required");

    }

    else if (content == 'NULL')
    {
    res.json("Comment cannot be empty");
    }

    else
    {
        let query = 'CALL InsertComment('+postDate+','+content+','+authorID+','+articleID+');';
        con.query(query,(error, results, fields) => {
            if(error)
            {
                res.json(error);
            }
            else
            {
                let secondQuery = 'CALL GetCommentsByArticleID('+articleID+');';
                con.query(secondQuery,(error, results, fields)=>{
                    if(error){
                        res.json(error);
                    }
                    res.json(results[0]);
                })
            }
        })
    }

})

articleRouter.post('/getComments',(req,res)=>{
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    let articleID = req.body.articleID == null || req.body.articleID.trim() == "" ? 'NULL' : '"'+req.body.articleID.trim().toLowerCase()+'"';

    let query = 'CALL GetCommentsByArticleID('+articleID+');';
    con.query(query,(error, results, fields)=>{
        if(error){
            res.json(error);
        }
        res.json(results[0]);
    })

})

articleRouter.post('/deleteComment',(req,res)=>{
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    let articleID = req.body.articleID == null || req.body.articleID.trim() == "" ? 'NULL' : '"'+req.body.articleID.trim().toLowerCase()+'"';
    let commentID = req.body.commentID == null || req.body.commentID.trim() == "" ? 'NULL' : '"'+req.body.commentID.trim().toLowerCase()+'"';

    let query = 'CALL DeleteCommentByCommentID('+commentID+');';
    con.query(query,(error, results, fields) => {
        if(error)
        {
            res.json(error);
        }
        else
        {
            let secondQuery = 'CALL GetCommentsByArticleID('+articleID+');';
            con.query(secondQuery,(error, results, fields)=>{
                if(error){
                    res.json(error);
                }
                res.json(results[0]);
            })
        }
    })


})

articleRouter.post('/updateArticleProperties',(req,res)=>{

    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    
    let articleID = req.body.articleID == null || req.body.articleID.trim() == "" ? 'NULL' : '"'+req.body.articleID.trim().toLowerCase()+'"';
    let accountID = req.body.accountID == null || req.body.accountID.trim() == "" ? 'NULL' : '"'+ req.body.accountID.trim().toLowerCase()+'"';
    let like = req.body.like == null || req.body.like == false ? '0' : '1';

    if(accountID=='NULL')
    {
        res.json("Login Required");
    }
    else
    {
        let query = 'CALL UpdateArticleProperties('+accountID+','+articleID+','+like+');';
        con.query(query,(error, results, fields)=>{
            if(error){
                res.json(error);
            }
            if (like=='1')
            res.json("Article liked");
            else
            res.json("Article Disliked");
        })
    }
})

articleRouter.post('/updateArticleViews',(req,res)=>{

    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    let articleID = req.body.articleID == null || req.body.articleID.trim() == "" ? 'NULL' : '"'+req.body.articleID.trim().toLowerCase()+'"';

    let query = 'CALL UpdateArticleViews('+articleID+');';

    con.query(query,(error, results, fields)=>{
        if(error){
            res.json(error);
        }
        res.json("");
    })
})

articleRouter.post('/getArticleStatsByArticleID',(req,res)=>{

    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    let articleID = req.body.articleID == null || req.body.articleID.trim() == "" ? 'NULL' : '"'+req.body.articleID.trim().toLowerCase()+'"';

    let query = 'CALL GetNewsArticleStatsByArticleID('+articleID+');';
    con.query(query,(error, results, fields)=>{
        if(error){
            res.json(error);
        }
        res.json(results[0][0]);
    })
})

articleRouter.post('/getArticlesByAuthorID',(req,res)=>{

    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');


    let authorID = req.body.authorID == null || req.body.authorID.trim() == "" ? 'NULL' : '"'+ req.body.authorID.trim().toLowerCase()+'"';

    let query = 'CALL getNewsArticlesByAuthorID('+authorID+');';
    con.query(query,(error, results, fields)=>{
        if(error){
            res.json(error);
        }
        res.json(results[0]);
    })
})

articleRouter.post("/search", (req, res) => {

    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');


    let date = req.body.date == null || req.body.date.trim() == ""  ? 'NULL' : '"'+req.body.date.trim().toLowerCase()+'"';
    let sport = req.body.sport == null  || req.body.sport.trim() == ""  ? 'NULL' : '"'+req.body.sport.trim().toLowerCase()+'"';
    let searchText =  req.body.searchText == null || req.body.searchText.trim() == ""  ? 'NULL' : '"'+req.body.searchText.trim().toLowerCase()+'"';
    let query = 'CALL GetNewsArticles('+date+','+sport+','+searchText+');';



    con.query(query, (error, results, fields) => {
        if (error) {
          res.json(error);
        }
        res.json(results[0]);
      });
  });

articleRouter.post('/checkArticleLikeOrDislike',(req,res)=>{
    let articleID = req.body.articleID == null || req.body.articleID.trim() == "" ? 'NULL' : '"'+req.body.articleID.trim().toLowerCase()+'"';
    let accountID = req.body.accountID == null || req.body.accountID.trim() == "" ? 'NULL' : '"'+ req.body.accountID.trim().toLowerCase()+'"';

    let query = 'CALL CheckAccountLikeOrDislike('+articleID+','+accountID+');';

    if(accountID=='NULL')
    {
        res.json("Login Required");
    }
    else
    {
    con.query(query, (error, results, fields) => {
        if (error) {
          res.json(error);
        }
        res.json(results[0][0]['count']);
      });
    }

})

module.exports=articleRouter;