////////// 課題3-2 ここからプログラムを書こう{

let a = document.querySelector('#serchBotton');
  a.addEventListener('click',serch );

  function serch() {

    let r = document.querySelectorAll('input[name="where"]');

    let SerchId;

    for (let i = 0; i < r.length; i++) {
      if (r[i].checked) {
        SerchId = r[i].id;
        let url = 'https://www.nishita-lab.org/web-contents/jsons/openweather/' + SerchId + '.json';
        console.log("選択されているラジオボックスのID:", SerchId);
        console.log("URL:", url);
        break;
          }
        }

         let url = 'https://www.nishita-lab.org/web-contents/jsons/openweather/'+SerchId+'.json';

    // 通信開始
    axios.get(url)
        .then(showResult)   // 通信成功
        .catch(showError)   // 通信失敗
        .then(finish);      // 通信の最後の処理
  }
let  data;
  // 通信が成功した時の処理
function showResult(resp) {
  // サーバから送られてきたデータを出力
  data = resp.data;
  
  let Re=document.querySelector('div#result');
  Re.innerHTML = ''; // 既存の検索結果をクリア

  let p1 = document.createElement('p'); 
  p1.textContent ="緯度 :"+data.coord.lon;
  Re.insertAdjacentElement('beforeend', p1);

  let p2 = document.createElement('p'); 
  p2.textContent ="経度 :"+data.coord.lat;
  Re.insertAdjacentElement('beforeend', p2);

  let p3 = document.createElement('p'); 
  p3.textContent ="天気 :"+data.weather[0].description;
  Re.insertAdjacentElement('beforeend', p3);
  
  let p4 = document.createElement('p'); 
  p4.textContent ="最低気温 :"+data.main.temp_min;
  Re.insertAdjacentElement('beforeend', p4);
  
  let p5 = document.createElement('p'); 
  p5.textContent ="風速 :"+data.wind.speed;
  Re.insertAdjacentElement('beforeend', p5);

  let p6 = document.createElement('p'); 
  p6.textContent ="風向き :"+data.wind.deg;
  Re.insertAdjacentElement('beforeend', p6);

  let p7 = document.createElement('p'); 
  p7.textContent ="都市名 :"+data.name;
  Re.insertAdjacentElement('beforeend', p7);

  // data が文字列型なら，オブジェクトに変換する
  if (typeof data === 'string') {
      data = JSON.parse(data);
  }

  // data をコンソールに出力
  console.log(data);

  // data.x を出力
  console.log(data.x);
}

// 通信エラーが発生した時の処理
function showError(err) {
  console.log(err);
}

// 通信の最後にいつも実行する処理
function finish() {
  console.log('Ajax 通信が終わりました');
}