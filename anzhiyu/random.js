var posts=["2024/12/06/Bug/","2024/12/25/QCheckBox的三态复选框和反选/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };