Use YourSportsDB;

DELIMITER $$
CREATE PROCEDURE `GetPosts` (IN inGameID INT)

BEGIN
SELECT * FROM Post, Account
WHERE fk_Game_ID = inGameID
AND Account_ID = fk_Account_ID 
ORDER BY PostDate ASC;

END$$
DELIMITER ;