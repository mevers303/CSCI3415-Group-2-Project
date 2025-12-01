// Control Structure Example: Conditional Logic (TypeScript)
let x = 0;

// JavaScript *does* allow truthy/falsy coercion, but we avoid that here so the logic exactly matches the Dart version.
// Using === ensures a strict equality check without type coercion.
if (x === 0) {
  console.log("Value is zero");
} else {
  console.log("Value is not zero");
}
console.log("ts-node is working!");
// In TS/JS, you *could* write:
// if (!x) { ... }
// Since that would rely on truthy/falsy coercion, a feature not seen in Dart.