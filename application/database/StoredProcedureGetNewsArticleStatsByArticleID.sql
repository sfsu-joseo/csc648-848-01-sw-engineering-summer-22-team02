Use YourSportsDB;

DELIMITER $$
CREATE PROCEDURE `GetNewsArticleStatsByArticleID` 
(IN inArticleID INT)

BEGIN

DECLARE countViews INT;
DECLARE countLikes INT;
DECLARE countDislikes INT;

SET countLikes = (SELECT COUNT(*) FROM Article_Likes 
WHERE fk_Article_ID = inArticleID);

SET countDislikes = (SELECT COUNT(*) FROM Article_Dislikes 
WHERE fk_Article_ID = inArticleID);

SET countViews = (SELECT NumberOfViews FROM Article
WHERE Article_ID = inArticleID);
SELECT countViews, countLikes, countDislikes;

END$$
DELIMITER ;