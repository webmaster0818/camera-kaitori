import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd, { faqPageLd } from "@/components/JsonLd";
import { SITE_NAME, SITE_URL, OPERATOR } from "@/lib/site";
import { getCompany, formatChecked } from "@/lib/companies";

const TITLE = "電源が入らない・エラーが出るカメラの売却｜故障と判断する前の確認事項と申告方法";
const DESC =
  "電源が入らない・エラー表示が消えないカメラを売る前の確認事項（電池の種類・接点・液漏れ跡）、「動作未確認」と「故障」の区別、メモリーカードの扱い、故障品の受付・返送料・バッテリー欠品の条件を、公式記載にもとづきご説明します。";
const PATH = "/broken/dengen-hairanai/";
const PAGE_DATE = "2026-09-23";
const PAGE_DATE_LABEL = "2026年9月23日";

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

/** 掲載社の確認日（data/companies.json の confirmed_date をそのまま表示） */
function checked(slug: string): string {
  return formatChecked(getCompany(slug).confirmed_date);
}
function nameOf(slug: string): string {
  return getCompany(slug).name;
}

export default function DengenHairanaiPage() {
  const conclusions = [
    "電源が入らないカメラも、故障しているとは限りません。電池切れ、電池の種類や向きの違い、電池ぶたの閉まり、メモリーカードの状態など、道具を使わずに確認できる原因があります。確認は、目視と電池の入れ替えの範囲にとどめます。",
    "電池室に白い粉や青緑色のさび、にじんだ跡があるときは、それ以上触れず、通電も試さず、そのままの状態で「電池室に液漏れ跡あり」と申告します。拭き取りや分解をご自身で行う必要はありません。",
    "確認できなかったことは「動作未確認」、確認して動かなかったことは「電源が入らない（確認済み）」と、事実の種類を分けて記載します。いずれも正確な申告であり、実際より良く見せる必要も、悪く記載する必要もありません。",
    "宅配で送る前に、その業者が故障品を受け付けているか、値段が付かなかった場合に返送か引き取りか、返送料はどちらの負担か、バッテリーや充電器がなくても受け付けるかを確認します。当サイト掲載社でも、これらの条件は社ごとに異なります。",
    "修理の可否や通電の安全性について、本ページでは判断を示しません。判断に迷う場合は、無理に動かさず、買取店や修理業者へご相談ください。",
  ];

  const symptoms = [
    {
      label: "電源スイッチを入れても何も反応しない",
      value:
        "最も多い相談です。電池切れ・電池の入れ違い・電池ぶたの閉まり不良・接点の汚れなど、本体の外側で確認できる原因から先に確認します。充電式のバッテリーは、長く放置されると充電しても反応しないことがあり、その場合も、バッテリー側と本体側のどちらに問題があるかは外観からは判別できません。確認できた事項のみを記載します。",
    },
    {
      label: "電源は入るが、エラー表示が出て操作できない",
      value:
        "エラー表示には、メモリーカードが入っていない・カードが書き込み禁止になっている・レンズが正しく装着されていない、といった操作や状態に関するものも含まれます。表示された文字や記号は、そのままメモするか写真に撮っておきます。意味を推測して記載するよりも、表示そのものを伝えるほうが、査定担当者が判断しやすくなります。",
    },
    {
      label: "電源は入っている様子だが、背面の液晶が映らない",
      value:
        "ファインダーをのぞくと表示が見える、ランプが点く、操作音がするなど、液晶以外の反応があるかを確認します。表示先の切り替え設定になっているだけの場合もありますが、液晶そのものの不具合かどうかは外からは判断できません。「電源は入る様子。背面液晶は映らない。ファインダー内表示は見える／見えない」のように、確認できた事項を分けて記載します。",
    },
    {
      label: "電池を使うフィルムカメラで、シャッターや露出計が動かない",
      value:
        "電池で露出計やシャッターを動かすフィルムカメラでは、電池がない・合わない場合、機械としては壊れていなくても動かないことがあります。一方で、電池がなくても一部の速度でシャッターが切れる機種もあり、動き方は機種ごとに異なります。機種ごとの仕組みは取扱説明書で確認できることが多いですが、わからなければ「電池なしで確認・電池を入れての確認はしていない」と記載するだけで十分です。",
    },
  ];

  const preChecks = [
    {
      t: "新しい電池・充電した電池への交換",
      d: "長期間使用されていなかったカメラは、まず電池切れの可能性を確認します。乾電池やボタン電池は新しいものに、充電式のバッテリーは充電してから試します。充電式バッテリーが膨らんでいる、変形している、熱を持つといった場合は、充電を続けず、使わずに取り外して、そのことを申告します。膨らんだバッテリーの扱いや処分は、お住まいの自治体や買取店の案内に従ってください。",
    },
    {
      t: "電池の種類・大きさ・向きの確認",
      d: "見た目が似ていても、ボタン電池には種類（酸化銀・アルカリ・リチウムなど）や厚みの違いがあり、合わない電池では動かないことや、表示が不安定になることがあります。必要な電池の種類は、電池ぶたの内側や本体の刻印、取扱説明書に記載されていることが多いので、そこを確認します。プラスとマイナスの向き、複数本入れる場合の並びも確認します。古いフィルムカメラには、現在は入手しにくい電池を前提にしたものもあり、代わりの電池で動かなくても故障とは限りません。合う電池がわからないときは、試さずに「電池の種類がわからず未確認」と記載して差し支えありません。",
    },
    {
      t: "電池室の液漏れ跡の目視確認",
      d: "電池を取り出したら、電池室の中を明るいところで見ます。白い粉、青緑色や茶色のさび、液がにじんで乾いたような跡は、電池の液漏れや端子の腐食のしるしであることが多いとされています。こうした跡があるときは、指で触れない、こすらない、新しい電池を入れて通電を試さない、の3点を守り、そのままの状態で申告します。液漏れした電池を取り出すときは、素手で触らず、手袋や厚手の紙を使います。取り出した電池の処分は、お住まいの自治体の案内に従ってください。",
    },
    {
      t: "接点の汚れへの対応",
      d: "液漏れの跡がなく、端子がくすんでいる程度であれば、乾いた柔らかい布で軽くほこりを払うくらいは一般に行われています。ただし、金属でこする、薬剤を使う、端子を曲げるといった手入れは、状態を悪化させるおそれがあるため、避けてください。手入れの方法に不安がある場合は、何もせずに申告するほうが、後の食い違いが起きにくくなります。",
    },
    {
      t: "電池ぶた・カードぶたの閉まりの確認",
      d: "デジタルカメラの多くは、電池ぶたやカードぶたが閉まっていることを検知して電源が入る仕組みになっています。ふたのつめが折れている、閉めても浮いてしまう、といった状態では、電池が入っていても電源が入らないことがあります。ふたの破損は外から見える事実なので、「電池ぶたのつめが欠けている」のように具体的に記載します。",
    },
    {
      t: "メモリーカードに関するエラーの切り分け",
      d: "エラー表示が出る場合、カードが入っていない、カードの書き込み禁止スイッチがロック側になっている、カードが本体で使えない形式になっている、といった原因も考えられます。カードを取り出した状態で電源を入れ、表示が変わるかを確認することは、簡便な切り分け方法の一つです。カードの中身の削除や初期化は、データを確認してから行います。データの扱いは後の章でご説明します。",
    },
    {
      t: "レンズの装着状態と電源スイッチの位置の確認",
      d: "レンズ交換式のカメラでは、レンズが最後まではまっていない、レンズを外した状態になっている、といった場合にエラーが出ることがあります。レンズ一体型で電源を入れるとレンズが伸びる仕組みのカメラでは、レンズの前に物があったり、手で押さえていたりすると、エラーになることがあります。レンズが途中で止まって戻らないときは、手で押し込んだり引き出したりせず、そのままの状態で申告します。",
    },
    {
      t: "寒い場所・湿った場所から出した直後の確認",
      d: "冷えた物置や車の中から暖かい室内に持ち込んだ直後は、結露が起きることがあります。結露した状態で電源を入れることは避けるべきとされるため、しばらく室温になじませてから確認します。極端に寒い環境では、電池の性能が一時的に落ちて動かないように見えることもあります。",
    },
  ];

  const dontDo = [
    "液漏れや腐食の跡がある電池室に、新しい電池を入れて通電を試す",
    "端子や電池室を金属や薬剤でこする、端子を曲げて接触させようとする",
    "膨らんだ・変形した・熱を持つバッテリーを充電し続ける",
    "止まったレンズや固いダイヤルを手で押し込む、力で回す",
    "ねじを外して本体を開ける、内部に触れる",
    "中身を確認しないうちに、メモリーカードや本体を初期化する",
  ];

  const statusRows = [
    {
      label: "動作確認済み",
      value:
        "電源が入り、撮影・再生・主な操作までご自身で確認できた状態です。本ページで扱う症状のカメラには、通常該当しません。",
    },
    {
      label: "一部不具合あり（確認済み）",
      value:
        "電源は入るが、特定の操作でエラーが出る、液晶だけ映らない、ときどき電源が落ちる、など。確認した条件と、正常に動作しなかった点を具体的に記載します。例「新しい電池で電源は入る。撮影しようとするとエラー表示（表示内容は写真参照）が出て撮影できない」。",
    },
    {
      label: "動作未確認",
      value:
        "電池がない、合う電池がわからない、充電器がない、液漏れ跡があるため通電を控えた、など、動くかどうかを確認していない状態です。未確認の理由を添えると、査定担当者が状態を把握しやすくなります。例「電池なし・充電器なしのため動作未確認。外観にへこみなし」。",
    },
    {
      label: "故障（電源が入らない・確認済み）",
      value:
        "新しい電池や充電した電池を正しく入れ、ふたも閉まっていることを確認したうえで、電源が入らなかった状態です。例「新しい電池を入れ、電池ぶたの閉まりも確認したが、電源スイッチを入れても無反応」。原因の推測（基板が壊れている、など）は記載しなくて差し支えありません。",
    },
  ];

  const writeTips = [
    {
      t: "試した条件と結果の記載",
      d: "「電源が入らない」だけでは、電池を替えて試したのか、電池がなくて試せなかったのかが伝わりません。「どの電池で」「どこまで試して」「どうなったか」をまとめて記載すると、動作未確認と故障の区別が明確に伝わります。",
    },
    {
      t: "液漏れ跡・ふたの破損・付属品の有無の記載",
      d: "液漏れ跡があるか、電池ぶたやカードぶたが壊れていないか、バッテリーと充電器がそろっているかの3点は、査定担当者が最初に確認する項目となりやすい情報です。写真を添えられる場合は、電池室の中が見えるように1枚撮影しておきます。",
    },
    {
      t: "型番がわかる写真の用意",
      d: "型番は、本体底面や銘板、電池室付近などに刻印・印字されていることが多くあります。型番がわかると、査定担当者がその機種の仕組みを確認しやすくなります。製造番号（シリアルナンバー）が判読できるかも確認しておきます。製造番号が消えている・判別できない場合の扱いは、業者ごとに公式の記載があることがあります。",
    },
  ];

  const kitamura = getCompany("kitamura");
  const daikokuya = getCompany("daikokuya");

  // 故障品の受付を公式に明記する社（lib/companies.ts categories の broken）と、その記載
  const brokenRows = [
    {
      name: nameOf("camera-kaitoriyasan"),
      broken:
        "「壊れていても買取OK」「他店で断られてしまった壊れているカメラであっても、査定いたします」。カビ・くもりの個別記載は公式では確認できず",
      ship: "宅配買取（全国・着払い）・出張買取・店頭買取。宅配の送料・手数料は無料だが、キャンセル時の返送費用は「お客様負担」と注記（2026年10月21日確認）",
      date: checked("camera-kaitoriyasan"),
    },
    {
      name: nameOf("daikokuya"),
      broken:
        "「年代物のフィルムカメラや一部パーツが壊れたカメラ、カビやくもりのあるオールドレンズもお買取りの対象です」。ただし製造番号が「消えてしまっていたり、判別できない状態のものはお買取りができません」",
      ship: "宅配買取・店頭買取・出張買取。宅配のキャンセル時の返送料は無料（「各種手数料やキャンセルの際の返送料もかかりません」）",
      date: checked("daikokuya"),
    },
    {
      name: nameOf("camera-takakuureru"),
      broken:
        "「壊れている商品でも買取できる可能性があります。一部機能が使えないといった軽度の故障でしたら、買取価格がつく可能性があります」",
      ship: "出張買取・宅配買取・店頭買取。宅配のキャンセル時の返送料は無料（「買取キャンセルとなった場合の返送料も無料です」）",
      date: checked("camera-takakuureru"),
    },
    {
      name: nameOf("uriel"),
      broken:
        "「付属品がないカメラ」「古いカメラ」を「このようなカメラもご相談ください！」として掲載。「状態によっては…お値段が付かないものもございます」。故障品・ジャンクの明記は公式では確認できず",
      ship: "出張買取・催事買取・店舗買取（川崎店）。宅配買取は案内ページがなく、申込方法は公式では確認できず。査定額を聞いて断った場合も「キャンセル料等はいただきません」",
      date: checked("uriel"),
    },
    {
      name: kitamura.name,
      broken:
        "「このようなカメラも買取いたします」として「電源が入らないなど壊れたカメラ」「何十年も前の古いカメラ」「レンズにカビがあるカメラ」「付属品の足りないカメラ」を掲載。ただし製造番号が「消えてしまった、または、判別できないという場合は買い取ることが出来かねます」",
      ship: "店頭買取・出張買取・宅配（直送）買取。宅配（直送）のキャンセル後の返送料は無料（「キャンセル後の返送料も無料」）",
      date: "2026年10月21日",
    },
  ];

  const otherNotes = [
    {
      t: `${nameOf("arrows")}（宅配買取。100点以上は出張買取にも対応）`,
      d: `故障品は「商品によっては買取が可能な場合もございます」とされる一方、ジャンク品と、重度の付属品欠品（バッテリー・充電器がない商品）は買取不可と明記されています。ただしトップの買取基準には「一部、ジャンク品として買い取ることができるケースもありますが、事前にお問い合わせいただくことをオススメします」との記載もあります。キャンセル時の返送料は利用者負担（「返送料はお客様にご負担いただいております」）です（${checked("arrows")}確認）。電源が入らない、またはバッテリーや充電器がないカメラを送る前には、特に条件の確認が欠かせません。`,
    },
    {
      t: `${nameOf("janpara")}`,
      d: `「基本的に通常正常動作品のみ買取対象となります」と記載されています。宅配買取の返送料は、査定額に納得できずキャンセルした場合は業者負担ですが、発送前・査定前の気変わりによるキャンセルや、買取対象外品が含まれる場合は着払い（利用者負担）とされています（${checked("janpara")}確認）。`,
    },
    {
      t: `${nameOf("naniwa")}`,
      d: `「状態が悪いものや欠品しているものに関しては買取の対象となりにくい場合がございます」と記載されています。故障品の可否の明記は公式では確認できませんでした。宅配で査定額が希望に合わなかった場合は「送料無料にてご返送」とされています（${checked("naniwa")}確認）。`,
    },
    {
      t: `${nameOf("fujiya")}`,
      d: `宅配買取ページに「お売りいただけないアイテム」として「故障している」「付属品のみ」を掲載しています（2026年10月21日確認）。キャンセル時の返送料の負担者は公式では確認できませんでした（${checked("fujiya")}確認）。`,
    },
    {
      t: `${nameOf("rakuuru")}`,
      d: `カメラの故障品の取り扱いについての明記は公式では確認できませんでした。${nameOf("rakuuru")}は「送料、査定、キャンセルによる返送料全て弊社で負担します」と記載しています（${checked("rakuuru")}確認）。故障品を送る場合は、申込前に受付の可否を問い合わせることをおすすめします。`,
    },
  ];

  const shipSteps = [
    {
      t: "申込前の故障品受付の確認",
      d: "上の表のとおり、故障品の受付を公式に明記している業者もあれば、正常動作品を基本としている業者、記載が確認できない業者もあります。記載が見つからない場合は、申込前に「電源が入らないカメラですが受け付けていますか」と問い合わせておくと、送付後に返送となる手間を避けられます。",
    },
    {
      t: "値段が付かなかった場合の扱いの確認",
      d: "電源が入らないカメラは、状態によって値段が付かないこともあります。その際に返送と引き取り（処分）のどちらを選べるかは業者によって異なり、当サイトでは各社の引き取りの扱いまでは確認できていません。形見など手元に戻したい品がある場合は、申込時の備考欄などに「値段が付かない場合は返送希望」と記載しておくと行き違いを防げます。",
    },
    {
      t: "電池の取り外しとバッテリーの同梱判断",
      d: "乾電池やボタン電池は本体から取り外して送るのが一般的です。充電式バッテリーを付属品として同梱する場合も、本体から外して別に包む方法があります。膨らんだ・変形したバッテリーの同梱については、送る前に業者にご確認ください。配送業者によって電池類の扱いに条件があることもあります。",
    },
    {
      t: "メモリーカードの取り出しと状態の記録",
      d: "本体にカードが入ったままになっていないかを最後に確認します。送る前に、外観と電池室の中、型番の写真を撮っておくと、査定結果の説明を受けたときに発送時の状態と照らし合わせられます。申告の内容は、手元にも同じものを控えておきます。",
    },
  ];

  const checklist = [
    "新しい電池・充電した電池に替えて試した（または、試せなかった理由をメモした）",
    "電池の種類・大きさ・向きを、電池ぶたの内側や取扱説明書で確認した",
    "電池室を目で見て、白い粉・さび・にじみ跡の有無を確認した",
    "液漏れ跡があるものは、触れず、通電も試さず、そのまま申告することにした",
    "膨らんだ・変形したバッテリーは充電をやめ、取り外してそのことをメモした",
    "「動作未確認」と「故障（確認済み）」のどちらに該当するかを、試した条件とあわせて記載した",
    "メモリーカードを取り出し、データを確認してから扱いを決めた",
    "バッテリー・充電器の有無を確認し、ない場合の受付可否を業者の条件で確認した",
    "送り先の業者が故障品を受け付けているかを、公式の記載か問い合わせで確認した",
    "値段が付かない場合に返送か引き取りかを確認し、戻したい品は返送希望と伝えた",
    "キャンセル時の返送料の負担を、キャンセルの理由ごとに確認した",
    "型番・製造番号・外観・電池室の写真を撮って手元に残した",
  ];

  const faqs = [
    {
      q: "電源が入らないカメラでも売れますか？",
      a: `状態や業者によって異なります。当サイト掲載社では、${nameOf("camera-kaitoriyasan")}（「壊れていても買取OK」）、${nameOf("daikokuya")}（「一部パーツが壊れたカメラ」も買取対象）、${nameOf("camera-takakuureru")}（「壊れている商品でも買取できる可能性があります」）、${kitamura.name}（「電源が入らないなど壊れたカメラ」も買取、2026年10月21日確認）が、故障品の受付を公式に記載しています（いずれも各社の確認日時点の記載）。一方で、正常動作品を基本とする業者や、記載が確認できない業者もあります。状態によっては値段が付かないこともあるため、申込前に条件をご確認ください。`,
    },
    {
      q: "電池室に白い粉が付いています。掃除してから売った方がよいですか？",
      a: "ご自身で清掃する必要はありません。白い粉やさび、にじみ跡は液漏れや腐食のしるしであることが多く、こすったり薬剤を使ったりすると、状態を悪化させるおそれがあります。触れず、通電も試さず、「電池室に液漏れ跡あり」と申告し、電池室の写真を添えることをおすすめします。修理の可否は、修理業者や買取店にご相談ください。",
    },
    {
      q: "バッテリーや充電器が見つかりません。それでも受け付けてもらえますか？",
      a: `業者によって扱いが分かれます。${nameOf("arrows")}は、バッテリー・充電器がない商品を買取不可と明記しています（${checked("arrows")}確認）。${nameOf("uriel")}は「付属品がないカメラ」を「ご相談ください」の対象として掲載（${checked("uriel")}確認）、${nameOf("camera-takakuureru")}は「購入時の箱や付属品は残っていることが望ましいですが、なくてもお買取できます」と記載しています（${checked("camera-takakuureru")}確認）。${nameOf("naniwa")}は欠品しているものは「買取の対象となりにくい場合がございます」としています（${checked("naniwa")}確認）。記載のない業者には、申込前にお問い合わせください。`,
    },
  ];

  return (
    <>
      <JsonLd data={articleLd} />
      <JsonLd data={faqPageLd(faqs)} />
      <Breadcrumbs
        items={[
          { name: "ホーム", path: "/" },
          { name: "壊れた・ジャンク・カビありを売る", path: "/broken/" },
          { name: "電源が入らない・エラーが出るカメラの売却", path: PATH },
        ]}
      />
      <article className="mx-auto max-w-site px-4 py-10 md:py-14">
        <p className="kicker mb-3">NO POWER / ERROR</p>
        <h1 className="max-w-4xl font-display text-2xl leading-relaxed text-steel-900 md:text-3xl md:leading-relaxed">
          電源が入らない・エラーが出るカメラの売却｜故障と判断する前の確認事項と申告方法
        </h1>
        <p className="mt-5 max-w-3xl text-sm leading-loose text-steel-600">
          保管していたデジタルカメラの電源が入らない、電源は入るがエラー表示が消えない、背面の液晶が映らない、電池を使うフィルムカメラのシャッターが動かないといった場合でも、値段が付かないと判断する前に確認できることがあります。本ページでは、道具を使わずに目視で確認できる範囲の確認、「動作未確認」と「故障」の区別、メモリーカードの扱い、宅配で送る前に業者の条件で確認すべき事項を、一般知識と当サイト掲載社の公式記載にもとづいてご説明します。修理の可否や通電の安全性についての判断は示しません。
        </p>

        {/* 冒頭の要点 */}
        <section className="mt-10 border-2 border-vermilion bg-chalk-warm p-6">
          <h2 className="font-display text-lg text-steel-900">電源が入らないカメラを故障と判断する前の確認と申告方法</h2>
          <ul className="mt-4 space-y-3">
            {conclusions.map((c) => (
              <li key={c} className="flex gap-2 text-sm leading-loose text-steel-800">
                <span aria-hidden="true" className="mt-2 inline-block h-2 w-2 shrink-0 bg-vermilion" />
                {c}
              </li>
            ))}
          </ul>
        </section>

        {/* 症状別 */}
        <section className="mt-14">
          <h2 className="section-title mb-2">症状ごとの最初の確認箇所</h2>
          <p className="mb-5 max-w-3xl text-sm leading-loose text-steel-600">
            「電源が入らない」場合でも、まったく反応しないのか、反応はあるが操作できないのかによって、確認の順番も申告の記載方法も変わります。まず、お手元のカメラがどれに近いかをご確認ください。
          </p>
          <div className="overflow-x-auto border border-chalk-line">
            <table className="spec-table">
              <tbody>
                {symptoms.map((r) => (
                  <tr key={r.label}>
                    <th className="w-40 md:w-56">{r.label}</th>
                    <td>{r.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-steel-500">
            ※ 症状から原因を特定することはできません。以下は、確認と申告の順番を決めるための目安です。
          </p>
        </section>

        {/* 故障と決めつける前の確認 */}
        <section className="mt-14">
          <h2 className="section-title mb-2">故障と判断する前の確認事項</h2>
          <p className="mb-6 max-w-3xl text-sm leading-loose text-steel-600">
            ここで扱うのは、電池の入れ替え、ふたの閉まりの確認、電池室の目視といった範囲の確認です。ねじを外す、内部に触れる、薬剤を使うといった作業は含めていません。確認の途中で液漏れの跡や部品の破損に気づいた場合は、その時点で作業を止め、確認した状態のまま申告すれば十分です。
          </p>
          <div className="space-y-5">
            {preChecks.map((s, i) => (
              <div key={s.t} className="border border-chalk-line bg-chalk-card p-5">
                <h3 className="flex items-baseline gap-3 font-display text-base text-steel-900">
                  <span className="font-display text-sm tracking-widest2 text-vermilion">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {s.t}
                </h3>
                <p className="mt-3 text-[13px] leading-loose text-steel-700">{s.d}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 border border-chalk-line bg-chalk-card p-5">
            <h3 className="font-display text-base text-steel-900">確認の際に避けるべき操作</h3>
            <p className="mt-2 text-[13px] leading-loose text-steel-700">
              動作を確認しようとして行いがちな操作です。いずれも、状態の悪化や、けが・発熱につながるおそれがあるとされています。
            </p>
            <ul className="mt-4 space-y-2">
              {dontDo.map((c) => (
                <li key={c} className="flex gap-2 text-sm leading-loose text-steel-800">
                  <span aria-hidden="true" className="mt-2 inline-block h-2 w-2 shrink-0 bg-vermilion" />
                  {c}
                </li>
              ))}
            </ul>
          </div>
          <p className="mt-3 text-xs text-steel-500">
            ※ 通電の安全性や修理の可否について、本ページでは判断を示しません。判断に迷う場合は、動かさずに買取店や修理業者へご相談ください。液漏れした電池や劣化したバッテリーの処分は、お住まいの自治体の案内に従ってください。
          </p>
        </section>

        {/* 動作未確認と故障 */}
        <section className="mt-14">
          <h2 className="section-title mb-2">「動作未確認」と「故障」の区別</h2>
          <p className="mb-5 max-w-3xl text-sm leading-loose text-steel-600">
            申告で重要なのは、確認した事項と確認していない事項を区別することです。「動作未確認」は動作を試していない状態、「故障」は試して動作しなかった状態で、意味が異なります。いずれも正確な申告であり、どちらかが有利ということではありません。
          </p>
          <div className="overflow-x-auto border border-chalk-line">
            <table className="spec-table">
              <tbody>
                {statusRows.map((r) => (
                  <tr key={r.label}>
                    <th className="w-40 md:w-56">{r.label}</th>
                    <td>{r.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-6 space-y-4">
            {writeTips.map((c) => (
              <div key={c.t} className="border-l-2 border-vermilion bg-chalk-card p-5">
                <h3 className="font-display text-base text-steel-900">{c.t}</h3>
                <p className="mt-2 text-[13px] leading-loose text-steel-700">{c.d}</p>
              </div>
            ))}
          </div>
          <p className="mt-3 text-xs text-steel-500">
            ※ 製造番号の扱いの例：{daikokuya.name}は製造番号が「消えてしまっていたり、判別できない状態のものはお買取りができません」（{formatChecked(daikokuya.confirmed_date)}確認）、{kitamura.name}は製造番号が消えた・判別できない場合は「買い取ることが出来かねます」（{formatChecked(kitamura.confirmed_date)}確認）と記載しています。
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link href="/broken/" className="btn-primary">壊れた・ジャンク品の申告方法を見る</Link>
            <Link href="/guide/uru-mae/" className="btn-ghost">売る前の準備ガイドを見る</Link>
          </div>
        </section>

        {/* メモリーカード・データ */}
        <section className="mt-14">
          <h2 className="section-title mb-2">メモリーカードとデータの扱い</h2>
          <div className="max-w-3xl space-y-4 text-sm leading-loose text-steel-700">
            <p>
              電源が入らないカメラでも、メモリーカードは取り出して中身を確認できる場合があります。カードを入れたまま手放すことのないよう、送る前にカードスロットを必ずご確認ください。カードが見当たらない場合も、スロットのふたを開けて確認しておくことをおすすめします。
            </p>
            <p>
              一方で、本体の内部に保存された写真や設定は、電源が入らない場合、ご自身では確認や削除ができないことがあります。その場合は「電源が入らないため本体内のデータは確認・消去できていない」と申告に添え、扱いを業者に確認する方法があります。データの消去や復旧の可否について、本ページでは判断を示しません。
            </p>
            <p>
              故人のカメラなど、残された写真の扱いに迷う場合の手順は「故人のフィルム・メモリーカード・写真データ」のページで、デジタルカメラを売る前のデータ削除や初期化の考え方は「デジタル一眼・ミラーレスの買取」のページでご説明しています。フィルムカメラの場合、撮影途中のフィルムが入っていることもあるため、裏ぶたを開ける前に同じページをご確認ください。
            </p>
          </div>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link href="/situation/koujin-film-data/" className="btn-primary">フィルム・データの扱いを見る</Link>
            <Link href="/digital/" className="btn-ghost">デジタル一眼・ミラーレスのページを見る</Link>
          </div>
        </section>

        {/* バッテリー・充電器 */}
        <section className="mt-14">
          <h2 className="section-title mb-2">バッテリー・充電器がない場合</h2>
          <div className="max-w-3xl space-y-4 text-sm leading-loose text-steel-700">
            <p>
              充電式バッテリーを使うデジタルカメラは、バッテリーや充電器がないと動作を確認できません。電源が入らない原因がバッテリー切れか本体かも、ご自身では判別できなくなります。このため、バッテリーや充電器の有無は、査定担当者にとって状態を判断する材料の一つとなります。
            </p>
            <p>
              バッテリーや充電器は、カメラバッグの小物入れや元箱に残っていることがあります。見つからない場合に、別途購入してから売るべきかどうかは一概には判断できません。規格の合わないものを使用するおそれもあるため、まずは「バッテリーなし・充電器なし・動作未確認」のままご相談いただいて差し支えありません。
            </p>
            <p>
              当サイト掲載社のうち、付属品の欠品について公式の記載が確認できたのは次のとおりです。記載のない業者には、申込前にお問い合わせください。
            </p>
          </div>
          <div className="mt-5 overflow-x-auto border border-chalk-line">
            <table className="spec-table">
              <tbody>
                <tr>
                  <th className="w-40 md:w-56">{nameOf("arrows")}</th>
                  <td>
                    ジャンク品・加工品・重度の付属品欠品（バッテリー・充電器がない商品）は買取不可と明記しています。ジャンク品は、買取基準に一部買い取るケースがあるとの記載もあります。箱なしは可としています（{checked("arrows")}確認）
                  </td>
                </tr>
                <tr>
                  <th className="w-40 md:w-56">{nameOf("uriel")}</th>
                  <td>「付属品がないカメラ」を「ご相談ください」の対象として掲載（{checked("uriel")}確認）。出張買取・催事買取・店舗買取（川崎店）で、宅配買取は案内ページがなく申込方法は公式では確認できず</td>
                </tr>
                <tr>
                  <th className="w-40 md:w-56">{nameOf("camera-takakuureru")}</th>
                  <td>
                    「購入時の箱や付属品は残っていることが望ましいですが、なくてもお買取できます」（{checked("camera-takakuureru")}確認）
                  </td>
                </tr>
                <tr>
                  <th className="w-40 md:w-56">{nameOf("naniwa")}</th>
                  <td>
                    「状態が悪いものや欠品しているものに関しては買取の対象となりにくい場合がございます」（{checked("naniwa")}確認）
                  </td>
                </tr>
                <tr>
                  <th className="w-40 md:w-56">{nameOf("janpara")}</th>
                  <td>店頭買取について「バルク品や欠品のあるものもOK」と記載しています。一方で「基本的に通常正常動作品のみ買取対象」とも記載（{checked("janpara")}確認）</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-steel-500">
            ※ 「付属品」にバッテリー・充電器が含まれるかどうかは、各社の公式記載からは読み取れない場合があります。バッテリーや充電器がないことを伝えたうえでご確認ください。
          </p>
        </section>

        {/* 宅配で送る前に */}
        <section className="mt-14">
          <h2 className="section-title mb-2">宅配で送る前の確認事項</h2>
          <p className="mb-5 max-w-3xl text-sm leading-loose text-steel-600">
            電源が入らないカメラは、送付後に「受付対象外」「値段が付かない」となる可能性が、動作するカメラより高くなります。送る前に、故障品の受付・値段が付かない場合の扱い・返送料の3点を、送付先の条件で確認しておきます。まず、当サイト掲載社のうち故障品の受付を公式に記載している社（当サイトの「壊れた・ジャンク・カビありを売る」の掲載基準にもとづく）の記載です。
          </p>
          <div className="overflow-x-auto border border-chalk-line">
            <table className="spec-table">
              <thead>
                <tr>
                  <th>業者</th>
                  <th>故障品・状態についての公式記載</th>
                  <th>買取方法・キャンセル時の返送料</th>
                  <th>確認日</th>
                </tr>
              </thead>
              <tbody>
                {brokenRows.map((r) => (
                  <tr key={r.name}>
                    <th className="w-32 md:w-44">{r.name}</th>
                    <td>{r.broken}</td>
                    <td>{r.ship}</td>
                    <td className="whitespace-nowrap">{r.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-steel-500">
            ※ {nameOf("uriel")}は故障品・ジャンクの明記は公式では確認できませんでしたが、「付属品がないカメラ」「古いカメラ」を「このようなカメラもご相談ください！」として掲載しているため、この表に含めています。宅配ではなく出張・催事・店舗（川崎店）での相談になります。
          </p>

          <h3 className="mt-8 font-display text-base text-steel-900">その他の掲載社の記載（送付前の確認事項）</h3>
          <div className="mt-4 space-y-4">
            {otherNotes.map((c) => (
              <div key={c.t} className="border-l-2 border-vermilion bg-chalk-card p-5">
                <h4 className="font-display text-base text-steel-900">{c.t}</h4>
                <p className="mt-2 text-[13px] leading-loose text-steel-700">{c.d}</p>
              </div>
            ))}
          </div>

          <h3 className="mt-8 font-display text-base text-steel-900">送る前の手順</h3>
          <div className="mt-4 space-y-5">
            {shipSteps.map((s, i) => (
              <div key={s.t} className="border border-chalk-line bg-chalk-card p-5">
                <h4 className="flex items-baseline gap-3 font-display text-base text-steel-900">
                  <span className="font-display text-sm tracking-widest2 text-vermilion">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {s.t}
                </h4>
                <p className="mt-3 text-[13px] leading-loose text-steel-700">{s.d}</p>
              </div>
            ))}
          </div>
          <p className="mt-3 text-xs text-steel-500">
            ※ 掲載社の条件は各社の確認日時点の公式記載です。実際の条件は、必ず申込時の規約でご確認ください。買取金額は機種・状態・時期により異なります。
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link href="/compare/" className="btn-primary">返送料・受付条件を統一比較表で見る</Link>
            <Link href="/guide/trouble/" className="btn-ghost">トラブル時の対処を見る</Link>
          </div>
        </section>

        {/* チェックリスト */}
        <section className="mt-14">
          <h2 className="section-title mb-6">電源が入らないカメラを売る前のチェックリスト</h2>
          <div className="border border-chalk-line bg-chalk-card p-5">
            <ul className="space-y-3">
              {checklist.map((c) => (
                <li key={c} className="flex gap-2 text-sm leading-loose text-steel-800">
                  <span aria-hidden="true" className="mt-2 inline-block h-2 w-2 shrink-0 bg-vermilion" />
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* FAQ */}
        <section className="mt-14">
          <h2 className="section-title mb-6">電源が入らない・エラーが出るカメラに関するよくある質問</h2>
          <div className="space-y-4">
            {faqs.map((f) => (
              <div key={f.q} className="border border-chalk-line bg-chalk-card p-5">
                <h3 className="flex gap-2 font-display text-base text-steel-900">
                  <span aria-hidden="true" className="text-vermilion">Q.</span>
                  {f.q}
                </h3>
                <p className="mt-3 text-sm leading-loose text-steel-700">{f.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 関連リンク */}
        <section className="mt-14">
          <h2 className="section-title mb-6">関連ページ</h2>
          <ul className="grid gap-3 text-sm md:grid-cols-2">
            <li>
              <Link href="/broken/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">壊れた・ジャンク・カビありを売る</span>
                <span className="mt-1 block text-xs text-steel-500">故障品受付を公式に明記する業者の一覧</span>
              </Link>
            </li>
            <li>
              <Link href="/digital/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">デジタル一眼・ミラーレスの買取</span>
                <span className="mt-1 block text-xs text-steel-500">付属品・データ削除など売る前の準備</span>
              </Link>
            </li>
            <li>
              <Link href="/film/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">フィルムカメラの買取</span>
                <span className="mt-1 block text-xs text-steel-500">動作未確認のフィルムカメラの見分け方</span>
              </Link>
            </li>
            <li>
              <Link href="/situation/koujin-film-data/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">故人のフィルム・メモリーカード・写真データ</span>
                <span className="mt-1 block text-xs text-steel-500">未現像フィルムとデータの取り出し方</span>
              </Link>
            </li>
            <li>
              <Link href="/situation/katami-camera/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">形見のカメラを残すか手放すか</span>
                <span className="mt-1 block text-xs text-steel-500">使う・保管する・手放すの決め方</span>
              </Link>
            </li>
            <li>
              <Link href="/situation/ihin/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">遺品・実家整理で出てきたカメラを売るには</span>
                <span className="mt-1 block text-xs text-steel-500">捨てる前の確認点と出張買取の使い方</span>
              </Link>
            </li>
            <li>
              <Link href="/guide/uru-mae/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">売る前の準備</span>
                <span className="mt-1 block text-xs text-steel-500">区分・写真・申告の一般的な手順</span>
              </Link>
            </li>
            <li>
              <Link href="/guide/trouble/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">トラブル時の対処</span>
                <span className="mt-1 block text-xs text-steel-500">クーリングオフ・相談先の一般知識</span>
              </Link>
            </li>
            <li>
              <Link href="/compare/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">買取業者の統一比較表</span>
                <span className="mt-1 block text-xs text-steel-500">故障品対応・返送料を同じ基準で比較</span>
              </Link>
            </li>
            <li>
              <Link href="/broken/lens-kabi/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">カビ・くもり・バルサム切れのあるレンズの売却</span>
                <span className="mt-1 block text-xs text-steel-500">カビの確認方法と申告・梱包の注意</span>
              </Link>
            </li>
            <li>
              <Link href="/digital/compact/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">コンパクトデジタルカメラの売却</span>
                <span className="mt-1 block text-xs text-steel-500">レンズ一体型デジタルカメラの確認事項</span>
              </Link>
            </li>
          </ul>
        </section>

        <p className="mt-12 text-xs leading-loose text-steel-500">
          ※ 本ページの記載は{PAGE_DATE_LABEL}時点の一般的な情報です。修理の可否、通電の安全性、データの消去・復旧の可否について判断を示すものではありません。掲載社の条件は各社の確認日時点の公式記載にもとづきます。買取金額は機種・状態・時期により異なります。
        </p>
      </article>
    </>
  );
}
