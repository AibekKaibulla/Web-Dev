function ucFirst(str) {
    if (!str) return str;
  
    return str[0].toUpperCase() + str.slice(1);
  }
  
  alert( ucFirst("john") ); // John

checkSpam('buy ViAgRA now') == true
checkSpam('free xxxxx') == true
checkSpam("innocent rabbit") == false

function checkSpam(str) {
    let lowerString = str.toUpperCase();

    if (lowerString.indexOf("VIAGRA") != -1 && lowerString.indexOf("XXX") != -1) {
        return true;
    } else {
        return false;
    }
}

function truncate(str, maxlength) {
    return (str.length > maxlength) ?
      str.slice(0, maxlength - 1) + '…' : str;
}
  
function extractCurrencyValue(str) {
    return +str.slice(1);
  }