var posts=["2024/12/06/Bug/","2024/12/06/bugRecord/","2024/12/05/hello-world/","2024/12/06/hhh/","2024/12/25/README/","2024/12/25/QCheckBox的三态复选框和反选/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };