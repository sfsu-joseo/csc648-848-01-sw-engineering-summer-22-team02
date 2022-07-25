Use YourSportsDB;

DELIMITER $$
CREATE PROCEDURE `UpdateArticleProperties` 
(IN inAccountID INT,
IN inArticleID INT,
IN inLike INT)

BEGIN

DECLARE count INT;
DECLARE newcount INT;
DECLARE countLikes INT;
DECLARE countDislikes INT;

IF inLike = 1
THEN 
SET newcount = (SELECT COUNT(*) FROM Article_Likes 
WHERE fk_Account_ID = inAccountID and fk_Article_ID = inArticleID);

IF newcount = 0
THEN
SET count = (SELECT COUNT(*) FROM Article_Dislikes 
WHERE fk_Account_ID = inAccountID and fk_Article_ID = inArticleID);

IF count = 1
THEN
DELETE FROM Article_Dislikes
WHERE fk_Account_ID = inAccountID and fk_Article_ID = inArticleID;
END IF;

INSERT INTO Article_Likes(fk_Article_ID, fk_Account_ID)
VALUES
(inArticleID, inAccountID);
END IF;
END IF;

IF inLike = 0
THEN
SET newcount = (SELECT COUNT(*) FROM Article_Dislikes 
WHERE fk_Account_ID = inAccountID and fk_Article_ID = inArticleID);
IF newcount = 0
THEN
SET count = (SELECT COUNT(*) FROM Article_Likes 
WHERE fk_Account_ID = inAccountID and fk_Article_ID = inArticleID);

IF count = 1
THEN
DELETE FROM Article_Likes
WHERE fk_Account_ID = inAccountID and fk_Article_ID = inArticleID;
END IF;

INSERT INTO Article_Dislikes(fk_Article_ID, fk_Account_ID)
VALUES
(inArticleID, inAccountID);
END IF;
END IF;

SET countLikes = (SELECT COUNT(*) FROM Article_Likes 
WHERE fk_Article_ID = inArticleID);

SET countDislikes = (SELECT COUNT(*) FROM Article_Dislikes 
WHERE fk_Article_ID = inArticleID);

UPDATE Article
SET NumberOfLikes = countLikes
WHERE Article_ID = inArticleID;

UPDATE Article
SET NumberOfDislikes = countDislikes
WHERE Article_ID = inArticleID;

END$$
DELIMITER ;