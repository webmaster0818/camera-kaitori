import raw from "@/data/companies.json";

export interface Operator {
  name: string;
  address: string;
  kobutsu: string | null;
  source: string;
}

/** 費用まわり（宅配・出張買取の実務項目） */
export interface Hiyou {
  satei?: string | null; // 査定料
  souryou?: string | null; // 送料（宅配・業者宛）
  kit?: string | null; // 梱包キット
  hensou?: string | null; // 返送料（キャンセル時）
  shucchou?: string | null; // 出張料
}

export interface Company {
  slug: string;
  name: string;
  official_url: string;
  affiliateUrl?: string | null;
  /** kaitori=買取業者 / platform=一括査定・価格比較サービス */
  kind: "kaitori" | "platform";
  operator: Operator;
  service_type?: string | null;
  target?: string | null;
  methods?: string | null; // 宅配・店頭・出張
  area?: string | null; // 出張対応エリア等
  hiyou: Hiyou;
  satei_days?: string | null;
  nyukin?: string | null;
  cancel?: string | null;
  honnin?: string | null;
  broken?: string | null; // 故障・カビ・ジャンク・付属品なしの扱い
  ihin?: string | null; // 遺品・大量・法人対応
  cooling_off?: string | null; // クーリングオフ（訪問購入）の記載
  features: string[];
  confirmed_date: string;
  note?: string | null;
}

export const companies = raw as unknown as Company[];
export const kaitoriCompanies = companies.filter((c) => c.kind === "kaitori");
export const platformCompanies = companies.filter((c) => c.kind === "platform");

export const NA = "公式では確認できず";

export function fmt(v: string | null | undefined): string {
  return v && v.trim() !== "" ? v : NA;
}

export function isNA(v: string | null | undefined): boolean {
  return !v || v.trim() === "";
}

export function getCompany(slug: string): Company {
  const c = companies.find((x) => x.slug === slug);
  if (!c) throw new Error(`company not found: ${slug}`);
  return c;
}

export function serviceTypeOf(c: Company): string {
  return fmt(c.service_type);
}

/** 査定料・出張料のまとめ表示 */
export function feeSummary(c: Company): string {
  return `査定: ${fmt(c.hiyou.satei)} ／ 出張: ${fmt(c.hiyou.shucchou)}`;
}

/** 送料・返送料のまとめ表示 */
export function kitSummary(c: Company): string {
  return `送料: ${fmt(c.hiyou.souryou)} ／ 返送料: ${fmt(c.hiyou.hensou)}`;
}

export function ctaFor(c: Company): { href: string; rel: string } {
  if (c.affiliateUrl) {
    return { href: c.affiliateUrl, rel: "sponsored nofollow noopener" };
  }
  return { href: c.official_url, rel: "nofollow noopener" };
}

export interface Category {
  slug: string;
  path: string;
  name: string;
  short: string;
  lead: string;
  companySlugs: string[];
}

export const categories: Category[] = [
  {
    slug: "film",
    path: "/film/",
    name: "フィルムカメラの買取",
    short: "フィルムカメラ",
    lead: "一眼レフ・レンジファインダー・二眼レフ・中判。動作未確認でも価値判断の対象になるフィルムカメラの見分け方と、対応業者の条件を一次確認で整理しました。",
    companySlugs: ["uriel", "camera-kaitoriyasan", "arrows"],
  },
  {
    slug: "old-lens",
    path: "/old-lens/",
    name: "オールドレンズの買取",
    short: "オールドレンズ",
    lead: "マウント・焦点距離・明るさで評価が分かれるオールドレンズ。カビ・くもりの申告のしかたと、レンズ単体を受け付ける業者の条件をまとめました。",
    companySlugs: ["uriel", "camera-kaitoriyasan", "arrows"],
  },
  {
    slug: "digital",
    path: "/digital/",
    name: "デジタル一眼・ミラーレスの買取",
    short: "デジタル",
    lead: "現行機・型落ち機は相場の動きが速いカテゴリです。シャッター回数・付属品・データ削除など売る前の準備と、宅配買取の条件を整理しました。",
    companySlugs: ["camera-kaitoriyasan", "arrows", "uriel"],
  },
  {
    slug: "broken",
    path: "/broken/",
    name: "壊れた・ジャンク・カビありを売る",
    short: "壊れた・ジャンク",
    lead: "動かないカメラ、カビやくもりのあるレンズも、部品取りや修理前提で査定対象になる場合があります。0円回避のための申告のコツと、故障品受付を公式に明記する業者を整理しました。",
    companySlugs: ["camera-kaitoriyasan", "uriel"],
  },
];

export function getCategory(slug: string): Category {
  const c = categories.find((x) => x.slug === slug);
  if (!c) throw new Error(`category not found: ${slug}`);
  return c;
}

export function categoriesOf(company: Company): Category[] {
  return categories.filter((cat) => cat.companySlugs.includes(company.slug));
}

