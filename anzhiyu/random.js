var posts=["2024/12/25/QCheckBox的三态复选框和反选/","2024/12/25/Qt使用libheif库显示苹果的heic图片/","2024/12/25/摇杆/","2024/12/25/Qt高性能列表控件之QListView的使用及优点/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };