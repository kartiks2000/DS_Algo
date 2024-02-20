// Dynamic Programming
// www.youtube.com/watch?v=oBt53YbR9Kk&ab_channel=freeCodeCamp.org

// Dynamic programming is the stratergy of breaking a bigger problems into sub problems.
// It is particularly useful for optimization problems, where the goal is to find the best solution among a set of feasible solutions.
// The basic idea of dynamic programming is to solve each subproblem only once and then store its solution in a table (usually an array or matrix). Later, when the same subproblem is encountered again, instead of recomputing its solution, the previously computed value is simply looked up from the table. This approach helps avoid redundant computations and greatly improves the efficiency of the algorithm.

// Memoization -> is a technique used in dynamic programming to optimize recursive algorithms by storing the results of expensive function calls and returning the cached result when the same inputs occur again. It's essentially a top-down approach to dynamic programming.


// Fibonacci Numbers

function Fibonacci_classic_iterative(n){
    var result = []
    var a = 0
    var b = 1
    if(n>=1){ result.push(a)}
    if(n>=2){ result.push(b)}

    n = n - 2

    while(n){
        c=a+b
        result.push(c)
        a=b
        b=c
        n -= 1
    }
    return result
}

// console.log(Fibonacci_classic_iterative(10))

// Time complexity: O(2^n) || Space complexity: O(n)
// Check the recursive call graph and the video to understand the complexity and the redudent operations making it very slow.
// The below code considers
function Fibonacci_classic_iterative(n){
    if(n<=1){ return n }
    return Fibonacci_classic_iterative(n-1) + Fibonacci_classic_iterative(n-2)
}

// console.log(Fibonacci_classic_iterative(10))


// In the above recursive fibonacci problem, if you follow its recursive tree you will be able to see that a same fibonnaci is being calculated a multiple time through out the calculation. To improve its complexity we can calculate a calcuklation once and then save it to be used next time instead of recalculating it.
// We will basically be using the memoization concept in Dynamic Programming.
// Time complexity: O(n) || Space complexity: O(n)

function fibonacci_DP(n, memo={}){
    if(n in memo){ return memo[n]}
    if(n<=1){ return n }
    memo[n] = fibonacci_DP(n-1, memo) + fibonacci_DP(n-2, memo)
    return memo[n]
}

// console.log(fibonacci_DP(10, memo={}))
