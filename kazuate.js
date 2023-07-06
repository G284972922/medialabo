// 答え
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え（デバッグ用）: ' + kotae);

// 入力回数（予想回数）
let kaisu = 0;

// 予想を4回実行する
// 代わりにここでは，ボタンを押したら hantei() を呼び出すイベント処理をする
let b = document.querySelector('#print');
b.addEventListener('click', hantei);

// ボタンを押した後の処理をする関数 hantei() の定義
function hantei() {
  // 将来ここでは 4 ではなくテキストボックスに指定された数値を yoso に代入する
  let y = document.querySelector('input[name="yostxt"]');
  let ynumber = Number(y.value);
  let yoso = ynumber
  // 課題3-1: 正解判定する
  // kotae と yoso が一致するかどうか調べて結果を出力
  // 課題3-1における出力先はコンソール
    
    kaisu=kaisu+1;
    //console.log(kaisu+'回目の予想:'+yoso);

    let answer= document.createElement('span');
    
    answer.textContent= yoso;

    let p1 = document.createElement('div'); 
    p1.textContent =kaisu+'回目の予想: '+yoso;

    let Re=document.querySelector('div');
    Re.insertAdjacentElement('beforeend', p1);

    if(kaisu<3){
        if(yoso===kotae){
            let p1 = document.createElement('div'); 
            p1.textContent ='正解です。おめでとう!';
            Re.insertAdjacentElement('beforeend', p1);
        }else if(yoso<kotae){
            let p1 = document.createElement('div'); 
            p1.textContent ='まちがい．答えはもっと大きいですよ';
            Re.insertAdjacentElement('beforeend', p1);
        }else if(yoso>kotae){
            let p1 = document.createElement('div'); 
            p1.textContent ='まちがい．答えはもっと小さいですよ';
            Re.insertAdjacentElement('beforeend', p1);
        }

    }else if(kaisu===3){

        if(yoso===kotae){
            let p1 = document.createElement('div'); 
            p1.textContent ='正解です。おめでとう!';
            Re.insertAdjacentElement('beforeend', p1);
            kaisu=kaisu+3;
        }else{
            let p1 = document.createElement('div'); 
            p1.textContent ='まちがい．残念でした答えは'+kotae+'です．';
            Re.insertAdjacentElement('beforeend', p1);
        }

    }else if(kaisu>3){
        let p1 = document.createElement('div'); 
        p1.textContent ='答えは'+kotae+'でした．すでにゲームは終わっています';
        Re.insertAdjacentElement('beforeend', p1);
    }
}
