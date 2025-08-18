import { solarData } from "./solarData.js";
import { diagnosisMessages } from "./diagnosisMessages.js";
import { toneMessages } from "./toneMessages.js";

// ============================================
//  SolarJewel – main.js  (rev.14  2025‑07‑12)
//  * fully expanded, no ellipsis, no optional‑chain assignment
// ============================================

/* 宝石キャラ対応表 --------------------------- */

const jewelToBF = {
  セレナイト: { name: "水無月", image: "bf_minazuki.png", line: "【水無月】この占いで分かるのは、君を映し出す宝石と、その宝石に呼応する「心の音（Tone）」だよ。<br>Toneは、生まれた日に授けられた使命や役割を表す音楽なんだ。<br>宝石には神々が宿っていて、「ジュエルサイクル」という巡りの中で、日ごとに世界を旅しているんだよ。<br>あっ―君の宝石は、僕と全く同じ宝石なんだね！なんだか嬉しいな。" },
  ホワイトラブラドライト: { name: "水無月", image: "bf_minazuki.png", line: "【水無月】この占いで分かるのは、君を映し出す宝石と、その宝石に呼応する「心の音（Tone）」だよ。<br>Toneは、生まれた日に授けられた使命や役割を表す音楽なんだ。<br>宝石には神々が宿っていて、「ジュエルサイクル」という巡りの中で、日ごとに世界を旅しているんだよ。<br>あっ―君の宝石は、どうやら僕と同じ白色みたいだね。" },
  パール: { name: "水無月", image: "bf_minazuki.png", line: "【水無月】この占いで分かるのは、君を映し出す宝石と、その宝石に呼応する「心の音（Tone）」だよ。<br>Toneは、生まれた日に授けられた使命や役割を表す音楽なんだ。<br>宝石には神々が宿っていて、「ジュエルサイクル」という巡りの中で、日ごとに世界を旅しているんだよ。<br>あっ―君の宝石は、どうやら僕と同じ白色みたいだね。" },
  ムーンストーン: { name: "水無月", image: "bf_minazuki.png", line: "【水無月】この占いで分かるのは、君を映し出す宝石と、その宝石に呼応する「心の音（Tone）」だよ。<br>Toneは、生まれた日に授けられた使命や役割を表す音楽なんだ。<br>宝石には神々が宿っていて、「ジュエルサイクル」という巡りの中で、日ごとに世界を旅しているんだよ。<br>あっ―君の宝石は、どうやら僕と同じ白色みたいだね。" },
  ロッククリスタル: { name: "水無月", image: "bf_minazuki.png", line: "【水無月】この占いで分かるのは、君を映し出す宝石と、その宝石に呼応する「心の音（Tone）」だよ。<br>Toneは、生まれた日に授けられた使命や役割を表す音楽なんだ。<br>宝石には神々が宿っていて、「ジュエルサイクル」という巡りの中で、日ごとに世界を旅しているんだよ。<br>あっ―君の宝石は、どうやら僕と同じ白色みたいだね。" },

  サファイア: { name: "有栖川", image: "bf_arisugawa.png", line: "【有栖川】この占いでは、あなたの輝きを象徴する宝石と、その宝石に共鳴する「心の音（Tone）」を導き出します。<br>Toneは、あなたが生まれながらに持つ使命や役割を表す音楽です。<br>宝石にはそれぞれ神が宿り、「ジュエルサイクル」と呼ばれる周期で日々、世界を巡っています。<br>どうやら―あなたの宝石は、私と同じ宝石のようですね。素晴らしい。" },
  ラリマー: { name: "有栖川", image: "bf_arisugawa.png", line: "【有栖川】この占いでは、あなたの輝きを象徴する宝石と、その宝石に共鳴する「心の音（Tone）」を導き出します。<br>Toneは、あなたが生まれながらに持つ使命や役割を表す音楽です。<br>宝石にはそれぞれ神が宿り、「ジュエルサイクル」と呼ばれる周期で日々、世界を巡っています。<br>どうやら―あなたの宝石は、私と同じ青の輝きを持っているようですね。" },
  アクアマリン: { name: "有栖川", image: "bf_arisugawa.png", line: "【有栖川】この占いでは、あなたの輝きを象徴する宝石と、その宝石に共鳴する「心の音（Tone）」を導き出します。<br>Toneは、あなたが生まれながらに持つ使命や役割を表す音楽です。<br>宝石にはそれぞれ神が宿り、「ジュエルサイクル」と呼ばれる周期で日々、世界を巡っています。<br>どうやら―あなたの宝石は、私と同じ青の輝きを持っているようですね。" },
  ラピスラズリ: { name: "有栖川", image: "bf_arisugawa.png", line: "【有栖川】この占いでは、あなたの輝きを象徴する宝石と、その宝石に共鳴する「心の音（Tone）」を導き出します。<br>Toneは、あなたが生まれながらに持つ使命や役割を表す音楽です。<br>宝石にはそれぞれ神が宿り、「ジュエルサイクル」と呼ばれる周期で日々、世界を巡っています。<br>どうやら―あなたの宝石は、私と同じ青の輝きを持っているようですね。" },
  セレスタイト: { name: "有栖川", image: "bf_arisugawa.png", line: "【有栖川】この占いでは、あなたの輝きを象徴する宝石と、その宝石に共鳴する「心の音（Tone）」を導き出します。<br>Toneは、あなたが生まれながらに持つ使命や役割を表す音楽です。<br>宝石にはそれぞれ神が宿り、「ジュエルサイクル」と呼ばれる周期で日々、世界を巡っています。<br>どうやら―あなたの宝石は、私と同じ青の輝きを持っているようですね。" },

  ルビー: { name: "朝霧", image: "bf_asagiri.png", line: "【朝霧】この占いじゃあ、お前の輝きを示す宝石と、その宝石に響き合う「心の音（Tone）」が分かるんだ。<br>Toneってのは、お前が生まれた時から持ってる使命や役割を表す音楽だぜ。<br>宝石には神が宿ってて、「ジュエルサイクル」って呼ばれる周期で日替わりで世界を巡ってるんだ。<br>―おぉ！！どうやらお前の宝石は、俺と同じ宝石らしいな！スゲー偶然！" },
  ガーネット: { name: "朝霧", image: "bf_asagiri.png", line: "【朝霧】この占いじゃあ、お前の輝きを示す宝石と、その宝石に響き合う「心の音（Tone）」が分かるんだ。<br>Toneってのは、お前が生まれた時から持ってる使命や役割を表す音楽だぜ。<br>宝石には神が宿ってて、「ジュエルサイクル」って呼ばれる周期で日替わりで世界を巡ってるんだ。<br>―おぉ、どうやらお前の宝石は、俺と同じ赤色らしいな！" },
  レッドコーラル: { name: "朝霧", image: "bf_asagiri.png", line: "【朝霧】この占いじゃあ、お前の輝きを示す宝石と、その宝石に響き合う「心の音（Tone）」が分かるんだ。<br>Toneってのは、お前が生まれた時から持ってる使命や役割を表す音楽だぜ。<br>宝石には神が宿ってて、「ジュエルサイクル」って呼ばれる周期で日替わりで世界を巡ってるんだ。<br>―おぉ、どうやらお前の宝石は、俺と同じ赤色らしいな！" },
  インカローズ: { name: "朝霧", image: "bf_asagiri.png", line: "【朝霧】この占いじゃあ、お前の輝きを示す宝石と、その宝石に響き合う「心の音（Tone）」が分かるんだ。<br>Toneってのは、お前が生まれた時から持ってる使命や役割を表す音楽だぜ。<br>宝石には神が宿ってて、「ジュエルサイクル」って呼ばれる周期で日替わりで世界を巡ってるんだ。<br>―おぉ、どうやらお前の宝石は、俺と同じ赤色らしいな！" },
  レッドカーネリアン: { name: "朝霧", image: "bf_asagiri.png", line: "【朝霧】この占いじゃあ、お前の輝きを示す宝石と、その宝石に響き合う「心の音（Tone）」が分かるんだ。<br>Toneってのは、お前が生まれた時から持ってる使命や役割を表す音楽だぜ。<br>宝石には神が宿ってて、「ジュエルサイクル」って呼ばれる周期で日替わりで世界を巡ってるんだ。<br>―おぉ、どうやらお前の宝石は、俺と同じ赤色らしいな！" },

  アンバー: { name: "二ノ宮", image: "bf_ninomiya.png", line: "【二ノ宮】この占いでは、キミの輝きを示す宝石と、その宝石と響き合う「心の音（Tone）」が分かるんだよ♪<br>Toneは、キミが生まれた日に授かった使命や役割を奏でる音楽なんだ。<br>宝石には神々が宿っていて、「ジュエルサイクル」と呼ばれる周期で日ごとに世界を巡ってるんだって💗<br>―へぇ、キミの宝石はボクと同じ黄色なんだね！" },
  トパーズ: { name: "二ノ宮", image: "bf_ninomiya.png", line: "【二ノ宮】この占いでは、キミの輝きを示す宝石と、その宝石と響き合う「心の音（Tone）」が分かるんだよ♪<br>Toneは、キミが生まれた日に授かった使命や役割を奏でる音楽なんだ。<br>宝石には神々が宿っていて、「ジュエルサイクル」と呼ばれる周期で日ごとに世界を巡ってるんだって💗<br>―わぁ！キミの宝石はボクと同じ宝石！！おそろいだね✨" },
  イエローカルサイト: { name: "二ノ宮", image: "bf_ninomiya.png", line: "【二ノ宮】この占いでは、キミの輝きを示す宝石と、その宝石と響き合う「心の音（Tone）」が分かるんだよ♪<br>Toneは、キミが生まれた日に授かった使命や役割を奏でる音楽なんだ。<br>宝石には神々が宿っていて、「ジュエルサイクル」と呼ばれる周期で日ごとに世界を巡ってるんだって💗<br>―へぇ、キミの宝石はボクと同じ黄色なんだね！" },
  タイガーアイ: { name: "二ノ宮", image: "bf_ninomiya.png", line: "【二ノ宮】この占いでは、キミの輝きを示す宝石と、その宝石と響き合う「心の音（Tone）」が分かるんだよ♪<br>Toneは、キミが生まれた日に授かった使命や役割を奏でる音楽なんだ。<br>宝石には神々が宿っていて、「ジュエルサイクル」と呼ばれる周期で日ごとに世界を巡ってるんだって💗<br>―へぇ、キミの宝石はボクと同じ黄色なんだね！" },
  シトリン: { name: "二ノ宮", image: "bf_ninomiya.png", line: "【二ノ宮】この占いでは、キミの輝きを示す宝石と、その宝石と響き合う「心の音（Tone）」が分かるんだよ♪<br>Toneは、キミが生まれた日に授かった使命や役割を奏でる音楽なんだ。<br>宝石には神々が宿っていて、「ジュエルサイクル」と呼ばれる周期で日ごとに世界を巡ってるんだって💗<br>―へぇ、キミの宝石はボクと同じ黄色なんだね！" },
};


 //汎用関数：キャラ挿入（おすすめアクションの下）
