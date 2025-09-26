```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Recursion Project - README</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }

        body {
            background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%);
            color: white;
            min-height: 100vh;
            padding: 20px;
        }

        .container {
            max-width: 800px;
            margin: 0 auto;
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(10px);
            border-radius: 20px;
            padding: 40px;
            box-shadow: 0 8px 32px rgba(0,0,0,0.1);
            border: 1px solid rgba(255,255,255,0.2);
        }

        h1 {
            font-size: 2.5rem;
            margin-bottom: 20px;
            text-align: center;
            text-shadow: 0 2px 4px rgba(0,0,0,0.3);
        }

        h2 {
            font-size: 1.8rem;
            margin: 30px 0 20px 0;
            color: #60a5fa;
            border-bottom: 2px solid rgba(255,255,255,0.3);
            padding-bottom: 10px;
        }

        h3 {
            font-size: 1.4rem;
            margin: 25px 0 15px 0;
            color: #93c5fd;
        }

        p {
            margin: 15px 0;
            line-height: 1.6;
            font-size: 16px;
        }

        ul, ol {
            margin: 15px 0 15px 30px;
            line-height: 1.6;
        }

        li {
            margin: 8px 0;
        }

        code {
            background: rgba(0,0,0,0.3);
            padding: 2px 6px;
            border-radius: 4px;
            font-family: 'Courier New', monospace;
            font-size: 14px;
        }

        pre {
            background: rgba(0,0,0,0.3);
            padding: 20px;
            border-radius: 10px;
            margin: 20px 0;
            overflow-x: auto;
            font-family: 'Courier New', monospace;
            font-size: 14px;
        }

        .highlight {
            background: rgba(255,255,255,0.2);
            padding: 2px 6px;
            border-radius: 4px;
            font-weight: bold;
        }

        .note {
            background: rgba(255,217,0,0.2);
            border-left: 4px solid #fbbf24;
            padding: 15px;
            margin: 20px 0;
            border-radius: 0 8px 8px 0;
        }

        .note strong {
            color: #fbbf24;
        }

        a {
            color: #60a5fa;
            text-decoration: none;
        }

        a:hover {
            text-decoration: underline;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Recursion Project</h1>
        
        <h2>Introduction</h2>
        <p>This project explores two classic recursive algorithms: the Fibonacci sequence and merge sort. Recursion is a powerful programming technique where a function calls itself to solve smaller instances of the same problem.</p>

        <h2>Assignment Requirements</h2>
        <p>The project consists of two main components:</p>
        <ol>
            <li><strong>Fibonacci Sequence</strong>: Implement both iterative and recursive solutions</li>
            <li><strong>Merge Sort</strong>: Implement a recursive sorting algorithm</li>
        </ol>

        <h2>Fibonacci Implementation</h2>
        
        <h3>Iterative Approach - <code>fibs(n)</code></h3>
        <p>The iterative version uses a loop to efficiently generate the Fibonacci sequence:</p>
        <pre><code>function fibs(n) {
    if (n <= 0) return [];
    if (n === 1) return [0];
    if (n === 2) return [0, 1];
    
    const sequence = [0, 1];
    for (let i = 2; i < n; i++) {
        sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
    return sequence;
}</code></pre>
        <p><strong>Time Complexity:</strong> O(n) | <strong>Space Complexity:</strong> O(n)</p>

        <h3>Recursive Approach - <code>fibsRec(n)</code></h3>
        <p>The recursive version directly implements the mathematical definition of Fibonacci:</p>
        <pre><code>function fibsRec(n) {
    console.log("This was printed recursively");
    
    if (n <= 0) return [];
    if (n === 1) return [0];
    if (n === 2) return [0, 1];
    
    const prevSequence = fibsRec(n - 1);
    const lastTwoSum = prevSequence[prevSequence.length - 1] + 
                      prevSequence[prevSequence.length - 2];
    return [...prevSequence, lastTwoSum];
}</code></pre>
        <p><strong>Time Complexity:</strong> O(2^n) | <strong>Space Complexity:</strong> O(n)</p>
        <p class="note"><strong>Note:</strong> The recursive version demonstrates the concept clearly but is inefficient for large values of n due to repeated calculations. In practice, you would use memoization or the iterative approach for better performance.</p>

        <h2>Merge Sort Implementation</h2>
        
        <h3>Core Algorithm - <code>mergeSort(arr)</code></h3>
        <p>Merge sort uses the divide-and-conquer strategy:</p>
        <pre><code>function mergeSort(arr) {
    // Base case: arrays with 0 or 1 element are already sorted
    if (arr.length <= 1) {
        return arr;
    }
    
    // Divide: split array into two halves
    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);
    
    // Conquer: recursively sort both halves
    // Combine: merge the sorted halves
    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    const result = [];
    let leftIndex = 0;
    let rightIndex = 0;
    
    // Compare elements and merge in sorted order
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }
    
    // Add remaining elements
    return result
        .concat(left.slice(leftIndex))
        .concat(right.slice(rightIndex));
}</code></pre>
        <p><strong>Time Complexity:</strong> O(n log n) | <strong>Space Complexity:</strong> O(n)</p>

        <h2>Key Concepts Demonstrated</h2>
        <ul>
            <li><span class="highlight">Base Case</span>: Essential for preventing infinite recursion</li>
            <li><span class="highlight">Recursive Case</span>: Breaking down the problem into smaller subproblems</li>
            <li><span class="highlight">Divide and Conquer</span>: Solving complex problems by dividing them into simpler subproblems</li>
            <li><span class="highlight">Call Stack</span>: Understanding how recursive calls are managed in memory</li>
        </ul>

        <h2>Testing and Verification</h2>
        <p>Both implementations have been tested with the following examples:</p>
        <ul>
            <li><code>fibs(8)</code> and <code>fibsRec(8)</code> return <code>[0, 1, 1, 2, 3, 5, 8, 13]</code></li>
            <li><code>mergeSort([3, 2, 1, 13, 8, 5, 0, 1])</code> returns <code>[0, 1, 1, 2, 3, 5, 8, 13]</code></li>
            <li><code>mergeSort([105, 79, 100, 110])</code> returns <code>[79, 100, 105, 110]</code></li>
        </ul>

        <h2>Learning Outcomes</h2>
        <p>Through this project, you should have gained a deeper understanding of:</p>
        <ul>
            <li>How recursion works and when to use it</li>
            <li>The trade-offs between iterative and recursive solutions</li>
            <li>The divide-and-conquer algorithmic paradigm</li>
            <li>Time and space complexity analysis of recursive algorithms</li>
            <li>Debugging recursive functions using console output</li>
        </ul>

        <h2>Additional Resources</h2>
        <ul>
            <li><a href="https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/recursion" target="_blank">Khan Academy - Recursive Algorithms</a></li>
            <li><a href="https://cs50.harvard.edu/x/2023/weeks/4/" target="_blank">Harvard CS50 - Merge Sort Lecture</a></li>
            <li><a href="https://visualgo.net/en/sorting" target="_blank">Visualgo - Sorting Algorithm Visualizer</a></li>
        </ul>

        <div class="note">
            <strong>Important:</strong> While this HTML implementation demonstrates the concepts visually, the original assignment specifies running the code in Node.js from the command line. The JavaScript functions provided can be easily extracted and run in a Node.js environment as required.
        </div>
    </div>
</body>
</html>
```
