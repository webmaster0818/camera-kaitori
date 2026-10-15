import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { categories, companies, getCompany, kaitoriCompanies, makers, mounts, platformCompanies, checkedLabelAll} from "@/lib/companies";
import { SITE_NAME, SITE_TAGLINE, SITE_URL, OPERATOR } from "@/lib/site";

export const metadata: Metadata = {
  title: `カメラの売り方｜店頭・宅配・出張・一括査定の違いと掲載${companies.length}社の条件比較｜${SITE_NAME}`,
  description:
    `カメラの売り方は店頭・宅配・出張買取と一括査定（ほかにフリマ・下取り）。掲載${companies.length}社がどの方法に対応するかを公式確認し、査定料・送料・返送料・入金を比較。フィルム・オールドレンズ・壊れたカメラの価値の見分け方まで中立の視点で整理します。`,
  alternates: { canonical: "/" },
};

const catNumbers = ["01", "02", "03", "04"];

const guides = [
  {
    href: "/guide/kachi-mikata/",
    label: "フィルムカメラ・レンズの価値の見分け方",
    desc: "メーカー・機種・マウント・状態。売る前に確認する7つのポイント",
  },
  {
    href: "/guide/uru-mae/",
    label: "売る前の準備",
    desc: "付属品・メモリーカード・データ削除・状態申告のコツ",
  },
  {
    href: "/guide/erabikata/",
    label: "専門店・総合・出張の使い分け",
    desc: "カメラ買取はどこがいい？売り方の仕組みから整理",
  },
  {
    href: "/guide/trouble/",
    label: "買取トラブル対処とクーリングオフ",
    desc: "出張買取は訪問購入。減額・返送トラブルの相談先",
  },
  {
    href: "/situation/ihin/",
    label: "遺品・実家整理のカメラを売る",
    desc: "捨てる前の確認点と出張買取の使い方",
  },
  {
    href: "/situation/tairyou/",
    label: "大量・コレクションを売る",
    desc: "リスト化・出張と宅配の使い分け・査定内訳",
  },
];

/** 売り方別の対応社（各社 methods 欄＝公式記載から。確認日は各社ページに記載） */
const howToSell: { method: string; fit: string; slugs: string[]; caution: ReactNode }[] = [
  {
    method: "店頭買取",
    fit: "近くに店舗がある・その場で現金化したい・点数が少ない",
    slugs: ["kitamura", "naniwa", "fujiya", "daikokuya", "janpara", "camera-kaitoriyasan", "camera-takakuureru", "rakuuru"],
    caution: "ラクウル（ソフマップ）は来店予約制（池袋店・AKIBA駅前館）。店舗によって取り扱いがない品目もあるため、持ち込む前に各社ページで確認。",
  },
  {
    method: "宅配買取",
    fit: "近くに店舗がない・まとめて送りたい・対面が不要",
    slugs: ["kitamura", "naniwa", "fujiya", "daikokuya", "janpara", "camera-kaitoriyasan", "camera-takakuureru", "rakuuru", "arrows"],
    caution: "送料・梱包キットが無料でも、査定に納得できず返してもらうときの返送料は社ごとに違う。申込前に比較表の「返送料」欄を確認。",
  },
  {
    method: "出張買取",
    fit: "大量・大型機材・遺品整理で運び出せない",
    slugs: ["kitamura", "naniwa", "daikokuya", "camera-kaitoriyasan", "camera-takakuureru", "uriel"],
    caution: (
      <>
        自宅での買取は特定商取引法の「訪問購入」にあたり、法定の書面を受け取った日から数えて8日以内ならクーリング・オフできる（
        <a href="https://www.no-trouble.caa.go.jp/what/doortodoorpurchases/" rel="nofollow noopener" target="_blank" className="underline underline-offset-4">消費者庁 特定商取引法ガイド</a>
        ）。
      </>
    ),
  },
  {
    method: "一括査定・比較",
    fit: "相場が分からない・複数社の金額を並べてから決めたい",
    slugs: ["minna-no-kaitori", "hikakaku", "oikura"],
    caution: "サービス自体は買い取らず、実際の売買・送料・キャンセルは見積もりを出した各店の条件になる。",
  },
];

const homeLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      name: SITE_NAME,
      url: `${SITE_URL}/`,
      inLanguage: "ja",
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: OPERATOR.name,
      address: OPERATOR.address,
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={homeLd} />
      {/* ヒーロー */}
      <section className="relative overflow-hidden bg-steel-900 text-chalk">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 hidden w-24 items-center justify-center border-l border-steel-700 md:flex"
        >
          <p className="tate font-display text-sm text-steel-400">
            一次確認・確認日明記・口コミ非創作
          </p>
        </div>
        <div className="mx-auto max-w-site px-4 py-20 md:py-28">
          <p className="kicker mb-6 !text-vermilion">CAMERA &amp; LENS SELLING GUIDE</p>
          <h1 className="font-display text-3xl leading-relaxed md:text-5xl md:leading-relaxed">
            売る前の5分で読む、
            <br />
            <span className="text-vermilion">中立</span>のカメラ買取ナビ。
          </h1>
          <p className="mt-8 max-w-xl text-sm leading-loose text-steel-200 md:text-base">
            古いフィルムカメラ、カビのあるレンズ、実家から出てきた機材。「これは売れるのか」を判断する材料と、掲載サービスの査定料・出張料・送料・返送料・入金の条件を、すべて各社公式サイトで一次確認し、確認日（{checkedLabelAll()}）を明記。確認できなかった項目は「公式では確認できず」と正直に書きます。
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link href="/guide/kachi-mikata/" className="btn-primary">
              価値の見分け方を読む
            </Link>
            <Link
              href="/compare/"
              className="btn-ghost !border-steel-500 !bg-transparent !text-chalk hover:!border-vermilion hover:!text-vermilion"
            >
              掲載サービスの比較表
            </Link>
          </div>
        </div>
      </section>

      {/* 売り方の直接回答 */}
      <section className="mx-auto max-w-site px-4 pt-16 md:pt-24">
        <p className="kicker mb-3">HOW TO SELL</p>
        <h2 className="section-title mb-4">カメラの売り方は4つ（店頭・宅配・出張・一括査定）</h2>
        <p className="mb-6 max-w-3xl text-sm leading-loose text-steel-600">
          カメラ・レンズを現金化する方法は、買取店に売る「店頭」「宅配」「出張」と、複数の買取店に見積もりを出してもらう「一括査定」が中心です。ほかに自分で出品するフリマ・オークションと、新しい機材の購入代金から差し引く下取りがあります。掲載{companies.length}社が公式サイトでどの方法に対応しているかを並べると次のとおりです（確認日は各社ページ）。
        </p>
        <div className="overflow-x-auto border border-chalk-line">
          <table className="spec-table">
            <thead>
              <tr>
                <th className="w-28">売り方</th>
                <th>向く場面</th>
                <th>対応している掲載社</th>
                <th>先に確認すること</th>
              </tr>
            </thead>
            <tbody>
              {howToSell.map((h) => (
                <tr key={h.method}>
                  <th>{h.method}</th>
                  <td className="text-[13px] leading-relaxed">{h.fit}</td>
                  <td className="text-[13px] leading-relaxed">
                    {h.slugs.length}社：
                    {h.slugs.map((slug, i) => (
                      <span key={slug}>
                        {i > 0 && "・"}
                        <Link href={`/kaitori/${slug}/`} className="text-vermilion underline underline-offset-4">
                          {getCompany(slug).name}
                        </Link>
                      </span>
                    ))}
                  </td>
                  <td className="text-[13px] leading-relaxed">{h.caution}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 max-w-3xl text-xs leading-relaxed text-steel-500">
          ※ 各社の「買取方法」欄（公式サイトの記載・{checkedLabelAll()}確認）から集計。ラクウル（ソフマップ）の出張買取は家電・家具3点以上が対象のため出張には含めていません。フジヤカメラの出張引取は法人・プロユース向けページの記載のため除外しています。フリマ・下取りとの使い分けは
          <Link href="/guide/erabikata/" className="text-vermilion underline underline-offset-4">専門店・総合・出張・フリマの使い分け</Link>
          で解説しています。
        </p>
      </section>

      {/* カテゴリ導線 */}
      <section className="mx-auto max-w-site px-4 py-16 md:py-24">
        <p className="kicker mb-3">CATEGORY</p>
        <h2 className="section-title mb-4">種類と状態別に、売り方から考える</h2>
        <p className="mb-10 max-w-2xl text-sm leading-loose text-steel-600">
          フィルムカメラとデジタル現行機では、評価のされ方も、相談すべき窓口も異なります。まず種類と状態を選び、そのカテゴリの判断ポイントと一次確認済みの条件を確認してください。
        </p>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat, i) => (
            <Link
              key={cat.slug}
              href={cat.path}
              className="group relative border border-chalk-line bg-chalk-card p-6 transition-colors hover:border-vermilion"
            >
              <span className="font-display text-sm tracking-widest2 text-vermilion">
                {catNumbers[i]}
              </span>
              <h3 className="mt-3 font-display text-xl text-steel-900 group-hover:text-vermilion">
                {cat.name}
              </h3>
              <p className="mt-3 text-[13px] leading-relaxed text-steel-600">
                {cat.lead}
              </p>
              <p className="mt-4 text-xs text-steel-500">
                掲載:{" "}
                {cat.companySlugs.length > 0
                  ? cat.companySlugs
                      .map((s) => companies.find((c) => c.slug === s)?.name)
                      .filter(Boolean)
                      .join("・")
                  : "買取業者は該当なし（一括査定・価格比較サービスを掲載）"}
              </p>
              <span
                aria-hidden="true"
                className="absolute bottom-4 right-4 font-display text-vermilion opacity-0 transition-opacity group-hover:opacity-100"
              >
                →
              </span>
            </Link>
          ))}
          <Link
            href="/situation/ihin/"
            className="group relative border border-chalk-line bg-chalk-card p-6 transition-colors hover:border-vermilion"
          >
            <span className="font-display text-sm tracking-widest2 text-vermilion">05</span>
            <h3 className="mt-3 font-display text-xl text-steel-900 group-hover:text-vermilion">
              遺品・実家整理で出てきたカメラ
            </h3>
            <p className="mt-3 text-[13px] leading-relaxed text-steel-600">
              捨てる前の確認点、相続人の合意、フィルムやメモリーカードの扱い、持ち出せないときの出張買取の使い方をまとめました。
            </p>
          </Link>
          <div className="flex flex-col justify-center border border-dashed border-steel-300 bg-chalk p-6">
            <h3 className="font-display text-xl text-steel-900">
              どう売ればいいか分からない？
            </h3>
            <p className="mt-3 text-[13px] leading-relaxed text-steel-600">
              種類・状態・点数・売り方の4問に答えると、ルールベースで合うページとサービスを提示します。判定ロジックは全て開示しています。
            </p>
            <Link href="/shindan/" className="btn-primary mt-5 text-sm">
              売り方診断へ
            </Link>
          </div>
        </div>
      </section>

      {/* メーカー別導線 */}
      <section className="border-t border-chalk-line bg-chalk">
        <div className="mx-auto max-w-site px-4 py-16 md:py-20">
          <p className="kicker mb-3">BY MAKER</p>
          <h2 className="section-title mb-4">メーカー別に、確認することから整理する</h2>
          <p className="mb-10 max-w-2xl text-sm leading-loose text-steel-600">
            メーカーごとにマウントの規格や世代の考え方が異なり、売る前に確認しておく項目も変わります。掲載サービスの公式サイトにはメーカー別の買取可否は記載されていないため、当サイトでは「どの会社がどのメーカーを買い取るか」は扱わず、申告のために確認しておく一般的な項目を整理しています。
          </p>
          <ul className="grid gap-4 md:grid-cols-2">
            {makers.map((m) => (
              <li key={m.slug}>
                <Link
                  href={m.path}
                  className="group block h-full border border-chalk-line bg-chalk-card p-6 transition-colors hover:border-vermilion"
                >
                  <h3 className="font-display text-lg text-steel-900 group-hover:text-vermilion">
                    {m.name}
                  </h3>
                  <p className="mt-3 text-[13px] leading-relaxed text-steel-600">{m.lead}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* マウント別導線 */}
      <section className="border-t border-chalk-line bg-chalk-card">
        <div className="mx-auto max-w-site px-4 py-16 md:py-20">
          <p className="kicker mb-3">BY MOUNT</p>
          <h2 className="section-title mb-4">マウント別に、レンズの規格から整理する</h2>
          <p className="mb-10 max-w-2xl text-sm leading-loose text-steel-600">
            レンズは、どのメーカーの製品かと同じくらい「どの取り付け規格か」で扱いが変わります。ねじ込み式かバヨネットか、フランジバックが長いか短いか、連動が機械式か電子式か。掲載サービスの公式サイトにはマウント別の買取可否は記載されていないため、当サイトでは「どの会社がどのマウントを買い取るか」は扱わず、申告のために確認しておく規格そのものの一般知識を整理しています。
          </p>
          <ul className="grid gap-4 md:grid-cols-2">
            {mounts.map((m) => (
              <li key={m.slug}>
                <Link
                  href={m.path}
                  className="group block h-full border border-chalk-line bg-chalk p-6 transition-colors hover:border-vermilion"
                >
                  <h3 className="font-display text-lg text-steel-900 group-hover:text-vermilion">
                    {m.name}
                  </h3>
                  <p className="mt-3 text-[13px] leading-relaxed text-steel-600">{m.lead}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ガイド導線 */}
      <section className="bg-chalk-warm">
        <div className="mx-auto max-w-site px-4 py-16 md:py-20">
          <p className="kicker mb-3">BEFORE YOU SELL</p>
          <h2 className="section-title mb-4">売る前に読むガイド</h2>
          <p className="mb-8 max-w-2xl text-sm leading-loose text-steel-600">
            価値の見分け方、付属品と状態申告、売り方の使い分け、出張買取のクーリングオフ。買取価格を比べる前に押さえておきたい一般知識を整理しました。
          </p>
          <ul className="grid gap-3 text-sm md:grid-cols-2 lg:grid-cols-3">
            {guides.map((g) => (
              <li key={g.href}>
                <Link href={g.href} className="block h-full border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                  <span className="font-display text-steel-900">{g.label}</span>
                  <span className="mt-1 block text-xs text-steel-500">{g.desc}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 比較表導線 */}
      <section className="bg-steel-800 text-chalk">
        <div className="mx-auto max-w-site px-4 py-16 md:py-20">
          <div className="md:flex md:items-end md:justify-between md:gap-8">
            <div>
              <p className="kicker mb-3">COMPARISON</p>
              <h2 className="font-display text-2xl leading-snug md:text-3xl">
                掲載サービスを、同じ物差しで並べる
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-loose text-steel-200">
                買取サービス{kaitoriCompanies.length}社と一括査定・価格比較型{platformCompanies.length}サービス。買取方法・対応エリア・査定料・出張料・送料・返送料・入金・キャンセル規定・故障品の受付・遺品や大量への対応・運営会社と古物商許可番号を統一フォーマットで比較しています（{checkedLabelAll()}公式確認）。
              </p>
            </div>
            <Link href="/compare/" className="btn-primary mt-8 shrink-0 md:mt-0">
              比較表を見る
            </Link>
          </div>
          <ul className="mt-10 grid grid-cols-2 gap-px border border-steel-700 bg-steel-700 sm:grid-cols-3">
            {companies.map((c) => (
              <li key={c.slug} className="bg-steel-800">
                <Link
                  href={`/kaitori/${c.slug}/`}
                  className="block px-4 py-4 text-center font-display text-sm tracking-wider text-chalk transition-colors hover:bg-steel-700 hover:text-vermilion"
                >
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 編集方針 */}
      <section className="mx-auto max-w-site px-4 py-16 md:py-24">
        <p className="kicker mb-3">POLICY</p>
        <h2 className="section-title mb-8">このサイトの約束</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              t: "公式サイトの一次確認",
              d: `掲載する条件はすべて各社公式サイトで確認し、確認日を明記します。今回の確認日は${checkedLabelAll()}です。`,
            },
            {
              t: "確認できないことは書かない",
              d: "公式で確認できなかった項目は「公式では確認できず」と表示します。架空の買取金額・実績・口コミは一切掲載しません。",
            },
            {
              t: "相場を断定しない",
              d: "カメラ・レンズの評価は状態と時期で大きく変わります。当サイトは金額を断定せず、価値の見分け方と条件の事実比較を提供します。",
            },
          ].map((x) => (
            <div key={x.t} className="border-t-2 border-vermilion pt-4">
              <h3 className="font-display text-lg text-steel-900">{x.t}</h3>
              <p className="mt-3 text-[13px] leading-loose text-steel-600">{x.d}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 text-sm">
          <Link href="/content-policy/" className="text-vermilion underline underline-offset-4 hover:text-vermilion-deep">
            コンテンツ制作ポリシーの全文を読む
          </Link>
        </p>
      </section>
    </>
  );
}
