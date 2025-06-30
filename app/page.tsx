'use client';

import { useState, FC } from 'react';
import {
  Home, Phone, Download, Lightbulb, PenLine, Lock, Brain, PlayCircle
} from 'lucide-react';
import './globals.css';

export default function Page() {
  const [tab, setTab] = useState<
    'top' | 'webapp' | 'app' | 'gpts' | 'secret' | 'writing' | 'mikan' | 'dokodemo' | 'youtube'
  >('top');

  const [subTab, setSubTab] = useState<'none' | 'dokodemo' | 'mikan' | 'writing' | 'duolingo'>('none');

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white p-6 space-y-6">
      <div className="flex justify-center gap-4 flex-wrap">
        <Tab lbl={<><Home size={16}/> トップ</>}          act={tab==='top'}      onClick={()=>{setTab('top'); setSubTab('none');}} />
        <Tab lbl={<><Lightbulb size={16}/> Web教材</>}     act={tab==='webapp'}   onClick={()=>{setTab('webapp'); setSubTab('none');}} />
        <Tab lbl={<><Download size={16}/> DLアプリ紹介</>} act={tab==='app'}     onClick={()=>{setTab('app'); setSubTab('none');}} />
        <Tab lbl={<><Brain size={16}/> カスタムGPTs</>}    act={tab==='gpts'}    onClick={()=>{setTab('gpts'); setSubTab('none');}} />
        <Tab lbl={<><PlayCircle size={16}/> 動画</>}    act={tab==='youtube'} onClick={()=>{setTab('youtube'); setSubTab('none');}} />
        <Tab lbl={<><Lock size={16}/> パス付き部屋</>}     act={tab==='secret'}  onClick={()=>{setTab('secret'); setSubTab('none');}} />
      </div>

      {tab==='top'      && <TopSection />}
      {tab==='secret'   && <SecretSection />}
      {tab==='youtube'  && <YoutubeSection />}

      {tab==='webapp' && (
        subTab==='none' ? (
          <>
            <WebAppSection />
            <div className="flex gap-4 justify-center">
              <Tab lbl="スマホでどこでも" act={false} onClick={()=>setSubTab('dokodemo')} />
            </div>
          </>
        ) : subTab==='dokodemo' && <DokodemoSection />
      )}

      {tab==='app' && (
        subTab==='none' ? (
          <>
            <DownloadSection />
            <div className="flex justify-center gap-4">
              <Tab lbl="mikan紹介" act={false} onClick={() => setSubTab('mikan')} />
              <Tab lbl="Duolingo紹介" act={false} onClick={() => setSubTab('duolingo')} />
            </div>
          </>
        ) : subTab==='mikan' ? (
          <MikanSection />
        ) : subTab==='duolingo' && (
          <DuolingoSection />
        )
      )}

      {tab==='gpts' && (
        subTab==='none' ? (
          <>
            <GPTsSection />
            <div className="flex justify-center gap-4">
              <Tab lbl="英検Writing GPTs" act={false} onClick={()=>setSubTab('writing')} />
            </div>
          </>
        ) : subTab==='writing' && <WritingSection />
      )}

    </main>
  );
}

const Tab:FC<{lbl:React.ReactNode; act:boolean; onClick:()=>void}> = ({lbl,act,onClick}) => (
  <button
    onClick={onClick}
    className={`px-4 py-2 rounded-full font-semibold transition
      ${act
        ? 'bg-blue-600 text-white'
        : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-blue-100 dark:hover:bg-gray-600'
      }`}
  >
    {lbl}
  </button>
);

const TopSection: FC = () => {
  const [topSubTab, setTopSubTab] = useState<'none' | 'ranking'>('none');

  return (
    <section className="space-y-4">
      <h1 className="text-2xl font-bold text-center">学習リンク集</h1>
      <p className="text-center text-sm text-gray-700 dark:text-gray-300">
        このページは、学習空間での自立学習をサポートするリンク集です。以下のタブから各カテゴリにアクセスできます。
      </p>
      <ul className="list-disc list-inside text-sm text-gray-700 dark:text-gray-300 max-w-xl mx-auto">
        <li><b>Web教材</b>：英語や理科のオンライン教材にアクセスできます。</li>
        <li><b>DLアプリ紹介</b>：mikanやDuolingoなど、スマホで使える学習アプリを紹介しています。</li>
        <li><b>カスタムGPTs</b>：英文添削や文構造理解、英検Writing練習などのAIツールにアクセスできます。</li>
        <li><b>パス付き部屋</b>：暗証が必要な配布教材などにアクセスする専用スペースです。</li>
        <li><b>公式Youtube</b>：学習空間旭川末広教室・山本のYouTubeチャンネルを紹介しています。</li>
      </ul>
      <div className="flex justify-center gap-4 pt-4">
        <Tab
          lbl="👑アプリランキング👑"
          act={topSubTab === 'ranking'}
          onClick={() => setTopSubTab(topSubTab === 'ranking' ? 'none' : 'ranking')}
        />
      </div>
      {topSubTab === 'ranking' && <RenderRankingTables />}
    </section>
  );
};

const RenderRankingTables = () => (
  <div className="space-y-6">
    <h2 className="text-xl font-bold text-center mt-8">アプリ学習ランキング</h2>
    <h3 className="text-lg font-semibold text-center mt-8">（2025年6月）</h3>
    <h3 className="text-lg font-semibold">🍊 mikan 単語学習数ランキング TOP10</h3>
    <p className="text-sm text-gray-500">※ 2025年7月以降は <b>mikan</b> と <b>Duolingo</b> の両方でランキングを開催予定です。</p>
    <div className="overflow-x-auto">
      <table className="min-w-full text-sm text-left border border-gray-300 dark:border-gray-600">
        <thead className="bg-gray-100 dark:bg-gray-700">
          <tr>
            <th className="px-4 py-2 border">順位</th>
            <th className="px-4 py-2 border">名前</th>
            <th className="px-4 py-2 border">教室・学年</th>
            <th className="px-4 py-2 border">ポイント</th>
          </tr>
        </thead>
        <tbody>
          <tr><td className="px-4 py-1 border">1</td><td>しょう</td><td>永山/K中2</td><td>4200pt</td></tr>
          <tr><td className="px-4 py-1 border">2</td><td>ゆきな</td><td>末広/R中1</td><td>3032pt</td></tr>
          <tr><td className="px-4 py-1 border">3</td><td>じょうたろう</td><td>講師</td><td>1384pt</td></tr>
          <tr><td className="px-4 py-1 border">4</td><td>しょーた</td><td>永山/S高2</td><td>1270pt</td></tr>
          <tr><td className="px-4 py-1 border">5</td><td>マッサルー</td><td>末広/T高1</td><td>409pt</td></tr>
          <tr><td className="px-4 py-1 border">6</td><td>バドプレイヤー</td><td>末広/T高1</td><td>186pt</td></tr>
          <tr><td className="px-4 py-1 border">7</td><td>プロ猛者player</td><td>末広/K中3</td><td>171pt</td></tr>
          <tr><td className="px-4 py-1 border">8</td><td>るい</td><td>末広/T中2</td><td>161pt</td></tr>
          <tr><td className="px-4 py-1 border">9</td><td>えみか</td><td>末広/H中3</td><td>80pt</td></tr>
          <tr><td className="px-4 py-1 border">10</td><td>はる</td><td>末広/R中3</td><td>10pt</td></tr>
        </tbody>
      </table>
    </div>
    <h3 className="text-lg font-semibold mt-6">🦉 Duolingo 獲得XPランキング TOP10</h3>
    <p className="text-sm text-gray-500">※ 7月末から表示予定です。</p>
    <div className="overflow-x-auto">
      <table className="min-w-full text-sm text-left border border-gray-300 dark:border-gray-600">
        <thead className="bg-gray-100 dark:bg-gray-700">
          <tr>
            <th className="px-4 py-2 border">順位</th>
            <th className="px-4 py-2 border">名前</th>
            <th className="px-4 py-2 border">教室・学年</th>
            <th className="px-4 py-2 border">XP</th>
          </tr>
        </thead>
        <tbody>
          <tr><td className="px-4 py-2 border text-center" colSpan={4}>Coming soon...</td></tr>
        </tbody>
      </table>
    </div>
    <h3 className="text-lg font-semibold mt-6">🏆 毎月のトップ学習者一覧</h3>
    <div className="overflow-x-auto">
      <table className="min-w-full text-sm text-left border border-gray-300 dark:border-gray-600">
        <thead className="bg-gray-100 dark:bg-gray-700">
          <tr>
            <th className="px-4 py-2 border">月</th>
            <th className="px-4 py-2 border">アプリ</th>
            <th className="px-4 py-2 border">名前</th>
            <th className="px-4 py-2 border">教室・学年</th>
            <th className="px-4 py-2 border">スコア</th>
          </tr>
        </thead>
        <tbody>
          <tr><td className="px-4 py-1 border">2025年4月</td><td>mikan</td><td>しょーた</td><td>永山/S高2</td><td>4210pt</td></tr>
          <tr><td className="px-4 py-1 border">2025年5月</td><td>mikan</td><td>しょーた</td><td>永山/S高2</td><td>21887pt</td></tr>
          <tr><td className="px-4 py-1 border">2025年6月</td><td>mikan</td><td>しょう</td><td>永山/K中2</td><td>4200pt</td></tr>
        </tbody>
      </table>
    </div>
  </div>
);

