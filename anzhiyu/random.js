var posts=["2023/05/17/chap01/","2023/05/17/chap03/","2023/05/17/chap04/","2023/05/17/chap02/","2023/05/17/chap05/","2023/09/30/chap06/"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};