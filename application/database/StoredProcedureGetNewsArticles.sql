Use YourSportsDB;

DELIMITER $$
CREATE PROCEDURE `getNewsArticles`(IN inPostdate VARCHAR(255),
    IN inSport VARCHAR(255),
    IN inSearchText VARCHAR(255))
BEGIN

SELECT Image_url,Heading,SubHeading,PostDate,Name as `Author`,Sport FROM 
(SELECT Image_url,Heading,SubHeading,fk_Author_ID,PostDate,Sport FROM Article WHERE 
(PostDate >= inPostdate OR inPostdate is NULL) 
AND 
(Sport = inSport OR inSport is NULL )
AND
(Heading LIKE CONCAT('%',inSearchText,'%') OR inSearchText is NULL)
) AS Article JOIN Account ON Account_ID = Article.fk_Author_ID ORDER BY PostDate DESC;

END$$
DELIMITER ;