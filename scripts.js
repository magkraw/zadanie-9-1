function getTriangleArea(a, h) {
  if (a > 0 && h > 0) {
    return a * h / 2;
  } else {
    return 'wynik nieprawidłowy';
  }
}

console.log(getTriangleArea(10, 6));

var triangle1Area = getTriangleArea(10, 15);
var triangle2Area = getTriangleArea(20, 35);
var triangle3Area = getTriangleArea(30, 45);
