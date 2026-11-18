import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd, { faqPageLd } from "@/components/JsonLd";
import { fmt, formatChecked, getCompany } from "@/lib/companies";
import { MIRRORLESS_LISTED } from "@/lib/mirrorless";
import { SITE_NAME, SITE_URL, OPERATOR } from "@/lib/site";

const TITLE = "ビデオカメラ買取｜対象品目に「ビデオカメラ」と明記する掲載6社の買取方法・返送料と売る前の確認【2026年11月】";
const DESC =
  "ビデオカメラの買取先を掲載10社の公式記載で整理。対象品目に「ビデオカメラ」と明記する6社（アローズ・キタムラ・フジヤカメラ・じゃんぱら・ラクウル・カメラ高く売れるドットコム）の買取方法と返送料、業務用機・ジンバルカメラの注意書き、内蔵メモリーの扱いを掲載（2026年11月18日確認）。";
const PATH = "/digital/video-camera/";
const PAGE_DATE = "2026-11-18";
const PAGE_DATE_LABEL = "2026年11月18日";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: PATH },
};

const articleLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: TITLE,
  description: DESC,
  datePublished: PAGE_DATE,
  dateModified: PAGE_DATE,
  mainEntityOfPage: `${SITE_URL}${PATH}`,
  author: { "@type": "Organization", name: OPERATOR.name },
  publisher: { "@type": "Organization", name: SITE_NAME },
};

/** 対象品目に「ビデオカメラ」を明記する掲載社（companies.json の target を各社公式の表記どおりに抜粋。確認日は confirmed_date） */
const VIDEO_ROWS: { slug: string; word: string }[] = [
  { slug: "arrows", word: "「ビデオカメラ・トイカメラ・アクションカメラ・ドローン」ほか" },
  { slug: "kitamura", word: "「ビデオカメラ」（「店舗や買取方法によって買取可能な品目は異なります」）" },
  { slug: "fujiya", word: "「ビデオカメラ」（買取こだわり検索のカテゴリ）" },
  { slug: "janpara", word: "「ビデオカメラ」（買取カテゴリー「カメラ」の内訳）" },
  { slug: "rakuuru", word: "「カメラ・ビデオカメラ」カテゴリに「ビデオカメラ」「アクションカメラ」「スタビライザー」ほか" },
  { slug: "camera-takakuureru", word: "「ビデオカメラ」（公式の買取対象品目）" },
];

