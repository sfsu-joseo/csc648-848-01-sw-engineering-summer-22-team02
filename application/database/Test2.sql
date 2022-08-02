use YourSportsDB;
CALL GetNewsArticles(NULL,NULL,"o");
Call GetNewsArticleByArticleID(10);
Call GetNewsArticleByArticleID(11);
call GetNewsArticlesByAuthorID(10);
call GetGames(1);
call SearchGames("2022-02-21",0,null);
-- call InsertPost("2022-07-24", "come on", 13, 9);
-- call InsertPost("2022-07-24", "come on", 11, 9);
-- call InsertPost("2022-07-24", "come on", 10, 9);
-- call InsertPost("2022-07-24", "come on", 12, 9);
-- call InsertPost("2022-07-24", "come on", 13, 9);
call DeletePostByPostID(11);
-- call InsertComment("2022-07-24","This is a good news", 13, 6);
-- call InsertComment("2022-07-24","good news", 11, 6);
-- call InsertComment("2022-07-24","This is a good news", 13, 7);
-- call InsertComment("2022-07-24","This is a good news", 13, 8);

call UpdateArticleProperties(11,6,1);
call UpdateArticleProperties(10,6,0);
call UpdateArticleViews(6);
call UpdateArticleViews(6);
call DeleteCommentByCommentID(12);
call SearchPlayers("s", 1);
call GetPlayers(3,0);
call CheckAccountByUsernameOrEmail("wen", "wen2@outlook.com");
call ResetPasswordByAccountID(16,"1234567");
-- call InsertArticle("2022-07-24", null,"Auburn basketball alumni team WarReady wins opening game of TBT",
-- "WarReady wins opening game of the TBT basketball tournament", "instruction","content","conclusion","Basketball", 13);
-- call InsertComment("2022-07-24","This is a good news", 8, 14);
-- call InsertComment("2022-07-24","This is a good news", 9, 14);
-- call InsertComment("2022-07-24","This is a good news", 10, 14);

call GetPosts(1);
