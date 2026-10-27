import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd, { faqPageLd } from "@/components/JsonLd";
import { SITE_NAME, SITE_URL, OPERATOR } from "@/lib/site";
import { getCompany, fmt, formatChecked } from "@/lib/companies";

const TITLE = "カビ・くもり・バルサム切れのあるレンズの売却｜症状の見分け方・申告方法・宅配前の確認事項";
const DESC =
  "レンズの白い筋やもやがカビ・くもり・バルサム切れのいずれかを見分ける方法、清掃・分解を控えるべき理由、症状の申告方法、故障品の受付可否・値段が付かない場合の扱い・返送料を、公式サイトの一次確認にもとづきご説明します。";
const PATH = "/broken/lens-kabi/";
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

/** 故障・カビに関する公式記載を引用する社（受付を明記する社と、不可・制限を明記する社） */
const BROKEN_ROWS = ["daikokuya", "kitamura", "uriel", "camera-kaitoriyasan", "camera-takakuureru", "arrows", "janpara"];
/** 宅配買取の返送料の記載を並べる社（受付可否とは別の項目） */
const HENSOU_ROWS = ["daikokuya", "camera-kaitoriyasan", "camera-takakuureru", "arrows", "janpara", "naniwa", "kitamura", "fujiya", "rakuuru"];

