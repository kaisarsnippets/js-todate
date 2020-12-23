// Format time string
function toDate(ts, fmt, mnths) {
    
    if (!fmt) var fmt = '[m]/[d]/[y] [h]:[i]:[s]';
    const dt = new Date(ts);
    var str = fmt;
    
    var mnth = dt.getMonth();
    var day  = dt.getDate();
    var year = dt.getFullYear();
    var hour = dt.getHours();
    var min  = dt.getMinutes();
    var sec  = dt.getSeconds();
    
    var md = 'am';
    if (hour >= 12) {
        md = 'pm';
    }
    
    if (!mnths) {
        mnths = '';
        mnths += 'Jan,Feb,Mar,Apr,May,Jun,';
        mnths += 'Jul,Aug,Sep,Oct,Nov,Dec';
        mnths  = mnths.split(',');
    }
    
    str = str.replace('[m]' , mnth);
    str = str.replace('[d]' , day);
    str = str.replace('[y]' , year);
    str = str.replace('[h]' , hour);
    str = str.replace('[i]' , min);
    str = str.replace('[s]' , sec);
    str = str.replace('[md]', md);
    str = str.replace('[M]' , mnths[mnth-1]);
    
    return str;
}
