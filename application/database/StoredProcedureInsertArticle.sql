Use YourSportsDB;

DELIMITER $$
CREATE PROCEDURE `InsertArticle` (IN inPostdate varchar(255), IN inImage_url varchar(255), 
IN inHeading varchar(255),
IN inSubHeading varchar(255),
IN inIntroduction varchar(255),
IN inContent varchar(4096),
IN inConclusion varchar(255),
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
