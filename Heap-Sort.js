/**
 *  Ý tưởng Heap Sort
- Heap Sort dựa trên cấu trúc Heap (cụ thể là Max Heap).
- Các bước:
- Xây dựng một Max Heap từ mảng ban đầu.
- Hoán đổi phần tử gốc (lớn nhất) với phần tử cuối cùng.
- Giảm kích thước heap đi 1 và heapify lại để duy trì tính chất heap.
- Lặp lại cho đến khi mảng được sắp xếp.
 */

function heapify(arr, n, i) {
  let largest = i; // Giả sử nút i là lớn nhất
  let left = 2 * i + 1; // Con trái
  let right = 2 * i + 2; // Con phải

  // Nếu con trái lớn hơn gốc
  if (left < n && arr[left] > arr[largest]) {
    largest = left;
  }

  // Nếu con phải lớn hơn gốc
  if (right < n && arr[right] > arr[largest]) {
    largest = right;
  }

  // Nếu largest thay đổi, hoán đổi và heapify tiếp
  if (largest !== i) {
    [arr[i], arr[largest]] = [arr[largest], arr[i]];
    heapify(arr, n, largest);
  }
}

function heapSort(arr) {
  let n = arr.length;

  // Bước 1: Xây dựng Max Heap
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapify(arr, n, i);
  }

  // Bước 2: Trích xuất từng phần tử từ heap
  for (let i = n - 1; i > 0; i--) {
    // Hoán đổi gốc với phần tử cuối
    [arr[0], arr[i]] = [arr[i], arr[0]];

    // Heapify lại phần còn lại
    heapify(arr, i, 0);
  }

  return arr;
}

let numbers = [12, 11, 13, 5, 6, 7];
console.log("Mảng sau khi sắp xếp:", heapSort(numbers));
