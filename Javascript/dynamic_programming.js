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



// Grid traveller problem

// There is a robot on an m x n grid. The robot is initially located at the top-left corner (i.e., grid[0][0]). The robot tries to move to the bottom-right corner (i.e., grid[m - 1][n - 1]). The robot can only move either down or right at any point in time.
// Given the two integers m and n, return the number of possible unique paths that the robot can take to reach the bottom-right corner.


function grid_traveller_classic_recursion(m, n, current_row=0, current_col=0){
    if(current_row>=m || current_col>=n){ return 0 }
    if(current_row==m-1 && current_col==n-1){ return 1 }
    return grid_traveller_classic_recursion(m, n, current_row + 1, current_col) + grid_traveller_classic_recursion(m, n, current_row, current_col + 1)
}

// console.log(grid_traveller_classic_recursion(2,3))

// The above classic bruteforce is not efficient as there are redundent calculations of same path (make sure to draw recursive tree and watch the video).

// We will be solving this problem using memoization and see how we can optimize it.
// One more change here as compared to the bove sollution is: in above approach we were going from (0,0) to (m-1,n-1) But here we are going from (m,n) to (1,1). Nothing related to CP or memoization just implimented the apparoach on top of my head.

function grid_traveller_DP(m, n, memo={}){
    var memo_key = m + "," + n
    if(memo_key in memo){ return memo[memo_key] }
    if(m<=0 || n<=0){ return 0 }
    if(m==1 && n==1){ return 1 }
    memo[memo_key] = grid_traveller_DP(m-1, n, memo) + grid_traveller_DP(m, n-1, memo)
    return memo[memo_key]
}

// console.log(grid_traveller_DP(10, 10))
