// HOISTING EXAMPLE IN DART
void main() {
  for (var i = 0; i < 10; i++) {
		print('hello ${i + 1}');
	}
	// Call the print_hello function before its declaration/definition
	print_hello();
}

// Function declaration/definition after its usage
void print_hello() {
	print('hello from print_hello function!');
}
