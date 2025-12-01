// Control Structure Example: Switch Fall-Through (TypeScript)
let value: number = 1;

switch (value) {
  case 1:
    console.log("TS: matched 1");
    // No break here → falls through to the next case

  case 2:
    console.log("TS: also reached case 2 due to fall-through");
    break;

  default:
    console.log("TS: default");
}