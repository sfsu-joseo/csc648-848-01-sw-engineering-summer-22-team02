DELIMITER $$

CREATE PROCEDURE getNewsArticles(IN inPostdate VARCHAR(255),
    IN inSport VARCHAR(255),
    IN inSearchText VARCHAR(255))
BEGIN

SELECT image_URL,heading,subHeading,posttime,name as `Author`,sport FROM 
(SELECT image_URL,heading,subHeading,fk_authorid,posttime,sport FROM Article WHERE 
(posttime >= inPostdate OR inPostdate is NULL) 
AND 
(sport = inSport OR inSport is NULL )
AND
(heading LIKE CONCAT('%',inSearchText,'%') OR inSearchText is NULL)
) AS Articles JOIN RegisteredUser ON user_id = Articles.fk_authorid ORDER BY posttime DESC;

END$$

DELIMITER ;