const WebAppSection:FC = () => (
  <section className="space-y-4">
    <h2 className="text-2xl font-bold text-center">Web教材</h2>
    <ul className="list-disc list-inside space-y-1 underline text-blue-600 text-center">
      <li><a className="link" href="https://doulis.netlify.app/" target="_blank">道リス (英リスニング)</a></li>
      <li><a className="link" href="https://gtr.gakushu-kukan.co.jp/" target="_blank">Gトレ</a></li>
      <li><a className="link" href="https://seishinplus.net/rika/qcheck/qch/menu_3.html" target="_blank">Qチェック (理科)</a></li>
      <li><a className="link" href="https://www.v-ist.com/game/index.html" target="_blank">4択クイズ (ヴィスト)</a></li>
      <li><a className="link"href="https://app.meijitosho.co.jp/voca_w/#/home" target="_blank">ボキャリスチェック (旧教科書)</a></li>
    </ul>
  </section>
);

const DokodemoSection:FC = () => (
  <section className="space-y-4">
    <h2 className="text-2xl font-bold text-center">スマホでどこでも</h2>
    <p className="text-center">一番下のリンクから、それぞれの学年にアクセスできます。</p>
    <ul className="list-disc list-inside space-y-1 text-center underline text-blue-600">
      <li><a href="https://cds.chart.co.jp/books/7hw2lr6dfr" target="_blank">中1</a></li>
      <li><a href="https://cds.chart.co.jp/books/3d7euz10g6" target="_blank">中2</a></li>
      <li><a href="https://cds.chart.co.jp/books/z9iq37wnhl" target="_blank">中3</a></li>
    </ul>
  </section>
);

const DownloadSection:FC = () => (
  <section className="space-y-3 text-center">
    <h2 className="text-2xl font-bold">ダウンロードアプリ紹介</h2>
    <a className="link" href="https://www.obunsha.co.jp/service/kntg4/" target="_blank">
      高校入試ターゲットアプリDL（5教科）
    </a>
  </section>
);

const MikanSection:FC = () => (
  <section className="space-y-6">
    <h2 className="text-2xl font-bold text-center">mikan紹介</h2>
    <p className="text-center">一番下のリンクから、mikan のダウンロードページにアクセスできます。</p>
    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow space-y-3 text-sm leading-relaxed">
      <ul className="list-disc list-inside space-y-1">
        <li>スマホに無料英単語アプリ <b>mikan</b> を入れよう！</li>
        <li>おすすめ教材は <b>中学英単語1000</b></li>
        <li>最終的には <b>カード学習</b> モードに挑戦！</li>
        <li>ランキング設定 → 高校名「旭川東高校」、名前末尾に「(学)」を付けて参加</li>
        <li>毎月の学習空間ランキングとして反映されます！</li>
      </ul>
    </div>
    <ul className="list-disc list-inside text-center underline text-blue-600 space-y-1">
      <li><a href="https://app.adjust.com/1btj6fqy" target="_blank">mikan DLリンク</a></li>
      <li><a href="https://mikan.com/" target="_blank">公式サイト</a></li>
    </ul>
  </section>
);

const DuolingoSection:FC = () => (
  <section className="space-y-6">
    <h2 className="text-2xl font-bold text-center">Duolingo紹介</h2>
    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow space-y-3 text-sm leading-relaxed">
      <p><b>Duolingo</b>は1日3分〜5分でできる英語学習ツールです。読む・書く・話す・聴くの4技能をバランスよく練習できます。</p>
      <p>問題の種類が豊富で、楽しく継続しやすいのが特長です。習得には時間がかかりますが、コツコツ型の学習に向いています。</p>
      <p>学習空間の <b>Duolingo for School</b> に登録すると、山本側から学習記録（連続日数やXP）が確認でき、<b>学習空間ランキング</b>にも反映されます。</p>
      <p className="text-red-500">※ 参加するとフレンド機能は停止し、アカウントは非公開になります。ただしデータ（継続日数など）が消えることはありません。</p>
    </div>
    <ul className="list-disc list-inside text-center underline text-blue-600 space-y-1">
      <li><a href="https://ja.duolingo.com/" target="_blank">Duolingo DLページ</a></li>
      <li><a href="https://www.duolingo.com/classroom/vfcxjq" target="_blank">学習空間Duolingo for School</a></li>
    </ul>
  </section>
);

