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


<img width="1537" height="812" alt="لقطة الشاشة 2025-09-26 111111" src="https://github.com/user-attachments/assets/822492d2-c12b-4b59-b9c2-04202eebcdfa" />
<img width="1212" height="790" alt="لقطة الشاشة 2025-09-26 111128" src="https://github.com/user-attachments/assets/52650a20-5061-4b0e-ac87-ced8006d0a10" />

![gif](https://github.com/user-attachments/assets/8fd6fb5d-4330-4273-8cb1-56ace4dfb610)
