Use YourSportsDB;

DELIMITER $$
CREATE PROCEDURE `GetNewsArticleByArticleID` 
(IN inArticleID INT)

BEGIN

SELECT * FROM Article, Account
WHERE Article_ID = inArticleID
AND fk_Author_ID = Account_ID;

END$$
DELIMITER ;