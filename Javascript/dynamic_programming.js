// Dynamic Programming
// www.youtube.com/watch?v=oBt53YbR9Kk&ab_channel=freeCodeCamp.org

// Dynamic programming is the stratergy of breaking a bigger problems into sub problems.
// It is particularly useful for optimization problems, where the goal is to find the best solution among a set of feasible solutions.
// The basic idea of dynamic programming is to solve each subproblem only once and then store its solution in a table (usually an array or matrix). Later, when the same subproblem is encountered again, instead of recomputing its solution, the previously computed value is simply looked up from the table. This approach helps avoid redundant computations and greatly improves the efficiency of the algorithm.

// Memoization -> is a technique used in dynamic programming to optimize recursive algorithms by storing the results of expensive function calls and returning the cached result when the same inputs occur again. It's essentially a top-down approach to dynamic programming.

// Memoization is typically associated with a top-down approach in dynamic programming. In memoization, also known as "top-down" dynamic programming, the approach involves breaking down the problem into smaller subproblems and solving each subproblem only once. The solutions to subproblems are stored in a data structure, such as a dictionary or an array (the memoization table), to avoid redundant calculations.


// Top-down and bottom-up are two approaches commonly used in dynamic programming to solve problems by breaking them down into smaller subproblems. In the top-down approach, also known as memoization, the problem is solved recursively by starting from the top (the original problem) and recursively solving smaller subproblems. To avoid redundant calculations, the solutions to subproblems are stored in a data structure (such as a dictionary or an array) called the memoization table. When a subproblem needs to be solved, the algorithm first checks if its solution is already present in the memoization table. If so, the stored solution is returned; otherwise, the subproblem is solved recursively. This approach is intuitive and easy to implement, but it may suffer from function call overhead due to recursion and may require additional space for the memoization table.

// Tabulation is usually implimented using Recursive approach.



// In contrast, the bottom-up approach builds the solution to the original problem by solving all subproblems iteratively, starting from the smallest subproblems and gradually building up to the original problem. Instead of relying on recursion, bottom-up dynamic programming fills up a table or array (often called a DP table) with solutions to subproblems in a systematic manner. By solving each subproblem only once and in a predetermined order, bottom-up dynamic programming eliminates the overhead of function calls and typically requires less memory compared to the top-down approach. While it may seem less intuitive at first, bottom-up dynamic programming is often preferred for its efficiency and scalability, especially when dealing with problems with a well-defined structure and optimal substructure property.

// Tabulation is usually implimented using iterative approach (NOT Recursive).


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

// Time complexity: O(2^(m + n)) || Space complexity: O(m + n)
// The above classic bruteforce is not efficient as there are redundent calculations of same path (make sure to draw recursive tree and watch the video).

// We will be solving this problem using memoization and see how we can optimize it.
// One more change here as compared to the bove sollution is: in above approach we were going from (0,0) to (m-1,n-1) But here we are going from (m,n) to (1,1). Nothing related to CP or memoization just implimented the apparoach on top of my head. We could do it bothways.

// Time complexity: O(m * n) || Space complexity: O(m + n)

function grid_traveller_DP(m, n, memo={}){
    var memo_key = m + "," + n
    if(memo_key in memo){ return memo[memo_key] }
    if(m<=0 || n<=0){ return 0 }
    if(m==1 && n==1){ return 1 }
    memo[memo_key] = grid_traveller_DP(m-1, n, memo) + grid_traveller_DP(m, n-1, memo)
    return memo[memo_key]
}

// console.log(grid_traveller_DP(18, 18))



// ### Steps to Memoize a problem ###

// STEP 1: Make it work
//      -> vizualize the problem as a tree
//      -> impliment the tree using recursion
//      -> test it

// STEP 2: Make it efficient (apply memoization(DP))
//      -> add a memo object to the function parameter
//      -> add a base case to return memo value
//      -> store return value into the memo

// NOTE: dont try to directly impliment DP (memoization), first write a working bruteforce recursive code and apply memoization changes to it.



// CanSum problem

// Write a function 'canSum(targetSum, numbers) that takes in a targetSum and an array of numbers as arguments.
// The function should return a boolean indicating whether or not it is possible to generate the targetSum using numbers from the array.
// You may use an element of the array as many times as needed.
// You may assume that all input numbers are nonnegative.

