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
當程式需要進行判斷時，就會使用到if語句

#### if的基本語法
在JS中，if語句的語法:
```js
if (條件式){ 陳述句; }
else if (條件式){ 陳述句; }
else { 陳述句; }
```
基本上該語法幾乎和C/C++相同:

首先進行開頭的`if`判斷，如果不成立，才接續判斷`else if`；
如果`if`和`else if`都不成立，才進入到`else`。

#### 條件式
```
A 條件運算子 B
```
常見的條件運算子有 `>`(大於)`<`(小於)`>=`()大於等於`<=`(小於等於)`==`(等於)

當條件成立時，該條件式為真(true)；
反之(不成立)為假(false)

#### 完整if範例程式
```js
var A = 10;
var B = 5;
if (A)
```

## 實作:剪刀石頭布
### 提示使用者選擇
### 隨機數的使用: Math.random
### 判斷勝負

## 發布至網際網路
### git介紹
git是一個版本控制軟體，我們可以使用git方便進行專案的管理與追蹤，
如檔案變更、紀錄等。
### github介紹
git會需要儲存庫，來進行檔案的儲存，
而Github就提供了線上的儲存庫代管服務，
類似於雲端硬碟的概念。
### Github Pages(github.io)簡介
由於JS主要依賴於網頁來執行，因此會需要建立網站。

而Github Pages是利用儲存庫裡的檔案，建立網站的功能。

### 建立專案儲存庫(repository)
儲存庫(repository)在這裡是指在儲存上的的資料結構，
可以暫時想像成一個儲存空間

使用網站的新增功能，建立一個儲存庫(記得勾選用README初始化)
儲存庫名字填*使用者名稱.github.io*
![](https://i.imgur.com/DK6F7bt.png)
![](https://i.imgur.com/n1PFlc2.png)
### 上傳檔案至儲存庫
在儲存庫裡，使用上傳檔案功能(upload)，將自己的網頁檔案上傳上去。
![](https://i.imgur.com/AsSVbua.png)
**備註:**可以在commit時，簡單寫個描述喔
### 網站發佈
在瀏覽器輸入自己網站的網址(儲存庫名稱)，看到自己的網站，完成!