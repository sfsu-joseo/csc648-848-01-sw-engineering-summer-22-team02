Use YourSportsDB;

DELIMITER $$
CREATE PROCEDURE `CheckAccountLikeOrDislike`(IN inArticleID INT,
IN inAccountID INT)

BEGIN
DECLARE count INT;
DECLARE countLikes INT;
DECLARE countDislikes INT;

SET count = 0;

SET countLikes = (SELECT count(*) FROM Article_Likes
WHERE fk_Article_ID = inArticleID
AND fk_Account_ID = inAccountID);

SET countDislikes = (SELECT count(*) FROM Article_Dislikes
WHERE fk_Article_ID = inArticleID
AND fk_Account_ID = inAccountID);

IF  countLikes = 1
THEN 
SET count = 1;
END IF;

IF countDislikes = 1
THEN
SET count = 2;
END IF;

SELECT count;

END$$
DELIMITER ;