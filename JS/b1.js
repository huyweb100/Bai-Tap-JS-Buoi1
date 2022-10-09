/** Mô hình 3 khối
 * Khối 1: Dữ liệu đưa vào
 * Lương 1 ngày: 100.000
 * Biến: songayLam,luongNgay
 * Công thức tính: Số ngày * 100.000
 * Khối 2: Các bước xử lý
 *  B1:Khai báo biến và giá trị input
 *  luongNGay = 100.000
 *  nhập soNgayLam 
 *  B2: Lập công thức tính toán
 *      Tổng lương nhận = lương ngày * số ngày làm    
 * Khối 3: Ouput (Kết quả đạt được)
 *  Tổng lương nhận
 */

var luongNgay = 100000;
var soNgayLam = 30;
var tongLuongNhan = 0;

tongLuongNhan = soNgayLam * luongNgay;
console.log("tổng lương nhận = " + tongLuongNhan);