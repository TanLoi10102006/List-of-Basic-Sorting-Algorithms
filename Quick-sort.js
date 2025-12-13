// Thuật toán sắp xếp nhanh Quick Sort
/**Mô tả thực toán tạo 1 biến pivot đầu hoặc cuối 
- bên trái các phần tử nhỏ hơn pivot 
- bên phải các phần tử lớn hơn pivot 
 */
// chọn phần tử cuối mảng làm pivot
function QuickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  let pivot = arr[arr.length - 1]; // chọn phần tử làm pivot
  let left = [];
  let right = [];
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]); // nhỏ hơn pivot đưa vào mảng trái
    } else {
      right.push(arr[i]); // lớn hơn pivot đưa vào mảng phải
    }
  }
  // trả về mảng trái và phải rồi ghép
  return [...QuickSort(left), pivot, ...QuickSort(right)];
}
let arr = [8, 5, 7, 1, 9, 10];
console.log("Mảng chưa được sắp xếp ", arr);
console.log("Mảng được sấp xếp", QuickSort(arr));

// chọn phần tử đầu mảng làm pivot

function QuickSort2(A) {
  if (A.length <= 1) return A;

  let pivot = A[0];
  let left = [];
  let right = [];

  for (let i = 1; i < A.length; i++) {
    // bắt đầu từ 1 để bỏ qua pivot
    if (A[i] < pivot) {
      left.push(A[i]);
    } else {
      right.push(A[i]);
    }
  }

  return [...QuickSort2(left), pivot, ...QuickSort2(right)];
}

let A = [9, 3, 7, 1, 8, 2, 5, 4, 6];
console.log("Mảng chưa sắp xếp là:", A);
console.log("Mảng được sắp xếp là:", QuickSort2(A));

// chọn phần tử giữa làm pivot
function QuickSort3(B) {
  if (B.length <= 1) {
    return B;
  }
  let left = [];
  let right = [];
  let midIndex = Math.floor(B.length / 2);
  let pivot = B[midIndex];
  for (let i = 0; i < B.length; i++) {
    if (i === midIndex) {
      continue; // bỏ qua phần tử pivot
    }
    if (B[i] < pivot) {
      left.push(B[i]);
    } else {
      right.push(B[i]);
    }
  }

  return [...QuickSort3(left), pivot, ...QuickSort3(right)];
}

let B = [6, 2, 4, 8, 5, 9];
console.log("Mảng chưa sắp xếp là ", B);
console.log("Mảng đã được sắp xếp ", QuickSort3(B));