export default function LensKabiPage() {
  const daikokuya = getCompany("daikokuya");
  const uriel = getCompany("uriel");
  const kaitoriyasan = getCompany("camera-kaitoriyasan");
  const takakuureru = getCompany("camera-takakuureru");
  const arrows = getCompany("arrows");
  const janpara = getCompany("janpara");

  const conclusions = [
    "レンズの中に見える白いものは、カビ・くもり・バルサム切れ・チリ・拭き傷のどれかであることが多いものの、見た目だけで確実に見分けるのは専門家でも難しい場合があります。症状の名称を特定することよりも、「どこに・どのくらい・どのように見えるか」を記録することが重要です。",
    "確認には、明るいライトでレンズを透かす方法が一般的です。正面から見るだけでなく、ライトの角度を変えながら覗くと、糸状の筋、面全体のもや、縁から入り込む模様、点状の粒などの違いを確認しやすくなります。",
    "ご自身で拭いたり分解したりすることは避けてください。一般に、分解の跡や光軸のずれ、拭き傷が加わると、元の症状より評価が下がるおそれがあるとされています。清掃や修理が可能かどうかは、店や修理業者に相談して判断します。",
    "申告は、症状・位置・範囲を写真と文章の両方で伝えます。「前玉の縁に白い筋が数本」「中玉付近にうっすらもや」のように記載すると、実物との食い違いを減らせます。",
    "宅配で送る前には、故障品やカビありの品を受け付けると公式に明記しているか、値段が付かなかったときに返却か処わかを選べるか、キャンセル時の返送料を誰が負担するかを確認します。掲載社の間でも扱いは明確に異なります。",
  ];

  const symptoms = [
    {
      label: "カビ",
      look: "糸状・放射状・網目状に広がる白っぽい筋や、綿のようなかたまりに見えることがあるとされています。点から枝分かれして伸びる形が、特徴として挙げられることの多い症状です。",
      angle: "ライトで透かし、角度を少しずつ変えると、筋の形が浮かび上がることがあります。レンズの縁の方や、レンズとレンズの間に見えることもあります。",
      write: "「後玉の縁に放射状の白い筋が一か所」「前玉から覗くと中の方に綿状のものが見える」など、形と位置を記載します。",
    },
    {
      label: "くもり",
      look: "特定の形がなく、面全体または一部に白いもやがかかったように見える状態です。一見きれいでも、強い光を通して初めてわかる程度のこともあります。",
      angle: "暗い部屋で強めのライトを正面から通すと、光の通り道が白っぽくかすんで見えることがあります。明るい場所では見落としやすい症状です。",
      write: "「ライトを通すと全体にうっすら白いもや」「中央付近だけ薄くくもって見える」など、強さと範囲を記載します。",
    },
    {
      label: "バルサム切れ",
      look: "貼り合わせたレンズの接着面がはがれかけた状態を指す言葉として使われます。縁の方から虹色の模様、泡のような模様、薄く白い輪のようなものが入り込んで見えることがあるとされています。",
      angle: "ライトを斜めから当て、レンズの縁の方をゆっくり見回すと見つけやすいとされています。カビやくもりと見分けにくいことがあります。",
      write: "「縁の一部に虹色の模様」「外周に沿って薄い白い輪」など、見えたままを記載します。断定できない場合は、症状の名称は記載しません。",
    },
    {
      label: "チリ・ホコリ",
      look: "点々とした小さな粒として見えるものです。古いレンズでは内部にある程度入っていることが一般的とされ、少量であれば写りへの影響は限られるとする見方があります。",
      angle: "ライトで透かすと、光る点や黒い点として見えます。レンズを傾けても形が変わらず、筋やもやにはならないのが違いです。",
      write: "「内部に細かいチリが数点」「粒が多めに見える」など、数や量の目安を記載します。",
    },
    {
      label: "拭き傷・コーティングの傷み",
      look: "レンズの表面に、細い線状の傷や、光の当たり方で見えるこすれた跡、コーティングがまだらに薄くなったような跡が見える状態です。過去の清掃で付いたものであることも多いとされます。",
      angle: "レンズの内部ではなく表面にあるため、ライトを表面で反射させるように斜めから当てると見えやすくなります。",
      write: "「前玉表面に細い線状の拭き傷が数本」「後玉表面にこすれたような跡」など、表面か内部かを分けて記載します。",
    },
  ];

  const checkSteps = [
    {
      t: "やや暗めの部屋と光の強いライトの用意",
      d: "日中の明るい部屋では、くもりや薄い筋は背景の明るさに紛れて見えにくくなります。夜や窓の少ない部屋など、少し暗めの環境で確認する方が違いが出やすいとされています。ライトはスマートフォンのライトでも構いませんが、光が小さく強いものの方が内部を照らしやすくなります。",
    },
    {
      t: "キャップを外し、机の上でレンズを持つ",
      d: "落下を避けるため、立ったまま覗くのではなく、柔らかい布を敷いた机の上で作業します。前後のキャップを外し、レンズ面には指を触れないように、鏡筒の側面を持ちます。息を吹きかけたり、ティッシュで拭いたりすることは避けます。",
    },
    {
      t: "後ろ側からライトを当て、前から確認する",
      d: "後玉の側からライトを当て、前玉の側から覗きます。次に向きを逆にして、前玉からライトを当てて後玉の側から覗きます。両側から見ることで、症状が前寄りか後ろ寄りか、おおよその位置がわかることがあります。",
    },
    {
      t: "ライトの角度の調整",
      d: "正面からまっすぐ当てるだけでは見えない症状があります。ライトを斜めにずらしながら、レンズを少しずつ回して見ていくと、縁の方の模様や薄いもやが浮かび上がることがあります。一周分を時間をかけて確認することが重要です。",
    },
    {
      t: "絞りを開いた状態での確認",
      d: "絞りの動くレンズでは、絞りが閉じたままだと中がよく見えません。絞りリングのあるレンズは開放側に回してから覗きます。電子制御で絞りが動くレンズは、外した状態では絞りが開いていることも閉じていることもあるため、見える範囲で確認すれば十分です。無理に操作する必要はありません。",
    },
    {
      t: "確認結果のメモと写真撮影",
      d: "確認しながら、見えたものをそのままメモします。見分けがつかなかったものは「白い筋」「白いもや」「虹色の模様」のように見た目のまま記載すれば十分です。気になる箇所は、次の申告の項でご説明する方法で写真に残しておきます。",
    },
  ];

  const noDiyReasons = [
    {
      t: "分解跡による評価への影響",
      d: "レンズを分解するとねじや部品に工具の跡が残ることがあり、査定では「一度分解されたもの」として見られる場合があるとされています。症状が改善しても、分解跡の方が評価に影響するおそれがあります。",
    },
    {
      t: "光軸や組み付けのずれのおそれ",
      d: "レンズは複数のガラスを精密な位置関係で組み合わせています。一般に、専用の器具や手順なしに組み直すと、ピントの合い方や写りの偏りが生じることがあるとされています。外観からは判別できないため、後から問題になりやすい点です。",
    },
    {
      t: "拭き取りによる表面の傷",
      d: "カビやもやを拭き取ろうとして強くこすると、表面のコーティングに拭き傷が加わることがあります。内部の症状には外から拭いても届かないため、表面の傷だけが増える結果になるおそれがあります。",
    },
    {
      t: "薬剤や道具の適合性",
      d: "市販のクリーナーや溶剤は、レンズのコーティングや接着面との相性がわからないまま使用すると、状態を悪くすることがあるとされています。どの方法が適しているかは、レンズの構造や症状によって異なります。",
    },
    {
      t: "除去の可否の判断",
      d: "カビやくもりが清掃で取れるかどうか、跡が残るかどうかは、症状の進み具合やレンズの状態によって異なり、一概には判断できません。修理や清掃を検討する場合は、修理業者に見積もりを依頼して判断する方法があります。売却が決まっている場合は、現状のまま申告するのが一般的です。",
    },
  ];

  const reportPoints = [
    {
      t: "症状は見た目のまま記載する",
      d: "カビかくもりか判断できないときは、無理に症状の名称を付ける必要はありません。「白い筋」「白いもや」「虹色の模様」「点状の粒」「表面の線状の傷」など、見えたままの言葉で記載するほうが、実物との食い違いが起きにくくなります。判断がついている場合も、「カビのように見える」と記載する程度で十分です。",
    },
    {
      t: "位置は「前・中・後ろ」と「中央・縁」で記載する",
      d: "両側から透かして見た結果をもとに、前玉側・中の方・後玉側のどこに見えるかを記載します。さらに、中央付近か縁の方かを添えると、位置が伝わりやすくなります。内部か表面かの区別がつく場合は、それも記載します。",
    },
    {
      t: "範囲は数と広がりで記載する",
      d: "「一か所」「数か所」「全体」、「縁の一部」「半周ほど」「中央の小さな範囲」など、数と広がりの目安を記載します。「少し」「かなり」といった言葉だけでは伝わりにくいため、できるだけ具体的な目安に置き換えます。",
    },
    {
      t: "症状が写る角度での複数枚の撮影",
      d: "レンズの中の症状は、正面から撮るだけではほとんど写りません。暗めの部屋で後ろ側からライトを当て、斜めの角度から前玉越しに撮ると、筋やもやが写りやすくなることがあります。スマートフォンのピントがガラス面に合うように、画面上で症状の部分を軽く押してから撮ります。前玉側・後玉側の両方から、角度を変えて数枚ずつ撮影しておくことをおすすめします。",
    },
    {
      t: "外観と銘板の写真の添付",
      d: "症状の写真とは別に、レンズ全体の外観、前キャップを外した正面、型番などが書かれた銘板の部分を撮っておきます。型番はレンズの鏡筒の前側や側面、マウントの近くに刻印・印刷されていることが多いものです。読み取れない場合は「型番不明」と記載すれば差し支えありません。",
    },
    {
      t: "動作と付属品の記載",
      d: "カビやくもりの申告に加え、ピントリングや絞りの動き（固い・軽い・引っかかる）、前後のキャップやフードの有無など、確認できた範囲を添えます。確認できなかったものは「未確認」と記載すれば十分です。",
    },
  ];

  const reportExample = [
    "レンズ1本。長期間保管していたもので、動作は未確認です。",
    "後玉側からライトを当てて前から覗くと、前玉寄りの縁に白い筋のようなものが一か所見えます（カビのように見えますが判断はできていません）。",
    "中の方に、ライトを通すとうっすら白いもやが全体にかかって見えます。",
    "内部に細かいチリが数点あります。前玉表面に細い線状の拭き傷が2〜3本あります。",
    "ピントリングは回りますがやや固めです。前後のキャップあり、フードなし。型番は銘板で確認済みです。",
  ];

  const beforeShipping = [
    {
      t: "故障品・カビありの品の受付の明記",
      d: "宅配買取では、送付後に「この状態は買取対象外」と判明すると、返送の手間と時間がかかります。申し込む前に、公式サイトの案内やよくある質問で、故障品・カビ・くもりのある品を受け付けると明記しているかを確認します。明記がない場合は、申込前に症状を伝えて問い合わせることをおすすめします。下の表のとおり、掲載社の間でも、受け付けを明記する社と、不可や制限を明記する社に分かれます。",
    },
    {
      t: "値段が付かなかった場合の返却・処分の選択",
      d: "症状によっては値段が付かない場合があります。その際に返却と業者側での処分を選べるかどうかは、業者によって異なります。形見など手元に戻したい事情がある場合は、申込時にその旨を伝え、返却の希望を記載しておくと行き違いを防げます。処分を依頼する場合も、費用の有無を事前に確認しておきます。",
    },
    {
      t: "キャンセル時の返送料の負担者",
      d: "査定額に納得できずキャンセルするとき、返送料が業者負担か利用者負担かは業者によって分かれます。同じ業者でも、査定後のキャンセルと、発送前や査定前の気変わりによるキャンセル、買取対象外品の返送とで扱いが異なる場合があります。値段が付かない可能性のある品を送る場合は、特にこの点を事前にご確認ください。",
    },
    {
      t: "キャンセルの期限と契約成立の時期",
      d: "査定結果の連絡から一定時間内に返事をする必要がある業者や、承認・入金をもって契約成立とする業者があります。期限を過ぎると成立として扱われることもあるため、査定結果の連絡が来る時期に、確認できる状態にしておきます。",
    },
    {
      t: "状態を損なわない梱包",
      d: "前後のキャップを付け、緩衝材で包んで箱の中で動かないようにします。カビのある品は、他の機材と別の袋に入れてから箱に詰めると、ほかの品と直接触れずに済みます。梱包の一般的な方法は、売る前の準備のページでご説明しています。",
    },
  ];

  const spreadCare = [
    {
      t: "カビのある品とほかの機材の分離",
      d: "カビは胞子で広がるとされ、カビのあるレンズを他のレンズと同じ密閉容器に長く入れておくことは避けるべきとされています。症状を見つけた品は、別の袋や箱に分けておきます。すぐに手放す予定の場合も、分けておくことをおすすめします。",
    },
    {
      t: "同じ場所にあった機材の確認",
      d: "一本にカビが見つかった場合、同じ棚や箱、バッグに入っていた機材も、同じ環境に置かれていたことになります。ほかのレンズやボディのファインダーも、同じ方法でライトを当てて一度確認しておくと、申告漏れを防げます。",
    },
    {
      t: "革ケース・バッグ・布類の分離",
      d: "革のケースや布製のバッグ、ストラップは湿気を含みやすく、カビが生えていることがあります。レンズと一緒に密閉せず、風通しのよい場所に分けて置きます。処分するか手放すかは、それぞれ個別に判断して差し支えありません。",
    },
    {
      t: "確認後の手洗いと作業場所の清掃",
      d: "カビの付いた品を扱った後は、一般的な衛生の面から手を洗い、作業に使った布は洗うか分けておきます。体調やアレルギーに不安がある場合は、手袋やマスクを使う、無理に長時間扱わないといった配慮をしてください。",
    },
    {
      t: "発送・持ち込み時の個別梱包",
      d: "宅配で送るとき、出張買取で見てもらうとき、店に持ち込むときも、カビのある品は他の機材と別の袋に入れておきます。査定する側にとっても、症状のある品が最初からわかっていると、確認を円滑に進められます。",
    },
  ];

  const checklist = [
    "暗めの部屋で、光の強いライトを使って確認した",
    "後ろ側と前側の両方からライトを当て、角度を変えながら覗いた",
    "見分けがつかない症状は、名前を付けずに見た目のまま記録した",
    "症状が内部か表面か、前寄りか後ろ寄りか、中央か縁かをメモした",
    "症状の数と広がりを、具体的な目安で記載した",
    "レンズを拭いたり分解したりせず、現状のままにした",
    "症状が写る角度の写真と、外観・銘板の写真を撮った",
    "ピントリングや絞りの動き、付属品の有無を確認できた範囲で記載した",
    "送付先が故障品・カビありの品の受付を公式に明記しているかを確認した",
    "値段が付かない場合に返却か処わかを選べるか、費用がかかるかを確認した",
    "キャンセル時の返送料の負担者と、キャンセルの期限を確認した",
    "カビのある品を、ほかの機材と別の袋に分けた",
    "同じ場所にあった他の機材も、同じ方法で確認した",
  ];

  const faqs = [
    {
      q: "レンズの中の白いものがカビかくもりかわかりません。申告はどうすればよいですか？",
      a: "見分けがつかない場合は、無理に症状の名称を付けず、見た目のまま記載すれば十分です。「ライトを通すと前玉寄りの縁に白い筋が一か所」「中の方に全体にうっすら白いもや」のように形・位置・範囲を記載し、症状が写る角度の写真を添えます。名称を正確に特定することよりも、実物と申告が一致していることのほうが、後の食い違いを防ぐうえで重要です。",
    },
    {
      q: "カビを取ってから売った方がよいですか？",
      a: "一般には、ご自身で拭いたり分解したりせず、現状のまま申告するほうがよいとされています。分解の跡や光軸のずれ、表面の拭き傷が加わると、元の症状より評価に影響するおそれがあるためです。カビが清掃で取れるかどうかは症状やレンズの状態によって異なり、一概には判断できません。清掃や修理を検討する場合は、修理業者に相談して見積もりを依頼する方法があります。",
    },
    {
      q: "カビのあるレンズを受け付けている業者はありますか？",
      a: `掲載社では、大黒屋が「カビやくもりのあるオールドレンズもお買取りの対象です」（${formatChecked(daikokuya.confirmed_date)}確認）、カメラのキタムラが「このようなカメラも買取いたします」として「レンズにカビがあるカメラ」を掲載（2026年10月21日確認）、ウリエルがメーカー別ページで「カビ・ホコリ・曇りの有無」を査定ポイントの一つとして記載しています（${formatChecked(uriel.confirmed_date)}確認。ウリエルは出張買取・催事買取・店舗買取で、宅配買取は対応なし〈ご利用ガイドに「現在は出張買取のみの対応になります。」と記載〉）。ウリエルは「状態によっては…お値段が付かないものもございます」とも記載しています。カメラの買取屋さんは「壊れていても買取OK」と記載していますが、カビ・くもりの個別の記載は確認できませんでした（${formatChecked(kaitoriyasan.confirmed_date)}確認）。条件は変わることがあるため、申込前に各社の公式サイトでご確認ください。`,
    },
    {
      q: "ジャンク品は受け付けないと書かれている業者に送ってもよいですか？",
      a: `受付条件に合わない品を送ると、返送の手間や費用がかかることがあります。掲載社では、カメラ買取アローズがジャンク品を原則買取不可とし（一部は事前の問い合わせで買い取るケースありと記載）、キャンセル時の返送料は利用者負担としています（${formatChecked(arrows.confirmed_date)}確認）。じゃんぱらは「基本的に通常正常動作品のみ買取対象」と記載しています（${formatChecked(janpara.confirmed_date)}確認）。症状のある品は、受け付けを明記している業者を選ぶか、申込前に問い合わせることをおすすめします。`,
    },
    {
      q: "値段が付かなかったレンズは、返してもらえますか？",
      a: "返却か処わかを選べるか、返却の送料を誰が負担するかは業者によって異なります。手元に戻したい事情がある場合は、申込時に返却希望を伝えておくと行き違いを防げます。宅配買取では、査定後のキャンセルと買取対象外品の返送とで扱いが異なる業者もあるため、送る前に案内をご確認ください。",
    },
    {
      q: "カビのあるレンズを売らずに持っておきたい場合は、どうすればよいですか？",
      a: "ほかの機材と分け、湿気の少ない場所に保管するのが基本です。形見として残すか手放すかの考え方と保管の手入れは形見のカメラのページで、防湿庫やバッグごと出てきた機材の扱いは防湿庫・バッグごと整理のページでご説明しています。症状の進み具合や清掃の可否が気になる場合は、修理業者に相談する方法があります。",
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
          { name: "カビ・くもり・バルサム切れのあるレンズの売却", path: PATH },
        ]}
      />
      <article className="mx-auto max-w-site px-4 py-10 md:py-14">
        <p className="kicker mb-3">LENS FUNGUS &amp; HAZE</p>
        <h1 className="max-w-4xl font-display text-2xl leading-relaxed text-steel-900 md:text-3xl md:leading-relaxed">
          カビ・くもり・バルサム切れのあるレンズの売却｜症状の見分け方・申告方法・宅配前の確認事項
        </h1>
        <p className="mt-5 max-w-3xl text-sm leading-loose text-steel-600">
          レンズを明るい方に向けた際に、内部に白い筋やもやが見えることがあります。それがカビか、くもりか、別のものかがわからないまま手放してよいのか、拭いてから出すべきか、判断に迷う方は少なくありません。本ページでは、レンズの内部に見える症状の一般的な見分け方、ご自身で清掃・分解しないほうがよい理由、症状を写真と文章で申告する方法、宅配で送る前の確認事項をご説明します。症状の名称を特定することよりも、見えたものを正確に伝えることを重視しています。
        </p>

        {/* 冒頭の要点 */}
        <section className="mt-10 border-2 border-vermilion bg-chalk-warm p-6">
          <h2 className="font-display text-lg text-steel-900">レンズの症状の確認方法と申告・宅配前の確認事項</h2>
          <ul className="mt-4 space-y-3">
            {conclusions.map((c) => (
              <li key={c} className="flex gap-2 text-sm leading-loose text-steel-800">
                <span aria-hidden="true" className="mt-2 inline-block h-2 w-2 shrink-0 bg-vermilion" />
                {c}
              </li>
            ))}
          </ul>
        </section>

        {/* 症状の違い */}
        <section className="mt-14">
          <h2 className="section-title mb-2">カビ・くもり・バルサム切れ・チリ・拭き傷の違い</h2>
          <p className="mb-5 max-w-3xl text-sm leading-loose text-steel-600">
            レンズに見える症状は、一般に5つに分けて説明されます。ただし、いずれも一般的な見え方の目安であり、実際には複数の症状が重なっていたり、見分けにくかったりします。判断できない場合は、右の列の「申告での記載例」に従って見た目のまま記録します。
          </p>
          <div className="overflow-x-auto border border-chalk-line">
            <table className="spec-table">
              <thead>
                <tr>
                  <th className="w-28">症状</th>
                  <th>一般的な見え方</th>
                  <th>見つけやすい確認のしかた</th>
                  <th>申告での記載例</th>
                </tr>
              </thead>
              <tbody>
                {symptoms.map((s) => (
                  <tr key={s.label}>
                    <th className="w-28">{s.label}</th>
                    <td>{s.look}</td>
                    <td>{s.angle}</td>
                    <td>{s.write}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-steel-500">
            ※ 見え方は一般的な説明で、症状の特定や進み具合の判断を示すものではありません。気になる場合は、店や修理業者にご相談ください。
          </p>
        </section>

        {/* 確認手順 */}
        <section className="mt-14">
          <h2 className="section-title mb-2">ライトで透かして確認する手順</h2>
          <p className="mb-6 max-w-3xl text-sm leading-loose text-steel-600">
            特別な道具は必要ありません。光の強いライトとやや暗めの部屋があれば、多くの症状はおおよその位置と広がりまで確認できます。確認の目的は、症状を改善することではなく、正確に記録することです。
          </p>
          <div className="space-y-5">
            {checkSteps.map((s, i) => (
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
            ※ ボディのファインダーにも、同じ方法でくもりやカビのような症状が見えることがあります。ボディや動作の故障を含めた申告の全体像は<Link href="/broken/" className="text-vermilion underline underline-offset-4">壊れた・ジャンク・カビありを売る</Link>でご説明しています。
          </p>
        </section>

        {/* 清掃・分解しない */}
        <section className="mt-14">
          <h2 className="section-title mb-2">ご自身での清掃・分解を控えるべき理由</h2>
          <p className="mb-6 max-w-3xl text-sm leading-loose text-steel-600">
            症状を見つけると、清掃してから出したいと考えることがあります。ただし、売却が決まっているレンズについては、手を加えずに現状のまま申告するのが一般的な考え方です。理由は次のとおりです。
          </p>
          <div className="space-y-4">
            {noDiyReasons.map((c) => (
              <div key={c.t} className="border-l-2 border-vermilion bg-chalk-card p-5">
                <h3 className="font-display text-base text-steel-900">{c.t}</h3>
                <p className="mt-2 text-[13px] leading-loose text-steel-700">{c.d}</p>
              </div>
            ))}
          </div>
          <p className="mt-4 max-w-3xl text-[13px] leading-loose text-steel-700">
            表面のほこりが気になる場合も、ブロアーで軽く飛ばす程度にとどめます。売る前のクリーニングをどこまでにするかの考え方は、
            <Link href="/guide/uru-mae/" className="text-vermilion underline underline-offset-4">売る前の準備</Link>
            のページでご説明しています。
          </p>
        </section>

        {/* 申告のしかた */}
        <section className="mt-14">
          <h2 className="section-title mb-2">症状・位置・範囲の申告方法（写真と文章）</h2>
          <p className="mb-6 max-w-3xl text-sm leading-loose text-steel-600">
            申告の目的は、実物を確認する前の査定担当者に、ご自身が確認した内容をそのまま伝えることです。実際より良く見せる必要も、悪く記載する必要もありません。症状・位置・範囲の3点をそろえることで、査定時の食い違いが起きにくくなります。
          </p>
          <div className="space-y-5">
            {reportPoints.map((s, i) => (
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
          <div className="mt-6 border border-chalk-line bg-chalk-warm p-5">
            <p className="font-display text-sm text-steel-900">申告文の例（見た目のまま記載した場合）</p>
            <ul className="mt-3 space-y-2">
              {reportExample.map((line) => (
                <li key={line} className="flex gap-2 text-[13px] leading-loose text-steel-700">
                  <span aria-hidden="true" className="mt-2 inline-block h-1.5 w-1.5 shrink-0 bg-vermilion" />
                  {line}
                </li>
              ))}
            </ul>
            <p className="mt-3 text-xs text-steel-500">
              ※ 例文は記載方法の参考です。確認できなかった項目は「未確認」と記載すれば差し支えありません。
            </p>
          </div>
        </section>

        {/* 宅配前の確認 */}
        <section className="mt-14">
          <h2 className="section-title mb-2">宅配で送る前の確認事項</h2>
          <p className="mb-6 max-w-3xl text-sm leading-loose text-steel-600">
            症状のあるレンズは、値段が付くかどうかが実物を確認するまでわからないことがあります。そのため、送る前に受付条件と、値段が付かなかった場合・キャンセルした場合の扱いを確認しておくことが重要です。
          </p>
          <div className="space-y-4">
            {beforeShipping.map((c) => (
              <div key={c.t} className="border-l-2 border-vermilion bg-chalk-card p-5">
                <h3 className="font-display text-base text-steel-900">{c.t}</h3>
                <p className="mt-2 text-[13px] leading-loose text-steel-700">{c.d}</p>
              </div>
            ))}
          </div>

          <h3 className="mt-10 font-display text-base text-steel-900">掲載社の故障品・カビありに関する公式記載</h3>
          <p className="mt-2 mb-4 max-w-3xl text-[13px] leading-loose text-steel-700">
            公式サイトで故障品やカビ・くもりの扱いを確認できた社の記載です。受け付けを明記する社と、不可や制限を明記する社を掲載しています。ここにない掲載社は、確認日時点で故障品・カビの扱いの明記を公式サイトで確認できなかった社です。
          </p>
          <div className="overflow-x-auto border border-chalk-line">
            <table className="spec-table">
              <thead>
                <tr>
                  <th className="w-36">サービス</th>
                  <th>故障・カビ・ジャンクの扱い（公式記載）</th>
                  <th className="w-40">買取方法</th>
                  <th className="w-28">確認日</th>
                </tr>
              </thead>
              <tbody>
                {BROKEN_ROWS.map((slug) => {
                  const c = getCompany(slug);
                  return (
                    <tr key={slug}>
                      <th className="w-36">
                        <Link href={`/kaitori/${c.slug}/`} className="text-vermilion underline underline-offset-4">
                          {c.name}
                        </Link>
                      </th>
                      <td>{fmt(c.broken)}</td>
                      <td>{fmt(c.service_type)}</td>
                      <td>{formatChecked(c.confirmed_date)}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <p className="mt-3 max-w-3xl text-[13px] leading-loose text-steel-700">
            カビ・くもりについて個別に記載しているのは、大黒屋（「カビやくもりのあるオールドレンズもお買取りの対象です」、{formatChecked(daikokuya.confirmed_date)}確認）、カメラのキタムラ（「このようなカメラも買取いたします」として「レンズにカビがあるカメラ」を掲載、2026年10月21日確認）とウリエル（メーカー別ページで「カビ・ホコリ・曇りの有無」を査定ポイントの一つとして記載、{formatChecked(uriel.confirmed_date)}確認）です。ウリエルは出張買取・催事買取・店舗買取で、宅配買取には対応していません（公式のご利用ガイドに「現在は出張買取のみの対応になります。」と記載）。カメラの買取屋さん（{formatChecked(kaitoriyasan.confirmed_date)}確認）とカメラ高く売れるドットコム（{formatChecked(takakuureru.confirmed_date)}確認）は壊れた品についての記載がありますが、カビ・くもりの個別記載は確認できませんでした。一方、カメラ買取アローズはジャンク品を原則買取不可とし（一部は事前の問い合わせで買い取るケースありと記載、{formatChecked(arrows.confirmed_date)}確認）、じゃんぱらは「基本的に通常正常動作品のみ買取対象」と記載しています（{formatChecked(janpara.confirmed_date)}確認）。
          </p>

          <h3 className="mt-10 font-display text-base text-steel-900">宅配買取のキャンセル時の返送料（公式記載）</h3>
          <p className="mt-2 mb-4 max-w-3xl text-[13px] leading-loose text-steel-700">
            宅配買取を案内している掲載社の、キャンセル時の返送料についての記載です。これは故障品・カビありの受付可否とは別の項目で、この表に掲載されていることは、症状のあるレンズを受け付けることを意味しません。
          </p>
          <div className="overflow-x-auto border border-chalk-line">
            <table className="spec-table">
              <thead>
                <tr>
                  <th className="w-36">サービス</th>
                  <th>返送料（公式記載）</th>
                  <th>キャンセル（公式記載）</th>
                  <th className="w-28">確認日</th>
                </tr>
              </thead>
              <tbody>
                {HENSOU_ROWS.map((slug) => {
                  const c = getCompany(slug);
                  return (
                    <tr key={slug}>
                      <th className="w-36">
                        <Link href={`/kaitori/${c.slug}/`} className="text-vermilion underline underline-offset-4">
                          {c.name}
                        </Link>
                      </th>
                      <td>{fmt(c.hiyou.hensou)}</td>
                      <td>{fmt(c.cancel)}</td>
                      <td>{formatChecked(c.confirmed_date)}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-steel-500">
            ※ 各社の条件は確認日時点で公式サイトに記載されていた内容です。変更されることがあるため、申込前に必ず各社の公式サイトと規約でご確認ください。買取金額は機種・状態・時期により異なり、当サイトは金額を掲載していません。
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link href="/broken/" className="btn-primary">故障品受付を明記する業者の一覧を見る</Link>
            <Link href="/compare/" className="btn-ghost">返送料を含む統一比較表を見る</Link>
          </div>
        </section>

        {/* 広げない配慮 */}
        <section className="mt-14">
          <h2 className="section-title mb-2">ほかの機材へのカビの拡大防止</h2>
          <p className="mb-6 max-w-3xl text-sm leading-loose text-steel-600">
            カビのあるレンズが見つかったときは、売るかどうかとは別に、手元にあるほかの機材への影響にも配慮が必要です。いずれも一般的な対策で、特別な道具は必要ありません。
          </p>
          <div className="space-y-4">
            {spreadCare.map((c) => (
              <div key={c.t} className="border-l-2 border-vermilion bg-chalk-card p-5">
                <h3 className="font-display text-base text-steel-900">{c.t}</h3>
                <p className="mt-2 text-[13px] leading-loose text-steel-700">{c.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 保管し続ける場合 */}
        <section className="mt-14">
          <h2 className="section-title mb-2">売却せずに手元に保管する場合</h2>
          <p className="max-w-3xl text-sm leading-loose text-steel-600">
            症状を確認したうえで、すぐには手放さないと判断する場合もあります。判断を急ぐ必要はありません。その場合は、ほかの機材と分けたうえで、湿気の少ない場所に置くことが基本になります。形見のカメラを使う・保管する・手放すの考え方と、保管し続ける場合の湿気・電池・点検の手入れは形見のカメラのページで、防湿庫やバッグごと出てきた機材の区分とカビの扱いは防湿庫・バッグごと整理のページでご説明しています。清掃や修理で状態を戻せるかどうかが気になる場合は、修理業者に相談して判断する方法があります。
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link href="/situation/katami-camera/" className="btn-primary">形見のカメラを残すか手放すかを見る</Link>
            <Link href="/situation/boushitsuko-seiri/" className="btn-ghost">防湿庫・バッグごと出てきた場合を見る</Link>
          </div>
        </section>

        {/* チェックリスト */}
        <section className="mt-14">
          <h2 className="section-title mb-6">カビ・くもりのあるレンズを送る前のチェックリスト</h2>
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
          <h2 className="section-title mb-6">カビ・くもりのあるレンズに関するよくある質問</h2>
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
                <span className="mt-1 block text-xs text-steel-500">故障品受付を明記する業者と申告方法</span>
              </Link>
            </li>
            <li>
              <Link href="/old-lens/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">オールドレンズの買取</span>
                <span className="mt-1 block text-xs text-steel-500">マウントの特定とレンズ単体の受付業者</span>
              </Link>
            </li>
            <li>
              <Link href="/guide/uru-mae/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">売る前の準備</span>
                <span className="mt-1 block text-xs text-steel-500">付属品・クリーニング・梱包の一般的な手順</span>
              </Link>
            </li>
            <li>
              <Link href="/situation/boushitsuko-seiri/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">防湿庫・カメラバッグごと出てきた機材の整理</span>
                <span className="mt-1 block text-xs text-steel-500">収納ごとの区分方法とカビの見分け方</span>
              </Link>
            </li>
            <li>
              <Link href="/situation/katami-camera/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">形見のカメラを残すか手放すか</span>
                <span className="mt-1 block text-xs text-steel-500">保管し続ける場合の手入れの基本</span>
              </Link>
            </li>
            <li>
              <Link href="/film/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">フィルムカメラの買取</span>
                <span className="mt-1 block text-xs text-steel-500">一眼レフ・レンジファインダー・二眼レフ・中判</span>
              </Link>
            </li>
            <li>
              <Link href="/guide/trouble/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">トラブル時の対処</span>
                <span className="mt-1 block text-xs text-steel-500">査定後の減額・返送・相談先の一般知識</span>
              </Link>
            </li>
            <li>
              <Link href="/compare/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">買取業者の統一比較表</span>
                <span className="mt-1 block text-xs text-steel-500">送料・返送料・故障品対応を同じ基準で比較</span>
              </Link>
            </li>
            <li>
              <Link href="/broken/dengen-hairanai/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">電源が入らない・エラーが出るカメラの売却</span>
                <span className="mt-1 block text-xs text-steel-500">動作未確認と故障の区別と申告</span>
              </Link>
            </li>
          </ul>
        </section>

        <p className="mt-12 text-xs leading-loose text-steel-500">
          ※ 本ページの記載は{PAGE_DATE_LABEL}時点の一般的な情報です。症状の見え方の説明は一般知識であり、カビやくもりの特定、清掃・修理の可否、写りへの影響を判断するものではありません。掲載社の条件は各社の確認日時点の公式サイトの記載に基づきます。買取金額は機種・状態・時期により異なります。
        </p>
      </article>
    </>
  );
}
