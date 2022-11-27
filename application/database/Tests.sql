use YourSportsDB;
CALL getNewsArticles("2021-05-11","Baseball","0");
-- CALL InsertArticle("2022-05-11",
-- "",
-- "Test Heading1",
-- "Test SubHeading1",
-- "Introduction1",
-- "Content1",
-- "Conclusion1",
-- "Basketball",
-- 10);
-- CALL InsertAccount("Wen", "Wen", "wen1@gmail.com", "1234",1);
CALL SearchGames("2022-02-21", 0, NULL);
CALL GetGame(10);
-- CALL InsertPosts("2022-02-21", "good job", 1, 1);
-- CALL InsertPosts("2022-02-21", "good job", 8, 1);
-- CALL InsertPosts("2022-02-21", "good job", 9, 1);
-- CALL InsertPosts("2022-02-21", "good job", 10, 1);
-- CALL InsertPosts("2022-02-21", "good job", 1, 3);
-- CALL InsertPosts("2022-02-21", "good job", 1, 5);
-- CALL InsertPosts("2022-02-21", "good job", 1, 7);
-- CALL InsertPosts("2022-02-21", "good job", 1, 9);
CALL GetPosts(3);
CALL SearchPlayers(NULL, 0);
CALL getNewsArticlesByAuthorID(10);
-- CALL InsertComment('2020-09-13','nice work',1,1);
-- CALL InsertComment('2020-09-13','nice work',8,1);
-- CALL InsertComment('2020-09-13','nice work',10,1);
-- CALL InsertComment('2020-09-13','nice work',12,1);
-- CALL InsertComment('2020-09-13','nice work',13,1);
-- CALL InsertComment('2020-09-13','nice work',1,3);
-- CALL InsertComment('2020-09-13','nice work',1,4);
-- CALL InsertComment('2020-09-13','nice work',1,5);
CALL getCommentsByArticleID(1);
CALL UpdateArticleProperties(8,1,1);

CALL deleteCommentByCommentID(1);
CALL deletePostByPostID(1);
CALL deleteAccountByAccountID(1);
CALL resetPasswordByAccountID(8, "abcd");
CALL getNewsArticleByArticleID(1);
CALL UpdateArticleViews(1);
CALL getNewsArticleStatsByArticleID(1);
CALL getPlayer(5,1);
CALL getAccountByUsernameOrEmail(NULL, "dustin@gmail.com", "abcd");

