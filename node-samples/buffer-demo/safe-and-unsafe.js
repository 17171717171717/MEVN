// // 创建一个长度为10的零填充缓冲区
// const safeBuf = Buffer.alloc(10, 'waylau');

// console.log(safeBuf.toString());

// // 数据有可能包含旧数据
// const unsafeBuf = Buffer.allocUnsafe(10);

// console.log(unsafeBuf.toString());

// const unsafeBuf2 = Buffer.allocUnsafe(10);
// // 用0填充清理掉旧数据
// unsafeBuf2.fill(0);

// console.log(unsafeBuf2.toString());

// unsafeBuf2.fill(0)：這段代碼用 0 填充了 unsafeBuf2 緩衝區，因為 0 是 NUL 字元（空字元），當你將它轉換為字串時，NUL 字元不會顯示，因此結果是一個空字串。

const unsafeBuf = Buffer.allocUnsafe(10);
console.log(unsafeBuf.toString()); // 可能輸出亂碼或空字串

// const unsafeBuf2 = Buffer.allocUnsafe(10);
// unsafeBuf2.fill('A'); // 用字母 'A' 填充
// console.log(unsafeBuf2.toString()); // 輸出 'AAAAAAAAAA'