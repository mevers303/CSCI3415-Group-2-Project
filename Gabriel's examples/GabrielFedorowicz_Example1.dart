// Control Structure Example: Conditional Logic (Dart)
void main() {
  int x = 0;

  // Dart does NOT allow truthy/falsy values (Only 0 or 1).
  // Conditions must evaluate to a strict bool.
  // Therefore we MUST explicitly compare x to 0.
  if (x == 0) {
    print("Value is zero");
  } else {
    print("Value is not zero");
  }

  // If you tried:
  // if (x) {}
  // Dart would throw a compile-time error.
}