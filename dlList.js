const toneList = [
  { no: 1, name: 'アウロラ', meaning: '夜明け' },
  { no: 2, name: 'ヴァリオン', meaning: 'チャレンジ' },
  { no: 3, name: 'エクスパンサ', meaning: '広がり' },
  { no: 4, name: 'クエストラ', meaning: '探求' },
  { no: 5, name: 'ルーミナ', meaning: '輝き' },
  { no: 6, name: 'エクイリア', meaning: '調和' },
  { no: 7, name: 'ミスティア', meaning: '神秘' },
  { no: 8, name: 'フルーラ', meaning: '流れ' },
  { no: 9, name: 'メンターラ', meaning: '導師' },
  { no: 10, name: 'テンプレア', meaning: '調律' },
  { no: 11, name: 'リベリア', meaning: '解放' },
  { no: 12, name: 'ネクサリア', meaning: '結び' },
  { no: 13, name: 'パルフェリア', meaning: '完成' },
];

const container = document.getElementById('tone-container');

toneList.forEach(tone => {
  const section = document.createElement('section');
  section.className = 'tone-item';
  section.innerHTML = `
    <h2>№${tone.no}. ${tone.name}♬${tone.meaning}</h2>
    <audio controls preload="none" src="audio/tone${tone.no}.mp3"></audio>
  `;
  container.appendChild(section);
});
