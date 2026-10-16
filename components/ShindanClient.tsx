"use client";

import { useState } from "react";
import Link from "next/link";

type Q1 = "film" | "old-lens" | "digital" | "wakaranai";
type Q2 = "ugoku" | "kowareta" | "mikakunin";
type Q3 = "sukoshi" | "tairyou" | "ihin";
type Q4 = "takuhai" | "shucchou" | "tenpo";

interface ResultCompany {
  name: string;
  slug: string;
}

interface Result {
  rule: string;
  title: string;
  reason: string;
  hub: { path: string; label: string } | null;
  companies: ResultCompany[];
  guide: { path: string; label: string } | null;
}

const q1Options: { value: Q1; label: string }[] = [
  { value: "film", label: "フィルムカメラ" },
  { value: "old-lens", label: "オールドレンズ・レンズ単体" },
  { value: "digital", label: "デジタル一眼・ミラーレス" },
  { value: "wakaranai", label: "種類がわからない・混在" },
];
const q2Options: { value: Q2; label: string }[] = [
  { value: "ugoku", label: "問題なく動く" },
  { value: "kowareta", label: "壊れている・カビやくもりがある" },
  { value: "mikakunin", label: "動作未確認" },
];
const q3Options: { value: Q3; label: string }[] = [
  { value: "sukoshi", label: "1〜数点" },
  { value: "tairyou", label: "大量・コレクション・機材一式" },
  { value: "ihin", label: "遺品・実家整理で出てきた" },
];
const q4Options: { value: Q4; label: string }[] = [
  { value: "takuhai", label: "宅配で送って売却したい" },
  { value: "shucchou", label: "出張買取を依頼したい" },
  { value: "tenpo", label: "店頭に持ち込みたい" },
];

const hubOf: Record<Q1, { path: string; label: string }> = {
  film: { path: "/film/", label: "フィルムカメラの買取ハブ" },
  "old-lens": { path: "/old-lens/", label: "オールドレンズの買取ハブ" },
  digital: { path: "/digital/", label: "デジタル一眼・ミラーレスの買取ハブ" },
  wakaranai: { path: "/guide/kachi-mikata/", label: "価値の見分け方ガイド" },
};

const allKaitori: ResultCompany[] = [
  { name: "ウリエル", slug: "uriel" },
  { name: "カメラの買取屋さん", slug: "camera-kaitoriyasan" },
  { name: "アローズ", slug: "arrows" },
];

/** 判定ロジック（全開示・このままの順で評価） */
function judge(q1: Q1, q2: Q2, q3: Q3, q4: Q4): Result {
  if (q3 === "ihin") {
    return {
      rule: "ルール1",
      title: "遺品のカメラの処分前の確認事項",
      reason:
        "遺品・実家整理で出てきたカメラは、相続人の合意やフィルム・メモリーカードの扱いなど、売却前に整理すべき事項があります。運び出せない量の場合は、出張買取という選択肢もあります。各社の出張対応エリアと出張料は、一次確認情報のページでご確認ください。",
      hub: hubOf[q1],
      companies: allKaitori,
      guide: { path: "/situation/ihin/", label: "遺品・実家整理で出てきたカメラの売却" },
    };
  }
  if (q3 === "tairyou") {
    return {
      rule: "ルール2",
      title: "大量・機材一式の場合はリスト化してからの相談",
      reason:
        "点数が多い場合は、メーカー・型番・状態を一覧にしてからご相談いただくと、査定内訳を確認しやすくなります。出張と宅配のどちらが適しているかは、重量と点数でご判断ください。",
      hub: hubOf[q1],
      companies: allKaitori,
      guide: { path: "/situation/tairyou/", label: "カメラ・レンズを大量に売る場合の進め方" },
    };
  }
  if (q2 === "kowareta" || q2 === "mikakunin") {
    return {
      rule: "ルール3",
      title: "故障品・動作未確認品の状態申告",
      reason:
        "壊れている・カビやくもりがある・動作未確認のカメラやレンズも、業者によっては査定対象になります。状態を正確に申告したうえで、ジャンク品の受付を公式サイトに明記している業者を、各社ページの「故障・ジャンク」欄でご確認ください。",
      hub: { path: "/broken/", label: "壊れた・ジャンク・カビありの買取ハブ" },
      companies: allKaitori,
      guide: { path: "/guide/uru-mae/", label: "カメラ・レンズを売る前の準備" },
    };
  }
  if (q1 === "wakaranai") {
    return {
      rule: "ルール4",
      title: "種類と価値の見分け方の確認",
      reason:
        "種類がわからない・混在している場合は、フィルムかデジタルか、レンズのマウントは何かといった基本的な見分け方を確認すると、相談すべき窓口を判断できます。",
      hub: null,
      companies: allKaitori,
      guide: { path: "/guide/kachi-mikata/", label: "フィルムカメラ・オールドレンズの価値の見分け方" },
    };
  }
  if (q4 === "shucchou") {
    return {
      rule: "ルール5",
      title: "出張買取に対応する業者の確認",
      reason:
        "出張買取では、対応エリア・出張料・訪問購入としてのクーリングオフ制度の説明が確認事項となります。各社ページの「買取方法」「対応エリア」「出張料」欄と、トラブル対処ガイドをあわせてご確認ください。",
      hub: hubOf[q1],
      companies: allKaitori,
      guide: { path: "/guide/erabikata/", label: "専門店・総合買取・出張買取・フリマの使い分け" },
    };
  }
  if (q4 === "tenpo") {
    return {
      rule: "ルール6",
      title: "店頭持ち込みの場合の対応店舗の確認",
      reason:
        "掲載サービスは宅配・出張買取が中心のため、店頭持ち込みの可否は、各社ページの「買取方法」欄の公式記載を必ずご確認ください。持ち込み先が近くにない場合は、宅配買取をご検討ください。",
      hub: hubOf[q1],
      companies: allKaitori,
      guide: { path: "/compare/", label: "掲載サービスの統一比較表" },
    };
  }
  return {
    rule: "ルール7",
    title: "動作する機材の宅配買取",
    reason:
      "動作する機材を宅配で売却する、最も一般的なケースです。付属品を揃え、デジタル機はメモリーカードを抜いて初期化し、状態を正確に申告したうえで、送料・返送料・入金タイミングを各社ページで比較してください。",
    hub: hubOf[q1],
    companies: allKaitori,
    guide: { path: "/guide/uru-mae/", label: "カメラ・レンズを売る前の準備" },
  };
}

