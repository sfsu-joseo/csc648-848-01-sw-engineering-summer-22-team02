Use Yoursports;

SELECT * FROM Article;

SELECT image_URL,heading,subHeading,posttime,name as `Author`,sport FROM Article JOIN RegisteredUser ON user_id = Article.fk_authorid ORDER BY posttime DESC;