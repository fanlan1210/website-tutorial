# 基礎網頁設計與架站教學
---
# 軟體介紹:Adobe Brackets
![](https://upload.wikimedia.org/wikipedia/commons/b/b0/Adobe_Brackets_v0.0.x_icon.png)
* 由HTML,CSS和JavaScript編寫的HTML編輯器
* 可即時預覽網頁
* 跨平台(Windows,Mac OS,Linux)

# HTML
## 對HTML的基本認識
HTML，全名HyperText Markup Language，中文譯為超文本標記語言，
為形成網頁的最基本骨架。
目前主要使用HTML5，在此版本最著名的即是擴充了對多媒體的支援。
以前要播放影片，或是跑動畫，幾乎離不開Flash，
但現在這些可以由`<video>`與`<canvas>`等HTML標籤輕易完成。

另外，其實它並不是**程式語言**，而是**標記語言**

HTML網頁主要由標籤(tag)構成，而標籤通常是成對的，分別稱做起始標籤(start tag)和結束標籤(end tag)。
少部分的標籤會單獨存在，如換行的`<br>`與`<img>`等。
## 基本結構
我們可以將HTML網頁的結構，想像成一個人，架構大概如下:
```
html
 - head
 - body
```
* head(頭):主要負責記錄屬性和連結檔案，如網頁標題(`<title>`)和連結CSS檔。
* body(身體):使用者可看到的內容，主要位於這裡。
## 網頁內容

### 網頁文件標題
這裡指分頁標籤會顯示的文字部分，放置於`<head>`裡
```html
    <title>你可以在瀏覽器上頭的標籤看到我</title>
```

### 文字排印(Typography)
#### `<h1>` ~ `<h6>` : 標題(heading)
文章標題預設有**六種**大小的標籤可以使用，
從`<h1>`開始，到`<h6>`結束。

範例:
```html
<h1>標題1</h1>
<h2>標題2</h2>
<h3>標題3</h3>
<h4>標題4</h4>
<h5>標題5</h5>
<h6>標題6</h6>
```

#### `<p>` : 段落(paragraph)
段落標籤主要用來進行文章內容的分段，範例如下:

---

<p>第一段:段落簡稱段，是文章中最基本的單位。 從內容上說，它具有一個相對完整的意思。在文章中，段與段通常會隔一行。段是由句子或句群組成的，在文章中用於體現作者的思路發展或全篇文章的層次。</p>
<p>第二段:正常來說應該會發現段落與段落之間有個間距，而這就是段落標籤的應用。</p>

---

### 圖片
```html
<img src="#">
```
*src* : 來源(source)路徑連結，必須是直接連結至檔案本身。

範例: 
```html
<img src="https://fanlan1210.github.io/files/rubiks-cube-157058.svg">
```
這樣將會顯示一張魔術方塊的圖片在網頁上，如圖:
<img src="https://fanlan1210.github.io/files/rubiks-cube-157058.svg">

# CSS
## 什麼是CSS
CSS，全名Cascading Style Sheets，中文為層疊樣式表。
用來為HTML網頁添加樣式(如顏色、大小、背景等等)。
如果將網頁比喻是一個人，HTML是它的內在，CSS就是它的外表。
目前主要使用CSS3，支援動畫和立體效果。

## 如何套用CSS
使用CSS主要有3種方式，分別是行內(標籤內)套用、連結CSS檔案套用、style標籤套用。

在此先介紹常用的其中2種。
### 標籤內套用
在起始標籤中，加入`style="..."`， *...* 替換為欲使用的樣式。

例:
```html
<p style="color: red;">
```
### 連結檔案套用
在`<head>`標籤中，加入`<link>`標籤，連結至CSS檔。
```html
<head>
    <link rel="stylesheet" type="text/css" href="theme.css">
</head>
```
* `<link>`為連結檔案的標籤
* *rel* 為連結關係，這裡選擇"樣式表"(stylesheet)
* *type* 為類型，由於是css文本，所以填入"text/css"
* *href* 內填入連結位址
## CSS內容
CSS的語法:
```css
	選擇器(selector) {
		屬性(property) : 值(value) ;
}
```
* 選擇器: 在這裡我們填入標籤名(如h1)
* 屬性: 填入想要更改的樣式名(如color)
* 值: 屬性對應的數值(如color可以填入red)
* 注意: **中括號({})** 和 **分號(;)**很重要!
### 文字樣式
#### color: 文字/前景 顏色
color的值有現成的色彩英文可以輸入，像是常見的green.red.blue.black.white等等。
也支援用RGB色光來表示色彩，如`rgb(255,255,255)`，這個例子將會顯示白色。
另外，最常見的是以十六進位標籤表示顏色，以前面的例子來說，白色也可表示成`#FFFFFF`。

#### font-size: 文字大小
絕對單位習慣用"像素"(px,pixel)，
如果考慮到對不同裝置的支援，也可以用相對的百分率(%)來表示。

#### text-align:對齊文字
常見有向左(left)、向右(right)、置中(center)

### 設定背景
#### background-color: 背景顏色
這部分類似於前面所提到的設定文字顏色部分。

#### background-image: 背景圖片
在CSS中，要提供圖片的位址，可以使用`url()`。

#### background-size: 調整背景大小
可以使用寬度和高度來調整，單位仍然支援絕對與相對。
```css
background-size: 寬 高;
```
* *cover* : 覆蓋模式，將會忽略寬高比，以整個填滿為優先。
```css
background-size: cover;
```

# Github
在此主要使用github網站進行操作
## 簡介
### git 簡介
git是一個版本控制軟體，我們可以使用git方便進行專案的管理與追蹤
如檔案變更、紀錄等

### Github簡介
git會需要儲存庫，來進行檔案的儲存，
而Github就提供了線上的儲存庫代管服務，
類似於雲端硬碟的概念。

### Github Pages(github.io)簡介
Github Pages是利用儲存庫裡的檔案，建立網站的功能。

## 儲存庫
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
記得在commit時，簡單寫個描述
## 網站發佈
在瀏覽器輸入自己網站的網址(儲存庫名稱)，看到自己的網站，完成!

-----
# 教學資源
## 教學
英文
* [W3Schools](http://www.w3schools.com/)

中文
* [Wibibi 網頁設計教學百科](http://www.wibibi.com)

## 模板
* [HTML5UP](https://html5up.net)