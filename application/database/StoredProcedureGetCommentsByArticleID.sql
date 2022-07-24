Use YourSportsDB;

DELIMITER $$
CREATE PROCEDURE `getCommentsByArticleID`(IN inArticleID INT)

BEGIN

SELECT * FROM Comment
WHERE fk_Article_ID = inArticleID
ORDER BY PostDate DESC;

END$$
DELIMITER ;