export default function VideoCameraPage() {
  const conclusions = [
    `自社でカメラを買い取る当サイト掲載${MIRRORLESS_LISTED.length}社のうち、公式サイトの対象品目に「ビデオカメラ」と明記しているのは、カメラ買取アローズ・カメラのキタムラ・フジヤカメラ・じゃんぱら・ラクウル（ソフマップ）・カメラ高く売れるドットコムの${VIDEO_ROWS.length}社です（各社の確認日は下表）。`,
    "カメラのナニワは、対象品目に「ジンバル・スタビライザー」「マイク」「動画アクセサリー」「ドローン・アクションカム」を挙げていますが、「ビデオカメラ」の表記は確認できませんでした。受け付けないという意味ではないため、申込前に問い合わせてください。",
    "宅配で送る場合は、査定額に納得できなかったときの返送料が社ごとに異なります。カメラのキタムラ・ラクウル・カメラ高く売れるドットコムは返送料無料、カメラ買取アローズは利用者負担と公式に記載しています。",
    "フジヤカメラは「ビデオカメラ」の高額買取商品一覧を公開しており（2026年11月18日確認・該当100件）、DJIの製品に「国内正規代理店でのご購入が確認出来る書類」を求める注意書きや、業務用機の査定に「30分以上の通電が必要」とする注意書きがあります。",
    "送る前に、SDカードなどの記録メディアを抜き、本体の内蔵メモリーに残った映像を保存してから消去します。バッテリー・充電器（ACアダプター）は、ない場合に買取不可とする社があるため、揃えておきます。",
  ];

  const prepSteps = [
    {
      t: "型番を本体の表示で控える",
      d: "ビデオカメラの型番は、本体の底面や液晶モニターを開いた内側、バッテリーを外した部分などに表示されていることが多くあります。同じシリーズでも末尾の記号で別の機種になるため、表示どおりに控えます。フジヤカメラの一覧でも、ソニーの業務用機について「本体には「PXW-FX9V」と表記されています」と、本体表記と商品名の違いを注記しています（2026年11月18日確認）。",
    },
    {
      t: "記録メディアをすべて抜く",
      d: "SDカードなどのメモリーカード、テープやディスクに記録する機種ではテープ・ディスクを、すべて取り出してから送ります。家族の行事など、写っている人のプライバシーに関わる映像が残っていることが多いため、カードスロットとテープ・ディスクの取り出し口を目で見て空であることを確かめます。",
    },
    {
      t: "内蔵メモリーの映像を保存してから消去する",
      d: "本体に内蔵メモリーを持つ機種では、カードを抜いても本体側に映像が残っています。必要な映像をパソコンなどに保存してから、本体のメニューで消去・初期化します。メニュー名は機種によって異なるため、取扱説明書やメーカーのサポートページで確認してください。スマートフォンアプリとの連携やWi-Fi設定も解除しておきます。",
    },
    {
      t: "バッテリー・充電器（ACアダプター）を揃える",
      d: "カメラ買取アローズは「重度付属品欠品（バッテリー、充電器がない商品）」を買取不可と公式に記載しています。一方、カメラ高く売れるドットコムは「購入時の箱や付属品は残っていることが望ましいですが、なくてもお買取できます」と記載しています。付属品が揃わない場合は、条件の合う社を選ぶか、欠品をそのまま申告します。",
    },
    {
      t: "動作は確認できた範囲だけを申告する",
      d: "電源が入るか、録画・再生ができるか、液晶モニターが映るかを、試せる範囲で確認します。確認できなかった項目は「未確認」と伝えれば十分です。故障品の扱いは社ごとに異なり、カメラ高く売れるドットコムは「一部機能が使えないといった軽度の故障でしたら、買取価格がつく可能性があります」、カメラ買取アローズはジャンク品を原則買取不可としています。",
    },
  ];

  const faqs = [
    {
      q: "ビデオカメラはどこで買取してもらえますか？",
      a: `当サイト掲載の買取${MIRRORLESS_LISTED.length}社のうち、カメラ買取アローズ・カメラのキタムラ・フジヤカメラ・じゃんぱら・ラクウル（ソフマップ）・カメラ高く売れるドットコムの${VIDEO_ROWS.length}社が、公式サイトの対象品目に「ビデオカメラ」と明記しています。買取方法（宅配・店頭・出張）と返送料は社ごとに異なるため、本ページの表で確認してください。`,
    },
    {
      q: "古い家庭用ビデオカメラでも売れますか？",
      a: "当サイトからは個別の機種が売れるかどうかを断定できません。じゃんぱらは「規格があまり古すぎるものは買取できない物もございます」と公式に記載しています。型番・付属品・動作の状況を揃え、複数の社に同じ情報で相談してください。値段が付かない場合の扱い（返送・引き取り）も申込前に確認しておくと安心です。",
    },
    {
      q: "ビデオカメラの買取価格はいくらですか？",
      a: "当サイトでは買取金額を掲載していません。買取額は型番・状態・付属品・時期で変わります。相場を知りたい場合は、フジヤカメラのように買取商品一覧を公開している社の掲載額を、状態の区分（新品同様・良品など）と確認日に注意して参考にし、同じ情報で2〜3社に見積もりを依頼する方法があります。",
    },
    {
      q: "DJIのジンバルカメラや海外で買ったビデオカメラは売れますか？",
      a: "フジヤカメラは、DJI製品の商品ページに「国内正規代理店でのご購入が確認出来る書類と一緒にお持ちください。お持ちでない場合、減額とさせて頂く事がございます。並行輸入品の場合はお買取り出来ません。」と記載しています（2026年11月18日確認）。購入時の納品書・保証書などがあれば一緒に用意してください。他社の扱いは各社へ確認してください。",
    },
    {
      q: "テープやSDカードを入れたまま送ってしまいました。",
      a: "すぐに送付先の社へ連絡し、記録メディアの返送や取り扱いを相談してください。送る前に記録メディアを抜き、内蔵メモリーの映像を保存・消去しておくのが基本です。",
    },
  ];

  return (
    <>
      <JsonLd data={articleLd} />
      <JsonLd data={faqPageLd(faqs)} />
      <Breadcrumbs
        items={[
          { name: "ホーム", path: "/" },
          { name: "デジタルカメラの買取", path: "/digital/" },
          { name: "ビデオカメラ買取", path: PATH },
        ]}
      />
      <article className="mx-auto max-w-site px-4 py-10 md:py-14">
        <p className="kicker mb-3">VIDEO CAMERA</p>
        <h1 className="max-w-4xl font-display text-2xl leading-relaxed text-steel-900 md:text-3xl md:leading-relaxed">
          ビデオカメラ買取｜対象品目に「ビデオカメラ」と明記する掲載{VIDEO_ROWS.length}社と売る前の確認
        </h1>
        <p className="mt-5 max-w-3xl text-sm leading-loose text-steel-600">
          家庭用のビデオカメラから業務用機、ジンバルカメラまで、ビデオカメラを売るときに比べる項目を、当サイト掲載社の公式記載で整理しています。買取金額は機種・状態・時期で変わるため掲載せず、どの社が対象品目に明記しているか、買取方法、キャンセル時の返送料、売る前に済ませる準備をまとめました。
        </p>

        <section className="mt-10 border-2 border-vermilion bg-chalk-warm p-6">
          <h2 className="font-display text-lg text-steel-900">ビデオカメラ買取の要点</h2>
          <ul className="mt-4 space-y-3">
            {conclusions.map((c) => (
              <li key={c} className="flex gap-2 text-sm leading-loose text-steel-800">
                <span aria-hidden="true" className="mt-2 inline-block h-2 w-2 shrink-0 bg-vermilion" />
                {c}
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-14">
          <h2 className="section-title mb-2">対象品目に「ビデオカメラ」と明記する掲載{VIDEO_ROWS.length}社（公式記載）</h2>
          <p className="mb-5 max-w-3xl text-sm leading-loose text-steel-600">
            自社で買い取る掲載{MIRRORLESS_LISTED.length}社の公式サイトで、対象品目に「ビデオカメラ」の表記がある社を抜き出しました。買取方法とキャンセル時の返送料は、宅配で送る前に差が出やすい項目です。
          </p>
          <div className="overflow-x-auto border border-chalk-line">
            <table className="spec-table">
              <thead>
                <tr>
                  <th className="w-32 md:w-44">業者</th>
                  <th>対象品目の表記</th>
                  <th>買取方法</th>
                  <th>キャンセル時の返送料</th>
                </tr>
              </thead>
              <tbody>
                {VIDEO_ROWS.map((r) => {
                  const c = getCompany(r.slug);
                  const ml = MIRRORLESS_LISTED.find((m) => m.slug === r.slug);
                  return (
                    <tr key={r.slug}>
                      <th>
                        <Link href={`/kaitori/${c.slug}/`} className="underline underline-offset-4 hover:text-vermilion">
                          {c.name}
                        </Link>
                        <span className="mt-1 block text-[11px] font-normal text-steel-500">{formatChecked(c.confirmed_date)}確認</span>
                      </th>
                      <td className="text-[13px]">{r.word}</td>
                      <td className="text-[13px]">{ml ? ml.methods : fmt(c.methods)}</td>
                      <td className="text-[13px]">{fmt(c.hiyou.hensou)}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <p className="mt-2 text-xs text-steel-500">
            ※ 横にスクロールできます。表記は各社公式の対象品目の書き方を抜粋したもので、個別の機種の受付可否や金額を示すものではありません。カメラのナニワ・ウリエル・大黒屋・カメラの買取屋さんは、対象品目に「ビデオカメラ」の表記を確認できませんでした（受け付けないという意味ではありません）。
          </p>
        </section>

        <section className="mt-14">
          <h2 className="section-title mb-2">業務用機・ジンバルカメラの注意書き（フジヤカメラ）</h2>
          <div className="space-y-4 text-[13px] leading-loose text-steel-700">
            <p>
              フジヤカメラは「ビデオカメラ」カテゴリの高額買取商品一覧を公開しており、{PAGE_DATE_LABEL}時点で該当件数は100件でした。掲載メーカーにはDJI・ソニー・キヤノン・ニコン・GoPro・Blackmagic Design・パナソニック・Insta360があり、家庭用に加えて業務用のカムコーダーやシネマカメラ、ジンバルカメラも並んでいます。
            </p>
            <p>
              商品ごとの注意書きとして、DJI Pocket 2 Creator コンボには「国内正規代理店でのご購入が確認出来る書類と一緒にお持ちください。お持ちでない場合、減額とさせて頂く事がございます。並行輸入品の場合はお買取り出来ません。付属品に欠品がございますと買取出来ない場合がございます。」、ソニー PXW-FX9（レンズなしモデル）には「画素欠けの確認を行なう際、30分以上の通電が必要なため、査定にお時間がかかります。」と記載されています。購入時の書類の有無と、査定に時間がかかる場合があることを、申込前に把握しておくと進めやすくなります。
            </p>
            <p className="text-xs text-steel-500">
              出典：フジヤカメラ「ビデオカメラの高額買取商品一覧」（https://www.fujiya-camera.co.jp/shop/e/ec-kkvc/ ）を{PAGE_DATE_LABEL}に確認。掲載商品・注意書きは随時変わります。
            </p>
          </div>
        </section>

        <section className="mt-14">
          <h2 className="section-title mb-2">ビデオカメラを売る前に済ませること</h2>
          <div className="space-y-5">
            {prepSteps.map((s, i) => (
              <div key={s.t} className="border border-chalk-line bg-chalk-card p-5">
                <h3 className="flex items-baseline gap-3 font-display text-base text-steel-900">
                  <span className="font-display text-sm tracking-widest2 text-vermilion">{String(i + 1).padStart(2, "0")}</span>
                  {s.t}
                </h3>
                <p className="mt-3 text-[13px] leading-loose text-steel-700">{s.d}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link href="/guide/uru-mae/" className="btn-primary">カメラを売る前の準備を見る</Link>
            <Link href="/broken/" className="btn-ghost">壊れた・ジャンク品の扱いを見る</Link>
          </div>
        </section>

        <section className="mt-14">
          <h2 className="section-title mb-5">よくある質問</h2>
          <div className="space-y-4">
            {faqs.map((f) => (
              <div key={f.q} className="border border-chalk-line bg-chalk-card p-5">
                <h3 className="font-display text-base text-steel-900">{f.q}</h3>
                <p className="mt-2 text-[13px] leading-loose text-steel-700">{f.a}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-14">
          <h2 className="section-title mb-5">関連ページ</h2>
          <ul className="grid gap-3 md:grid-cols-2">
            {[
              { href: "/digital/", t: "デジタル一眼・ミラーレス買取", d: "一眼レフを対象品目に明記する掲載社と付属品の条件" },
              { href: "/digital/compact/", t: "古いコンパクトデジタルカメラの売却前の確認", d: "型番・付属品・データ・電池" },
              { href: "/situation/koujin-film-data/", t: "故人のフィルム・メモリーカード・写真データ", d: "テープやカードに残った記録の扱い" },
              { href: "/compare/", t: "買取業者の統一比較表", d: "出張対応・返送料を同じ基準で比較" },
              { href: "/kaitori/fujiya/", t: "フジヤカメラの買取条件", d: "宅配キット・付属品欠品の扱い" },
              { href: "/kaitori/camera-takakuureru/", t: "カメラ高く売れるドットコムの買取条件", d: "出張・宅配・店頭と返送料無料の記載" },
            ].map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                  <span className="font-display text-steel-900">{l.t}</span>
                  <span className="mt-1 block text-xs text-steel-500">{l.d}</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <p className="mt-12 text-xs leading-loose text-steel-500">
          ※ 本ページの掲載社の条件は、各社の確認日時点の公式記載に基づきます（フジヤカメラの商品一覧は{PAGE_DATE_LABEL}確認）。買取金額は機種・状態・時期により異なるため掲載していません。申込前に各社の公式サイトで最新の内容をご確認ください。
        </p>
      </article>
    </>
  );
}
