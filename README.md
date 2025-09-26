# Recursion Project

## Introduction
This project explores two classic recursive algorithms: the **Fibonacci sequence** and **Merge Sort**. Recursion is a powerful programming technique where a function calls itself to solve smaller instances of the same problem.

## Assignment Requirements
The project consists of two main components:

1. **Fibonacci Sequence**: Implement both iterative and recursive solutions.
2. **Merge Sort**: Implement a recursive sorting algorithm.

## Fibonacci Implementation

### Iterative Approach - `fibs(n)`
The iterative version uses a loop to efficiently generate the Fibonacci sequence:

```javascript
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