function insertBFMessage(myJewel) {
  const bf = jewelToBF[myJewel];
  if (!bf) return;

 // 既存メッセージ削除（2回目以降対策）
  const old = document.getElementById("bfMessage");
  if(old) old.remove();

// 新しいメッセージ用セクションを作成
  const section = document.createElement("section");
  section.id        = "bfMessage"; // ←★ 目印を付ける
  section.className = "result-section alt";
  
  section.innerHTML = `
<div class="bf-row">
    <img src="./images/${bf.image}" loading="lazy" class="bf-voice-img" alt="${bf.name}">
    <p class="bf-line-text">${bf.line}</p>
</div>
  `;

// ★ result-panel の一番上に挿入
const panel = document.getElementById("result-panel");
  if (panel) {
    panel.insertAdjacentElement("afterbegin", section);
  }
}

 // ここまで ---------------------------  //


const $ = id => document.getElementById(id);

window.addEventListener("DOMContentLoaded", () => {
  const btn = $("diagnoseBtn");
  if (btn) btn.addEventListener("click", calculate);
});
window.calculate = calculate;

function calculate(){
  // ---------- 入力取得 ---------- //
  const birthStr = $("birth")?.value;
  if(!birthStr){ 
    alert("日付を入力してください。" ); 
    return; 
  }

  // ---------- Kin 計算 ---------- //
  const birth = new Date(birthStr);
  const base  = new Date("1910-01-01");
  const kin   = ((63 - 1 + Math.floor((birth-base)/864e5)) % 260) + 1;
  const data  = solarData[kin-1];
  if(!data){ 
    alert("診断データが見つかりません"); 
    return; 
  }

  // ---------- データ展開 ---------- //
  const { myJewel, soulJewel, toneNumber, toneName, toneCatch, toneCatchL, catchcopy, actionText } = data;

  // 宝石神の説明
  const myDesc = diagnosisMessages.goddess[myJewel] ?? "";

  // あなたについて（life/work/money/love）
  const soulData = diagnosisMessages.my[myJewel] ?? {};
  const life  = soulData.life  ?? "";
  const work  = soulData.work  ?? "";
  const money = soulData.money ?? "";
  const love  = soulData.love  ?? "";

  // ---------- DOM 更新 ---------- //
  if ($("result-panel")) {
    $("result-panel").classList.remove("hidden");
  }

  if ($("solarNumber")) {
    $("solarNumber").innerHTML = `
　　　<div class="tone-main">💎あなたを表す宝石：${myJewel}</div>
      <div class="tone-main">💗心の音(Tone)：${toneName} ♬ ${toneCatch} </div>
      <div class="tone-lead">💫ジュエルサイクル：第${kin}番目の生まれ</div>    
    `;
  }

 
  // ソウルクリスタル → 宝石画像（※myJewelを表示する仕様に変更済）
if ($("soulJewelImg")) {
  $("soulJewelImg").setAttribute("src", `./images/jewel/${myJewel}.webp`);
  $("soulJewelImg").setAttribute("loading", "lazy"); // ← 遅延読み込みを追加
}
 // マイクリスタル → 女神画像
  if ($("myJewelImg")) {
    $("myJewelImg").setAttribute("src", `./images/god/${myJewel}神.webp`);
    $("myJewelImg").setAttribute("loading", "lazy"); // ← 遅延読み込みを追加
  }

  // 銀河の音プレイヤー設定
  if ($("toneAudioSource")) {
    $("toneAudioSource").src = `./audio/tone${toneNumber}.mp3`;
  }
  if ($("tonePlayer")) {
    $("tonePlayer").load(); // 新しい音源を読み込み
  }


  // あなたについて（常にmyJewel基準）
  if ($("soulJewelText")) { 
    $("soulJewelText").innerHTML = `
      <div class="result-section">
        <p class="jewel">💎あなたについて💎</p>
        <p class="heading">人生全般</p>
        <p class="desc">${life}</p>
        
        <p class="heading">仕事</p>
        <p class="desc">${work}</p>
        
        <p class="heading">お金</p>
        <p class="desc">${money}</p>
        
        <p class="heading">恋愛</p>
        <p class="desc">${love}</p>
      </div>
    `;
  }
  // 宝石神
  if ($("myJewelText")) { 
    $("myJewelText").innerHTML = `
      <div class="result-section">
        <p class="jewel">💗あなたの守護神について💗</p>
        <p class="heading">${myJewel}の神話</p>
        <p class="desc">${myDesc}</p>
      </div>
    `;
  }

  // Tone
if ($("tonePlayerText")) {
  $("tonePlayerText").innerHTML = `
    <div class="result-section">
      <p class="jewel">🎶あなたのTone（トーン）🎶</p>
      <p class="heading">Tone.${toneNumber} ${toneName} ♬ ${toneCatch}</p>
<p>宝石と守護神に共鳴するとき、あなたの心はこんな旋律を奏でます。<br>これは人生全般でのあなたの使命・役割を表しています。その旋律は―<br><br>
${toneCatchL ?? catchcopy ?? ""}</p>

      <audio id="tonePlayer" controls preload="none" controlslist="nodownload noplaybackrate nofullscreen">
        <source id="toneAudioSource" src="./audio/tone${toneNumber}.mp3" type="audio/mp3" />
        お使いのブラウザでは音声プレーヤーがご利用いただけません。
      </audio>
    </div>
  `;
}


  // おすすめのアクション→あなたの可能性
  if ($("actionText")) {
    $("actionText").innerHTML = `
      <div class="result-section">
　　　　<p class="jewel">✨あなたの中に眠る宝石✨</p>
        <p class="heading">${soulJewel}</p>
        <p class="desc">${actionText}</p>
      </div>
    `;
  }

  /* BOYFRIENDS のメッセージを挿入 */
  insertBFMessage(myJewel);
}

/* -------------------------------------------
   以降は PNG 保存用ハンドラ
   （★★ calculate() の外に置く ★★）
-------------------------------------------- */


// --- PNG 保存ボタン（存在するページだけで有効化） ---
const dlBtn = document.getElementById('dlResult');
if (dlBtn) {
  dlBtn.addEventListener('click', () => {
    const target = document.getElementById('result-panel');
    if (!target) return;

    const originalBackground = target.style.background;
    target.style.background = "#dae1fe";

    html2canvas(target, { scrollY: -window.scrollY }).then(canvas => {
      const link = document.createElement('a');
      link.download = 'BFS_診断結果.png';
      link.href = canvas.toDataURL('image/png');
      link.click();
      target.style.background = originalBackground;
    });
  });
}


