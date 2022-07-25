Use YourSportsDB;

DELIMITER $$
CREATE PROCEDURE `GetNewsArticleByArticleID` 
(IN inArticleID INT)

BEGIN

SELECT * FROM Article
WHERE Article_ID = inArticleID;

END$$
DELIMITER ;