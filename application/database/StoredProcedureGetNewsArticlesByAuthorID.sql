Use YourSportsDB;

DELIMITER $$
CREATE PROCEDURE `getNewsArticlesByAuthorID`(IN inAuthorID INT)

BEGIN

SELECT * FROM Article
WHERE fk_Author_ID = inAuthorID
ORDER BY PostDate DESC;

END$$
DELIMITER ;