var posts=["2024/12/25/QCheckBox的三态复选框和反选/","2024/12/17/Qt高性能列表控件之QListView的使用及优点/","2024/12/25/Qt使用libheif库显示苹果的heic图片/","2025/03/17/使用libheif库读取heic文件的缩略图/","2024/08/07/CodeStyle/","2024/11/07/自定义摇杆/","2025/01/22/Qt中各种图像的格式转换以及与cv-Mat图像格式的转换/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };