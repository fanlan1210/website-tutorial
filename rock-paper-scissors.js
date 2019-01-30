alert("猜拳");
var user = prompt("剪刀，石頭，布?");
var computer = Math.random();

if (computer < 0.33) { computer = "剪刀"; }
else if (computer <= 0.66) { computer = "石頭"; }
else { computer = "布"; }
alert("電腦出 " + computer);
function compare(choice1,choice2){
    if (choice1 == choice2){
      return "平手!";
    }
    else if (choice1 == "剪刀") {
        if (choice2 == "布") {
           return "玩家獲勝";
         }
        else {
          return "電腦獲勝";
        }
    }
    else if (choice1 == "石頭") {
        if (choice2 == "剪刀"){
          return"玩家獲勝";
        }
        else {
          return "電腦獲勝";
        }
    }
    else {
        if (choice2 == "剪刀") {
          return"電腦獲勝";
        }
        else {
          return "玩家獲勝";
        }
    }
}
alert(compare(user,computer));