// n-> length of array and m-> target
// Time complexity: O(n^m) || Space complexity: O(m)

function can_sum_classic_recursion(target, numbers){
    if(target==0){ return true }
    if(target<0){ return false }
    for(i of numbers){
        if(can_sum_classic_recursion(target-i, numbers)==true){ return true }
    }
    return false
}

// console.log(can_sum_classic_recursion(8, [5, 3, 4, 7]))

function can_sum_DP(target, numbers, memo={}){
    if(target in memo){ return memo[target] }
    if(target==0){ return true }
    if(target<0){ return false }
    for(i of numbers){
        var returned_value = can_sum_DP(target-i, numbers, memo)==true
        if(returned_value){
            memo[target] = true
            return true
        }
    }
    memo[target] = false
    return false
}

// console.log(can_sum_DP(8, [5, 3, 4, 7]))




// Write a function "howSum(targetSum, numbers) that takes in a targetSum and an array of numbers as arguments.
// The function should return an array containing any combination of elements that add up to exactly the targetSum. If there is no combination that adds up to the targetSum, then return null.
// If there are multiple combinations possible, you may return any single one.

// n-> length of array and m-> target
// Time: O(n^m * m) || Space: O(m)

function how_sum_classic_recursion(target, numbers){
    if(target===0){ return [] }
    if(target<0){ return null }

    for(var i of numbers){
        var diff = target - i
        var returned_val = how_sum_classic_recursion(diff, numbers)
        if(returned_val!=null){
            return [i, ...returned_val]
        }
    }
    return null
}

// console.log(how_sum_classic_recursion(7, [5, 3, 4, 7]))


// Time: O(n*m*m) || Space: O(m^2)
function how_sum_DP(target, numbers, memo={}){
    if(target in memo){ return memo[target] }
    if(target===0){ return [] }
    if(target<0){ return null }

    for(var i of numbers){
        var diff = target - i
        var returned_val = how_sum_DP(diff, numbers, memo)
        if(returned_val!=null){
            memo[target] = [i, ...returned_val]
            return memo[target]
        }
    }
    memo[target] = null
    return null
}

// console.log(how_sum_DP(300, [7, 14]))



// Best Sum problem

// Write a function "howSum(targetSum, numbers) that takes in a targetSum and an array of numbers as arguments.
// The function should return an array containing any combination of elements that add up to exactly the targetSum. If there is no combination that adds up to the targetSum, then return null.
// If there are multiple combinations possible, you may return any single one.

// Time: O(n^m * m) || Space: O(m*m)

function best_sum_classic_recursive(target, numbers){
    if(target==0){ return [] }
    if(target<0){ return null }

    var min_combination = null

    for(let i of numbers){
        var diff = target - i
        var returned_result = best_sum_classic_recursive(diff, numbers)
        if(returned_result!=null){
            var combination = [...returned_result, i]
            if(min_combination==null || combination.length < min_combination.length){
                min_combination = combination
            }
        }

    }
    return min_combination
}

// console.log(best_sum_classic_recursive(7, [5, 3, 4, 7]))


// Time: O(m * n * m) || Space: O(m*m)

function best_sum_DP(target, numbers, memo={}){
    if(target in memo){ return memo[target] }
    if(target==0){ return [] }
    if(target<0){ return null }

    var min_combination = null

    for(let i of numbers){
        var diff = target - i
        var returned_result = best_sum_DP(diff, numbers, memo)
        if(returned_result!=null){
            var combination = [...returned_result, i]
            if(min_combination==null || combination.length < min_combination.length){
                min_combination = combination
                memo[target] = combination
            }
        }

    }
    return min_combination
}

// console.log(best_sum_DP(7, [5, 3, 4, 7]))
// console.log(best_sum_DP(100, [1, 2, 5, 25]))



// CanConstruct Problem

// Write a function 'canConstruct(target, wordBank)* that accepts a target string and an array of strings.
// The function should return a boolean indicating whether or not the
// "target can be constructed by concatenating elements of the wordBank array.
// You may reuse elepents of "wordBank" as many times as needed.

// m-> target string length & n-> strings array length
// Time: O(n^m*m ) || Space: O(n^m)

