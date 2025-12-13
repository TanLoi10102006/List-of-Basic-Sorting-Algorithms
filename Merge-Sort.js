// Thuật toán Merge-Sort(sắp xếp trộn);
// Ý Tưởng : Chia nhỏ mảng ->Sắp xếp từng Phần ->Trộn (merge) lại thành mảng đá sắp xếp

function MergeSort(A) {
  if (A.length <= 1) {
    return A;
  }
  let mid = Math.floor(A.length / 2);
  let left = A.slice(0, mid);
  let right = A.slice(mid);
  return Merge(MergeSort(left), MergeSort(right));
}
function Merge(left, right) {
  let arr = [];
  let i = 0;
  let j = 0;
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      arr.push(left[i]);
      i++;
    } else {
      arr.push(right[j]);
      j++;
    }
  }
  return arr.concat(left.slice(i).concat(right.slice(j)));
}
