//// 注意: 以下は編集しないこと!
let data = [
	{name:'札幌', lat:43.06417, lng:141.34694},
	{name:'仙台', lat:38.26889, lng:140.87194},
	{name:'新宿', lat:35.68944, lng:139.69167},
	{name:'名古屋', lat:35.18028, lng:136.90667},
	{name:'大阪', lat:34.68639, lng:135.52},
	{name:'広島', lat:34.39639, lng:132.45944},
	{name:'高知', lat:33.55972, lng:133.53111},
	{name:'福岡', lat:33.60639, lng:130.41806},
	{name:'鹿児島', lat:31.56028, lng:130.55806},
	{name:'沖縄', lat:26.2125, lng:127.68111}
];
//// 注意: 以上は編集しないこと!

// 練習4-2 メッセージ追加プログラム
let h2 = document.querySelector('h2#ex42');
let p = document.createElement('p'); 
p.textContent = '写真表と年の緯度経度のページです'; 
p.style.color='blue';  
h2.insertAdjacentElement('afterend', p);  

// 練習4-3 写真表作成プログラム
let img1 = document.createElement('img');
img1.setAttribute('src','taro.png');
let img2 = document.createElement('img');
img2.setAttribute('src','jiro.png');
let img3 = document.createElement('img');
img3.setAttribute('src','hanako.png');

let taro =document.createElement('p');
let jiro =document.createElement('p');
let hanako =document.createElement('p');

taro.insertAdjacentElement('beforeend', img1); 
jiro.insertAdjacentElement('beforeend', img2); 
hanako.insertAdjacentElement('beforeend', img3); 

let div1 = document.querySelector('div#phototable');
div1.insertAdjacentElement('beforeend', taro); 
div1.insertAdjacentElement('beforeend', jiro); 
div1.insertAdjacentElement('beforeend', hanako); 

// 練習4-4 箇条書き削除プログラム
let l1 = document.querySelectorAll('li');
for(let i of l1){
	i.remove();
}
// 練習4-5 箇条書き追加プログラム

for(let n of data){
	let ul2=document.querySelector('ul');
	let l2 = document.createElement('li'); 
	l2.textContent = n.name +'...緯度:'+ n.lat +',経度:'+ n.lng; 
	ul2.insertAdjacentElement('beforeend', l2);
}
