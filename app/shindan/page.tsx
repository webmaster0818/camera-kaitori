import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import ShindanClient from "@/components/ShindanClient";

export const metadata: Metadata = {
  title: "売り方診断（4問）｜カメラの種類・状態・状況から売り方を判定",
  description:
    "カメラの種類・状態・点数や状況・売り方の4問に答えると、あらかじめ定めた判定ルールにもとづき、適したガイドとカテゴリ、掲載サービスを提示します。判定ロジックはすべて開示しており、該当がない場合は「該当なし」と表示します。",
  alternates: { canonical: "/shindan/" },
};

export default function ShindanPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { name: "ホーム", path: "/" },
          { name: "売り方診断", path: "/shindan/" },
        ]}
      />
      <div className="mx-auto max-w-3xl px-4 py-10 md:py-14">
        <p className="kicker mb-3">DIAGNOSIS</p>
        <h1 className="font-display text-2xl leading-relaxed text-steel-900 md:text-4xl md:leading-relaxed">
          売り方診断（4問によるカテゴリ判定）
        </h1>
        <p className="mt-5 text-sm leading-loose text-steel-600">
          カメラの種類・状態・点数や状況・売り方の4問に答えると、あらかじめ定めた判定ルールにもとづき、適したガイドとカテゴリ、掲載サービスを提示します。判定ロジックはページ下部ですべて開示しており、該当するサービスがない場合は「該当なし」と表示します。診断結果はサービスの優劣を評価するものではありません。
        </p>
        <div className="mt-10">
          <ShindanClient />
        </div>
      </div>
    </>
  );
}