function Fieldset<T extends string>({
  legend,
  name,
  options,
  value,
  onChange,
}: {
  legend: string;
  name: string;
  options: { value: T; label: string }[];
  value: T | null;
  onChange: (v: T) => void;
}) {
  return (
    <fieldset className="border border-chalk-line bg-chalk-card p-5">
      <legend className="bg-steel-800 px-3 py-1 font-display text-sm tracking-wider text-chalk">
        {legend}
      </legend>
      <div className="mt-2 grid gap-2 sm:grid-cols-2">
        {options.map((o) => (
          <label
            key={o.value}
            className={`flex cursor-pointer items-center gap-3 border px-4 py-3 text-sm transition-colors ${
              value === o.value
                ? "border-vermilion bg-vermilion-faint text-steel-900"
                : "border-chalk-line bg-chalk hover:border-steel-300"
            }`}
          >
            <input
              type="radio"
              name={name}
              value={o.value}
              checked={value === o.value}
              onChange={() => onChange(o.value)}
              className="accent-[#c94f2f]"
            />
            {o.label}
          </label>
        ))}
      </div>
    </fieldset>
  );
}

export default function ShindanClient() {
  const [q1, setQ1] = useState<Q1 | null>(null);
  const [q2, setQ2] = useState<Q2 | null>(null);
  const [q3, setQ3] = useState<Q3 | null>(null);
  const [q4, setQ4] = useState<Q4 | null>(null);

  const result = q1 && q2 && q3 && q4 ? judge(q1, q2, q3, q4) : null;
  const done = result !== null;

  return (
    <div className="space-y-6">
      <Fieldset legend="Q1. 売却するものの種類" name="q1" options={q1Options} value={q1} onChange={setQ1} />
      <Fieldset legend="Q2. 状態" name="q2" options={q2Options} value={q2} onChange={setQ2} />
      <Fieldset legend="Q3. 点数・状況" name="q3" options={q3Options} value={q3} onChange={setQ3} />
      <Fieldset legend="Q4. 希望する売り方" name="q4" options={q4Options} value={q4} onChange={setQ4} />

      {!done && (
        <p className="text-sm text-steel-500">
          4問すべてに回答すると、判定結果がここに表示されます。
        </p>
      )}

      {result && (
        <section
          aria-live="polite"
          className="border-2 border-vermilion bg-chalk-card p-6"
        >
          <p className="kicker mb-2">RESULT（適用: {result.rule}）</p>
          <h2 className="font-display text-xl text-steel-900 md:text-2xl">
            {result.title}
          </h2>
          <p className="mt-4 text-sm leading-loose text-steel-700">{result.reason}</p>
          <p className="mt-3 text-sm leading-loose text-steel-700">
            いずれの場合も、状態を正確に申告し、条件（査定料・出張料・送料・返送料・入金・キャンセル）を公式サイトで確認してからお申し込みいただくことが前提となります。
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            {result.guide && (
              <Link href={result.guide.path} className="btn-primary text-sm">
                {result.guide.label}
              </Link>
            )}
            {result.hub && (
              <Link href={result.hub.path} className="btn-ghost text-sm">
                {result.hub.label}を見る
              </Link>
            )}
            {result.companies.map((c) => (
              <Link
                key={c.slug}
                href={`/kaitori/${c.slug}/`}
                className="btn-ghost text-sm"
              >
                {c.name}の一次確認情報
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* 判定ロジック全開示 */}
      <section className="border border-chalk-line bg-chalk-warm p-6">
        <h2 className="font-display text-lg text-steel-900">
          判定ロジック（全開示）
        </h2>
        <p className="mt-2 text-xs leading-relaxed text-steel-600">
          この診断は、以下のルールを上から順に評価する方式です。スコアリングや非公開の重み付けは行っていません。Q1（種類）は提示するカテゴリハブの選択にのみ使用し、掲載業者の優劣は判定しません。
        </p>
        <ol className="mt-4 list-decimal space-y-2 pl-5 text-[13px] leading-relaxed text-steel-700">
          <li>Q3が「遺品・実家整理」→ 遺品のカメラの売却ページを提示（＋Q1のカテゴリハブ）</li>
          <li>Q3が「大量・コレクション」→ 大量売却のページを提示（＋Q1のカテゴリハブ）</li>
          <li>Q2が「壊れている」または「動作未確認」→ 壊れた・ジャンクハブ＋売る前の準備ガイド</li>
          <li>Q1が「種類がわからない」→ 価値の見分け方ガイドを提示</li>
          <li>Q4が「出張」→ 使い分けガイド＋各社の出張条件の確認を案内</li>
          <li>Q4が「店頭」→ 比較表の買取方法欄の確認を案内</li>
          <li>上記以外（動作する機材を宅配で売却）→ 売る前の準備ガイド＋Q1のカテゴリハブ</li>
        </ol>
      </section>
    </div>
  );
}
