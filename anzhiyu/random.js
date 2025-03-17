var posts=["2024/12/25/QCheckBox的三态复选框和反选/","2025/01/06/Qt高性能列表控件之QListView的使用及优点/","2025/01/06/摇杆/","2025/01/06/使用Qt私有接口绘制图片作窗口阴影/","2025/01/06/Qt使用libheif库显示苹果的heic图片/","2025/01/06/使用libheif库读取heic文件的缩略图/","2024/08/07/CodeStyle/","2025/03/17/CodeStyle-1/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };