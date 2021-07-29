// 实现 (5).add(3).minis(2) //6
// 
~ function() {
	function add(n) {
		return this + n
	}

	function minis(n) {
		return this - n
	}

	Number.prototype.add = add
	Number.prototype.minis = minis
}

(5).add(3).minis(2)