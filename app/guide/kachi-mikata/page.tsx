import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd, { faqPageLd } from "@/components/JsonLd";
import { SITE_NAME, SITE_URL, OPERATOR, PUBLISHED_DATE } from "@/lib/site";

const TITLE = "フィルムカメラ・オールドレンズの価値の見分け方｜売る前に確認する7つのポイント";
const DESC =
  "フィルムカメラやオールドレンズの価値は、メーカー・機種・生産時期・希少性・状態・付属品・動作の7つの要素で見られるのが一般的です。一眼レフ・レンジファインダー・二眼レフ・中判・コンパクトといった種類別の見方、定番として名前の挙がりやすい機種の例、マウント・開放F値・焦点距離といったオールドレンズの見方、カビ・くもり・バルサム切れなどの状態チェック、付属品の扱い、動作未確認品の出し方、売り時の考え方を一般知識として解説します。";
const PATH = "/guide/kachi-mikata/";

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
  datePublished: PUBLISHED_DATE,
  dateModified: PUBLISHED_DATE,
  mainEntityOfPage: `${SITE_URL}${PATH}`,
  author: { "@type": "Organization", name: OPERATOR.name },
  publisher: { "@type": "Organization", name: SITE_NAME },
};

export default function KachiMikataGuidePage() {
  const conclusions = [
    "フィルムカメラ・オールドレンズの価値は、一般に「メーカー・機種・生産時期・希少性・状態・付属品・動作」の7つの要素の組み合わせで見られます。どれか一つだけで決まるものではなく、同じ機種でも状態と付属品の有無で評価が大きく分かれるとされています。",
    "定番として名前が挙がりやすい機種やブランドは確かにありますが、「この機種なら必ず高く売れる」と断定できるものではありません。相場は時期によって変動し、個体の状態によっても評価が変わります。",
    "レンズはマウント・開放F値・焦点距離に加えて、カビ・くもり・バルサム切れ・絞り羽根の油・ヘリコイドの重さといった状態が評価に直結します。自分で見える範囲は、売る前にライトを当てて確認しておくのが基本です。",
    "動作未確認・故障品でも、正直に申告したうえで出せば査定の対象になる場合があります。「動かないから価値がない」と自己判断で処分する前に、業者の受付条件を確認しましょう。",
  ];

  const factors = [
    {
      t: "メーカー・ブランド",
      d: "国内外の主要メーカーのカメラやレンズは、修理体制や中古市場での流通量が比較的安定しているため、評価の対象になりやすいとされています。一方で、あまり知られていないメーカーの製品でも、特定の分野で高く評価されているものがあり、メーカー名だけで価値を判断することはできません。銘板や刻印を確認し、メーカー名と型番を正確に控えておくことが最初の一歩です。",
    },
    {
      t: "機種・型番",
      d: "同じメーカーでも、機種によって評価は大きく異なります。名機として長く語られてきたモデル、生産台数が少ないモデル、特定の機能を初めて搭載したモデルなどは、コレクターや実用ユーザーの両方から注目されやすい傾向があります。型番は本体の上面・底面・銘板・レンズの前枠などに刻まれていることが多いので、正確に読み取っておきましょう。",
    },
    {
      t: "生産時期・バリエーション",
      d: "同じ機種でも、前期型・後期型、ブラックボディとシルバーボディ、限定モデルや記念モデルなど、生産時期や仕様によって細かなバリエーションがあります。一般に、生産数が少ないバリエーションは希少性の面で評価されることがあるとされています。シリアル番号から生産時期をおおまかに推定できる機種もあるため、番号は控えておくと申告しやすくなります。",
    },
    {
      t: "希少性",
      d: "流通量が少ないもの、生産期間が短かったもの、特定の市場向けにしか出荷されなかったものなどは、希少性の観点から評価の対象になりやすいとされています。ただし、希少であることと需要があることは別で、珍しくても求める人が少なければ評価につながらないこともあります。希少性の判断は専門的な知識が必要なため、自己判断せず、業者の査定に委ねるのが現実的です。",
    },
    {
      t: "状態（外観・内部）",
      d: "外観のスレ・凹み・塗装剥がれ、貼り革の浮き、ファインダー内のゴミやくもり、内部のモルト（遮光材）の劣化などが見られます。特にレンズは、カビ・くもり・バルサム切れの有無が評価を大きく左右するとされています。外観がきれいでも内部に問題があることはありますし、逆に使い込まれた外観でも内部が良好であれば評価される場合があります。",
    },
    {
      t: "付属品",
      d: "元箱・取扱説明書・レンズキャップ・フード・フィルター・ストラップ・専用ケースなどの純正付属品が揃っていると、一般に評価にプラスになることがあります。特に元箱と取扱説明書が揃った「フルセット」は、コレクターからの需要があるとされています。ただし付属品の扱いは業者によって異なるため、揃っていないからといって売れないわけではありません。",
    },
    {
      t: "動作",
      d: "シャッターが各速度で切れるか、巻き上げがスムーズか、露出計が反応するか、絞りが正常に動くか、といった動作の状態です。動作品の方が評価されやすいのは一般的な傾向ですが、フィルムカメラやオールドレンズは修理や部品取りを前提として動作不良品を受け付けている業者もあります。動作の可否は自己申告の内容と実機確認の結果が照合されるため、正直に伝えるのが基本です。",
    },
  ];

  const filmTypes = [
    {
      label: "一眼レフ（35mm）",
      value:
        "レンズを通した像をファインダーで直接確認できる方式で、フィルムカメラの中で最も流通量が多いタイプです。金属製の機械式シャッターを備えた往年のモデルは、電池がなくても動作するものが多く、実用ユーザーからの需要があるとされています。定番として名前が挙がることの多い例として、Nikon F・F2・F3、Canon AE-1・F-1、OLYMPUS OM-1、PENTAX SP（Spotmatic）などがあります。同じ機種でもボディの色や生産時期でバリエーションがあり、レンズ付きかボディのみかでも見方が変わります。",
    },
    {
      label: "レンジファインダー",
      value:
        "距離計を内蔵し、二重像を合わせてピントを合わせる方式のカメラです。小型で静かなシャッターを備えたものが多く、コレクター・実用の両面で根強い人気があるとされています。定番の例としては、Leica M型（M3・M2・M4・M6 など）や、バルナック型と呼ばれる古い世代の Leica、国産ではCanonのレンジファインダー機、Nikon S系などが挙げられます。距離計の二重像がずれていないか、ファインダーが曇っていないかが、状態確認の要点になります。",
    },
    {
      label: "二眼レフ",
      value:
        "上下に2つのレンズを備え、上のレンズで構図を確認し、下のレンズで撮影する方式です。中判フィルム（120フィルム）を使うものが多く、正方形の写真が撮れることで知られています。定番の例としては Rolleiflex、Rolleicord、国産では Minolta Autocord、Yashica Mat などが挙げられます。上下のレンズの状態、ミラーの劣化、ピントグラスの曇りなどが確認のポイントです。",
    },
    {
      label: "中判・大判",
      value:
        "35mmより大きなフィルムを使うカメラで、プロやハイアマチュア向けに作られたものが多いタイプです。レンズ交換式のシステムカメラとして構成されているものは、ボディ・レンズ・フィルムバック・ファインダーといった部品単位で評価されることがあります。定番の例としては、Hasselblad 500系、PENTAX 67、Mamiya のRB・RZシリーズや Mamiya 7 などが挙げられます。大判カメラは蛇腹の穴や光漏れ、レンズボードの状態が見られます。",
    },
    {
      label: "コンパクト",
      value:
        "レンズ固定式で、持ち歩きやすい小型のカメラです。かつては大量に生産されたため多くの個体は流通量が多いのですが、一部の高級コンパクトと呼ばれるモデルは、コレクターや若い世代のフィルムユーザーからの需要があるとされています。定番の例としては、OLYMPUS PEN シリーズ（ハーフサイズ）、Contax T系、KONICA HEXAR、Ricoh GR フィルム機などが挙げられます。電子制御のモデルは電池を入れて起動するかどうかが状態確認の基本になります。",
    },
  ];

  const mounts = [
    {
      label: "M42（プラクチカマウント）",
      value:
        "ねじ込み式のスクリューマウントで、多くのメーカーが採用したため、対応レンズの種類が非常に多い規格です。デジタルカメラにマウントアダプターを介して装着しやすいことから、オールドレンズ入門としての需要があるとされています。PENTAX の Takumar シリーズや、東欧・旧ソ連製のレンズなど、幅広いレンズが該当します。",
    },
    {
      label: "ライカ L（L39）・M",
      value:
        "Leica のレンジファインダー機で使われるマウントで、L39 はねじ込み式、M はバヨネット式です。純正レンズのほか、国産・海外メーカーの互換レンズも多く作られました。一般に、状態の良い個体は評価の対象になりやすいとされていますが、同じ名前のレンズでも世代によって仕様が異なるため、刻印やシリアル番号を控えておくことが大切です。",
    },
    {
      label: "ニコン F",
      value:
        "長年にわたって基本形が維持されてきたマウントで、古いレンズを現行機に装着できる場合があるという特徴があります。非Ai・Ai・Ai-S といった世代の違いがあり、絞りリングや爪の形状で見分けられます。世代によって使えるボディが変わるため、どの世代のレンズかを把握しておくと申告がしやすくなります。",
    },
    {
      label: "キヤノン FD",
      value:
        "Canon のフィルム一眼レフで使われたマウントで、現行のマウントとは互換性がありません。そのため、マウントアダプターを使ってミラーレス機で楽しむ用途で需要があるとされています。FD と New FD（バヨネット式）の2種類があり、装着方法の違いで見分けられます。",
    },
    {
      label: "ミノルタ MD／SR",
      value:
        "Minolta のフィルム一眼レフで使われたマウントで、MC・MD といった世代があります。ロッコールの名で知られるレンズ群が該当し、描写の個性から一定の需要があるとされています。世代によって絞り連動の仕組みが異なるため、レンズ名の表記を控えておきましょう。",
    },
    {
      label: "ペンタックス K",
      value:
        "PENTAX が M42 から移行したバヨネットマウントで、現在のデジタル一眼レフにも基本的に引き継がれています。古いレンズを現行機で使える場合があるため、実用目的の需要があるとされています。K・KA・KAF といった世代があり、電子接点の有無で見分けられます。",
    },
    {
      label: "その他（オリンパス OM・コンタックス／ヤシカ・エキザクタ 等）",
      value:
        "OLYMPUS OM マウント、Contax／Yashica マウント（Carl Zeiss 銘のレンズが該当）、Exakta マウント、Konica AR マウントなど、多くの規格があります。マウントが分からない場合は、レンズの後端の形状とメーカー名を業者に伝えれば判断してもらえるのが一般的です。",
    },
  ];

  const lensPoints = [
    {
      t: "明るさ（開放F値）",
      d: "レンズ名に含まれる「F1.4」「F2」「F2.8」といった数字が開放F値で、数字が小さいほど明るいレンズです。一般に、同じ焦点距離であれば、開放F値が小さい（明るい）レンズの方が製造コストが高く、生産数も少ない傾向があるため、評価の対象になりやすいとされています。ただし、暗いレンズでも描写に個性があるものや、希少なものは別に評価されることがあります。",
    },
    {
      t: "焦点距離",
      d: "標準域（50mm 前後）は生産数が多いため流通量も多く、広角・望遠・マクロなどの特殊な焦点距離は相対的に数が少ない傾向があります。とはいえ、標準レンズの中にも名玉として知られるものは多く、焦点距離だけで価値は決まりません。ズームレンズよりも単焦点レンズの方がオールドレンズとしての需要が高い傾向があるとされています。",
    },
    {
      t: "銘柄・設計の系譜",
      d: "Sonnar、Planar、Tessar、Summicron、Nokton、Rokkor、Takumar など、レンズの設計や銘柄の名前は、それ自体が評価の手がかりになります。同じ銘柄でも世代や生産国、コーティングの有無（モノコート・マルチコート）で違いがあるため、レンズ前枠の刻印をそのまま控えておくと業者に伝えやすくなります。",
    },
  ];

  const lensCondition = [
    {
      label: "カビ",
      value:
        "レンズ内部に糸状や斑点状の白っぽい模様が見えたら、カビの可能性があります。ライトを後ろから当てて、斜めから覗くと見つけやすくなります。軽微なカビは清掃で除去できる場合もありますが、ガラス面にカビの跡が残っていると評価に影響することがあります。カビの有無と程度は、隠さずに申告するのが基本です。",
    },
    {
      label: "くもり",
      value:
        "レンズ全体が白く霞んで見える状態です。コーティングの劣化や、絞り羽根の油分が蒸発してガラスに付着することで起こるとされています。カビと違って全面に薄く広がることが多く、暗い場所でライトを当てないと気づきにくいことがあります。",
    },
    {
      label: "バルサム切れ",
      value:
        "複数のレンズを貼り合わせている部分の接着剤（バルサム）が劣化して剥離し、虹色の模様やくもりが出る状態です。古いレンズに起こりやすい症状で、修理には貼り直しが必要とされています。レンズの縁の方から虹色に見える場合は、この症状の可能性があります。",
    },
    {
      label: "絞り羽根の油",
      value:
        "絞りリングを回したときに、羽根がゆっくり動く、粘る、または開放のまま動かない場合は、羽根に油が回っている可能性があります。羽根に油の光沢が見えることもあります。オールドレンズでは比較的よくある症状で、修理で改善できることが多いとされていますが、動作の状態として申告が必要です。",
    },
    {
      label: "ヘリコイド（ピントリング）の重さ",
      value:
        "ピントリングを回したときに、極端に重い、引っかかる、逆にスカスカで抵抗がない、といった状態は、グリスの劣化や固着の可能性があります。滑らかに回るかどうかは、実用レンズとしての評価に関わるとされています。無理に回すと内部を傷めることがあるため、固い場合は無理をしないでください。",
    },
    {
      label: "傷・コーティング剥がれ・拭き傷",
      value:
        "前玉・後玉の表面の傷、コーティングのムラや剥がれ、清掃時についた細かい拭き傷などです。特に後玉の傷は描写への影響が大きいとされ、評価で重視されることがあります。無理にレンズ面を拭くと拭き傷を増やすおそれがあるため、売る前の清掃はブロアーでほこりを飛ばす程度にとどめるのが無難です。",
    },
  ];

  const bodyChecks = [
    {
      label: "シャッター",
      value:
        "各シャッター速度で実際に切れるか、低速でシャッター幕が途中で止まらないか、高速で幕の走行ムラが見えないかを確認します。布幕のフォーカルプレーンシャッターは、幕の穴やシワも見ておきましょう。電子制御のカメラは、電池を入れた状態で確認します。",
    },
    {
      label: "巻き上げ・巻き戻し",
      value:
        "巻き上げレバーがスムーズに動くか、途中で引っかからないか、巻き上げ後にシャッターがチャージされるか、巻き戻しクランクが回るかを確認します。フィルムカウンターが進むかどうかも見ておくと申告しやすくなります。",
    },
    {
      label: "露出計",
      value:
        "電池を入れて、明るい場所と暗い場所で針や表示が動くかを確認します。古いカメラの中には、現在は製造されていない水銀電池を前提に設計されたものがあり、代替電池では指示値がずれることがあるとされています。「反応する」「反応しない」の区別だけでも申告できれば十分です。",
    },
    {
      label: "モルト（遮光材）の劣化",
      value:
        "裏蓋を開けて、フィルム室の縁にあるスポンジ状の遮光材がベタついていないか、ボロボロになっていないかを確認します。モルトの劣化は古いカメラのほとんどに見られる症状で、交換は比較的容易とされていますが、劣化したモルトがミラーやシャッターに付着していると影響が出ることがあります。",
    },
    {
      label: "ファインダー・ミラー・プリズム",
      value:
        "ファインダーを覗いて、視野が曇っていないか、黒い筋や斑点（プリズムの腐食など）が見えないか、ミラーの銀面が剥がれていないかを確認します。プリズム腐食は一部の機種で起こりやすい症状として知られており、評価に影響することがあります。",
    },
    {
      label: "外観・貼り革・電池室",
      value:
        "外装のスレや凹み、貼り革の浮きや剥がれ、電池室の液漏れによる緑青（ろくしょう）や腐食を確認します。電池室の液漏れは電子回路に影響することがあるため、古い電池が入ったままなら取り出しておきましょう。",
    },
  ];

  const accessories = [
    {
      t: "元箱・取扱説明書・保証書",
      d: "純正の元箱と取扱説明書が揃っていると、コレクター需要の面で評価される場合があります。保証書は期限が切れていても、購入時期や正規品であることを示す資料として扱われることがあります。箱が傷んでいても、あれば一緒に出すのが基本です。",
    },
    {
      t: "レンズキャップ・リアキャップ・フード",
      d: "純正のキャップやフードは、レンズ本体と同じくらい古いものだと単体でも探されていることがあります。特に金属製のフードや、機種専用の形状のフードは、揃っていると評価につながる場合があるとされています。社外品でも、レンズ面を保護するためのキャップは付けたまま出しましょう。",
    },
    {
      t: "フィルター・純正ケース・ストラップ",
      d: "保護フィルターは付けたままでも外しても構わないのが一般的ですが、業者によっては付属品として見ることがあります。純正の革ケースやストラップは、経年で劣化していても揃っている方が評価の面で不利になりにくいとされています。ケースの革がベタついていたり、カビが生えていたりする場合は、本体に触れないように分けて梱包します。",
    },
    {
      t: "付属品がなくても売れる",
      d: "付属品が一つもなくても、本体やレンズ単体で査定を受けられるのが一般的です。付属品を探すのに時間をかけすぎるより、見つかった範囲で揃えて、あとは本体の状態を正確に申告する方が現実的です。",
    },
  ];

  const faqs = [
    {
      q: "祖父のカメラが出てきましたが、価値があるかどうか自分で判断できますか？",
      a: "メーカー名と型番、レンズの名前と開放F値、外観と動作の状態、付属品の有無を控えれば、おおまかな手がかりは得られますが、希少性や細かなバリエーションの判断には専門的な知識が必要です。自己判断で処分せず、フィルムカメラを扱う業者に写真と型番を伝えて査定を受けるのが現実的です。複数の業者に同じ条件で見てもらうと、評価の傾向がつかめます。",
    },
    {
      q: "動くかどうか分からないカメラでも売れますか？",
      a: "フィルムカメラやオールドレンズは、修理や部品取りを前提として動作未確認品・故障品を受け付けている業者があります。「動作未確認」と正直に申告したうえで出せば、査定の対象になる場合があります。ただし受付条件は業者によって異なるため、申込前に故障品・ジャンク品の扱いを確認してください。無理に動かそうとして壊してしまうより、そのままの状態で出す方が安全です。",
    },
    {
      q: "レンズにカビがあります。清掃してから売った方がいいですか？",
      a: "一般に、自分でレンズを分解して清掃するのはおすすめされていません。分解時に部品を傷めたり、組み立て時に光軸がずれたりすると、かえって評価が下がるおそれがあります。カビの有無と程度を申告し、そのままの状態で査定を受けるのが基本です。清掃はブロアーでほこりを飛ばす程度にとどめましょう。",
    },
    {
      q: "定番機種のリストに載っていないカメラは価値がありませんか？",
      a: "このページで挙げた機種名は、あくまで名前が挙がることの多い「例」であり、価値のあるカメラを網羅したものではありません。あまり知られていないメーカーの製品や、大量生産されたコンパクトカメラの中にも、特定の分野で評価されているものがあります。リストにないからといって自己判断で処分せず、査定を受けてみることをおすすめします。",
    },
    {
      q: "今売るべきか、しばらく持っておくべきか、どちらが得ですか？",
      a: "フィルムカメラやオールドレンズの相場は、需要の変化や為替、フィルムの供給状況などによって変動するとされており、将来の値動きを断定することはできません。一方で、カビやくもり、モルトの劣化、電池の液漏れといった状態の悪化は、保管中にも進行することがあります。使う予定がなく保管環境にも自信がない場合は、状態が良いうちに査定を受けておくのが一つの考え方です。",
    },
  ];

  return (
    <>
      <JsonLd data={articleLd} />
      <JsonLd data={faqPageLd(faqs)} />
      <Breadcrumbs
        items={[
          { name: "ホーム", path: "/" },
          { name: "価値の見分け方", path: PATH },
        ]}
      />
      <article className="mx-auto max-w-site px-4 py-10 md:py-14">
        <p className="kicker mb-3">HOW TO ASSESS VALUE</p>
        <h1 className="max-w-4xl font-display text-2xl leading-relaxed text-steel-900 md:text-3xl md:leading-relaxed">
          フィルムカメラ・オールドレンズの価値の見分け方｜売る前に確認する7つのポイント
        </h1>
        <p className="mt-5 max-w-3xl text-sm leading-loose text-steel-600">
          押し入れから出てきたフィルムカメラや、譲り受けたオールドレンズ。「これは価値があるものなのか」「そのまま処分してよいのか」と迷う方は少なくありません。フィルムカメラやオールドレンズの評価は、機種名だけで決まるものではなく、生産時期・希少性・状態・付属品・動作といった複数の要素の組み合わせで見られるのが一般的です。このページでは、売る前に自分で確認できる7つのポイント、カメラの種類別・レンズのマウント別の見方、状態のセルフチェック、付属品の扱い、動作未確認品の出し方、売り時の考え方を、特定の業者に偏らない一般知識として整理します。相場や具体的な金額には触れず、「何を見れば評価の手がかりになるか」に絞って解説します。
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

        {/* 7つの要素 */}
        <section className="mt-14">
          <h2 className="section-title mb-2">価値が分かれる7つの要素</h2>
          <p className="mb-6 max-w-3xl text-sm leading-loose text-steel-600">
            フィルムカメラ・オールドレンズの評価は、一般に次の7つの要素を総合して行われるとされています。売る前にこの7項目を自分で確認して控えておくと、査定の申込時に正確な情報を伝えられ、査定結果と自分の認識のズレを減らせます。
          </p>
          <div className="space-y-5">
            {factors.map((s, i) => (
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
          <p className="mt-3 text-xs text-steel-500">
            ※ 上記は一般的な評価の考え方の整理です。実際の評価基準は業者によって異なり、相場は時期によって変動します。
          </p>
        </section>

        {/* 種類別 */}
        <section className="mt-14">
          <h2 className="section-title mb-2">フィルムカメラの種類別の見方と、名前が挙がりやすい機種の例</h2>
          <p className="mb-5 max-w-3xl text-sm leading-loose text-steel-600">
            フィルムカメラは構造によっていくつかの種類に分かれ、それぞれ確認するポイントと需要の傾向が異なります。以下に挙げる機種名は、定番として名前が挙がることの多い「例」であり、価値のある機種を網羅したものでも、これらが必ず評価されると保証するものでもありません。
          </p>
          <div className="overflow-x-auto border border-chalk-line">
            <table className="spec-table">
              <tbody>
                {filmTypes.map((r) => (
                  <tr key={r.label}>
                    <th className="w-40 md:w-56">{r.label}</th>
                    <td>{r.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-steel-500">
            ※ 機種名は一般に知られている例として挙げたものです。同じ機種でも、状態・付属品・バリエーションによって評価は大きく異なります。種類別の対応業者は<Link href="/film/" className="text-vermilion underline underline-offset-4">フィルムカメラの買取</Link>で整理しています。
          </p>
        </section>

        {/* オールドレンズ：マウント */}
        <section className="mt-14">
          <h2 className="section-title mb-2">オールドレンズの見方（1）マウントの種類</h2>
          <p className="mb-5 max-w-3xl text-sm leading-loose text-steel-600">
            オールドレンズの評価で最初に確認されるのが「どのマウントのレンズか」です。マウントによって装着できるボディが決まり、マウントアダプターを介してデジタルカメラで使いやすいかどうかが、需要の傾向に影響するとされています。主なマウントを整理します。
          </p>
          <div className="overflow-x-auto border border-chalk-line">
            <table className="spec-table">
              <tbody>
                {mounts.map((r) => (
                  <tr key={r.label}>
                    <th className="w-40 md:w-56">{r.label}</th>
                    <td>{r.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* オールドレンズ：スペック */}
        <section className="mt-14">
          <h2 className="section-title mb-2">オールドレンズの見方（2）明るさ・焦点距離・銘柄</h2>
          <p className="mb-6 max-w-3xl text-sm leading-loose text-steel-600">
            マウントの次に見られるのが、レンズの基本スペックです。レンズの前枠には、メーカー名・銘柄・焦点距離・開放F値・シリアル番号が刻まれているのが一般的で、これをそのまま控えておけば申告に必要な情報はほぼ揃います。
          </p>
          <div className="space-y-4">
            {lensPoints.map((c) => (
              <div key={c.t} className="border-l-2 border-vermilion bg-chalk-card p-5">
                <h3 className="font-display text-base text-steel-900">{c.t}</h3>
                <p className="mt-2 text-[13px] leading-loose text-steel-700">{c.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* オールドレンズ：状態 */}
        <section className="mt-14">
          <h2 className="section-title mb-2">オールドレンズの見方（3）状態のチェック</h2>
          <p className="mb-5 max-w-3xl text-sm leading-loose text-steel-600">
            スペックが同じでも、状態によって評価は大きく分かれます。以下は自分で確認できる代表的な項目です。暗い部屋で、レンズの後ろから懐中電灯やスマートフォンのライトを当て、前から斜めに覗き込むと内部の状態が見えやすくなります。
          </p>
          <div className="overflow-x-auto border border-chalk-line">
            <table className="spec-table">
              <tbody>
                {lensCondition.map((r) => (
                  <tr key={r.label}>
                    <th className="w-40 md:w-56">{r.label}</th>
                    <td>{r.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-steel-500">
            ※ 分解清掃は評価を下げるおそれがあるため、自分では行わないのが無難です。カビ・くもりのあるレンズの申告のしかたは<Link href="/old-lens/" className="text-vermilion underline underline-offset-4">オールドレンズの買取</Link>でも解説しています。
          </p>
        </section>

        {/* ボディのセルフチェック */}
        <section className="mt-14">
          <h2 className="section-title mb-2">カメラ本体の状態セルフチェック表</h2>
          <p className="mb-5 max-w-3xl text-sm leading-loose text-steel-600">
            カメラ本体は、外観だけでなく機構部の動作が評価に関わります。以下の項目を確認して、「動く」「動かない」「未確認」のいずれかを控えておくと、申告がスムーズです。電池が必要な機種は、できれば新しい電池で確認してください。
          </p>
          <div className="overflow-x-auto border border-chalk-line">
            <table className="spec-table">
              <tbody>
                {bodyChecks.map((r) => (
                  <tr key={r.label}>
                    <th className="w-40 md:w-56">{r.label}</th>
                    <td>{r.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-steel-500">
            ※ 固着した部品を無理に動かすと破損のおそれがあります。動かない場合は無理をせず、「未確認」または「動作不良」として申告してください。
          </p>
        </section>

        {/* 付属品 */}
        <section className="mt-14">
          <h2 className="section-title mb-2">付属品の扱い</h2>
          <p className="mb-6 max-w-3xl text-sm leading-loose text-steel-600">
            フィルムカメラやオールドレンズは、本体だけでなく付属品も評価の対象になることがあります。一般に、純正の付属品が揃っているほど評価の面で有利になりやすいとされていますが、揃っていないからといって売れないわけではありません。
          </p>
          <div className="space-y-4">
            {accessories.map((c) => (
              <div key={c.t} className="border-l-2 border-vermilion bg-chalk-card p-5">
                <h3 className="font-display text-base text-steel-900">{c.t}</h3>
                <p className="mt-2 text-[13px] leading-loose text-steel-700">{c.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 動作未確認 */}
        <section className="mt-14">
          <h2 className="section-title mb-2">「動作未確認」でも申告して出すという考え方</h2>
          <p className="mb-5 max-w-3xl text-sm leading-loose text-steel-600">
            フィルムカメラやオールドレンズは、製造から数十年が経っているものが多く、動作を完全に確認できないことは珍しくありません。また、フィルムを入れて実際に撮影して確認するのは手間も費用もかかります。そのため、業者側も「動作未確認」という申告を前提に査定を行うことがあるとされています。
          </p>
          <div className="border border-chalk-line bg-chalk-card p-5">
            <h3 className="font-display text-base text-steel-900">正直な申告が結果的にスムーズ</h3>
            <p className="mt-2 text-[13px] leading-loose text-steel-700">
              自分で確認できた範囲を「シャッターは切れるが露出計は未確認」「巻き上げは動くが低速シャッターが粘る」のように具体的に申告すれば、業者側は実機確認の結果と照らし合わせて評価できます。逆に、動作不良を隠して「完動品」と申告すると、実機確認で発覚したときに減額やキャンセルの対応が必要になり、かえって手間が増えるのが一般的です。壊れているものやカビのあるものでも、修理や部品取りを前提に受け付けている業者があります。受付条件は<Link href="/broken/" className="text-vermilion underline underline-offset-4">壊れた・ジャンク・カビありを売る</Link>で整理しています。
            </p>
          </div>
        </section>

        {/* 売り時 */}
        <section className="mt-14">
          <h2 className="section-title mb-2">売り時の考え方（一般論）</h2>
          <p className="mb-5 max-w-3xl text-sm leading-loose text-steel-600">
            「今が売り時か」という問いに、断定できる答えはありません。フィルムカメラ・オールドレンズの相場は、需要の変化、為替、フィルムや現像サービスの供給状況、メディアでの取り上げられ方などによって変動するとされており、将来の値動きを予測することはできません。そのうえで、判断の材料になる一般的な考え方を挙げます。
          </p>
          <div className="space-y-4">
            <div className="border-l-2 border-vermilion bg-chalk-card p-5">
              <h3 className="font-display text-base text-steel-900">状態は保管中にも変化する</h3>
              <p className="mt-2 text-[13px] leading-loose text-steel-700">
                カビやくもりは湿度の高い環境で進行し、モルトやグリスは時間とともに劣化し、電池は液漏れを起こすことがあります。防湿庫などの適切な保管環境がない場合、「持っておく」ことが状態の悪化につながる可能性があります。使う予定がないなら、状態が良いうちに査定を受けておくのが一つの考え方です。
              </p>
            </div>
            <div className="border-l-2 border-vermilion bg-chalk-card p-5">
              <h3 className="font-display text-base text-steel-900">まとめて出すか、分けて出すか</h3>
              <p className="mt-2 text-[13px] leading-loose text-steel-700">
                ボディとレンズ、付属品はセットで評価される場合と、個別に評価される場合があります。遺品整理などで台数が多いときは、まとめて査定を依頼する方が手間が少ない一方、個別に価値の高いものが混ざっている可能性もあります。まずは全体の型番リストを作り、業者に相談するのが現実的です。台数が多い場合の進め方は<Link href="/situation/tairyou/" className="text-vermilion underline underline-offset-4">大量のカメラをまとめて売る</Link>で解説しています。
              </p>
            </div>
            <div className="border-l-2 border-vermilion bg-chalk-card p-5">
              <h3 className="font-display text-base text-steel-900">複数の査定を比べる</h3>
              <p className="mt-2 text-[13px] leading-loose text-steel-700">
                同じカメラでも、業者の得意分野や販路によって評価は異なるとされています。売り時を悩むより、複数の業者に同じ条件で査定を依頼し、評価の傾向を見て判断する方が現実的です。査定料・送料・返送料・キャンセル条件は業者ごとに違うため、申込前に確認しておきましょう。
              </p>
            </div>
          </div>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link href="/compare/" className="btn-primary">買取業者の条件を比較表で見る</Link>
            <Link href="/shindan/" className="btn-ghost">売り方診断で確認する</Link>
          </div>
        </section>

        {/* FAQ */}
        <section className="mt-14">
          <h2 className="section-title mb-6">価値の見分け方でよくある質問</h2>
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
              <Link href="/guide/uru-mae/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">カメラ・レンズを売る前の準備</span>
                <span className="mt-1 block text-xs text-steel-500">付属品・データ削除・状態申告・梱包のコツ</span>
              </Link>
            </li>
            <li>
              <Link href="/film/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">フィルムカメラの買取</span>
                <span className="mt-1 block text-xs text-steel-500">一眼レフ・レンジファインダー・二眼レフ・中判の対応業者</span>
              </Link>
            </li>
            <li>
              <Link href="/old-lens/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">オールドレンズの買取</span>
                <span className="mt-1 block text-xs text-steel-500">マウント別の見方とレンズ単体を受け付ける業者</span>
              </Link>
            </li>
            <li>
              <Link href="/broken/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">壊れた・ジャンク・カビありを売る</span>
                <span className="mt-1 block text-xs text-steel-500">動作未確認品・故障品の申告のコツと受付業者</span>
              </Link>
            </li>
            <li>
              <Link href="/digital/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">デジタル一眼・ミラーレスの買取</span>
                <span className="mt-1 block text-xs text-steel-500">シャッター回数・付属品・データ削除の準備</span>
              </Link>
            </li>
            <li>
              <Link href="/situation/ihin/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">遺品のカメラを売る</span>
                <span className="mt-1 block text-xs text-steel-500">故人のカメラ・レンズを整理するときの進め方</span>
              </Link>
            </li>
            <li>
              <Link href="/situation/tairyou/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">大量のカメラをまとめて売る</span>
                <span className="mt-1 block text-xs text-steel-500">台数が多いときの整理と出張・宅配の使い分け</span>
              </Link>
            </li>
            <li>
              <Link href="/guide/erabikata/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">カメラ買取業者の選び方</span>
                <span className="mt-1 block text-xs text-steel-500">査定料・送料・返送料・キャンセル条件の見方</span>
              </Link>
            </li>
            <li>
              <Link href="/guide/trouble/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">買取トラブルと相談先</span>
                <span className="mt-1 block text-xs text-steel-500">減額・返送・連絡不通のときの対処</span>
              </Link>
            </li>
            <li>
              <Link href="/compare/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">買取業者の統一比較表</span>
                <span className="mt-1 block text-xs text-steel-500">査定料・送料・返送料・入金を同じ物差しで比較</span>
              </Link>
            </li>
          </ul>
        </section>
      </article>
    </>
  );
}
