// Control Structure Example: Switch Fall-Through (Dart)
void main() {
  var value = 1;

  switch (value) {
    case 1:
      print("Dart: matched 1");
    // required — no fall-through allowed. Must break of use continue keyword.

    case 2:
      print("Dart: matched 2");
      break;

    default:
      print("Dart: default");
  }
}
