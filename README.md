# gradient.js
A light JavaScript for blending colors together. 

Uses RGB color jsons on a linear continuum and blends them together. This allows us to get an output color for any point between the maximum and minimum values on the line. Use this to come up with colors for visualizations (such as high, moderate, low). The sky is the limit.

Example usage
-------------
```js
// Set color points to be Red @ 100, Yellow @55, green @20 and white @0
grad = new Gradient();
grad.setColorPoints([
  {point:100, r:255, g:0, b: 0}, 
  {point:55, r:255, g:255, b: 0}, 
  {point:20, r:0, g:255, b:0}, 
  {point: 0, r: 250, g: 250, b:250}
]);

// Get the HTML hex at point 32
grad.getHex(32);   // returns the string "#57ff00"
```
