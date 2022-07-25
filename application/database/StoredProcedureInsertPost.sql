Use YourSportsDB;

DELIMITER $$
CREATE PROCEDURE `InsertPost` (IN inPostdate varchar(255), 
IN inPostContent varchar(255), 
IN inAuthorID INT,
IN inGame_ID INT)

BEGIN
INSERT INTO Post
(`PostDate`,
`Content`,
`fk_Account_ID`,
`fk_Game_ID`)
VALUES
(inPostdate, inPostContent, inAuthorID, inGame_ID);

END$$
DELIMITER ;