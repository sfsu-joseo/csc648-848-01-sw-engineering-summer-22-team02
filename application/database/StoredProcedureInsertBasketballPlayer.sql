Use YourSportsDB;

DELIMITER $$
CREATE PROCEDURE `InsertBasketballPlayer` (IN inGames INT, 
IN inFieldGoalsMade DECIMAL,
IN inFieldGoalsAttempted DECIMAL,
IN inTwoPointersMad DECIMAL,
IN inTwoPointersAttempted DECIMAL,
IN inThreePointersMad DECIMAL,
IN inThreePointersAttempted DECIMAL,
IN inPlayerID INT,
IN inplayerURL LONGTEXT
)
 
BEGIN
INSERT INTO `Basketball_Player`
(`Games`, `FieldGoalsMade`, `FieldGoalsAttempted`, `TwoPointersMad`, `TwoPointersAttempted`, `ThreePointersMad`, `ThreePointersAttempted`, `fk_Player_ID`, `playerURL`)
VALUES
(inGames, inFieldGoalsMade, inFieldGoalsAttempted, inTwoPointersMad, inTwoPointersAttempted, inThreePointersMad, inThreePointersAttempted, inPlayerID, inplayerURL);

END$$
DELIMITER ;