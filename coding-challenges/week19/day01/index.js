let maxContinuousSum = (arr, k) => {
    let maxSum = 0
    for (let i = 0; i < k; i++) {
        maxSum += arr[i]
    }
    let sum = maxSum
    for (let i = k; i < arr.length; i++) {
        sum = sum - arr[i - k] + arr[i]
        if (sum > maxSum) maxSum = sum
    }
    return (maxSum)
}

console.log(maxContinuousSum([2, 3, 4, 1, 5], 2))