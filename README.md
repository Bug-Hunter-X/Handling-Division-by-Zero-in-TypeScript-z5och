# Handling Division by Zero in TypeScript

This repository demonstrates a common error in TypeScript: improper handling of division by zero and provides a solution.

## The Problem

The `bug.ts` file contains a `divide` function that doesn't handle the case where the denominator is zero. This results in an unhandled exception if the function is called with a zero divisor.

## The Solution

The `bugSolution.ts` file demonstrates a more robust approach. It uses a `try...catch` block to handle the potential `Error` thrown by the `divide` function, providing a more graceful way to manage the error and prevent application crashes.  It also shows how to return a default value (or handle the error differently) instead of simply letting the exception propagate.