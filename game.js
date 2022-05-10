// キャラのインスタンス化
let friend1 = new Friend("アレス",180,66,13,2,45);  // 味方
let friend2 = new Friend("ナーシャ",110,16,12,3,45);    // 味方
let friend3 = new Friend("ダステン",140,43,11,1,45);    // 味方
let enemy1 = new Troll("トロル",270,38,20,"../image/troll.png");  // 敵
let enemy2 = new Dragon("ドラゴン",380,68,6,"../image/dragon.png"); // 敵

// キャラクター配列を作る
let characters = [];
characters.push(friend1);   // 味方
characters.push(friend2);   // 味方
characters.push(friend3);   // 味方
characters.push(enemy1);    // 敵
characters.push(enemy2);    // 敵

// characters[0].command = "enemyCommand";
// characters[0].target = characters[searchCharacterByName("トロル")[0]];
// characters[0].action();

// ゲーム管理クラスをインスタンス化する
let gameManage = new GameManage();

// characters[1].command = "enemyCommand";
// characters[1].target = characters[searchCharacterByName("トロル")[0]];
// characters[2].command = "enemyCommand";
// characters[2].target = characters[searchCharacterByName("ドラゴン")[0]];
// characters[3].command = "recoveryCommand";

// gameManage.battle();

// コマンドクラスをインスタンス化する
let command = new Command();

// コマンド選択の準備を整える
command.preparation();