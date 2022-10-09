/**Mô hình 3 khối
 * Khối 1:Input 
 *  Số nguyên dương (so) có 2 chữ số (12, 44,...)
 * 
 * Khối 2: Các bươc xử lý
 *  B1: Khai báo biến và gắn giá trị input
 *  B2: Tạo và tách số hàng chục và hàng đơn vị ra
 *      hàng đơn vị: so % 10
 *      hàng chục: so /10
 *  B3: Tính tổng số 2 số = hangDonVi +hangChuc
 * Khối 3:output
 *     Kết quả hiển thị tổng của 2 số
 * 
 */

var so = 28;
var hangChuc = 0
var hangDonVi = 0
var tong2So = 0;

hangDonVi = so % 10
hangChuc = Math.floor(so/10) 
tong2So = (Number(hangDonVi) + Number(hangChuc))
console.log("Tổng 2 chữ số " + tong2So)

