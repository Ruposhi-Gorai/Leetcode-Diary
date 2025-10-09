var isAnagram = function(s, t) {
    let charOfs = s.split('').sort().join('');
    let charOft = t.split('').sort().join('');
    if(charOfs == charOft){
        return true;
    }else{
        return false
    }
}