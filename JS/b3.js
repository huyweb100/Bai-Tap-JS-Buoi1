/** Mô hình 3 khối
 * Khối 1: Input (Dữ liệu đầu vào)
 *  Giá usd/vnd = 23500
 *  biến: tyGia, usd
 * Khối 2: Các bước xử lý:
 *  B1: Khai báo biến và giá trị input
 *  B2: Khai báo tỷ giá usd/vnd = 23500
 *  B3: khai báo số usd cần quy đổi (vdu là 2)
 *  B4: Tính tỷ giá = usd * tyGia 
 * Khối 3: Output
 *  Số tiền việt cần quy đổi usd  
 */

var tyGia = 23500;
var usd = 2;
var tienQuyDoi = tyGia * usd;
console.log("Tiền Việt Nam cần đổi: " + tienQuyDoi);