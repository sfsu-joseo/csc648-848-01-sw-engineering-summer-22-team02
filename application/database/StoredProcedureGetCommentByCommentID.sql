Use YourSportsDB;

DELIMITER $$
CREATE PROCEDURE `GetCommentByCommentID` 
(IN inCommentID INT)

BEGIN

SELECT * FROM Comment
WHERE Comment_ID = inCommentID;

END$$
DELIMITER ;