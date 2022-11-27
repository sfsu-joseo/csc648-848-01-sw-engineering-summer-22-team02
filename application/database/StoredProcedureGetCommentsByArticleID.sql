Use YourSportsDB;

DELIMITER $$
CREATE PROCEDURE `GetCommentsByArticleID`(IN inArticleID INT)

BEGIN

SELECT * FROM Comment, Account
WHERE fk_Article_ID = inArticleID
AND fk_Author_ID = Account_ID
ORDER BY PostDate ASC;

END$$
DELIMITER ;