function can_construct_classic_recursion(target, strings){
    if(target==""){ return true }

    for(var i of strings){ // We can use splice function of JS to do check and remove the substring easily
        // We can only remove the substring from start NOT in the middle as it will ruin the adjacency of the given string and the further steps will be invalid
        if(target.indexOf(i)==0){
            var new_target = target.replace(i, '')
            if(can_construct_classic_recursion(new_target, strings)){ return true }
        }
    }
    return false
}

// console.log(can_construct_classic_recursion('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar']))
// console.log(can_construct_classic_recursion('', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar']))
// console.log(can_construct_classic_recursion('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd']))


// m-> target string length & n-> strings array length
// Time: O(n*(m^2)) || Space: O(m^2)

function can_construct_DP(target, strings, memo={}){
    if(target in memo){ return memo[target] }
    if(target==""){ return true }

    for(var i of strings){
        if(target.indexOf(i)==0){
            var new_target = target.replace(i, '')
            var returned_value = can_construct_DP(new_target, strings, memo)
            if(returned_value){
                memo[target] = returned_value
                return true
            }
        }
    }
    memo[target] = false
    return false
}

// console.log(can_construct_DP('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd']))
// console.log(can_construct_DP('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar']))
// console.log(can_construct_DP('', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar']))



// Count construct problem

// Write a function 'countConstruct(target, wordBank) that accepts a target string, and an array of strings.
// The function should return the number of ways that the 'target' can be constructed by concatenating elements of the 'wordBank" array.
// You may reuse elements of "wordBank* as many times as needed.

// m-> target string length & n-> strings array length
// Time: O(n^m * m) || Space: O(m^2)

function coubt_construct_classic_recursion(target, strings){
    if(target==""){ return 1 }

    var count = 0

    for(var i of strings){
        if(target.indexOf(i)==0){
            var new_target = target.replace(i, '')
            var returned_value = coubt_construct_classic_recursion(new_target, strings)
            if(returned_value > 0){
                count = count + returned_value
            }
        }
    }
    return count
}

// console.log(coubt_construct_classic_recursion('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar']))
// console.log(coubt_construct_classic_recursion('', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar']))
// console.log(coubt_construct_classic_recursion('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd']))


// m-> target string length & n-> strings array length
// Time: O(n*(m^2)) || Space: O(m^2)

function count_construct_DP(target, strings, memo={}){
    if(target in memo){ return memo[target] }
    if(target==""){ return 1 }

    var count = 0

    for(var i of strings){
        if(target.indexOf(i)==0){
            var new_target = target.replace(i, '')
            var returned_value = count_construct_DP(new_target, strings)
            if(returned_value > 0){
                count = count + returned_value
                memo[target] = count
            }
        }
    }
    memo[target] = count
    return count
}

// console.log(count_construct_DP('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar']))
// console.log(count_construct_DP('', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar']))
// console.log(count_construct_DP('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd']))



// All construct problem

// Write a function 'allConstruct(target, wordBank)™️ that accepts a target string and an array of strings.
// The function should return a 2D array containing all of the ways that the "target' can be constructed by concatenating elements of the wordBank" array. Each element of the 2D array should represent one combination that constructs the 'target".
// You may reuse elements of "wordBank' as many times as needed.

// Watch tutorial -> https://youtu.be/oBt53YbR9Kk?t=10053

function all_construct_classic_recursion(target, strings){
    if(target==""){ return [[]] }

    var result = []

    for(var i of strings){ // make sure to always declare a variable using let or var else it can cause scope related erros and make your code hard to debug
        if(target.indexOf(i)==0){
            var new_target = target.replace(i, '')
            var returned_value = all_construct_classic_recursion(new_target, strings) // This returning an array of arrays
            var my_ways = returned_value.map(way => [i, ...way]) // This adds the current string infront of every sub-array
            result.push(...my_ways)
        }
    }
    return result
}

// console.log(all_construct_classic_recursion('purple', ['purp', 'p', 'ur', 'le', 'purpl']))
// console.log(all_construct_classic_recursion('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd', 'ef', 'c']))



// m-> target string length & n-> strings array length
// Time: O(n^m)) || Space: O(m)

