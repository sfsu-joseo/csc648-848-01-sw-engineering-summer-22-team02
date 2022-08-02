Use YourSportsDB;

DELIMITER $$
CREATE PROCEDURE `DeleteCommentByCommentID` 
(IN inCommentID INT)

BEGIN

DELETE FROM Comment
WHERE Comment_ID = inCommentID;

END$$
DELIMITER ;