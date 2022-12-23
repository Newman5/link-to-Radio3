// link to Radio
javascript: (function () {
    var url = 'http://radio3.io/';
    var link = '?link=' + encodeURI(location.href)+"&";
    var desc = '?description=' + document.getSelection().toString()+"&";
    var title = '?title=' + document.title;
    window.open(url + link + desc + title);
  })();