const GPTsSection:FC = () => (
  <section className="space-y-3 text-center">
    <h2 className="text-2xl font-bold">カスタム GPTs ツール</h2>
    <p className="text-sm text-gray-600 dark:text-gray-400">※ChatGPT アカウント必須</p>
    <a className="link" href="https://chatgpt.com/g/g-67774b07d6f88191855448c2316fcd0f-ying-yi-tian-xue" target="_blank">
      英文添削GPTs
    </a><br/>
    <a className="link" href="https://chatgpt.com/g/g-6841db5eb71c8191916872e978713f40-ying-wen-gou-zao-wojie-shuo-sitekurerumono" target="_blank">
      英文構造把握GPTs
    </a>
  </section>
);

const WritingSection:FC = () => (
  <section className="space-y-4">
    <h2 className="text-2xl font-bold text-center">英検 Writing 練習 GPTs</h2>
    <ul className="list-none space-y-1 text-center underline text-blue-600">
      <li><a href="https://chat.openai.com/g/g-0X5kihChg-ying-jian-3ji-ying-zuo-wen-bot" target="_blank">英検3級</a></li>
      <li><a href="https://chat.openai.com/g/g-iGbVJGXiV-ying-jian-zhun-2ji-ying-zuo-wen-bot" target="_blank">準2級</a></li>
      <li><a href="https://chat.openai.com/g/g-lLWAb8W7K-ying-jian-2ji-ying-zuo-wen-bot" target="_blank">2級</a></li>
      <li><a href="https://chat.openai.com/g/g-JObyhn9rq-ying-jian-zhun-1ji-ying-zuo-wen-bot" target="_blank">準1級</a></li>
      <li><a href="https://chat.openai.com/g/g-Q7cVrVudZ-ying-jian-1ji-ying-zuo-wen-bot" target="_blank">1級</a></li>
    </ul>
  </section>
);

const SecretSection:FC = () => {
  const [pw, setPw] = useState('');
  const [ok, setOk] = useState(false);
  const [err, setErr] = useState('');
  const check = () => pw==='yamamoto' ? (setOk(true),setErr('')) : setErr('パスワードが違います');

  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-center">パスワード付きページ</h2>
      {!ok ? (
        <div className="space-y-2 text-center">
          <input type="password" value={pw} onChange={e=>setPw(e.target.value)}
                 className="border px-3 py-1 rounded-md dark:bg-gray-800"/>
          <div><button onClick={check} className="bg-blue-600 text-white px-4 py-1 rounded">送信</button></div>
          {err && <p className="text-red-500 text-sm">{err}</p>}
        </div>
      ) : (
        <ul className="list-disc list-inside space-y-1 underline text-blue-600">
          <li><a href="https://drive.google.com/file/d/10YhdfYLZV8QTkwm7nUd6LqaIiD5KSjOv/view?usp=sharing" target="_blank">中3数学【本編】</a></li>
          <li><a href="https://drive.google.com/file/d/1eLE860THBHqOiDMrv1RLz6Aghvfn1CpS/view?usp=sharing" target="_blank">中3数学【解答】</a></li>
          <li><a href="https://drive.google.com/file/d/12R1LICtQ6TWlUizhp1odP9ZBbgHOLheY/view?usp=sharing" target="_blank">中2数学【本編】</a></li>
          <li><a href="https://drive.google.com/file/d/1sxURRQK-uJm9hFgnrcBha0Y8PjeqYLfa/view?usp=sharing" target="_blank">中2数学【解答】</a></li>
          <li><a href="https://drive.google.com/file/d/1Xk33o_CXxI5-SdW4YhAPJXa4s4Uk6gBW/view?usp=sharing" target="_blank">中1数学【本編】</a></li>
          <li><a href="https://drive.google.com/file/d/1hKWSn3u9Rr0CSO-clgI5oInEIrXM9gQE/view?usp=sharing" target="_blank">中1数学【解答】</a></li>
          <li><a href="https://flickkeyboardtest.vercel.app/" target="_blank">Flickテストサイト</a></li>
        </ul>
      )}
    </section>
  );



};

const YoutubeSection:FC = () => (
<section className="space-y-4 text-center">
  <h2 className="text-2xl font-bold">公式Youtube</h2>
  <a className="link text-blue-600 underline" href="https://youtube.com/@asahikawasuehiro-gakushu-kukan?si=o3mcXUx_UBRZwx0v" target="_blank">
    学習空間旭川末広教室・山本
  </a>
</section>
);