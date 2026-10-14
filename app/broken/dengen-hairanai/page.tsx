import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd, { faqPageLd } from "@/components/JsonLd";
import { SITE_NAME, SITE_URL, OPERATOR } from "@/lib/site";
import { getCompany, formatChecked } from "@/lib/companies";

const TITLE = "電源が入らない・エラーが出るカメラを売る｜故障と決めつける前の確認と申告のしかた";
const DESC =
  "電源が入らない・エラー表示が消えない・液晶が映らないカメラを売る前に、故障と決めつける前に確認できること（電池の種類・接点・液漏れ跡）、「動作未確認」と「故障」の書き分け、メモリーカードの扱い、故障品の受付・返送料・バッテリー欠品の条件を公式記載にもとづいて整理。";
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
    "電源が入らないカメラも、すぐに故障と決まるわけではありません。電池切れ、電池の種類や向きの違い、電池ぶたの閉まり、メモリーカードの状態など、道具を使わずに確認できる原因があります。確認は目で見る範囲と、電池を入れ替える程度までにとどめます。",
    "電池室に白い粉や青緑色のさび、にじんだ跡があるときは、それ以上触らず、通電も試さず、そのままの状態で「電池室に液漏れ跡あり」と申告します。拭き取りや分解を自分で行う必要はありません。",
    "確かめられなかったことは「動作未確認」、確かめて動かなかったことは「電源が入らない（確認済み）」と、事実の種類を分けて書きます。どちらも正直な申告で、良く見せる必要も悪く言う必要もありません。",
    "宅配で送る前に、その業者が故障品を受け付けているか、値段が付かなかったときに返送か引き取りか、返送料はどちらの負担か、バッテリーや充電器が無くても受け付けるかを確認します。当サイト掲載社でも、これらの条件は社ごとに異なります。",
    "修理できるかどうか、通電して安全かどうかは、このページでは判断を示しません。迷ったときは、無理に動かさずに買取店や修理業者へ相談するのが安全側の進め方です。",
  ];

  const symptoms = [
    {
      label: "電源スイッチを入れても何も反応しない",
      value:
        "もっとも多い相談です。電池切れ・電池の入れ違い・電池ぶたの閉まり不良・接点の汚れなど、本体の外側で確認できる原因から先に見ます。充電式のバッテリーは、長く放置されると充電しても反応しないことがあり、その場合もバッテリー側の問題か本体側の問題かは外からは分かりません。確認できたことだけを書きます。",
    },
    {
      label: "電源は入るが、エラー表示が出て操作できない",
      value:
        "エラー表示には、メモリーカードが入っていない・カードが書き込み禁止になっている・レンズが正しく装着されていない、といった操作や状態に関するものも含まれます。表示された文字や記号は、そのままメモするか写真に撮っておきます。意味を推測して書くより、表示そのものを伝えた方が、査定する側が判断しやすくなります。",
    },
    {
      label: "電源は入っている様子だが、背面の液晶が映らない",
      value:
        "ファインダーをのぞくと表示が見える、ランプが点く、操作音がするなど、液晶以外の反応があるかを確かめます。表示先の切り替え設定になっているだけの場合もありますが、液晶そのものの不具合かどうかは外からは判断できません。「電源は入る様子。背面液晶は映らない。ファインダー内表示は見える／見えない」のように、見えたことを分けて書きます。",
    },
    {
      label: "電池を使うフィルムカメラで、シャッターや露出計が動かない",
      value:
        "電池で露出計やシャッターを動かすフィルムカメラでは、電池が無い・合わないと、機械としては壊れていなくても動かないことがあります。一方で、電池が無くても一部の速度でシャッターが切れる機種もあり、動き方は機種ごとに異なります。機種ごとの仕組みは取扱説明書で確認できることが多いですが、分からなければ「電池なしで確認・電池を入れての確認はしていない」と書くだけで十分です。",
    },
  ];

  const preChecks = [
    {
      t: "電池を新しいもの・充電したものに替えてみる",
      d: "しばらく使われていなかったカメラは、まず電池切れを疑います。乾電池やボタン電池は新しいものに、充電式のバッテリーは充電してから試します。充電式バッテリーが膨らんでいる、変形している、熱を持つといった場合は、充電を続けず、使わずに取り外して、そのことを申告します。膨らんだバッテリーの扱いや処分は、お住まいの自治体や買取店の案内に従ってください。",
    },
    {
      t: "電池の種類・大きさ・向きが合っているか確かめる",
      d: "見た目が似ていても、ボタン電池には種類（酸化銀・アルカリ・リチウムなど）や厚みの違いがあり、合わない電池では動かないことや、表示が不安定になることがあります。必要な電池の種類は、電池ぶたの内側や本体の刻印、取扱説明書に記載されていることが多いので、そこを確認します。プラスとマイナスの向き、複数本入れる場合の並びも確かめます。古いフィルムカメラには、現在は入手しにくい電池を前提にしたものもあり、代わりの電池で動かなくても故障とは限りません。合う電池が分からないときは、試さずに「電池の種類が分からず未確認」と書いてかまいません。",
    },
    {
      t: "電池室を目で見て、液漏れ跡の有無を確かめる",
      d: "電池を取り出したら、電池室の中を明るいところで見ます。白い粉、青緑色や茶色のさび、液がにじんで乾いたような跡は、電池の液漏れや端子の腐食のしるしであることが多いとされています。こうした跡があるときは、指で触らない、こすらない、新しい電池を入れて通電を試さない、の三つを守り、そのままの状態で申告します。液漏れした電池を取り出すときは、素手で触らず、手袋や厚手の紙を使います。取り出した電池の処分は、お住まいの自治体の案内に従ってください。",
    },
    {
      t: "接点の汚れは、軽く見る程度にとどめる",
      d: "液漏れの跡がなく、端子がくすんでいる程度であれば、乾いた柔らかい布で軽くほこりを払うくらいは一般に行われています。ただし、金属でこする、薬剤を使う、端子を曲げるといった手入れは、状態を悪くするおそれがあるため避けた方が無難です。やり方に自信がなければ、何もしないまま申告する方が、後から食い違いが起きにくくなります。",
    },
    {
      t: "電池ぶた・カードぶたが確実に閉まっているか確かめる",
      d: "デジタルカメラの多くは、電池ぶたやカードぶたが閉まっていることを検知して電源が入る仕組みになっています。ふたのつめが折れている、閉めても浮いてしまう、といった状態では、電池が入っていても電源が入らないことがあります。ふたの破損は外から見える事実なので、「電池ぶたのつめが欠けている」のように具体的に書きます。",
    },
    {
      t: "メモリーカードまわりのエラーを切り分ける",
      d: "エラー表示が出る場合、カードが入っていない、カードの書き込み禁止スイッチがロック側になっている、カードが本体で使えない形式になっている、といった原因も考えられます。カードを抜いた状態で電源を入れたときに表示が変わるかを見るのは、手軽な切り分けの一つです。カードの中身を消したり初期化したりするのは、中のデータを確かめてからにします。データの扱いは後の章で触れます。",
    },
    {
      t: "レンズや電源スイッチの位置を確かめる",
      d: "レンズ交換式のカメラでは、レンズが最後まではまっていない、レンズを外した状態になっている、といった場合にエラーが出ることがあります。レンズ一体型で電源を入れるとレンズが伸びる仕組みのカメラでは、レンズの前に物があったり、手で押さえていたりすると、エラーになることがあります。レンズが途中で止まって戻らないときは、手で押し込んだり引き出したりせず、そのままの状態で申告します。",
    },
    {
      t: "寒い場所・湿った場所から出した直後は時間をおく",
      d: "冷えた物置や車の中から暖かい室内に持ち込んだ直後は、結露が起きることがあります。結露した状態で電源を入れるのは避けた方がよいとされるため、しばらく室温になじませてから確認します。極端に寒い環境では、電池の性能が一時的に落ちて動かないように見えることもあります。",
    },
  ];

  const dontDo = [
    "液漏れや腐食の跡がある電池室に、新しい電池を入れて通電を試す",
    "端子や電池室を金属や薬剤でこする、端子を曲げて接触させようとする",
    "膨らんだ・変形した・熱を持つバッテリーを充電し続ける",
    "止まったレンズや固いダイヤルを手で押し込む、力で回す",
    "ねじを外して本体を開ける、内部に触れる",
    "中身を確かめないうちに、メモリーカードや本体を初期化する",
  ];

  const statusRows = [
    {
      label: "動作確認済み",
      value:
        "電源が入り、撮影・再生・主な操作まで自分で確かめられた状態です。このページで扱う症状のカメラには、通常あてはまりません。",
    },
    {
      label: "一部不具合あり（確認済み）",
      value:
        "電源は入るが、特定の操作でエラーが出る、液晶だけ映らない、ときどき電源が落ちる、など。確かめた条件と、うまくいかなかった点を具体的に書きます。例「新しい電池で電源は入る。撮影しようとするとエラー表示（表示内容は写真参照）が出て撮影できない」。",
    },
    {
      label: "動作未確認",
      value:
        "電池が無い、合う電池が分からない、充電器が無い、液漏れ跡があるので通電を控えた、など、動くかどうかを確かめていない状態です。未確認の理由を添えると、査定する側が状態を想像しやすくなります。例「電池なし・充電器なしのため動作未確認。外観にへこみなし」。",
    },
    {
      label: "故障（電源が入らない・確認済み）",
      value:
        "新しい電池や充電した電池を正しく入れ、ふたも閉まっていることを確かめたうえで、電源が入らなかった状態です。例「新しい電池を入れ、電池ぶたの閉まりも確認したが、電源スイッチを入れても無反応」。原因の推測（基板が壊れている、など）は書かなくてかまいません。",
    },
  ];

  const writeTips = [
    {
      t: "試した条件と結果を一文にまとめる",
      d: "「電源が入らない」だけでは、電池を替えて試したのか、電池が無くて試せなかったのかが伝わりません。「どの電池で」「どこまで試して」「どうなったか」をまとめて書くと、動作未確認と故障の区別が自然に伝わります。",
    },
    {
      t: "液漏れ跡・ふたの破損・付属品の有無は必ず書く",
      d: "液漏れ跡があるか、電池ぶたやカードぶたが壊れていないか、バッテリーと充電器がそろっているか。この三点は、査定する側が最初に確かめたい情報になりやすい項目です。写真を添えられる場合は、電池室の中が見えるように一枚撮っておきます。",
    },
    {
      t: "型番が分かる写真を用意する",
      d: "型番は本体底面や銘板、電池室付近などに刻印・印字されていることが多いです。型番が分かると、査定する側がその機種の仕組みを確認しやすくなります。製造番号（シリアルナンバー）が読めるかも見ておきます。製造番号が消えている・判別できない場合の扱いは、業者ごとに公式の記載があることがあります。",
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
      ship: "宅配買取（全国・着払い）・出張買取・店頭買取。返送料は「送料や手数料は一切かかりません」との記載あり（キャンセル時の返送料の個別明記は公式では確認できず）",
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
        "「カビ・ホコリ・曇り」がある品も査定対象として記載。「状態によっては…お値段が付かないものもございます」。故障品・ジャンクの明記は公式では確認できず",
      ship: "出張買取・催事買取（宅配買取は公式では確認できず）。査定額を聞いて断った場合も「キャンセル料等はいただきません」",
      date: checked("uriel"),
    },
  ];

  const otherNotes = [
    {
      t: `${nameOf("arrows")}（宅配買取専門）`,
      d: `故障品は「商品によっては買取が可能な場合もございます」とされる一方、ジャンク品と、重度の付属品欠品（バッテリー・充電器がない商品）は買取不可と明記されています。キャンセル時の返送料は利用者負担（「返送料はお客様にご負担いただいております」）です（${checked("arrows")}確認）。電源が入らない、またはバッテリーや充電器が無いカメラを送る前には、とくに条件の確認が欠かせません。`,
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
      d: `「買取ご依頼品に故障箇所が見つかった場合、確認の為にお預かりする場合がございます」と記載されています。故障品の買取可否と、キャンセル時の返送料の負担者は公式では確認できませんでした（${checked("fujiya")}確認）。`,
    },
    {
      t: `${kitamura.name}・${nameOf("rakuuru")}`,
      d: `どちらもカメラの故障品の取り扱いについての明記は公式では確認できませんでした。${kitamura.name}は宅配（直送）買取について「キャンセル後の返送料も無料」、製造番号が消えている・判別できない場合は「買い取ることが出来かねます」と記載しています（${formatChecked(kitamura.confirmed_date)}確認）。${nameOf("rakuuru")}は「送料、査定、キャンセルによる返送料全て弊社で負担します」と記載しています（${checked("rakuuru")}確認）。故障品を送る場合は、申込前に受付の可否を問い合わせるのが確実です。`,
    },
  ];

  const shipSteps = [
    {
      t: "故障品を受け付けているかを、申込前に確かめる",
      d: "上の表のとおり、故障品の受付を公式に明記している業者もあれば、正常動作品を基本としている業者、記載が確認できない業者もあります。記載が見つからない場合は、申込前に「電源が入らないカメラですが受け付けていますか」と問い合わせておくと、送ってから返送になる手間を避けられます。",
    },
    {
      t: "値段が付かなかったときの扱いを確かめる",
      d: "電源が入らないカメラは、状態によって値段が付かないこともあります。そのとき、返送してもらうのか、引き取り（処分）を頼めるのか、どちらを選べるのかは業者によって異なり、当サイトでは各社の引き取りの扱いまでは確認できていません。形見など手元に戻したい品がある場合は、申込時の備考欄などに「値段が付かない場合は返送希望」と書いておくと行き違いを防げます。",
    },
    {
      t: "電池は抜き、バッテリーは状態を見てから同梱を決める",
      d: "乾電池やボタン電池は本体から抜いて送るのが一般的です。充電式バッテリーを付属品として同梱する場合も、本体から外して別に包む方法があります。膨らんだ・変形したバッテリーの同梱については、送る前に業者に確認してください。配送業者によって電池類の扱いに条件があることもあります。",
    },
    {
      t: "メモリーカードを抜き、状態のメモと写真を残す",
      d: "本体にカードが入ったままになっていないかを最後に確かめます。送る前に、外観と電池室の中、型番の写真を撮っておくと、査定結果の説明を受けたときに発送時の状態と照らし合わせられます。申告の内容は、手元にも同じものを控えておきます。",
    },
  ];

  const checklist = [
    "電池を新しいもの・充電したものに替えて試した（または、試せなかった理由をメモした）",
    "電池の種類・大きさ・向きを、電池ぶたの内側や取扱説明書で確かめた",
    "電池室を目で見て、白い粉・さび・にじみ跡の有無を確かめた",
    "液漏れ跡があるものは、触らず、通電も試さず、そのまま申告することにした",
    "膨らんだ・変形したバッテリーは充電をやめ、取り外してそのことをメモした",
    "「動作未確認」と「故障（確認済み）」のどちらに当たるかを、試した条件とあわせて書いた",
    "メモリーカードを抜き、中のデータを確かめてから扱いを決めた",
    "バッテリー・充電器の有無を確かめ、無い場合に受け付けてもらえるかを業者の条件で確認した",
    "送り先の業者が故障品を受け付けているかを、公式の記載か問い合わせで確かめた",
    "値段が付かない場合に返送か引き取りかを確かめ、戻したい品は返送希望と伝えた",
    "キャンセル時の返送料の負担を、キャンセルの理由ごとに確かめた",
    "型番・製造番号・外観・電池室の写真を撮って手元に残した",
  ];

  const faqs = [
    {
      q: "電源が入らないカメラでも売れますか？",
      a: `状態や業者によって異なります。当サイト掲載社では、${nameOf("camera-kaitoriyasan")}（「壊れていても買取OK」）、${nameOf("daikokuya")}（「一部パーツが壊れたカメラ」も買取対象）、${nameOf("camera-takakuureru")}（「壊れている商品でも買取できる可能性があります」）が、故障品の受付を公式に記載しています（いずれも各社の確認日時点の記載）。一方で、正常動作品を基本とする業者や、記載が確認できない業者もあります。状態によっては値段が付かないこともあるため、申込前に条件を確かめてください。`,
    },
    {
      q: "電池室に白い粉が付いています。掃除してから売った方がよいですか？",
      a: "自分で掃除する必要はありません。白い粉やさび、にじみ跡は液漏れや腐食のしるしであることが多く、こすったり薬剤を使ったりすると状態を悪くするおそれがあります。触らず、通電も試さず、「電池室に液漏れ跡あり」と申告し、電池室の写真を添えるのが安全側の進め方です。修理できるかどうかは、修理業者や買取店に相談してください。",
    },
    {
      q: "バッテリーや充電器が見つかりません。それでも受け付けてもらえますか？",
      a: `業者によって扱いが分かれます。${nameOf("arrows")}は、バッテリー・充電器がない商品を買取不可と明記しています（${checked("arrows")}確認）。${nameOf("uriel")}は付属品がないカメラも可（${checked("uriel")}確認）、${nameOf("camera-takakuureru")}は「購入時の箱や付属品は残っていることが望ましいですが、なくてもお買取できます」と記載しています（${checked("camera-takakuureru")}確認）。${nameOf("naniwa")}は欠品しているものは「買取の対象となりにくい場合がございます」としています（${checked("naniwa")}確認）。記載のない業者には、申込前に問い合わせてください。`,
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
          { name: "電源が入らない・エラーが出るカメラを売る", path: PATH },
        ]}
      />
      <article className="mx-auto max-w-site px-4 py-10 md:py-14">
        <p className="kicker mb-3">NO POWER / ERROR</p>
        <h1 className="max-w-4xl font-display text-2xl leading-relaxed text-steel-900 md:text-3xl md:leading-relaxed">
          電源が入らない・エラーが出るカメラを売る｜故障と決めつける前の確認と申告のしかた
        </h1>
        <p className="mt-5 max-w-3xl text-sm leading-loose text-steel-600">
          しまってあったデジタルカメラの電源が入らない。電源は入るのにエラー表示が消えない。背面の液晶が映らない。電池を使うフィルムカメラのシャッターが動かない。こうしたカメラを売ろうとするとき、「壊れているから値段は付かないだろう」と決めつける前に、確認できることがいくつかあります。このページでは、道具を使わずに目で見て確かめられる範囲の確認、「動作未確認」と「故障」の書き分け、メモリーカードの扱い、宅配で送る前に業者の条件で確かめておきたいことを、一般知識と当サイト掲載社の公式記載にもとづいて整理します。修理できるかどうかや、通電して安全かどうかの判断は示しません。
        </p>

        {/* 結論先出し */}
        <section className="mt-10 border-2 border-vermilion bg-chalk-warm p-6">
          <h2 className="font-display text-lg text-steel-900">先に結論</h2>
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
          <h2 className="section-title mb-2">症状ごとに、まず見るところ</h2>
          <p className="mb-5 max-w-3xl text-sm leading-loose text-steel-600">
            「電源が入らない」と一口に言っても、まったく反応しないのか、反応はあるが操作できないのかで、確認する順番も申告の書き方も変わります。まず、手元のカメラがどれに近いかを見てください。
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
            ※ 症状から原因を特定することはできません。ここでの整理は、確認と申告の順番を決めるための目安です。
          </p>
        </section>

        {/* 故障と決めつける前の確認 */}
        <section className="mt-14">
          <h2 className="section-title mb-2">故障と決めつける前に確認できること</h2>
          <p className="mb-6 max-w-3xl text-sm leading-loose text-steel-600">
            ここで挙げるのは、電池を入れ替える、ふたの閉まりを見る、電池室を目でのぞく、といった範囲の確認です。ねじを外す、内部に触れる、薬剤を使うといった作業は含めていません。確認の途中で液漏れの跡や部品の破損に気づいたら、その時点で手を止めて、見たままを申告すれば十分です。
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
            <h3 className="font-display text-base text-steel-900">確認のときに、やらない方がよいこと</h3>
            <p className="mt-2 text-[13px] leading-loose text-steel-700">
              動くかどうかを確かめたい気持ちから、つい手を出してしまいがちな操作です。どれも、状態を悪くしたり、けがや発熱につながったりするおそれがあると一般に言われています。
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
            ※ 通電して安全かどうか、修理できるかどうかは、このページでは判断を示しません。迷う場合は、動かさずに買取店や修理業者へ相談してください。液漏れした電池や劣化したバッテリーの処分は、お住まいの自治体の案内に従ってください。
          </p>
        </section>

        {/* 動作未確認と故障 */}
        <section className="mt-14">
          <h2 className="section-title mb-2">「動作未確認」と「故障」を書き分ける</h2>
          <p className="mb-5 max-w-3xl text-sm leading-loose text-steel-600">
            申告で大切なのは、確かめたことと確かめていないことを混ぜないことです。「動作未確認」は動くかどうかを試していない状態、「故障」は試して動かなかった状態で、意味が違います。どちらも正直な申告であり、どちらかが有利ということではありません。
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
            <Link href="/broken/" className="btn-primary">壊れた・ジャンク品の申告のコツを見る</Link>
            <Link href="/guide/uru-mae/" className="btn-ghost">売る前の準備ガイドを見る</Link>
          </div>
        </section>

        {/* メモリーカード・データ */}
        <section className="mt-14">
          <h2 className="section-title mb-2">メモリーカードとデータの扱い</h2>
          <div className="max-w-3xl space-y-4 text-sm leading-loose text-steel-700">
            <p>
              電源が入らないカメラでも、メモリーカードは抜いて中身を確かめられる場合があります。本体が動かないからといって、カードを入れたまま手放すことのないよう、送る前にカードスロットを必ずのぞいてください。カードが見当たらない場合も、スロットのふたを開けて確かめておくと安心です。
            </p>
            <p>
              一方で、本体の内部に保存された写真や設定は、電源が入らないと自分では確かめたり消したりできないことがあります。その場合は「電源が入らないため本体内のデータは確認・消去できていない」と申告に添え、扱いを業者に確かめる方法があります。データが本当に消せるか、復旧できるかは、このページでは判断を示しません。
            </p>
            <p>
              故人のカメラなど、残された写真の扱いに迷う場合の手順は「故人のフィルム・メモリーカード・写真データ」のページで、デジタルカメラを売る前のデータ削除や初期化の考え方は「デジタル一眼・ミラーレスの買取」のページで整理しています。フィルムカメラの場合、撮影途中のフィルムが入っていることもあるため、裏ぶたを開ける前に同じページを確認してください。
            </p>
          </div>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link href="/situation/koujin-film-data/" className="btn-primary">フィルム・データの扱いを見る</Link>
            <Link href="/digital/" className="btn-ghost">デジタル一眼・ミラーレスのページを見る</Link>
          </div>
        </section>

        {/* バッテリー・充電器 */}
        <section className="mt-14">
          <h2 className="section-title mb-2">バッテリー・充電器が無い場合</h2>
          <div className="max-w-3xl space-y-4 text-sm leading-loose text-steel-700">
            <p>
              充電式バッテリーを使うデジタルカメラは、バッテリーや充電器が無いと動作を確かめられません。電源が入らない原因がバッテリー切れなのか本体なのかも、自分では切り分けられなくなります。このため、バッテリーや充電器の有無は、査定する側にとって状態を判断する材料の一つになりやすいと考えられます。
            </p>
            <p>
              バッテリーや充電器は、カメラバッグの小物入れや元箱に残っていることがあります。見つからない場合に、別に買いそろえてから売るべきかどうかは一概には言えません。規格の合わないものを使う心配もあるため、まずは「バッテリーなし・充電器なし・動作未確認」のまま相談してかまいません。
            </p>
            <p>
              当サイト掲載社のうち、付属品の欠品について公式の記載が確認できたのは次のとおりです。記載のない業者には、申込前に問い合わせてください。
            </p>
          </div>
          <div className="mt-5 overflow-x-auto border border-chalk-line">
            <table className="spec-table">
              <tbody>
                <tr>
                  <th className="w-40 md:w-56">{nameOf("arrows")}</th>
                  <td>
                    ジャンク品・加工品・重度の付属品欠品（バッテリー・充電器がない商品）は買取不可と明記。箱なしは可（{checked("arrows")}確認）
                  </td>
                </tr>
                <tr>
                  <th className="w-40 md:w-56">{nameOf("uriel")}</th>
                  <td>付属品がないカメラも可（{checked("uriel")}確認）。出張買取・催事買取のみで、宅配買取は公式では確認できず</td>
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
                  <td>店頭買取について「バルク品や欠品のあるものもOK」と記載。一方で「基本的に通常正常動作品のみ買取対象」とも記載（{checked("janpara")}確認）</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-steel-500">
            ※ 「付属品」にバッテリー・充電器が含まれるかどうかは、各社の公式記載からは読み取れない場合があります。バッテリーや充電器が無いことを伝えたうえで確認してください。
          </p>
        </section>

        {/* 宅配で送る前に */}
        <section className="mt-14">
          <h2 className="section-title mb-2">宅配で送る前に確かめること</h2>
          <p className="mb-5 max-w-3xl text-sm leading-loose text-steel-600">
            電源が入らないカメラは、送ってから「受付対象外」「値段が付かない」となる可能性が、動くカメラより高くなります。送る前に、故障品の受付・値段が付かないときの扱い・返送料の三つを、送り先の条件で確かめておきます。まず、当サイト掲載社のうち故障品の受付を公式に記載している社（当サイトの「壊れた・ジャンク・カビありを売る」の掲載基準にもとづく）の記載です。
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
            ※ {nameOf("uriel")}は故障品・ジャンクの明記は公式では確認できませんでしたが、カビ・くもりのある品や付属品のないカメラを査定対象と記載しているため、この表に含めています。宅配ではなく出張・催事での相談になります。
          </p>

          <h3 className="mt-8 font-display text-base text-steel-900">そのほかの掲載社で、送る前に知っておきたい記載</h3>
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
            ※ 掲載社の条件は各社の確認日時点の公式記載です。実際の条件は、必ず申込時の規約で確認してください。買取金額は機種・状態・時期により異なります。
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
          <h2 className="section-title mb-6">電源が入らない・エラーが出るカメラについてよくある質問</h2>
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
                <span className="mt-1 block text-xs text-steel-500">仕分け・写真・申告の一般的な手順</span>
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
                <span className="mt-1 block text-xs text-steel-500">故障品対応・返送料を同じ物差しで</span>
              </Link>
            </li>
            <li>
              <Link href="/broken/lens-kabi/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">カビ・くもりのあるレンズを売る</span>
                <span className="mt-1 block text-xs text-steel-500">カビの確認方法と申告・梱包の注意</span>
              </Link>
            </li>
            <li>
              <Link href="/digital/compact/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">コンパクトデジカメを売る</span>
                <span className="mt-1 block text-xs text-steel-500">レンズ一体型デジカメの確認ポイント</span>
              </Link>
            </li>
          </ul>
        </section>

        <p className="mt-12 text-xs leading-loose text-steel-500">
          ※ 本ページの記載は{PAGE_DATE_LABEL}時点の一般的な整理です。修理の可否、通電の安全性、データの消去・復旧の可否について判断を示すものではありません。掲載社の条件は各社の確認日時点の公式記載にもとづきます。買取金額は機種・状態・時期により異なります。
        </p>
      </article>
    </>
  );
}
