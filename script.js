// complete the given function

function palindrome(str){
	let l=0, r = str.length-1;
	str = str.toLowerCase();
	while(l < r){
		if(str.charAt(l) === str.charAt(r)){
			l++;
			r--;
		}
		else return false;
	}
	return true;
}
module.exports = palindrome
