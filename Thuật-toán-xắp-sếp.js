// thuật toán sắp xếp chọn (Selection Sort)
function selectionSort(A) {
  for (let i = 0; i < A.length - 1; i++) {
    // Giả sử phần tử nhỏ nhất nằm ở vị trí i
    let minIndex = i;
    // Tìm phần tử nhỏ nhất trong đoạn chưa sắp xếp
    for (let j = i + 1; j < A.length; j++) {
      if (A[j] < A[minIndex]) {
        minIndex = j;
      }
    }
    // Đổi chỗ phần tử nhỏ nhất với phần tử ở vị trí i
    if (minIndex !== i) {
      [A[i], A[minIndex]] = [A[minIndex], A[i]];
    }
  }

  return A;
}
let A = [64, 25, 12, 22, 11];
console.log("Mảng sau khi sắp xếp:", selectionSort(A));

// thuật toán chèn trực tiếp
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let current = arr[i];
    let j = i - 1;
    // Dịch chuyển các phần tử lớn hơn current sang phải
    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j];
      j--;
    }
    // Chèn current vào đúng vị trí
    arr[j + 1] = current;
  }
  return arr;
}

let array = [5, 2, 9, 1, 5, 6];
console.log("Mảng sau khi sắp xếp:", insertionSort(array));

// Thuật toán sắp xếp đổi chỗ trực tiếp (interchange sort)
function interchange_sort(B) {
  for (let i = 0; i < B.length - 1; i++) {
    for (let j = i + 1; j < B.length; j++) {
      if (B[i] > B[j]) {
        let X = B[i];
        B[i] = B[j];
        B[j] = X;
      }
    }
  }
  return B;
}

let B = [8, 5, 7, 1, 9, 10];
console.log("Mảng ban đầu là ", B);
console.log("Mảng được sắp xếp là ", interchange_sort(B));

// Thuật toán sắp xếp nổi bột (bubble sort)
function bubble_sort(C) {
  for (let i = 0; i < C.length - 1; i++) {
    for (let j = i + 1; j < C.length - i - 1; j++) {
      if (C[j] < C[j + 1]) {
        let x = C[j];
        C[j] = C[j + 1];
        C[j + 1] = x;
      }
    }
  }
  return C;
}
let C = [8, 5, 7, 1, 9, 10];
console.log("mảng hiện tại là ", C);
console.log("mảng sắp xếp ", bubble_sort(C));

// Thuật Toán sắp xếp rung (shaker sort )

function shaker_sort(D) {
  left = 0;
  right = D.length - 1;
  let make;
  while (left < right) {
    // Đi từ phải sang trái
    make = left;
    for (let i = right; i > left; i--) {
      if (D[i] < D[i - 1]) {
        [D[i], D[i - 1]] = [D[i - 1], D[i]];
        make = i;
      }
    }
    left = make;
    // đi từ trái sang phải
    make = right;
    for (let i = left; i < right; i++) {
      if (D[i] > D[i + 1]) {
        [D[i], D[i + 1]] = [D[i + 1], D[i]];
        make = i;
      }
    }
    right = make;
  }
  return D;
}
let D = [8, 5, 7, 9, 1, 9, 10];
console.log("mảng chưa sắp xếp ", D);
console.log("mảng đã được sắp xếp là ", shaker_sort(D));

/** 1. Cho dãy ký tự X, I, N, C, H, A, O. Áp dụng các giải thuật sắp xếp đã học để
 sắp theo đúng thứ tự bảng chữ cái Latinh. */

function LaTinh(F) {
  for (let i = 0; i < F.length - 1; i++) {
    for (let j = i + 1; j < F.length; j++) {
      if (F[i] > F[j]) {
        let temp = F[i];
        F[i] = F[j];
        F[j] = temp;
      }
    }
  }
  return F;
}
let F = ["X", "I", "N", "C", "H", "A", "O"];
console.log("Mảng chưa được sắp xếp:", F);
console.log("Mảng đã được sắp xếp:", LaTinh(F));