/** 業者詳細ページ用FAQ（データからのみ生成・創作なし） */
export function companyFaq(c: Company): { q: string; a: string }[] {
  const naAnswer = (item: string) =>
    `${item}については、公式サイトでは確認できませんでした（${c.confirmed_date}時点の当サイト調査）。申込前に${c.name}へ直接確認することをおすすめします。`;
  return [
    {
      q: `${c.name}の査定料・出張料はかかりますか？`,
      a: isNA(c.hiyou.satei)
        ? naAnswer("査定料")
        : `公式サイトの記載では、査定料は「${c.hiyou.satei}」、出張料は「${fmt(c.hiyou.shucchou)}」です（${c.confirmed_date}確認）。`,
    },
    {
      q: `${c.name}の入金はいつですか？`,
      a: isNA(c.nyukin)
        ? naAnswer("入金タイミング")
        : `公式サイトの記載では「${c.nyukin}」とされています（${c.confirmed_date}確認）。`,
    },
    {
      q: `${c.name}は査定額に納得できなかったらキャンセルできますか？返送料は？`,
      a: isNA(c.cancel)
        ? naAnswer("キャンセル規定・返送料")
        : `公式サイトの記載では「${c.cancel}」、返送料は「${fmt(c.hiyou.hensou)}」とされています（${c.confirmed_date}確認）。実際の条件は必ず申込時の規約で確認してください。`,
    },
    {
      q: `${c.name}は壊れたカメラやカビのあるレンズも買い取りますか？`,
      a: isNA(c.broken)
        ? naAnswer("故障品・ジャンク品の取り扱い")
        : `公式サイトの記載では「${c.broken}」とされています（${c.confirmed_date}確認）。状態は申込時に正確に申告してください。`,
    },
  ];
}

/**
 * メーカー別ハブ（/maker/<slug>/）。
 * 既存のカテゴリ（film / old-lens / digital / broken）とは別配列で管理し、
 * categories 配列には混ぜない（既存ページの導線を変えないため）。
 * companySlugs は全メーカー共通。data/companies.json にメーカー別の
 * 買取対応データは存在しないため、メーカーによって掲載社を出し分けない。
 */
export const makers: Category[] = [
  {
    slug: "canon",
    path: "/maker/canon/",
    name: "キヤノンのカメラ買取",
    short: "キヤノン",
    lead: "FDマウントのフィルム機からEF・RFマウントのデジタル機まで。世代とマウントの見分け方、売る前に確認しておく項目を整理しました。",
    companySlugs: ["uriel", "camera-kaitoriyasan", "arrows"],
  },
  {
    slug: "nikon",
    path: "/maker/nikon/",
    name: "ニコンのカメラ買取",
    short: "ニコン",
    lead: "長く続いたFマウントとミラーレスのZマウント。レンズの世代表記（Ai・AF-S・G・E）の読み方と、売る前の確認項目をまとめました。",
    companySlugs: ["uriel", "camera-kaitoriyasan", "arrows"],
  },
  {
    slug: "sony",
    path: "/maker/sony/",
    name: "ソニーのカメラ買取",
    short: "ソニー",
    lead: "Eマウントのミラーレスとミノルタ由来のAマウント。世代交代が速いデジタル機を売る前に確認しておきたい項目を整理しました。",
    companySlugs: ["uriel", "camera-kaitoriyasan", "arrows"],
  },
  {
    slug: "fujifilm",
    path: "/maker/fujifilm/",
    name: "富士フイルムのカメラ買取",
    short: "富士フイルム",
    lead: "XマウントのミラーレスとGFXシリーズ、そして中判フィルム機まで。レンズ一体型機の扱いを含めた確認項目をまとめました。",
    companySlugs: ["uriel", "camera-kaitoriyasan", "arrows"],
  },
];

export function getMaker(slug: string): Category {
  const m = makers.find((x) => x.slug === slug);
  if (!m) throw new Error(`maker not found: ${slug}`);
  return m;
}

/**
 * マウント別ハブ（/mount/<slug>/）。
 * makers と同じ扱いで、categories 配列には混ぜない。
 * data/companies.json にマウント別の買取対応データは存在しないため、
 * マウントによって掲載社を出し分けない（companySlugs は全マウント共通）。
 */
export const mounts: Category[] = [
  {
    slug: "m42",
    path: "/mount/m42/",
    name: "M42マウントのレンズ買取",
    short: "M42マウント",
    lead: "ねじ込み式のスクリューマウント。バヨネットとの見分け方、絞りピンの確認、アダプター事情と、売るときに伝えておく項目を整理しました。",
    companySlugs: ["uriel", "camera-kaitoriyasan", "arrows"],
  },
  {
    slug: "leica-m",
    path: "/mount/leica-m/",
    name: "ライカMマウントのレンズ買取",
    short: "ライカMマウント",
    lead: "距離計連動のバヨネット規格。Lマウント（スクリュー）との関係、連動カムの確認、付属品の探し方をまとめました。",
    companySlugs: ["uriel", "camera-kaitoriyasan", "arrows"],
  },
  {
    slug: "micro-four-thirds",
    path: "/mount/micro-four-thirds/",
    name: "マイクロフォーサーズのレンズ買取",
    short: "マイクロフォーサーズ",
    lead: "複数社が共有するミラーレス用の規格。フォーサーズとの違い、電子接点まわりの確認、アダプター母艦としての性格を整理しました。",
    companySlugs: ["uriel", "camera-kaitoriyasan", "arrows"],
  },
  {
    slug: "f-mount",
    path: "/mount/f-mount/",
    name: "ニコンFマウントのレンズ買取",
    short: "ニコンFマウント",
    lead: "長期間使われた一眼レフ用バヨネット。連動方式が機械式から電子式へ変わった規格そのものの特徴と、伝えるべき項目をまとめました。",
    companySlugs: ["uriel", "camera-kaitoriyasan", "arrows"],
  },
];

export function getMount(slug: string): Category {
  const m = mounts.find((x) => x.slug === slug);
  if (!m) throw new Error(`mount not found: ${slug}`);
  return m;
}
