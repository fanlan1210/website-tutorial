## 前置:開發軟體介紹
### Adobe Brackets
![](https://upload.wikimedia.org/wikipedia/commons/b/b0/Adobe_Brackets_v0.0.x_icon.png)
* 由HTML,CSS和JavaScript編寫的HTML編輯器
* 可即時預覽網頁
* 跨平台(Windows,Mac OS,Linux)

# JavaScript
## 基本介紹
**JavaScript**，通常縮寫為**JS**。它被世界上的絕大多數網站所使用，也被現代的網頁瀏覽器所支援。
## 如何在網頁中導入JS
我們主要透過在HTML檔案裡面，加入`<script>`標籤來執行JS。

而`<script>`標籤又可以分為直接使用，和連結檔案兩種方式。

### 直接使用
直接使用即是在`<script>`標籤內寫入JS程式碼，如下面範例:
```html
<script>
    (JS程式碼)
</script>
```

### 連結檔案
也可以透過在`<script>`標籤加入*src*屬性，連結至指定的檔案來嵌入JS程式碼至網頁裡。
```html
<script src="example.js"></script>
```
**注意:**當使用了此種方式，`<script>`標籤內的任何文字將會失效

## 程式語法

### console.log("hello world")
按照慣例，最一開始將會介紹Hello world的寫法。

這裡將會使用到`console.log()`，這是用來在主控台顯示文字用的函數
```js
console.log("hello world")
```
此時在瀏覽器按下F12，切換到Console分頁，將會看到*hello world*文字的顯示。

### 彈窗提示: alert()
如果想要更直接的顯示訊息給使用者，這可以使用`alert()`
```js
alert("hello world")
```

### 彈窗輸入: prompt()
除了彈出視窗顯示訊息外，也可以讓使用者輸入文字給程式。
```js
prompt("type in something")
```

### 宣告變數: var
當一個程式在執行時，經常會需要記憶某些訊息(例如使用者輸入的文字)，而此時**變數**就派上用場了。

透過`var`，可以宣告需要用到的變數。

範例
```js
var x = 10;
var y = 0.5;
var message = "Hi!";
```

### 條件判斷:if
	
## 實作:剪刀石頭布
### 提示使用者選擇
### 隨機數的使用: Math.random
### 判斷勝負

## 發布至網際網路
	### git介紹
	### github介紹與使用