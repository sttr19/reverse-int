module.exports = function reverse(n) {
    let strRev=n.toString().split('').reverse().join('');
	let result=parseInt(strRev);
	return result;
}
