Use YourSportsDB;

DELIMITER $$
CREATE PROCEDURE `InsertComment` (IN inPostdate varchar(255), 
IN inCommentContent LONGTEXT, 
IN inAuthorID INT,
IN inArticle_ID INT)

BEGIN
INSERT INTO Comment
(`PostDate`,
`Content`,
`fk_Author_ID`,
`fk_Article_ID`)
VALUES
(inPostdate, inCommentContent, inAuthorID, inArticle_ID);

END$$
DELIMITER ;