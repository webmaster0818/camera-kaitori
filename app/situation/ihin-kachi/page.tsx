import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd, { faqPageLd } from "@/components/JsonLd";
import { SITE_NAME, SITE_URL, OPERATOR } from "@/lib/site";

const TITLE = "故人のカメラの価値がわからないときの調べ方｜型番・状態・付属品を家族で確認する手順";
const DESC =
  "遺品のカメラやレンズが何であるか、どの程度の状態なのかをご家族が把握する手順を整理しています。型番や刻印・銘板の探し方、付属品・元箱の扱い、懐中電灯で透かすレンズの見方、動かさずに確認できること、写真とメモの残し方、複数の専門店へ同じ情報で相談する進め方をご説明します。";
const PATH = "/situation/ihin-kachi/";
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

export default function IhinKachiPage() {
  const conclusions = [
    "「価値」をご家族が判断する必要はありません。ご家族が行えるのは、機材の名称、状態、一緒に残っている付属品を、見たままに記録するところまでです。評価は、専門店に確認を依頼することで明らかになります。",
    "最初に探すのは名前と番号です。カメラ本体の前面・上面・底面、レンズの先端や側面には、名称や型番、製造番号が刻印や銘板で入っていることが多く、これらを把握することで、相談の精度が大きく向上します。",
    "調べる段階では、「動かさない・拭かない・分けない」ことが基本です。通電や巻き上げ、清掃は状態を変えてしまうことがあります。元箱や説明書も、本体と組にしたまま置いておきます。",
    "調べた内容は、写真と一覧のメモにして残します。一台ずつ番号を付け、全体・刻印・付属品を撮影しておくことで、ご家族の間で共有でき、相談先にもそのままお渡しいただけます。",
    "不明な点が残る場合は、専門店や複数の業者に、同じ写真と同じ一覧で相談します。不明な項目は「不明」と記載したままで差し支えありません。相談した場合でも、売却を決める必要はありません。",
  ];

  const firstRules = [
    {
      label: "動かさない",
      value:
        "電池を入れて電源を入れる、フィルムの巻き上げレバーを回す、シャッターを切る、ピントリングや絞りを回すといった操作は、長く使われていなかった機材にとって負担になることがあります。機材を特定する段階では、目視で確認できることが多くあります。",
    },
    {
      label: "拭かない・洗わない",
      value:
        "ほこりやくもりが気になっても、レンズを布でこすったり、アルコールや洗剤を使ったりすることは避けてください。汚れの種類によっては、拭くことで表面に傷を残すことがあるとされます。状態の見え方も変わってしまうため、見つけたときのままの状態で記録を取ります。",
    },
    {
      label: "分けない・捨てない",
      value:
        "元箱、説明書、保証書、ケース、キャップ、ストラップ、充電器など、本体と一緒に出てきたものは、対応関係がわからなくても、組にしたまま保管します。いったん分けてしまうと、後から対応関係を照合することが難しくなります。箱や紙類は処分せず、まとめて取っておきます。",
    },
    {
      label: "急がない",
      value:
        "調べることと、手放すかどうかを決めることは別の作業です。機材が特定できた後も、残すか手放すかは時間をかけてご検討ください。ご家族の気持ちの整理がついていない段階では、調べる作業までにとどめる進め方もあります。",
    },
  ];

  const whereToLook = [
    {
      t: "カメラ本体の前面と上面",
      d: "レンズの取り付け部の周り、またはボディ上面の軍艦部と呼ばれるあたりに、メーカー名や機種の名称が刻まれていることが多くあります。ロゴだけが大きく入っていて、機種名は小さく別の位置に入っていることもあるため、正面だけでなく、上方や斜めからも確認します。",
    },
    {
      t: "カメラ本体の底面と銘板",
      d: "底面には、製造番号（シリアルナンバー）や型番が刻印されていたり、銘板と呼ばれる小さな板やシールが貼られていたりすることが多くあります。デジタルカメラでは、底面のシールに型番・製造番号・認証マークなどがまとめて書かれているのが一般的です。フィルムカメラでは、背面や上面の端に番号だけが刻まれている場合もあります。",
    },
    {
      t: "電池室・フィルム室の周り",
      d: "電池ぶたの内側や、グリップの付け根付近に型番が書かれていることもあります。ただし、フィルムカメラの裏ぶたは、撮影途中のフィルムが入っている可能性があるため、型番を探す目的で開けないでください。フィルムの確認については、専用のページで扱っています。",
    },
    {
      t: "レンズの先端（前玉の周りのリング）",
      d: "交換レンズの多くは、前玉を囲むリングにレンズの名称が書かれています。一般に、「mm」の付いた数字が焦点距離、「1:」に続く数字が明るさ（開放F値）を表すとされ、あわせてメーカー名や製造番号が入っていることがあります。数字が二つ並んでいる場合は、ズームレンズの焦点距離の範囲であることが一般的です。",
    },
    {
      t: "レンズの側面と後ろ側",
      d: "鏡胴の側面に名称や製造番号が入っているものや、マウント（カメラに取り付ける金属の部分）の近くに刻印があるものもあります。レンズを本体から外す作業は、慣れていないとマウントを傷める原因になるため、無理に外さず、付いたままで見える範囲を確認します。",
    },
    {
      t: "ケース・キャップ・元箱",
      d: "本体に文字が読み取れない場合でも、元箱の側面、説明書の表紙、革ケースの内側などに機種の名称が書かれていることがあります。レンズキャップやフードにメーカー名が入っていることもあり、手がかりの一つになります。ただし、ケースや箱が別の機材のものと入れ替わっている可能性もあるため、決め手としては扱わず、参考情報として記録します。",
    },
  ];

  const readTips = [
    "小さな刻印は、肉眼で無理に読もうとせず、スマートフォンで撮影して画面で拡大すると読み取りやすくなります。光を斜めから当てると、刻まれた文字の影が出て見えやすくなります。",
    "読めない文字は推測で埋めず、読める部分だけを書き、読めない部分は「・」や「？」で残しておきます。誤った書き写しよりも、空欄のほうが後の確認に支障が生じにくいためです。",
    "製造番号のシールや刻印は、はがしたり削ったりしないでください。掲載社の中には、製造番号が消えている、または判別できない機材は買い取れないと公式に記載している社があります（下記の囲みを参照）。",
    "調べた名称をインターネットで検索すると、機材の種類について見当がつくことがあります。ただし、検索結果の情報は時期や状態の前提がそれぞれ異なるため、お手元の機材の評価と同一視しないようご注意ください。",
  ];

  const accessories = [
    {
      t: "元箱と中の仕切り",
      d: "元箱は、中の仕切りや緩衝材、箱に入っていた小袋も含めて、そのまま保管します。箱に貼られたシールや印字に、型番や付属品の一覧が書かれていることがあります。箱がつぶれていても処分せず、本体と組にしておきます。",
    },
    {
      t: "説明書・保証書・購入時の書類",
      d: "説明書は機種の特定に役立つ手がかりです。保証書や購入時のレシート・納品書は、購入した時期や販売店がわかる資料になります。一方で、保証書には故人の氏名や住所が書かれていることがあるため、相談先に渡すかどうか、写真に写すかどうかはご家族で相談して決めます。個人情報の部分を隠して撮る方法もあります。",
    },
    {
      t: "キャップ・フード・ケース・ストラップ",
      d: "レンズの前後のキャップやフードは、どのレンズのものかわからなくても、近くにあったもの同士をまとめておきます。革のケースやストラップは、カビや劣化で本体より先に傷んでいることがあるため、本体とは袋を分けて、同じ番号を付けて保管すると、混同を防げます。",
    },
    {
      t: "バッテリー・充電器・ケーブル類",
      d: "デジタルカメラでは、バッテリーと充電器がそろっているかどうかが、扱いを左右することがあります。形の似た充電器が何台も出てくることがあるため、本体の近くにあったものを組にして記録します。液漏れしている電池や膨らんだバッテリーは、素手で触らず、お住まいの自治体の案内に従って扱ってください。",
    },
  ];

  const lensSteps = [
    {
      t: "明るい場所で、懐中電灯を用意する",
      d: "レンズの内部は、室内の照明の下で覗くだけでは確認しにくいものです。スマートフォンのライトや小型の懐中電灯を用意し、レンズの後ろ側から光を当てて、前側から覗き込みます（逆向きでも構いません）。本体に付いたままのレンズは、無理に外さず、前から光を当てて斜めに覗くだけでも確認できる場合があります。",
    },
    {
      t: "カビに見えるもの",
      d: "レンズの内側に、糸くずのような線や、細い根が広がったような網目、白っぽい点が集まった模様が見える場合、一般にはカビの可能性があるとされます。見た目だけでカビかどうかを断定することはできないため、「網目状の模様が見える」のように、見えたままを書き留めます。",
    },
    {
      t: "くもりに見えるもの",
      d: "光を当てたときに、全体がうっすら白く霞んで見える、光の筋がぼやけて広がる場合は、くもりと呼ばれる状態であることがあります。表面の汚れなのか内部の問題なのかは、外から見ただけでは判断がつきにくいため、これも見えたままを記録します。",
    },
    {
      t: "キズ・ほこり・点",
      d: "レンズ表面の細い線状のキズ、内部に浮いている小さな点のようなほこりは、古いレンズでは珍しくないとされます。どの位置に、どのくらいの数があるかを大まかに記録します。表面を指で触ると皮脂が付くため、触らずに観察します。",
    },
    {
      t: "外側の状態",
      d: "鏡胴の塗装のはがれ、へこみ、フィルターを付けるねじ部分の変形、マウント部分の傷なども、目視で確認できる範囲で記録します。落下の跡のように見えるへこみがある場合は、内部に影響が出ている可能性もあるため、その旨をメモに残しておきます。",
    },
  ];

  const canCheck = [
    "外装を全方向から見て、刻印・銘板・傷・へこみ・塗装のはがれを確認する",
    "レンズに懐中電灯の光を当てて、カビ・くもり・キズ・ほこりに見えるものがないか覗く",
    "ファインダーを覗いて、内部にほこりや曇りが見えるか確認する（電源を入れずに見える範囲で）",
    "電池ぶたを開けて、電池が入ったままになっていないか、白い粉や緑色のさびのような跡がないかを見る",
    "デジタルカメラのメモリーカードの差込口に、カードが入ったままになっていないかを見る",
    "付属品や箱、書類が一緒に出てきたか、どこに置いてあったかを確認する",
  ];

  const avoidCheck = [
    {
      t: "電池を入れて電源を入れる",
      d: "長く使われていなかった機材は、通電した時点で不具合が起きることがあるとされます。電池室に液漏れの跡があれば、なおさら通電は避けてください。動作の可否は確認しないまま、「動作未確認」として相談して差し支えありません。",
    },
    {
      t: "フィルムカメラの裏ぶたを開ける",
      d: "撮影途中のフィルムが入っていると、裏ぶたを開けた時点で感光し、写っていたものが失われることがあります。故人が最後に撮った写真が残っている可能性もあるため、開ける前の確認手順を先に見てください。",
    },
    {
      t: "固いレバーやリングを力で動かす",
      d: "巻き上げレバー、シャッターボタン、ピントリング、絞りリングが固いと感じたら、そこで止めます。力を加えることで内部の部品を傷めることがあるとされ、後から修理や査定で見てもらう際にも状態が変わってしまいます。",
    },
    {
      t: "分解する・油を差す・清掃液を使う",
      d: "ねじを外して中を見る、動きの悪い部分に潤滑油を差す、カビを取ろうとして薬剤を使う。いずれも、状態を悪化させる原因になりやすいとされます。内部に関わることは、修理やメンテナンスを扱う店に相談する方法があります。",
    },
    {
      t: "カビの疑いがあるものを他の機材と密閉する",
      d: "カビの疑いがあるレンズや革ケースを、ほかの機材と同じ袋や箱に密閉して保管することは避けてください。袋を分け、風通しのよい場所に置いておきます。防湿庫やバッグに入ったまま出てきた場合の仕分けは、専用のページにまとめています。",
    },
  ];

  const photoShots = [
    { label: "全体", value: "見つけた場所で動かす前に1枚、1か所に集めた後に全体が入るようにもう1枚撮影します。どこから何が出てきたかの記録になります。" },
    { label: "一台ごとの外観", value: "正面・背面・上面・底面の4方向を撮影します。レンズは横から1枚と、前玉側から1枚を撮影します。明るい場所で、影が強く出ない向きで撮ります。" },
    { label: "刻印・銘板の接写", value: "名称・型番・製造番号が写るように接写します。文字が読めるかを画面で拡大して確かめ、読めなければ光の向きを変えて撮り直します。" },
    { label: "気になる箇所", value: "傷、へこみ、塗装のはがれ、電池室の跡などを撮影します。レンズ内部のカビやくもりは写真に写りにくいため、写らなければメモの記述で補います。" },
    { label: "付属品を並べた一枚", value: "本体の横に、箱・説明書・キャップ・ケース・充電器などを置いて1枚撮影します。どれが組になっているかが一目でわかります。" },
  ];

  const memoItems = [
    { label: "番号", value: "一台ごとに付けた通し番号。付箋やマスキングテープで本体・袋・箱にも同じ番号を付けます（本体に直接書き込まない）。" },
    { label: "種類", value: "カメラ本体・交換レンズ・その他（ストロボ、三脚、露出計など）。不明な場合は「不明」。" },
    { label: "刻印の文字", value: "読み取れた名称・型番・製造番号をそのまま書き写し、読めない部分は空欄にします。" },
    { label: "見た目の状態", value: "傷・へこみ・カビやくもりに見えるもの・電池室の跡など、見たままを簡潔に記載します。「良い」「悪い」の評価ではなく、事実を記載します。" },
    { label: "動作", value: "動かしていない場合は「未確認」とし、以前に動作していたというご家族の記憶があれば、その旨を添えます。" },
    { label: "付属品", value: "箱・説明書・保証書・キャップ・ケース・バッテリー・充電器など、組にしたものを記載します。" },
    { label: "出てきた場所", value: "書斎の棚、押し入れ、防湿庫の中など。保管環境の手がかりになります。" },
    { label: "家族のメモ", value: "故人がよく使っていた、家族写真を撮影したなどの思い出やご希望。残す候補かどうかの印もここに記載します。" },
  ];

  const consultSteps = [
    {
      t: "送る情報を一つにそろえる",
      d: "相談先ごとに説明を変えると、返ってくる回答を比べにくくなります。写真と一覧のメモを一式にまとめ、どこに相談するときも同じものを渡します。動作を確かめていないものは、どこに対しても同じように「動作未確認」と伝えます。",
    },
    {
      t: "不明な点は「不明」と記載する",
      d: "型番が読めない、カビかどうか判断できない、付属品の対応がわからないといった点は、推測で補わず「不明」と記載したまま相談します。事実のとおりに伝えることで、実物の確認時の行き違いを避けられます。",
    },
    {
      t: "カメラを専門に扱う店と、幅広く扱う窓口を使い分ける",
      d: "カメラやレンズを専門に扱う店は、機材の特定や状態の見方について詳しい説明が得られることがあります。一方、カメラ以外の遺品もまとめて相談したい場合は、複数の品目を扱う窓口や、複数の業者に一度に依頼できる一括査定のサービスという選択肢もあります。どちらが適しているかは、量や品目、ご家族がかけられる手間によって異なります。",
    },
    {
      t: "回答の中身を比べる",
      d: "回答を受け取ったら、結果だけでなく、何を根拠にそう判断したのか、実物を見た後に変わる可能性があるか、断った場合の扱い（返送やキャンセル）はどうなるか、といった内容も確認します。説明が具体的で、質問に的確に回答する相談先であるほど、ご家族の判断材料が増えます。",
    },
    {
      t: "相談と売却を切り離して考える",
      d: "写真を送って意見を聞くことは、売却の約束ではありません。回答を確認したうえで、残すと決めることも可能です。出張で実物を見てもらう場合の注意点や、困ったときの相談先は、トラブル対処のページにまとめています。",
    },
  ];

  const faqs = [
    {
      q: "故人のカメラが価値のあるものかどうか、家族で判断できますか？",
      a: "ご家族が評価まで判断することは難しく、その必要もありません。ご家族が行えるのは、刻印や銘板から名称・型番・製造番号を読み取り、見た目の状態と付属品を写真とメモで記録するところまでです。評価は機種・状態・時期によって変わるため、その記録を持って専門店や複数の業者に相談するのが一般的な進め方です。",
    },
    {
      q: "型番がどこにも見当たりません。どうすればよいですか？",
      a: "本体の前面・上面・底面、電池ぶたの内側、レンズの先端のリングや側面を、スマートフォンで撮影し、拡大してご確認ください。本体で見つからなくても、元箱や説明書、ケースの内側に名称が書かれていることがあります。それでも見つからない場合は、読み取れた範囲と全体の写真を添えて、「型番不明」として相談して差し支えありません。",
    },
    {
      q: "レンズの中に白い模様が見えます。拭けば取れますか？",
      a: "内部の模様は外から拭いても届かず、表面を強くこすると傷を残すことがあるため、ご自身で拭くことは避けてください。網目状や糸状の模様は、一般にカビの可能性があるとされますが、見た目だけでは断定できません。見えたままを記録し、修理やメンテナンスを扱う店、または買取店に相談する方法があります。カビやくもりのある機材の申告のしかたは、故障品のページもご参照ください。",
    },
    {
      q: "動くかどうか確かめてから相談した方がよいですか？",
      a: "無理に確かめる必要はありません。長く使われていなかった機材は、通電や巻き上げの操作で状態が変わることがあるとされます。動作を確かめていないものは「動作未確認」とそのまま伝えて相談することをおすすめします。以前に動いているのを見た、といったご家族の記憶があれば、あわせてお伝えください。",
    },
    {
      q: "保証書や説明書は捨ててしまっても構いませんか？",
      a: "処分せず、本体と組にして保管しておくことをおすすめします。説明書は機種を特定する手がかりになり、保証書や購入時の書類は購入時期の目安になります。保証書に故人の氏名や住所が書かれている場合は、相談先に渡すかどうかをご家族で話し合い、必要に応じてその部分を隠して扱います。",
    },
    {
      q: "調べていくうちに、手放すかどうか家族の意見が分かれてきました。",
      a: "調べることと手放すかどうかを決めることは、別の作業としてお考えいただいて差し支えありません。記録をご家族で共有したうえで、残すものと手放すものを時間をかけて話し合う進め方があります。手続きや権利関係について判断に迷う場合は、税理士・弁護士・お住まいの自治体などにご確認ください。残すか手放すかの考え方は、形見のカメラのページにまとめています。",
    },
  ];

  return (
    <>
      <JsonLd data={articleLd} />
      <JsonLd data={faqPageLd(faqs)} />
      <Breadcrumbs
        items={[
          { name: "ホーム", path: "/" },
          { name: "故人のカメラの価値がわからないときの調べ方", path: PATH },
        ]}
      />
      <article className="mx-auto max-w-site px-4 py-10 md:py-14">
        <p className="kicker mb-3">IDENTIFY THE CAMERA</p>
        <h1 className="max-w-4xl font-display text-2xl leading-relaxed text-steel-900 md:text-3xl md:leading-relaxed">
          故人のカメラの価値がわからないときの調べ方｜型番・状態・付属品を家族で確認する手順
        </h1>
        <p className="mt-5 max-w-3xl text-sm leading-loose text-steel-600">
          遺品の中からカメラやレンズが見つかっても、カメラに詳しくないご家族にとって、それが何であるかを判断することは容易ではありません。本ページでは、評価を行うためではなく、「何が、どのような状態で、何と一緒に残っているか」をご家族が把握するための手順を、一般知識として整理しています。型番や刻印の探し方、付属品の扱い、レンズの見方の基本、触らずに確認できること、記録の残し方、不明な点が残る場合の相談の進め方についてご説明します。すべてを一度に進める必要はありません。
        </p>

        {/* 冒頭の要点 */}
        <section className="mt-10 border-2 border-vermilion bg-chalk-warm p-6">
          <h2 className="font-display text-lg text-steel-900">故人のカメラを調べる際にご家族が行うこと</h2>
          <ul className="mt-4 space-y-3">
            {conclusions.map((c) => (
              <li key={c} className="flex gap-2 text-sm leading-loose text-steel-800">
                <span aria-hidden="true" className="mt-2 inline-block h-2 w-2 shrink-0 bg-vermilion" />
                {c}
              </li>
            ))}
          </ul>
        </section>

        {/* 最初の約束事 */}
        <section className="mt-14">
          <h2 className="section-title mb-2">調べ始める前に確認する4つの事項</h2>
          <p className="mb-5 max-w-3xl text-sm leading-loose text-steel-600">
            調べる作業そのものが、機材の状態を変えてしまうことがあります。最初にご家族の間で、次の4点を共有しておくことをおすすめします。
          </p>
          <div className="overflow-x-auto border border-chalk-line">
            <table className="spec-table">
              <tbody>
                {firstRules.map((r) => (
                  <tr key={r.label}>
                    <th className="w-32 md:w-44">{r.label}</th>
                    <td>{r.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-steel-500">
            ※ 片付けの全体の流れ（集める・仕分ける・データやフィルムを抜く）は、
            <Link href="/situation/ihin/" className="underline hover:text-vermilion">遺品・実家整理のページ</Link>
            で扱っています。本ページは、そのうち「機材を特定する」段階を対象としています。
          </p>
        </section>

        {/* 型番・刻印の探し方 */}
        <section className="mt-14">
          <h2 className="section-title mb-2">型番・刻印・銘板の探し方</h2>
          <p className="mb-6 max-w-3xl text-sm leading-loose text-steel-600">
            機材を特定する最も有力な手がかりは、機材に記載されている名称と番号です。書かれている位置は機材によってさまざまですが、探す場所にはおおよその傾向があります。
          </p>
          <div className="space-y-5">
            {whereToLook.map((s, i) => (
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

          <h3 className="mt-8 font-display text-base text-steel-900">読み取る際の注意点</h3>
          <ul className="mt-3 space-y-3">
            {readTips.map((t) => (
              <li key={t} className="flex gap-2 text-[13px] leading-loose text-steel-700">
                <span aria-hidden="true" className="mt-2 inline-block h-1.5 w-1.5 shrink-0 bg-vermilion" />
                {t}
              </li>
            ))}
          </ul>

          <div className="mt-6 border-l-2 border-vermilion bg-chalk-card p-5">
            <h3 className="font-display text-base text-steel-900">製造番号についての掲載社の公式記載</h3>
            <ul className="mt-3 space-y-2 text-[13px] leading-loose text-steel-700">
              <li>
                <Link href="/kaitori/kitamura/" className="underline hover:text-vermilion">カメラのキタムラ</Link>
                ：「元々製造番号（シリアルナンバー）があるのに消えてしまった、または、判別できないという場合は買い取ることが出来かねます」（2026年10月19日確認）
              </li>
              <li>
                <Link href="/kaitori/daikokuya/" className="underline hover:text-vermilion">大黒屋</Link>
                ：「製造番号やシリアルナンバーが元々入っているカメラで、消えてしまっていたり、判別できない状態のものはお買取りができません」（2026年9月11日確認）
              </li>
            </ul>
            <p className="mt-3 text-xs text-steel-500">
              ※ 当サイトが確認日時点で公式サイトから確認した記載です。最新の条件は各社の公式サイトでご確認ください。
            </p>
          </div>
          <p className="mt-4 max-w-3xl text-[13px] leading-loose text-steel-700">
            名称が判明した後、機材の種類や評価の観点を確認したい場合は、
            <Link href="/guide/kachi-mikata/" className="underline hover:text-vermilion">価値の見分け方のページ</Link>
            で一般的な観点を整理しています。
          </p>
        </section>

        {/* 付属品 */}
        <section className="mt-14">
          <h2 className="section-title mb-2">付属品・元箱・保証書・説明書の扱い</h2>
          <p className="mb-6 max-w-3xl text-sm leading-loose text-steel-600">
            付属品は、機種を特定する手がかりにもなり、相談の際に伝える情報にもなります。調べる段階では、揃えることよりも「分けずに保管すること」を優先します。
          </p>
          <div className="space-y-4">
            {accessories.map((c) => (
              <div key={c.t} className="border-l-2 border-vermilion bg-chalk-card p-5">
                <h3 className="font-display text-base text-steel-900">{c.t}</h3>
                <p className="mt-2 text-[13px] leading-loose text-steel-700">{c.d}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 border border-chalk-line bg-chalk-card p-5">
            <h3 className="font-display text-base text-steel-900">付属品がそろっていない場合の掲載社の公式記載</h3>
            <p className="mt-2 text-[13px] leading-loose text-steel-700">
              付属品の扱いは業者によって異なります。箱や付属品が欠けている場合でも、処分する前に各社の条件をご確認ください。
            </p>
            <ul className="mt-3 space-y-2 text-[13px] leading-loose text-steel-700">
              <li>
                <Link href="/kaitori/camera-takakuureru/" className="underline hover:text-vermilion">カメラ高く売れるドットコム</Link>
                ：「購入時の箱や付属品は残っていることが望ましいですが、なくてもお買取できます」（2026年9月11日確認）
              </li>
              <li>
                <Link href="/kaitori/uriel/" className="underline hover:text-vermilion">ウリエル</Link>
                ：付属品がないカメラも可と記載（2026年9月5日確認）
              </li>
              <li>
                <Link href="/kaitori/arrows/" className="underline hover:text-vermilion">カメラ買取アローズ</Link>
                ：箱なしは可。ジャンク品・加工品・重度の付属品欠品（バッテリー・充電器がない商品）は買取不可と明記（2026年9月5日確認）
              </li>
            </ul>
            <p className="mt-3 text-xs text-steel-500">
              ※ 確認日時点の公式記載です。付属品を揃えるときの一般的な考え方は
              <Link href="/guide/uru-mae/" className="underline hover:text-vermilion">売る前の準備</Link>
              のページもご参照ください。
            </p>
          </div>
        </section>

        {/* レンズの見方 */}
        <section className="mt-14">
          <h2 className="section-title mb-2">レンズの見方の基本（懐中電灯で透かす）</h2>
          <p className="mb-6 max-w-3xl text-sm leading-loose text-steel-600">
            レンズの状態は、光を通して見ることで確認できる部分があります。重要なのは、見えたものを診断することではなく、見えたままを記録することです。
          </p>
          <div className="space-y-5">
            {lensSteps.map((s, i) => (
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
            ※ カビやくもりの除去ができるかどうか、修理が可能かどうかは、外から見ただけでは判断できません。修理やメンテナンスを扱う店に相談してください。
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link href="/old-lens/" className="btn-primary">オールドレンズのページを見る</Link>
            <Link href="/broken/" className="btn-ghost">カビ・故障のある機材の申告を見る</Link>
          </div>
        </section>

        {/* 動かさずに確認できること */}
        <section className="mt-14">
          <h2 className="section-title mb-2">動かさずに確認できる事項と、避けるべき操作</h2>
          <p className="mb-6 max-w-3xl text-sm leading-loose text-steel-600">
            操作をしなくても、目視で確認できることは多くあります。一方で、善意で行った操作が状態を変えてしまうこともあります。
          </p>
          <div className="border border-chalk-line bg-chalk-card p-5">
            <h3 className="font-display text-base text-steel-900">見るだけで確認できること</h3>
            <ul className="mt-3 space-y-2">
              {canCheck.map((t) => (
                <li key={t} className="flex gap-2 text-[13px] leading-loose text-steel-700">
                  <span aria-hidden="true" className="mt-2 inline-block h-1.5 w-1.5 shrink-0 bg-vermilion" />
                  {t}
                </li>
              ))}
            </ul>
            <p className="mt-3 text-xs text-steel-500">
              ※ 電池が入ったままだった場合や液漏れの跡がある場合は、素手で触らず、手袋や紙を使って扱ってください。電池の処分はお住まいの自治体の案内に従ってください。
            </p>
          </div>
          <h3 className="mt-8 font-display text-base text-steel-900">避けるべき操作</h3>
          <div className="mt-4 space-y-4">
            {avoidCheck.map((c) => (
              <div key={c.t} className="border-l-2 border-vermilion bg-chalk-card p-5">
                <h4 className="font-display text-base text-steel-900">{c.t}</h4>
                <p className="mt-2 text-[13px] leading-loose text-steel-700">{c.d}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link href="/situation/koujin-film-data/" className="btn-primary">フィルム・メモリーカードの確認手順を見る</Link>
            <Link href="/situation/boushitsuko-seiri/" className="btn-ghost">防湿庫・バッグごと出てきた場合を見る</Link>
          </div>
        </section>

        {/* 記録の残し方 */}
        <section className="mt-14">
          <h2 className="section-title mb-2">記録の残し方（写真と一覧のメモ）</h2>
          <p className="mb-5 max-w-3xl text-sm leading-loose text-steel-600">
            調べた内容を写真と一覧のメモにまとめておくことで、ご家族の間で共有しやすくなり、相談先にもそのままお渡しいただけます。記録として残すことで、後から確認する際の混乱を防げます。
          </p>
          <h3 className="font-display text-base text-steel-900">撮影しておく写真</h3>
          <div className="mt-3 overflow-x-auto border border-chalk-line">
            <table className="spec-table">
              <tbody>
                {photoShots.map((r) => (
                  <tr key={r.label}>
                    <th className="w-32 md:w-48">{r.label}</th>
                    <td>{r.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <h3 className="mt-8 font-display text-base text-steel-900">一覧のメモに記載する項目</h3>
          <div className="mt-3 overflow-x-auto border border-chalk-line">
            <table className="spec-table">
              <tbody>
                {memoItems.map((r) => (
                  <tr key={r.label}>
                    <th className="w-32 md:w-48">{r.label}</th>
                    <td>{r.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 max-w-3xl text-[13px] leading-loose text-steel-700">
            メモは紙でも、スマートフォンのメモや表計算でも構いません。写真のファイル名や撮影順を番号と合わせておくと、どの写真がどの機材かを後から照らし合わせやすくなります。台数が多い場合は、
            <Link href="/situation/tairyou/" className="underline hover:text-vermilion">大量に出てきたときの進め方</Link>
            もご参照ください。
          </p>
        </section>

        {/* 相談の進め方 */}
        <section className="mt-14">
          <h2 className="section-title mb-2">不明な点が残る場合の相談の進め方</h2>
          <p className="mb-6 max-w-3xl text-sm leading-loose text-steel-600">
            調べても機材を特定できない場合や、状態の見方に自信がない場合でも、差し支えありません。記録が揃っていれば、専門店に相談することで判明する事項が増えます。1か所だけで判断せず、複数の相談先に同じ情報で相談することが基本です。
          </p>
          <div className="space-y-5">
            {consultSteps.map((s, i) => (
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

          <div className="mt-6 border-l-2 border-vermilion bg-chalk-card p-5">
            <h3 className="font-display text-base text-steel-900">相談の窓口についての掲載社の公式記載</h3>
            <ul className="mt-3 space-y-2 text-[13px] leading-loose text-steel-700">
              <li>
                <Link href="/kaitori/naniwa/" className="underline hover:text-vermilion">カメラのナニワ</Link>
                ：LINE査定・オンライン査定のメニューがあり、遺品買取の専用メニューもあると記載（「遺品となってしまったカメラやレンズの買取もお任せください。もちろん、カメラ以外の備品もお引き取りいたします」）（2026年9月11日確認）
              </li>
              <li>
                <Link href="/kaitori/daikokuya/" className="underline hover:text-vermilion">大黒屋</Link>
                ：LINE査定・メール査定のメニューがあると記載（2026年9月11日確認）
              </li>
              <li>
                <Link href="/kaitori/uriel/" className="underline hover:text-vermilion">ウリエル</Link>
                ：遺品整理×買取の専用ページがあり、「遺品整理」と「遺品買取」を同時に行う旨を記載（2026年9月5日確認）
              </li>
              <li>
                一括査定のサービスでは、
                <Link href="/kaitori/hikakaku/" className="underline hover:text-vermilion">ヒカカク！</Link>
                が「最大20社一括査定見積もり」、
                <Link href="/kaitori/minna-no-kaitori/" className="underline hover:text-vermilion">みんなの買取</Link>
                が「最大10社の中から一番いい業者を選ぶだけ」（2026年10月19日確認）、
                <Link href="/kaitori/oikura/" className="underline hover:text-vermilion">おいくら</Link>
                が複数の買取店から見積結果がメールで届く仕組みと記載しています（ヒカカク！・おいくらは2026年9月5日確認）。これらのサービス自体はカメラを買い取らず、実際の条件は紹介先の業者ごとに異なります。
              </li>
            </ul>
            <p className="mt-3 text-xs text-steel-500">
              ※ 確認日時点の公式記載です。対応エリア・キャンセル時の扱いなどの条件は業者ごとに異なるため、
              <Link href="/compare/" className="underline hover:text-vermilion">統一比較表</Link>
              と各社の公式サイトでご確認ください。
            </p>
          </div>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link href="/compare/" className="btn-primary">買取業者の統一比較表を見る</Link>
            <Link href="/guide/trouble/" className="btn-ghost">トラブル時の相談先を見る</Link>
          </div>
          <p className="mt-4 max-w-3xl text-[13px] leading-loose text-steel-700">
            調べ終えたあと、残すか手放すかで迷っている場合は、
            <Link href="/situation/katami-camera/" className="underline hover:text-vermilion">形見のカメラを残すか手放すか</Link>
            のページで考え方を整理しています。手続きや権利関係について、本ページでは判断を示しておりません。税理士・弁護士・お住まいの自治体などにご確認ください。
          </p>
        </section>

        {/* FAQ */}
        <section className="mt-14">
          <h2 className="section-title mb-6">故人のカメラを調べる際によくある質問</h2>
          <div className="space-y-4">
            {faqs.map((f) => (
              <div key={f.q} className="border border-chalk-line bg-chalk-card p-5">
                <h3 className="font-display text-base text-steel-900">Q. {f.q}</h3>
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
              <Link href="/situation/ihin/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">遺品・実家整理で出てきたカメラを売るには</span>
                <span className="mt-1 block text-xs text-steel-500">捨てる前の確認点と出張買取の使い方</span>
              </Link>
            </li>
            <li>
              <Link href="/situation/katami-camera/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">形見のカメラを残すか手放すか</span>
                <span className="mt-1 block text-xs text-steel-500">使う・保管する・手放すの決め方と手入れ</span>
              </Link>
            </li>
            <li>
              <Link href="/situation/koujin-film-data/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">故人のフィルム・メモリーカード・写真データ</span>
                <span className="mt-1 block text-xs text-steel-500">未現像フィルムとデータの取り出し方</span>
              </Link>
            </li>
            <li>
              <Link href="/situation/boushitsuko-seiri/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">防湿庫・カメラバッグごと出てきた機材の整理</span>
                <span className="mt-1 block text-xs text-steel-500">収納ごとの仕分けとカビの見分け</span>
              </Link>
            </li>
            <li>
              <Link href="/situation/tairyou/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">カメラ・レンズを大量に売るには</span>
                <span className="mt-1 block text-xs text-steel-500">コレクション・機材一式・まとめ売りの進め方</span>
              </Link>
            </li>
            <li>
              <Link href="/guide/kachi-mikata/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">フィルムカメラ・オールドレンズの価値の見分け方</span>
                <span className="mt-1 block text-xs text-steel-500">評価の観点の一般的な整理</span>
              </Link>
            </li>
            <li>
              <Link href="/film/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">フィルムカメラの買取</span>
                <span className="mt-1 block text-xs text-steel-500">一眼レフ・レンジファインダー・二眼レフ・中判</span>
              </Link>
            </li>
            <li>
              <Link href="/digital/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">デジタル一眼・ミラーレスの買取</span>
                <span className="mt-1 block text-xs text-steel-500">付属品・データ削除など売る前の準備</span>
              </Link>
            </li>
            <li>
              <Link href="/old-lens/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">オールドレンズの買取</span>
                <span className="mt-1 block text-xs text-steel-500">マウント・カビ・くもりの申告のしかた</span>
              </Link>
            </li>
            <li>
              <Link href="/broken/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">壊れた・ジャンク・カビありを売る</span>
                <span className="mt-1 block text-xs text-steel-500">動作未確認品の申告方法</span>
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
          </ul>
        </section>

        <p className="mt-12 text-xs leading-loose text-steel-500">
          ※ 本ページの記載は{PAGE_DATE_LABEL}時点の一般的な整理であり、機材の評価・修理の可否・法的または税務的な判断を示すものではありません。掲載社の記載は各確認日時点で当サイトが公式サイトから確認した内容です。手続きや権利関係については、税理士・弁護士・お住まいの自治体などにご確認ください。買取金額は機種・状態・時期により異なります。
        </p>
      </article>
    </>
  );
}
