//----------------------ENGLISH-------------------
//Ref: http://stackoverflow.com/questions/14766951/convert-digits-into-words-with-javascript
var a1 = ['','one ','two ','three ','four ', 'five ','six ','seven ','eight ','nine ','ten ','eleven ','twelve ','thirteen ','fourteen ','fifteen ','sixteen ','seventeen ','eighteen ','nineteen '];
var b1 = ['', '', 'twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety'];

/*function inWords (num) {
    if ((num = num.toString()).length > 9) return 'overflow';
    n = ('000000000' + num).substr(-9).match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);
    if (!n) return; var str = '';
    str += (n[1] != 0) ? (a[Number(n[1])] || b[n[1][0]] + ' ' + a[n[1][1]]) + 'crore ' : '';
    str += (n[2] != 0) ? (a[Number(n[2])] || b[n[2][0]] + ' ' + a[n[2][1]]) + 'lakh ' : '';
    str += (n[3] != 0) ? (a[Number(n[3])] || b[n[3][0]] + ' ' + a[n[3][1]]) + 'thousand ' : '';
    str += (n[4] != 0) ? (a[Number(n[4])] || b[n[4][0]] + ' ' + a[n[4][1]]) + 'hundred ' : '';
    str += (n[5] != 0) ? ((str != '') ? 'and ' : '') + (a[Number(n[5])] || b[n[5][0]] + ' ' + a[n[5][1]]) + 'only ' : '';
    return str;
}*/
function inWords (num) {
    if ((num = num.toString()).length > 11) return 'overflow';
    n = ('00000000000' + num).substr(-11).match(/^(\d{1})(\d{1})(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);
    hundredCrorenum = ('00000000000' + num).substr(-11).match(/^(\d{1})(\d{3})(\d{2})(\d{2})(\d{1})(\d{2})$/);
    var thousandsCroreNum = ('00000000000' + num).substr(-11).match(/^(\d{4})(\d{2})(\d{2})(\d{1})(\d{2})$/);
    //console.log(n[4][0]);
    //console.log(n[4][1]);
    //console.log(thousandsCroreNum[1]);
    if (!n) return; var str = '';

    if(Number(thousandsCroreNum[1])%1000 == 0){
        str += (n[1] != 0) ? (a1[Number(n[1])] || b1[n[1][0]] + ' ' + a1[n[1][1]]) + 'thousand crore ' : '';
        str += (n[2] != 0) ? (a1[Number(n[2])] || b1[n[2][0]] + ' ' + a1[n[2][1]]) + 'hundred crore ' : '';
        str += (n[3] != 0) ? (a1[Number(n[3])] || b1[n[3][0]] + ' ' + a1[n[3][1]]) + 'crore ' : '';
        str += (n[4] != 0) ? (a1[Number(n[4])] || b1[n[4][0]] + ' ' + a1[n[4][1]]) + 'lakh ' : '';
        str += (n[5] != 0) ? (a1[Number(n[5])] || b1[n[5][0]] + ' ' + a1[n[5][1]]) + 'thousand ' : '';
        str += (n[6] != 0) ? (a1[Number(n[6])] || b1[n[6][0]] + ' ' + a1[n[6][1]]) + 'hundred ' : '';
        str += (n[7] != 0) ? ((str != '') ? ' ' : '') + (a1[Number(n[7])] || b1[n[7][0]] + ' ' + a1[n[7][1]]) + 'only ' : '';
    }else {
        str += (n[1] != 0) ? (a1[Number(n[1])] || b1[n[1][0]] + ' ' + a1[n[1][1]]) + 'thousand ' : '';
        if(Number(hundredCrorenum[2])%100 == 0){
            str += (n[2] != 0) ? (a1[Number(n[2])] || b1[n[2][0]] + ' ' + a1[n[2][1]]) + 'hundred crore ' : '';
            str += (n[3] != 0) ? (a1[Number(n[3])] || b1[n[3][0]] + ' ' + a1[n[3][1]]) + 'crore ' : '';
            str += (n[4] != 0) ? (a1[Number(n[4])] || b1[n[4][0]] + ' ' + a1[n[4][1]]) + 'lakh ' : '';
            str += (n[5] != 0) ? (a1[Number(n[5])] || b1[n[5][0]] + ' ' + a1[n[5][1]]) + 'thousand ' : '';
            str += (n[6] != 0) ? (a1[Number(n[6])] || b1[n[6][0]] + ' ' + a1[n[6][1]]) + 'hundred ' : '';
            str += (n[7] != 0) ? ((str != '') ? ' ' : '') + (a1[Number(n[7])] || b1[n[7][0]] + ' ' + a1[n[7][1]]) + 'only ' : '';
        }else {
            str += (n[2] != 0) ? (a1[Number(n[2])] || b1[n[2][0]] + ' ' + a1[n[2][1]]) + 'hundred ' : '';
            str += (n[3] != 0) ? (a1[Number(n[3])] || b1[n[3][0]] + ' ' + a1[n[3][1]]) + 'crore ' : '';
            str += (n[4] != 0) ? (a1[Number(n[4])] || b1[n[4][0]] + ' ' + a1[n[4][1]]) + 'lakh ' : '';
            str += (n[5] != 0) ? (a1[Number(n[5])] || b1[n[5][0]] + ' ' + a1[n[5][1]]) + 'thousand ' : '';
            str += (n[6] != 0) ? (a1[Number(n[6])] || b1[n[6][0]] + ' ' + a1[n[6][1]]) + 'hundred ' : '';
            str += (n[7] != 0) ? ((str != '') ? ' ' : '') + (a1[Number(n[7])] || b1[n[7][0]] + ' ' + a1[n[7][1]]) + 'only ' : '';
        }
    }


    return str;
}