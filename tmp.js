const tree = {
	value: 10,
	left: {
		value: 5,
		left: {
			value: 2,
			left: {
				value: 1,
			},
			right: {
				value: 3,
			},
		},
		right: {
			value: 7,
			left: {
				value: 6,
			},
			right: {
				value: 9,
			},
		},
	},
	right: {
		value: 15,
		left: {
			value: 12,
			left: {
				value: 11,
			},
			right: {
				value: 13,
			},
		},
		right: {
			value: 18,
			left: {
				value: 16,
			},
			right: {
				value: 20,
			},
		},
	},
}

// Рекурсия
function solutionRecursion(node) {
	if (node) {
		console.log(node.value)

		if (node.left) solution(node.left)
		if (node.right) solution(node.right)
	}
}

// Стек
function solutionStack(node) {
	const stack = [node]

	while (stack.length) {
		const node = stack.pop()

		console.log(node.value)

		if (node.right) stack.push(node.right)
		if (node.left) stack.push(node.left)
	}
}

solution(tree)
