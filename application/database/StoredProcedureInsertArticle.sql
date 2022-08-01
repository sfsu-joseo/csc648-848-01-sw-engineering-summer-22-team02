Use YourSportsDB;

DELIMITER $$
CREATE PROCEDURE `InsertArticle` (IN inPostdate varchar(255), IN inImage_url LONGTEXT, 
IN inHeading LONGTEXT,
IN inSubHeading LONGTEXT,
IN inIntroduction LONGTEXT,
IN inContent LONGTEXT,
IN inConclusion LONGTEXT,
IN inSport varchar(255),
IN inAuthor_ID INT)

BEGIN
INSERT INTO `Article`
(`PostDate`,
`Image_url`,
`Heading`,
`SubHeading`,
`Introduction`,
`Content`,
`Conclusion`,
`Sport`,
`fk_Author_ID`)
VALUES
(inPostdate, inImage_url, inHeading, inSubHeading, inIntroduction, inContent, inConclusion, inSport,inAuthor_ID);

END$$
DELIMITER ;
