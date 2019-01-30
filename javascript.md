# JavaScript 教學

---

## 前置：開發軟體介紹

### Adobe Brackets

![](https://upload.wikimedia.org/wikipedia/commons/b/b0/Adobe_Brackets_v0.0.x_icon.png)
* 由 HTML、CSS 和 JavaScript 編寫的 HTML 編輯器
* 可即時預覽網頁
* 跨平台（Windows、macOS、Linux）

# JavaScript

## 基本介紹

**JavaScript**，通常縮寫為 **JS**。它被世界上的絕大多數網站所使用，也被現代的網頁瀏覽器所支援。

## 如何在網頁中導入 JS

我們主要透過在 HTML 檔案裡面，加入`<script>`標籤來執行 JS。

而`<script>`標籤又可以分為直接使用，和連結檔案兩種方式。

### 直接使用

直接使用即是在`<script>`標籤內寫入 JS 程式碼，如下面範例：

```html
<script>
    (JS程式碼)
</script>
```

### 連結檔案

也可以透過在`<script>`標籤加入 *src* 屬性，連結至指定的檔案來嵌入 JS 程式碼至網頁裡。

```html
<script src="example.js"></script>
```

**注意**：當使用了此種方式，`<script>`標籤內的任何文字將會失效。

## 程式語法

### console.log("hello world")

按照慣例，最一開始將會介紹 hello world 的寫法。

這裡將會使用到`console.log()`，這是用來在主控台顯示文字用的函數。

```js
console.log("hello world");
```

此時在瀏覽器按下 F12，切換到 Console 分頁，將會看到 *hello world* 文字的顯示。

### 彈窗提示：alert()

如果想要更直接的顯示訊息給使用者，可以使用`alert()`。

```js
alert("hello world");
```

### 彈窗輸入：prompt()

除了彈出視窗顯示訊息外，也可以讓使用者輸入文字給程式。

```js
prompt("type in something");
```

### 宣告變數：var

當一個程式在執行時，經常會需要記憶某些訊息（例如使用者輸入的文字），而此時**變數**就派上用場了。

透過`var`，可以宣告需要用到的變數。

範例：

```js
var x = 10;
var y = 0.5;
var message = "Hi!";
```

### 條件判斷：if

當程式需要進行判斷時，就會使用到`if`語句。

#### if 的基本語法

在 JS 中，`if`語句的語法：

```js
if (條件式){ 陳述句; }
else if (條件式){ 陳述句; }
else { 陳述句; }
```

基本上該語法幾乎和 C/C++ 相同：

首先進行開頭的`if`判斷，如果不成立，才接續判斷`else if`；
如果`if`和`else if`都不成立，才進入到`else`。

#### 條件式

```
A 條件運算子 B
```

常見的條件運算子有 `>`（大於）、`<`（小於）、`>=`（大於等於）、`<=`（小於等於）、`==`（等於）。

當條件成立時，該條件式為真（true）；
反之（不成立）為假（false）。

##### 延伸學習：===（全等於）

`===`（全等於）條件運算子是 JS 特有的一項運算子，
功能基本上和`==`（等於）類似。

但是`===`有著更嚴格的判斷，除了像`==`的值（value）得相等之外，
`===`等號兩邊的 **型態也得相同**，否則條件不成立。

範例：

```js
100 == '100' // 成立
100 === '100' // 不成立
```

#### 延伸：邏輯運算子

如果想要一次判斷多個條件式，可以在條件式之間加入 **邏輯運算子**。

常見的邏輯運算子有`||`（或）、`&&`（且）。

#### 基礎 if 範例程式

下面為一個判斷 A 和 B 數字大小的程式，
它會依序判斷 A 和 B 兩數之間的關係，
假如兩變數之間無大小關係（例如 A 或 B 不是數字），則顯示錯誤。

```js
var A = Number(prompt("A?"));
var B = Number(prompt("B?"));
if (A > B){
  console.log("A 大於 B");
}
else if (A < B){
  console.log("A 小於 B");
}
else if (A == B) {
  console.log("A 等於 B");
}
else {
   console.log("錯誤");
 }
```

### 副程式（函式）的使用：function

在一個大程式中，可以再切分出許多小程式，
通常每個小程式各只負責一個任務，又可稱為副程式。

#### function的基本語法

在JS中，可以用`function`來建立副程式，語法如下：

```js
function 名稱(傳入變數1, 傳入變數2...){
    程式碼...
    return 值;
}
```

建立成功後，使用時只需鍵入函數名稱與括號，並視情況在括號內帶入所需變數即可。

使用語法範例：

```js
函式名稱(變數A, 變數B...);
```

#### 完整 function 範例程式

我們可以利用`function`，將前面`if`範例中的判斷部分，
製作成一個函式來使用。

```js
var A = Number(prompt("A?"));
var B = Number(prompt("B?"));
function judge(a,b){
    if (A > B){
       return "A 大於 B";
    }
    else if (A < B){
      return "A 小於 B";
    }
    else if (A == B) {
      return "A 等於 B";
    }
    else {
      return "錯誤";
    }
}
console.log( judge(A,B) );
```

## 實作：猜拳

接下來將會實作猜拳的小遊戲，主要使用`alert()`顯示訊息、`prompt()`讓使用者出拳，
並且結合前面所學的JS語法。

### 玩家出拳：提示使用者選擇

首先讓使用者輸入想出的拳，並且建立一項變數將其儲存。

```js
var user = prompt("剪刀，石頭，布?");
```

### 電腦出拳：隨機數的使用（Math.random）

接下來則是讓電腦出拳。
由於為了讓電腦能夠隨機出一拳，在這裡將會使用產生隨機亂數的函數：`Math.random()`，
並且先儲存至一個新的變數。

```js
var computer = Math.random();
```

`Math.random()`將會隨機從 0~1 之間取一小數，我們可以用 if 對其產生的數字進行出拳的分配。

```js
if (computer <= 0.33) {
  computer = "剪刀";
}
else if (computer <= 0.66) {
  computer = "石頭";
}
else {
  computer = "布";
}
```

由於有剪刀、石頭、布三種拳，因此我們透過把`Math.random()`產生的隨機數範圍進行分配，來得到電腦的出拳。

最後再將電腦出的拳給顯示出來。

```js
alert("電腦出 " + computer);
```

### 判斷勝負

接下來要判斷勝負，可以先從是否平手開始。

```js
if (user == computer){
  alert("平手!");
}
```

接著再分別對剪刀、石頭、布進行判斷。

```js
else if (user == "剪刀") {
    if (computer == "布") {
        alert("玩家獲勝");
    }
    else {
        alert("電腦獲勝");
    }
}
else if (user == "石頭") {
    if (computer == "剪刀"){
        alert("玩家獲勝");
    }
    else {
        alert("電腦獲勝");
    }
}
else {
    if (computer == "剪刀") {
        alert("電腦獲勝");
    }
    else {
        alert("玩家獲勝");
    }
}
```

##### 小試身手

請嘗試將判斷勝負的程式寫成一個函式

## 發布至網際網路

### git 簡介

git 是一個版本控制軟體，我們可以使用 git 方便進行專案的管理與追蹤，
如檔案變更、紀錄等。

### GitHub簡介

git 會需要儲存庫，來進行檔案的儲存，
而 GitHub 就提供了線上的儲存庫代管服務，
類似於雲端硬碟的概念。

### GitHub Pages（github.io）簡介

由於 JS 主要依賴於網頁來執行，因此會需要建立網站。

而 GitHub Pages 是利用儲存庫裡的檔案，建立網站的功能。

### 建立專案儲存庫（repository）

儲存庫（repository）在這裡是指在儲存上的的資料結構，
可以暫時想像成一個儲存空間。

使用網站的新增功能，建立一個儲存庫（記得勾選用 README 初始化）
儲存庫名字填 *使用者名稱.github.io*

![](https://i.imgur.com/DK6F7bt.png)
![](https://i.imgur.com/n1PFlc2.png)

### 上傳檔案至儲存庫

在儲存庫裡，使用上傳檔案功能（upload），將自己的網頁檔案上傳上去。

![](https://i.imgur.com/AsSVbua.png)

**備註**：可以在 commit 時，簡單寫個描述喔。

### 網站發佈

在瀏覽器輸入自己網站的網址（儲存庫名稱），看到自己的網站，完成！

---

# 學習資源

* [範本檔案](https://github.com/fanlan1210/website-tutorial/releases/download/v1.0-js/javascript_lesson.zip)
* [實作範例網頁](rock-paper-scissors.html)
