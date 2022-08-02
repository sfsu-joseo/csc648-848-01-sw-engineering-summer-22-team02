Use YourSportsDB;

DELIMITER $$
CREATE PROCEDURE `UpdateArticleViews` 
(IN inArticleID INT)

BEGIN

DECLARE count INT;
SET count = (SELECT NumberOfViews FROM Article
WHERE Article_ID = inArticleID);
UPDATE Article 
SET NumberOfViews = count + 1
WHERE Article_ID = inArticleID;
 
END$$
DELIMITER ;