function all_construct_DP(target, strings, memo={}){
    if(target in memo){ return memo[target] }
    if(target==""){ return [[]] }

    var result = []

    for(var i of strings){ // make sure to always declare a variable using let or var else it can cause scope related erros and make your code hard to debug
        if(target.indexOf(i)==0){
            var new_target = target.replace(i, '')
            var returned_value = all_construct_DP(new_target, strings, memo) // This returning an array of arrays
            var my_ways = returned_value.map(way => [i, ...way]) // This adds the current string infront of every sub-array
            result.push(...my_ways)
        }
    }
    memo[target] = result
    return result
}

// console.log(all_construct_DP('purple', ['purp', 'p', 'ur', 'le', 'purpl']))
// console.log(all_construct_DP('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd', 'ef', 'c']))




// Dynamic Programming - Tabulation

// Tabulation is a dynamic programming technique used to solve problems by building a table (often a multi-dimensional array) and filling it iteratively. In tabulation, the problem is solved bottom-up, starting with the base cases and progressively building up solutions for larger subproblems until the final solution is reached.
// In tabulation, each cell in the table represents the solution to a subproblem, and the final solution is typically found in the last cell of the table. The table is filled in a systematic manner, often using nested loops, ensuring that all necessary subproblems are solved before moving on to larger ones.

// Tabulation is usually implimented using iterative approach (NOT Recursive)



// Fibonacci (using Tabular DP)
// https://youtu.be/oBt53YbR9Kk?t=11459

// Time: O(n) || Space: O(n)

function fibonacci_iterative(n){
    var a = 0
    var b = 1
    var i = n
    var result = []
    while(i>0){
        if(i==n){ result.push(a) }
        if(i==n-1){ result.push(b) }
        else{
            var c = a + b
            a = b
            b = c
            result.push(c)
        }
        i -= 1
    }
    return result
}

// console.log(fibonacci_iterative(8))


// Here we are considering 0 to be the 0th element of the fibonacci series. W


// Time: O(n) || Space: O(n)

// In the below code we are adding the previous 2 numbers to get the next one
function fibonacci_DP_tabulation(n){
    var result = Array(n+1).fill(0) // We need to take n+1 lenght array  so that we also have a nth index in our array and then intialize them all with 0s
    result[1] = 1
    i = 2
    while(i<=n){
        result[i] = result[i-1] + result[i-2]
        i += 1
    }
    return result
}

// console.log(fibonacci_DP_tabulation(8))


// Time: O(n) || Space: O(n)

// In the below code we will take a different approach and start adding each number to the next two numbers
function fibonacci_DP_tabulation_2(n){
    var result = Array(n+1).fill(0) // We need to take n+1 lenght array  so that we also have a nth index in our array and then intialize them all with 0s
    result[1] = 1
    for(var i=1; i<=n; i+=1){
        if((i+1)<=n) result[i+1] += result[i]
        if((i+2)<=n) result[i+2] += result[i]
    }
    return result
}

// console.log(fibonacci_DP_tabulation_2(8))



// Grid traveller Problem - Tabulation
// Check the exact Grid traveller problem from above.
// https://youtu.be/oBt53YbR9Kk?t=12138
// Again we need to find the total number of ways for the traveller.

// Time: O(m*n) || Space: O(m*n)

function grid_traveller_DP_tabulation(m, n){
    var result = Array(m+1).fill().map(() => Array(n+1).fill(0)) // We take 2D array of ((m+1) * (n+1)) size, because we also want nth and mth indexes included in our 2D array. So index would start from 0 to m for row and 0 to n for column.
    result[1][1] = 1 // As we did earlier when we reach (0,0) we want to return 1 but because we are taking an extra index (size), hence we retun 1 from (1,1) instead of (0,0)
    // Now we will loop through every element of the 2D array and add the number in the current cell to the cell on the next and the cell below it. (refer the Grid Traveller question)
    for(var i=0; i<=m; i++){
        for(var j=0; j<=n; j++){
            // Adding to left cell
            if((i+1) <= m) result[i+1][j] += result[i][j]
            if((j+1) <= n) result[i][j+1] += result[i][j]
        }
    }
    // Now to get the total numbers of the ways we need to return the result[m+1][n+1] index value
    return result[m][n]
}

// console.log(grid_traveller_DP_tabulation(3, 3))
