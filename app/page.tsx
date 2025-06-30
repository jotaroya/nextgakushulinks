'use client';

import { useState, FC } from 'react';
import {
  Home, Phone, Download, Lightbulb, PenLine, Lock, Brain,
} from 'lucide-react';
import './globals.css';

/* ---------------------------------------------------- */
/*  ページ本体                                          */
/* ---------------------------------------------------- */
export default function Page() {
  const [tab, setTab] = useState<
    'top' | 'dokodemo' | 'mikan' | 'webapp' | 'writing' | 'secret' | 'app' | 'gpts'
  >('top');

  const [webSub,    setWebSub]    = useState(false); // Web教材 → スマホでどこでも
  const [showWrite, setShowWrite] = useState(false); // GPTs → Writing

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white p-6 space-y-6">
      {/* ─── Tabs ───────────────────────────────────── */}
      <div className="flex justify-center gap-4 flex-wrap">
        <Tab lbl={<><Home size={16}/> トップ</>}          act={tab==='top'}      onClick={()=>setTab('top')} />
        <Tab lbl={<><Phone size={16}/> スマホでどこでも</>} act={tab==='dokodemo'} onClick={()=>setTab('dokodemo')} />
        <Tab lbl={<><Brain size={16}/> mikan紹介</>}       act={tab==='mikan'}    onClick={()=>setTab('mikan')} />
        <Tab lbl={<><Lightbulb size={16}/> Web教材</>}     act={tab==='webapp'}   onClick={()=>setTab('webapp')} />
        <Tab lbl={<><PenLine size={16}/> Writing GPTs</>}  act={tab==='writing'}  onClick={()=>setTab('writing')} />
        <Tab lbl={<><Lock size={16}/> パス付き部屋</>}     act={tab==='secret'}  onClick={()=>setTab('secret')} />
        <Tab lbl={<><Download size={16}/> DLアプリ紹介</>} act={tab==='app'}     onClick={()=>setTab('app')} />
        <Tab lbl={<><Brain size={16}/> カスタムGPTs</>}    act={tab==='gpts'}    onClick={()=>setTab('gpts')} />
      </div>

      {/* ─── Panels ─────────────────────────────────── */}
      {tab==='top'      && <TopSection />}
      {tab==='dokodemo' && <DokodemoSection />}
      {tab==='mikan'    && <MikanSection />}
      {tab==='writing'  && <WritingSection />}
      {tab==='secret'   && <SecretSection />}
      {tab==='app'      && <DownloadSection />}

      {tab==='webapp' && (
        <>
          <WebAppSection showSub={webSub} onShowSub={()=>setWebSub(true)} />
          {webSub && <DokodemoSection />}
        </>
      )}

      {tab==='gpts' && (
        <>
          <GPTsSection showWrite={showWrite} onShowWrite={()=>setShowWrite(true)} />
          {showWrite && <WritingSection />}
        </>
      )}
    </main>
  );
}

/* ---------------------------------------------------- */
/*  共通タブボタン                                      */
/* ---------------------------------------------------- */
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

/* ---------------------------------------------------- */
/*  各セクション（すべて FC で JSX を return）           */
/* ---------------------------------------------------- */
const TopSection:FC = () => (
  <h1 className="text-2xl font-bold text-center">学習リンク集</h1>
);

const DokodemoSection:FC = () => (
  <section className="space-y-4">
    <h2 className="text-2xl font-bold text-center">スマホでどこでも</h2>
    <p className="text-center">一番下のリンクから、それぞれの学年にアクセスできます。</p>
    <ul className="list-none space-y-1 text-center underline text-blue-600">
      <li><a href="https://cds.chart.co.jp/books/7hw2lr6dfr" target="_blank">中1</a></li>
      <li><a href="https://cds.chart.co.jp/books/3d7euz10g6" target="_blank">中2</a></li>
      <li><a href="https://cds.chart.co.jp/books/z9iq37wnhl" target="_blank">中3</a></li>
    </ul>
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
        <li>ランキング設定&nbsp;→&nbsp;高校名「旭川東高校」、名前末尾に「(学)」を付けて参加</li>
      </ul>
    </div>
    <ul className="text-center underline text-blue-600 space-y-1">
      <li><a href="https://app.adjust.com/1btj6fqy" target="_blank">mikan DLリンク</a></li>
      <li><a href="https://mikan.com/" target="_blank">公式サイト</a></li>
    </ul>
  </section>
);

const WebAppSection:FC<{showSub:boolean; onShowSub:()=>void}> = ({showSub,onShowSub}) => (
  <section className="space-y-4">
    <h2 className="text-2xl font-bold text-center">Web教材</h2>
    <ul className="list-disc list-inside space-y-1 underline text-blue-600">
      <li><a href="https://doulis.netlify.app/" target="_blank">道リス (英リスニング)</a></li>
      <li><a href="https://seishinplus.net/rika/qcheck/qch/menu_3.html" target="_blank">Qチェック (理科)</a></li>
      <li><a href="https://www.v-ist.com/game/index.html" target="_blank">4択クイズ (ヴィスト)</a></li>
      <li><a href="https://app.meijitosho.co.jp/voca_w/#/home" target="_blank">ボキャリスチェック (旧教科書)</a></li>
    </ul>
    <button onClick={onShowSub} className="link">{showSub ? '▼' : '▶'} スマホでどこでも学年選択ページへ</button>
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
  const [ok,setOk]  = useState(false);
  const [err,setErr]= useState('');
  const check = ()=> pw==='yamamoto' ? (setOk(true),setErr('')) : setErr('パスワードが違います');
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
        </ul>
      )}
    </section>
  );
};

const DownloadSection:FC = () => (
  <section className="space-y-3 text-center">
    <h2 className="text-2xl font-bold">ダウンロードアプリ紹介</h2>
    <a className="link" href="/mikan">▶ mikan特集ページへ</a><br/>
    <a className="link" href="https://www.obunsha.co.jp/service/kntg4/" target="_blank">
      高校入試ターゲットアプリDL（5教科）
    </a>
  </section>
);

const GPTsSection:FC<{showWrite:boolean; onShowWrite:()=>void}> = ({showWrite,onShowWrite}) => (
  <section className="space-y-3 text-center">
    <h2 className="text-2xl font-bold">カスタム GPTs ツール</h2>
    <p className="text-sm text-gray-600 dark:text-gray-400">※ChatGPT アカウント必須</p>
    <a className="link" href="https://chatgpt.com/g/g-67774b07d6f88191855448c2316fcd0f-ying-yi-tian-xue" target="_blank">
      英文添削GPTs
    </a><br/>
    <a className="link" href="https://chatgpt.com/g/g-6841db5eb71c8191916872e978713f40-ying-wen-gou-zao-wojie-shuo-sitekurerumono" target="_blank">
      英文構造把握GPTs
    </a><br/>
    <button className="link" onClick={onShowWrite}>
      {showWrite ? '▼' : '▶'} 英検Writing練習ページへ
    </button>
  </section>
);
