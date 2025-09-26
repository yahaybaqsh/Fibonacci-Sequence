 
        // Store console outputs
        let fibConsoleOutput = [];
        let sortConsoleOutput = [];

        // Clear console outputs
        function clearConsoles() {
            fibConsoleOutput = [];
            sortConsoleOutput = [];
            document.getElementById('fibConsoleOutput').innerHTML = '';
            document.getElementById('sortConsoleOutput').innerHTML = '';
        }

        // Add to console output
        function addToConsole(output, type) {
            const consoleDiv = type === 'fib' ? 'fibConsoleOutput' : 'sortConsoleOutput';
            const outputArray = type === 'fib' ? fibConsoleOutput : sortConsoleOutput;
            
            outputArray.push(output);
            document.getElementById(consoleDiv).innerHTML = outputArray.map(line => 
                `<div class="console-line ${type}">${line}</div>`
            ).join('');
            
            // Auto-scroll to bottom
            const container = document.getElementById(type === 'fib' ? 'fibConsole' : 'sortConsole');
            container.scrollTop = container.scrollHeight;
        }

        // Iterative Fibonacci
        function fibs(n) {
            if (n <= 0) return [];
            if (n === 1) return [0];
            if (n === 2) return [0, 1];
            
            const sequence = [0, 1];
            for (let i = 2; i < n; i++) {
                sequence.push(sequence[i - 1] + sequence[i - 2]);
            }
            return sequence;
        }

        // Recursive Fibonacci
        function fibsRec(n) {
            addToConsole("This was printed recursively", 'fib');
            
            if (n <= 0) return [];
            if (n === 1) return [0];
            if (n === 2) return [0, 1];
            
            const prevSequence = fibsRec(n - 1);
            const lastTwoSum = prevSequence[prevSequence.length - 1] + prevSequence[prevSequence.length - 2];
            return [...prevSequence, lastTwoSum];
        }

        // Merge function for merge sort
        function merge(left, right) {
            const result = [];
            let leftIndex = 0;
            let rightIndex = 0;
            
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
        }

        // Recursive Merge Sort
        function mergeSort(arr) {
            addToConsole(`mergeSort([${arr.join(', ')}])`, 'sort');
            
            // Base case
            if (arr.length <= 1) {
                return arr;
            }
            
            // Split array into two halves
            const middle = Math.floor(arr.length / 2);
            const left = arr.slice(0, middle);
            const right = arr.slice(middle);
            
            // Recursively sort both halves and merge
            return merge(mergeSort(left), mergeSort(right));
        }

        // Run Fibonacci functions
        function runFibonacci() {
            clearConsoles();
            const input = document.getElementById('fibInput').value;
            const n = parseInt(input);
            
            if (isNaN(n) || n < 1) {
                document.getElementById('fibOutput').innerHTML = 'Please enter a valid positive number.';
                return;
            }
            
            if (n > 20) {
                document.getElementById('fibOutput').innerHTML = 'Please enter a number ≤ 20 to avoid performance issues.';
                return;
            }
            
            try {
                // Iterative version
                const iterativeResult = fibs(n);
                
                // Recursive version (reset console first)
                fibConsoleOutput = [];
                const recursiveResult = fibsRec(n);
                
                document.getElementById('fibOutput').innerHTML = `
                    <strong>Input:</strong> ${n}<br><br>
                    <strong>Iterative Result:</strong><br>
                    [${iterativeResult.join(', ')}]<br><br>
                    <strong>Recursive Result:</strong><br>
                    [${recursiveResult.join(', ')}]<br><br>
                    <strong>Recursive calls made:</strong> ${fibConsoleOutput.length}
                `;
            } catch (error) {
                document.getElementById('fibOutput').innerHTML = `Error: ${error.message}`;
            }
        }

        // Run Merge Sort
        function runMergeSort() {
            clearConsoles();
            const input = document.getElementById('sortInput').value;
            
            try {
                const arr = input.split(',').map(x => parseInt(x.trim())).filter(x => !isNaN(x));
                
                if (arr.length === 0) {
                    document.getElementById('sortOutput').innerHTML = 'Please enter valid numbers separated by commas.';
                    return;
                }
                
                const originalArr = [...arr];
                const sortedArr = mergeSort(arr);
                
                document.getElementById('sortOutput').innerHTML = `
                    <strong>Original Array:</strong><br>
                    [${originalArr.join(', ')}]<br><br>
                    <strong>Sorted Array:</strong><br>
                    [${sortedArr.join(', ')}]<br><br>
                    <strong>Recursive calls made:</strong> ${sortConsoleOutput.length}
                `;
            } catch (error) {
                document.getElementById('sortOutput').innerHTML = `Error: ${error.message}`;
            }
        }

        // Initialize with example runs
        window.onload = function() {
            runFibonacci();
            runMergeSort();
        };
   
    <script src="https://kit.fontawesome.com/a076d05399.js " crossorigin="anonymous"></script>
