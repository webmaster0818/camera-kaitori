import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd, { faqPageLd } from "@/components/JsonLd";
import { SITE_NAME, SITE_URL, OPERATOR } from "@/lib/site";

const TITLE = "故人のフィルム・メモリーカード・写真データの扱い｜未現像フィルムとデータの取り出し方";
const DESC =
  "遺品のカメラから出てきた未現像フィルム、現像済みのネガ、メモリーカードやSDカード、本体の内蔵メモリ。故人の写真データをどう扱えばよいかを一般知識として整理。未現像フィルムが出てきたときの選択肢、現像できるかの相談先、カメラを手放す前にデータを取り出す手順、家族以外に渡らないようにするための配慮をまとめました。";
const PATH = "/situation/koujin-film-data/";
const PAGE_DATE = "2026-09-12";
const PAGE_DATE_LABEL = "2026年9月12日";

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

export default function KoujinFilmDataPage() {
  const conclusions = [
    "写真とデータは、機材とは別のものとして扱います。カメラを手放すかどうかとは切り離し、まず中身を家族の手元に残すことを先に済ませます。この順序を守るだけで、取り返しのつかない事態のほとんどを避けられます。",
    "未現像のフィルムが出てきたら、裏ぶたやパトローネを開けないでください。光が当たると像が失われます。現像できるかどうかは保存状態と経過年数によって変わり、断定はできません。開けずに写真店やフィルム現像を扱う店に相談する方法があります。",
    "メモリーカードやSDカードは、すべて抜き取って家族の手元に残します。カメラのスロットは複数あることがあり、バッグの小物入れや机の引き出しに別のカードが入っていることも珍しくありません。",
    "カメラを手放す前に、本体の内蔵メモリを確認します。カードが入っていなくても本体側に写真が残っている機種があります。内容を確認し、必要なものを保存してから初期化するのが一般的な対応です。",
    "写真は故人の記録であると同時に、写っている人のプライバシーにも関わります。家族以外の手に渡らないよう、データは取り出してから機材を出す、預けるときは何を預けたかを記録する、といった配慮が要になります。",
  ];

  const mediaRows = [
    {
      label: "未現像・撮影途中のフィルム",
      value:
        "カメラの中に入ったままの状態、またはパトローネ（フィルムの入った金属やプラスチックの筒）のまま出てきた状態です。光に当たると像が失われるため、開けない・巻き戻しを無理にしないことが最優先です。中身が撮影済みなのか未使用なのかが分からない場合も、開けずにそのまま扱います。カメラに入ったままなら、カメラごと写真店に相談する方法もあります。",
    },
    {
      label: "現像済みのネガ・ポジ・スリーブ",
      value:
        "すでに現像されたフィルムです。紙の袋やスリーブ（透明のシート）に入って、アルバムや引き出しから出てくることが多いものです。像は定着しているため光で消えることはありませんが、湿気とカビ、折れ、粘着テープの劣化に弱いとされています。プリントに焼き直したり、データ化を扱う店に相談したりする選択肢があります。",
    },
    {
      label: "プリント写真・アルバム",
      value:
        "紙に焼かれた写真です。カメラの遺品整理では後回しにされがちですが、機材と一緒に処分の流れに乗ってしまうことがあります。カメラバッグの内ポケットや機材の箱の中から出てくることもあるため、機材を出す前に箱の中身をすべて取り出して確認します。",
    },
    {
      label: "メモリーカード・SDカード・コンパクトフラッシュ",
      value:
        "デジタルカメラの記録メディアです。カメラのスロットに入ったままのほか、専用のケース、バッグの小物入れ、机の引き出し、パソコンのカードリーダーに挿さったままなど、あちこちから出てきます。規格が複数あり、古い機種では現在あまり見かけない形のカードが使われていることもあります。すべて抜き取り、まとめて家族の手元に残します。",
    },
    {
      label: "カメラ本体の内蔵メモリ",
      value:
        "カードを入れなくても撮影できる機種では、本体の中に写真が残っていることがあります。カードを抜いただけでは取り出せないため、手放す前に本体の再生表示で内容を確認します。取扱説明書が手元にない場合は、機種名で調べるか、販売店や修理を扱う店に操作方法を尋ねる方法があります。",
    },
    {
      label: "その他の記録メディア",
      value:
        "ビデオカメラのテープやディスク、パソコンに接続する外付けの記憶装置、CDやDVDに焼かれた写真など、カメラ以外の場所に写真が保存されていることもあります。カメラ機材の整理とは別の作業になりますが、同じ部屋から出てくることが多いため、あわせて確認しておくと後から探し直さずに済みます。",
    },
  ];

  const filmSteps = [
    {
      t: "開けない・巻き戻さない・光に当てない",
      d: "未現像のフィルムにとって、光は像を失わせるものです。カメラの裏ぶたを開ける、パトローネから引き出す、明るい場所で長く扱う、といった行為は避けます。カメラに入ったままなら、そのままの状態で暗い場所に置いておきます。判断がつかないうちは、何もしないことが最善の対応になります。",
    },
    {
      t: "カメラに入っているかどうかを外から確認する",
      d: "多くのフィルムカメラには、フィルムカウンター（撮影枚数の表示）や、フィルムが入っているかを示す小窓があります。カウンターが進んでいれば撮影途中の可能性があります。巻き戻しクランクが軽く空回りするか、抵抗があるかでも様子が変わりますが、無理に回すとフィルムを傷めることがあるため、軽く触れる程度にとどめます。分からない場合は、開けずに店に相談します。",
    },
    {
      t: "見つけた場所と状態をメモする",
      d: "どこから出てきたか、カメラの中か外か、パトローネに何か書かれているか、日付の記載があるか。分かる範囲でメモを残しておくと、後で家族に説明するときや、店に相談するときの手がかりになります。撮影された時期の見当がつけば、写っている内容を推測する助けにもなります。",
    },
    {
      t: "湿気と高温を避けて保管する",
      d: "現像するかどうかを決めるまでの間は、湿気の少ない、温度変化の小さい場所に置きます。窓際、暖房器具の近く、風呂場に近い場所は避けます。冷蔵や冷凍による保管を勧める情報もありますが、結露の扱いを含めて条件があるため、自己判断で行う前に店に相談する方が無難です。",
    },
    {
      t: "現像を扱う店に相談する",
      d: "写真店、カメラ店、フィルムの現像を扱う専門の事業者などが相談先になります。古いフィルムや種類の分からないフィルムは、対応できる店が限られることがあります。電話や問い合わせフォームで、フィルムの種類（分かる範囲で）、経過年数の見当、保管状態を伝えて、扱えるかどうかを先に確認します。",
    },
    {
      t: "現像できるかどうかは断定できないと理解しておく",
      d: "長期間保管されたフィルムが現像できるか、像がどの程度残っているかは、フィルムの種類、保管環境、経過年数によって変わります。うまく像が出ることもあれば、ほとんど写っていないこともあります。事前に結果を約束できるものではないため、店の説明を聞いたうえで、試すかどうかを決めます。結果に期待しすぎず、出れば良い、という気持ちで臨む方が落ち着いて判断できます。",
    },
  ];

  const cardSteps = [
    {
      t: "すべてのスロットを開けて抜き取る",
      d: "デジタルカメラには、カードのスロットが二つある機種があります。電池室とカードスロットが同じ蓋の中にある機種、背面側に別の蓋がある機種など、位置は機種によって異なります。一枚抜いたら終わりにせず、蓋をすべて開けて確認します。",
    },
    {
      t: "バッグ・ケース・引き出しも探す",
      d: "カメラ本体以外にも、カメラバッグの小物入れ、レンズケースのポケット、机の引き出し、財布やポーチ、パソコンのカードリーダーなど、カードが見つかる場所はいくつもあります。機材を出す前に、収納を空にして中身を確認します。防湿庫やバッグごと出てきた場合の仕分け手順は、別のページにまとめています。",
    },
    {
      t: "書き込み防止のつまみを動かしておく",
      d: "多くのSDカードには、側面に小さなつまみがあり、これを動かすと書き込みや消去ができない状態になります。誤って初期化してしまう事故を防げるため、抜き取った直後につまみを動かしておくと安心です。つまみのない規格のカードもあります。",
    },
    {
      t: "一か所にまとめて、抜いた元をメモする",
      d: "複数のカードを抜いたら、封筒や小箱に一か所へまとめ、どの機材から抜いたかをメモします。後で内容を確認するときに、どのカメラのカードかが分かると整理しやすくなります。カードは小さく、紛失しやすいものです。",
    },
    {
      t: "読み取れない場合も自分で初期化しない",
      d: "パソコンに挿しても認識しない、エラー表示が出る、といった場合があります。ここで「フォーマットしますか」という表示に従って初期化してしまうと、中身を取り出すことが難しくなります。認識しない場合は操作を止め、データの復旧を扱う専門の業者に相談する方法があります。取り出せるかどうかは状態によるため、断定はできません。",
    },
    {
      t: "カードは機材と一緒に出さない",
      d: "買取や譲渡で機材を手放すときに、カードが入ったままだと、故人の写真がそのまま他人の手に渡る可能性があります。抜き取ったことを、機材を箱に詰める前にもう一度確認します。業者によっては受付時に確認されることもありますが、自分で確認するのが基本です。",
    },
  ];

  const extractSteps = [
    {
      t: "手放す機材を決め、一台ずつ順番に扱う",
      d: "複数台あるときに、まとめて作業しようとすると見落としが出ます。一台を最後まで終えてから次に移る方が確実です。作業の順番を決め、終わった機材には付箋を貼るなどして区別します。",
    },
    {
      t: "電池と充電の状態を確認する",
      d: "内蔵メモリの内容を見るには、本体に電源を入れる必要があります。電池が入っていない、充電が切れている、充電器が見当たらないという場合は、先に電源の手当てをします。電池室に液漏れや腐食の跡がある場合は通電を試さず、修理やメンテナンスを扱う店に相談する方法があります。",
    },
    {
      t: "カードを抜いた状態で再生表示を見る",
      d: "カードを抜いてから電源を入れ、再生（撮影した写真を表示する機能）に切り替えます。カードがない状態で写真が表示されれば、それは本体の内蔵メモリに保存されているものです。何も表示されなければ、内蔵メモリには写真がないか、その機種に内蔵メモリがないことになります。",
    },
    {
      t: "内蔵メモリの写真をカードかパソコンに移す",
      d: "内蔵メモリに写真があった場合、機種によっては「内蔵メモリからカードへコピー」という機能があります。この機能がない場合は、本体とパソコンを接続ケーブルでつないで取り出す方法があります。ケーブルの形は機種によって異なるため、機材と一緒に出てきたケーブル類を捨てずに探します。操作が分からない場合は、機種名で調べるか、販売店や修理を扱う店に尋ねます。",
    },
    {
      t: "取り出したデータを別の場所にもう一つ残す",
      d: "取り出したデータを一か所にだけ置くと、その場所が壊れたときに失われます。パソコンに移したら、外付けの記憶装置や別の媒体にもう一つ控えを取っておく方法があります。家族で分けて持つ形にすると、共有と保全を同時に満たせます。",
    },
    {
      t: "家族に見せてから初期化する",
      d: "内容を確認し、必要なものを保存したうえで、本体の初期化（設定をリセットし、保存内容を消去する操作）を行います。ここで急がず、家族に一度見せてから消す方が、後から「あの写真を残しておきたかった」という悔いが残りにくくなります。初期化の手順は機種ごとに異なり、メニューの「セットアップ」「初期化」「リセット」などの項目にあることが多いとされています。",
    },
    {
      t: "初期化しても完全に消えるとは限らないと考える",
      d: "初期化の操作を行っても、専用の技術を使えば内容が読み出せる場合があるとされています。写っている内容に強い配慮が必要な場合は、記録メディアを機材と一緒に出さず手元に残す、業者にデータ消去の対応があるかを確認する、といった方法があります。不安が残る場合は、カードは手元に置いて機材だけを出すのが確実です。",
    },
    {
      t: "最後にもう一度、中身が空であることを見る",
      d: "梱包する直前に、カードスロットの蓋を開けて空であることを目で見て確かめます。作業中にいったん戻したカードを抜き忘れる、というのはよくある見落としです。フィルムカメラの場合は、フィルムが入っていないことも同じように確認します。",
    },
  ];

  const privacyItems = [
    {
      t: "写っているのは故人だけではない",
      d: "故人が撮った写真には、家族、友人、仕事の関係者、たまたま写り込んだ人など、さまざまな人が含まれます。故人の記録であると同時に、他の人の姿や場面の記録でもあります。家族の中でどこまで共有するか、外に出すかどうかは、慎重に考える場面があります。",
    },
    {
      t: "機材を出す前に中身を空にするのが基本",
      d: "データが他人の手に渡る経路として、もっとも多いのは「入れたまま出してしまう」ことです。カード、フィルム、内蔵メモリ。この三つを確認してから機材を出せば、大半の懸念は解消します。業者側の対応に頼るのではなく、自分の側で済ませておく方が確実です。",
    },
    {
      t: "現像やデータ化を頼むときは預けた内容を記録する",
      d: "フィルムの現像やデータ化を店に依頼する場合、他人の手元に一時的に写真が渡ることになります。何本を、いつ、どの店に預けたかを記録し、受け取り時に本数を照合します。貴重なフィルムを一度にすべて預けず、まず数本だけ試すという進め方もあります。",
    },
    {
      t: "業者の扱いを公式サイトで確認する",
      d: "買取業者の中には、記録メディアの扱いやデータの消去について、公式サイトに方針を記載しているところがあります。申込前に確認しておくと、判断の材料になります。記載の有無や内容は業者ごとに異なるため、気になる場合は直接問い合わせます。業者ごとの条件は比較表のページで整理しています。",
    },
    {
      t: "業者の氏名・住所の記載も確認する",
      d: "中古品を買い取る事業者は、一般に古物営業法に基づく許可を受けている必要があるとされています。公式サイトや店舗の表示で、事業者名・所在地・古物商許可の記載が確認できるかを見ておくと、どこに預けたかを後からたどれます。",
    },
    {
      t: "家族の中でも共有の範囲を決める",
      d: "写真が出てきたときに、誰と共有するかを先に話しておくと、後の行き違いを防げます。全員で見るのか、希望する人にだけ渡すのか、原本は誰が持つのか。データは複製できるため、原本の所在だけ決めておけば、あとは柔軟に扱えます。",
    },
  ];

  const checklist = [
    "機材を手放すかどうかとは切り離し、まず中身を家族の手元に残す作業を先に行った",
    "未現像の可能性があるフィルムについて、裏ぶたやパトローネを開けていない",
    "フィルムカウンターや巻き戻しの状態を、力をかけずに確認した",
    "フィルムを見つけた場所と状態をメモした",
    "フィルムを湿気と高温を避けた場所に保管した",
    "現像を扱う店に、種類と経過年数の見当を伝えて対応可否を確認した",
    "現像の結果は保存状態により変わり、断定できないことを理解した",
    "すべてのカードスロットを開け、カードを抜き取った",
    "バッグ・ケース・引き出し・カードリーダーも探した",
    "SDカードの書き込み防止のつまみを動かした",
    "抜いたカードを一か所にまとめ、どの機材から抜いたかをメモした",
    "認識しないカードを自分で初期化していない",
    "カードを抜いた状態で本体の再生表示を確認し、内蔵メモリの有無を見た",
    "内蔵メモリの写真をカードまたはパソコンに移し、控えをもう一つ残した",
    "家族に内容を見せてから初期化した",
    "配慮が必要な内容については、記録メディアを機材と一緒に出さず手元に残した",
    "梱包の直前に、カードスロットとフィルム室が空であることを目で確認した",
    "現像やデータ化を預けるときは、預けた本数と店名を記録した",
  ];

  const faqs = [
    {
      q: "カメラの中にフィルムが入っているようです。開けて確認してもよいですか？",
      a: "開けないでください。未現像のフィルムは光に当たると像が失われます。フィルムカウンターや巻き戻しクランクの状態を、力をかけずに外から確認する程度にとどめ、判断がつかない場合はカメラごと写真店やフィルム現像を扱う店に相談する方法があります。何もしないことが、この場面では最善の対応になります。",
    },
    {
      q: "何十年も前のフィルムです。今から現像できますか？",
      a: "現像できるかどうか、像がどの程度残っているかは、フィルムの種類・保管環境・経過年数によって変わるため、事前に断定することはできません。うまく像が出ることもあれば、ほとんど写っていないこともあります。古いフィルムは対応できる店が限られることがあるため、まず電話や問い合わせフォームで扱えるかを確認し、説明を聞いたうえで試すかどうかを決めてください。",
    },
    {
      q: "メモリーカードがパソコンで読み込めません。どうすればよいですか？",
      a: "「フォーマットしますか」という表示が出ても、初期化しないでください。初期化すると中身を取り出すことが難しくなります。操作をいったん止め、データの復旧を扱う専門の業者に相談する方法があります。取り出せるかどうかは状態によるため、可否を断定することはできません。費用や期間も状態により異なるので、見積もりを取ってから判断してください。",
    },
    {
      q: "カードを抜けば、カメラの中に写真は残りませんか？",
      a: "機種によっては、カードがなくても撮影できる内蔵メモリを備えているものがあります。カードを抜いた状態で電源を入れ、再生表示に切り替えて、写真が表示されないかを確認してください。表示される場合は本体側に保存されています。内蔵メモリからカードへコピーする機能がある機種もあり、ない場合はパソコンと接続して取り出す方法があります。",
    },
    {
      q: "初期化すれば、写真は完全に消えますか？",
      a: "初期化の操作を行っても、専用の技術を使えば内容が読み出せる場合があるとされています。写っている内容に強い配慮が必要な場合は、記録メディアを機材と一緒に出さずに手元へ残すのが確実です。業者にデータ消去の対応があるかを確認する方法もありますが、対応の有無や内容は業者ごとに異なります。",
    },
    {
      q: "現像やデータ化を店に頼むと、写真を他人に見られることになりませんか？",
      a: "作業の性質上、一時的に他人の手元に渡ることは避けられません。気になる場合は、まず数本だけ預けて対応を確かめる、預けた本数と店名を記録して受け取り時に照合する、といった進め方があります。事業者名・所在地・古物商許可などの記載が確認できる相手を選ぶことも、後からたどれるようにするための一つの方法です。",
    },
    {
      q: "写真データや未現像フィルムは、相続の対象になりますか？",
      a: "このページでは相続や税の扱いについて判断を示すことはできません。手続きや権利関係、税の扱いについては、税理士・弁護士・お住まいの自治体などにご確認ください。実務上は、データは複製できるため、原本を誰が持つかだけ家族で決めておけば、共有そのものは柔軟に進められます。",
    },
  ];

  return (
    <>
      <JsonLd data={articleLd} />
      <JsonLd data={faqPageLd(faqs)} />
      <Breadcrumbs
        items={[
          { name: "ホーム", path: "/" },
          { name: "故人のフィルム・メモリーカード・写真データの扱い", path: PATH },
        ]}
      />
      <article className="mx-auto max-w-site px-4 py-10 md:py-14">
        <p className="kicker mb-3">FILM AND DATA</p>
        <h1 className="max-w-4xl font-display text-2xl leading-relaxed text-steel-900 md:text-3xl md:leading-relaxed">
          故人のフィルム・メモリーカード・写真データの扱い｜未現像フィルムとデータの取り出し方
        </h1>
        <p className="mt-5 max-w-3xl text-sm leading-loose text-steel-600">
          遺品のカメラを開けたら、フィルムが入ったままだった。バッグからメモリーカードが何枚も出てきた。カメラを手放す前に、中の写真をどうすればよいのか分からない。写真とデータは、機材とは別のものとして扱う必要があります。このページでは、出てきたものの種類ごとの扱い、未現像フィルムが出てきたときの選択肢、メモリーカードの扱い、機材を手放す前にデータを取り出す手順、そして家族以外の手に渡らないようにするための配慮を、一般知識として整理します。
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

        {/* 種類ごとの扱い */}
        <section className="mt-14">
          <h2 className="section-title mb-2">出てきたものの種類と、最初の扱い</h2>
          <p className="mb-5 max-w-3xl text-sm leading-loose text-steel-600">
            同じ「写真」でも、未現像のフィルムと現像済みのネガ、メモリーカードと内蔵メモリでは、気をつける点がまったく違います。まず、手元にあるものがどれなのかを見分けます。
          </p>
          <div className="overflow-x-auto border border-chalk-line">
            <table className="spec-table">
              <tbody>
                {mediaRows.map((r) => (
                  <tr key={r.label}>
                    <th className="w-40 md:w-56">{r.label}</th>
                    <td>{r.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-steel-500">
            ※ 未現像の可能性があるフィルムは、判断がつくまで開けないでください。開けた時点で像が失われることがあります。
          </p>
        </section>

        {/* 未現像フィルム */}
        <section className="mt-14">
          <h2 className="section-title mb-2">未現像フィルムが出てきたときの選択肢</h2>
          <p className="mb-6 max-w-3xl text-sm leading-loose text-steel-600">
            もっとも慎重に扱うべきものです。ここで一つ操作を間違えると、写っていたはずのものが戻りません。急いで結果を知ろうとせず、順番に進めます。
          </p>
          <div className="space-y-5">
            {filmSteps.map((s, i) => (
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
            ※ 現像の可否や仕上がりは、フィルムの種類・保管環境・経過年数により変わります。事前に結果を保証できるものではないため、店の説明を確認してください。
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link href="/film/" className="btn-primary">フィルムカメラのページを見る</Link>
            <Link href="/situation/ihin/" className="btn-ghost">遺品整理の全体の流れを見る</Link>
          </div>
        </section>

        {/* メモリーカード */}
        <section className="mt-14">
          <h2 className="section-title mb-2">メモリーカード・SDカードの扱い</h2>
          <p className="mb-6 max-w-3xl text-sm leading-loose text-steel-600">
            カードは小さく、あちこちから出てきます。「一枚抜いたから終わり」にせず、収納を空にして探すのが基本です。抜いたあとの扱いにも、失わないための手順があります。
          </p>
          <div className="space-y-5">
            {cardSteps.map((s, i) => (
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
            ※ データを取り出せるかどうかは記録メディアの状態によります。可否・費用・期間は専門の業者にご確認ください。
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link href="/situation/boushitsuko-seiri/" className="btn-primary">収納ごと出てきた場合の仕分けを見る</Link>
            <Link href="/digital/" className="btn-ghost">デジタル一眼・ミラーレスのページを見る</Link>
          </div>
        </section>

        {/* データ取り出し手順 */}
        <section className="mt-14">
          <h2 className="section-title mb-2">カメラを手放す前にデータを取り出す手順</h2>
          <p className="mb-6 max-w-3xl text-sm leading-loose text-steel-600">
            買取や譲渡で機材を手放すと決めたら、箱に詰める前にこの手順を済ませます。一台ずつ、順番に。急ぐと見落としが出る作業です。
          </p>
          <div className="space-y-5">
            {extractSteps.map((s, i) => (
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
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link href="/guide/uru-mae/" className="btn-primary">売る前の準備ガイドを見る</Link>
            <Link href="/situation/katami-camera/" className="btn-ghost">残すか手放すかの決め方を見る</Link>
          </div>
        </section>

        {/* プライバシー */}
        <section className="mt-14">
          <h2 className="section-title mb-2">プライバシーへの配慮（家族以外に渡らないようにする）</h2>
          <p className="mb-6 max-w-3xl text-sm leading-loose text-steel-600">
            写真は故人の記録であると同時に、写っている人の記録でもあります。データが意図しない相手に渡らないようにするために、機材を出す前と、店に預けるときの二つの場面で気をつける点があります。
          </p>
          <div className="space-y-4">
            {privacyItems.map((c) => (
              <div key={c.t} className="border-l-2 border-vermilion bg-chalk-card p-5">
                <h3 className="font-display text-base text-steel-900">{c.t}</h3>
                <p className="mt-2 text-[13px] leading-loose text-steel-700">{c.d}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link href="/compare/" className="btn-primary">業者の条件を比較表で見る</Link>
            <Link href="/guide/erabikata/" className="btn-ghost">業者の選び方を見る</Link>
          </div>
        </section>

        {/* チェックリスト */}
        <section className="mt-14">
          <h2 className="section-title mb-6">フィルム・データを扱うときのチェックリスト</h2>
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
          <h2 className="section-title mb-6">故人のフィルム・データについてよくある質問</h2>
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
              <Link href="/situation/ihin/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">遺品・実家整理で出てきたカメラを売るには</span>
                <span className="mt-1 block text-xs text-steel-500">捨てる前の確認点と出張買取の使い方</span>
              </Link>
            </li>
            <li>
              <Link href="/situation/katami-camera/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">形見のカメラを残すか手放すか</span>
                <span className="mt-1 block text-xs text-steel-500">使う・保管する・手放すの決め方</span>
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
              <Link href="/film/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">フィルムカメラの買取</span>
                <span className="mt-1 block text-xs text-steel-500">一眼レフ・レンジファインダー・二眼レフ・中判</span>
              </Link>
            </li>
            <li>
              <Link href="/digital/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">デジタル一眼・ミラーレスの買取</span>
                <span className="mt-1 block text-xs text-steel-500">データ削除と付属品の確認</span>
              </Link>
            </li>
            <li>
              <Link href="/broken/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">壊れた・ジャンク・カビありを売る</span>
                <span className="mt-1 block text-xs text-steel-500">動作未確認の申告のコツ</span>
              </Link>
            </li>
            <li>
              <Link href="/guide/uru-mae/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">売る前の準備</span>
                <span className="mt-1 block text-xs text-steel-500">仕分け・写真・申告の一般的な手順</span>
              </Link>
            </li>
            <li>
              <Link href="/guide/erabikata/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">業者の選び方</span>
                <span className="mt-1 block text-xs text-steel-500">公式サイトで確認する条件</span>
              </Link>
            </li>
            <li>
              <Link href="/compare/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">買取業者の統一比較表</span>
                <span className="mt-1 block text-xs text-steel-500">出張対応・遺品対応・返送料を同じ物差しで</span>
              </Link>
            </li>
          </ul>
        </section>

        <p className="mt-12 text-xs leading-loose text-steel-500">
          ※ 本ページの記載は{PAGE_DATE_LABEL}時点の一般的な整理であり、法的・税務的な助言ではありません。相続の手続きや税の扱いについては、税理士・弁護士・お住まいの自治体などにご確認ください。フィルムの現像可否やデータの復旧可否は状態により変わるため、写真店・データ復旧の専門業者にご相談ください。
        </p>
      </article>
    </>
  );
}
