var posts=["2024/12/25/QCheckBox的三态复选框和反选/","2024/12/26/Qt高性能列表控件之QListView的使用及优点/","2024/12/26/摇杆/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };