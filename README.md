# Unexpected Null Return in Addition Function

This repository demonstrates a common yet subtle bug in JavaScript related to null and undefined values.  The `foo` function is intended to add two numbers, but it unexpectedly returns `null` when one of the inputs is `undefined`, rather than throwing an error or providing a more informative result.  The solution provides a more robust implementation.

## Bug
The original code uses loose equality (`===`) to check for null but does not account for `undefined`. This results in unexpected `null` returns when one argument is undefined.