var posts=["2024/12/05/hello-world/","2024/12/06/bugRecord/","2024/12/06/hhh/","2024/12/06/Bug/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };