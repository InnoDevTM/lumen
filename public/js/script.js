function tData(obj) {
    var t = new Date();
    var y = t.getFullYear();
    var d = t.getDate();
    var mon = t.getMonth() + 1;
    var h = t.getHours();
    var min = addZero(t.getMinutes());
    var sec = addZero(t.getSeconds());
    var result = y + "-" + mon + "-" + d + " " + h + ":" + min + ":" + sec;
    obj.expiry_date.value = result;
}

function getCookie(name) {
  var matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

function addZero(n) {
    return n > 9 ? n : (+n >= 0) ? "0" + n : n;
}