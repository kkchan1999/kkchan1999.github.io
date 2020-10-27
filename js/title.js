/* 离开当前页面时修改网页标题，回到当前页面时恢复原来标题 */
window.onload = function() {
    var OriginTitile = document.title;
    var titleTime;
    document.addEventListener('visibilitychange', function() {
      if(document.hidden) {
        $('[rel="icon"]').attr('href', "/img/failure.ico");
        $('[rel="shortcut icon"]').attr('href', "/img/failure.ico");
        document.title = '系统异常，即将自爆！';
        clearTimeout(titleTime);
      } else {
        $('[rel="icon"]').attr('href', "/img/DigDug.ico");
        $('[rel="shortcut icon"]').attr('href', "/img/DigDug.ico");
        document.title = '咦，好像恢复了~';
        titleTime = setTimeout(function() {
          document.title = OriginTitile;
        }, 2000);
      }
    });
  }