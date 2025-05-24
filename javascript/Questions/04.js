// Fibonachi sequence - every element in array is sum of preceeding two elements

function fibonacci(numTerms) {
    if (numTerms === 0) return [];
    if (numTerms === 1) return [0];

    let sequence = [0, 1]

    while (sequence.length < numTerms) {
        const l = sequence.length;
        let nextNum = sequence[l-1] + sequence[l-2]
        sequence.push(nextNum)
    }
    return sequence
}

console.log(fibonacci(12))
