Use YourSportsDB;

DELIMITER $$
CREATE PROCEDURE `DeletePostByPostID` 
(IN inPostID INT)

BEGIN

DELETE FROM Post
WHERE Post_ID = inPostID;

END$$
DELIMITER ;