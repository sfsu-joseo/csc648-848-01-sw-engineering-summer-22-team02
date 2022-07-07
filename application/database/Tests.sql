Use Yoursports;

SELECT * FROM Article;

SELECT * FROM Tag ORDER by tag_id ASC;

SELECT image_URL,heading,subHeading,posttime,name as `Author`,sport FROM Article JOIN RegisteredUser ON user_id = Article.fk_authorid ORDER BY posttime DESC;

SELECT * FROM (SELECT image_URL,heading,subHeading,posttime,sport,fk_authorid FROM Article WHERE heading LIKE "%tucker%") AS Articles JOIN RegisteredUser ON Articles.fk_authorid = RegisteredUser.user_id ORDER BY posttime DESC;


CALL getNewsArticles(NULL,NULL,NULL);
