import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd, { faqPageLd } from "@/components/JsonLd";
import { SITE_NAME, SITE_URL, OPERATOR } from "@/lib/site";

const TITLE = "古いコンパクトデジカメ（コンデジ）を売る前に｜型番・付属品・データ・電池の確認手順";
const DESC =
  "引き出しに眠っている古いコンパクトデジカメを手放す前に確認することを整理。型番の確認場所、バッテリー・充電器など付属品の揃え方、液晶とレンズバリアの見方、データとメモリーカードの扱い、電池の膨張や液漏れがあるときの扱い、宅配で送るときの注意、値段が付かない場合の選択肢まで。";
const PATH = "/digital/compact/";
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

export default function CompactDigitalPage() {
  const conclusions = [
    "売れるかどうかは、手元で断定しない方が無難です。古いコンパクトデジタルカメラの扱いは、機種・状態・付属品の有無・業者ごとの受付基準によって変わります。自分で「もう価値はない」と決めて処分する前に、確認できる事実を揃えて業者に相談する、という順序がもっとも取りこぼしが少なくなります。",
    "最初に確認するのは型番です。型番は本体の底面や側面、電池ぶたの内側付近に刻印・印字されていることが多く、これが分かるだけで業者への問い合わせがずっと具体的になります。",
    "付属品の中で特に大事なのは、バッテリーと充電器です。業者によっては、バッテリーや充電器がない機材を受け付けないと公式に記載しています。探すべき場所と、見つからなかったときの伝え方を先に押さえておきます。",
    "メモリーカードは必ず抜き、本体に内蔵メモリがある可能性も考えておきます。写真は家族や他人のプライバシーにも関わるため、必要なものを保存してから、消去や初期化を検討します。",
    "電池が膨らんでいる、電池室に白い粉や緑色のさびがある、といった場合は、充電や通電を試さず、そのままの状態で業者に相談します。値段が付かなかった場合も、引き取りの有無の確認や、お住まいの自治体の小型家電回収の案内を確認する、といった選択肢があります。",
  ];

  const modelChecks = [
    {
      t: "本体の底面・側面を見る",
      d: "コンパクトデジタルカメラの型番は、本体の底面に三脚穴と並んで印字されていたり、側面や背面の下部に小さく刻印されていたりすることが多いものです。前面には愛称やシリーズ名だけが大きく書かれ、正式な型番は別の場所にある、というつくりもよく見られます。明るい場所で、斜めから光を当てると読みやすくなります。",
    },
    {
      t: "電池ぶた・カードぶたの内側を見る",
      d: "底面に見当たらない場合は、電池ぶたやメモリーカードのふたを開けた内側、電池室の周辺に型番や製造番号のシールが貼られていることがあります。ふたを開けるときに電池室の中の状態も一緒に見ておくと、後で説明する液漏れや膨張の確認が同時に済みます。",
    },
    {
      t: "製造番号（シリアルナンバー）も控えておく",
      d: "型番の近くに、数字や英数字の並んだ製造番号が記載されていることがあります。業者への申告に必要になる場合があるほか、製造番号が元々ある機材でそれが消えていたり読めなかったりすると受け付けない、と公式に記載している業者もあります（詳しくは後述の掲載社データを参照）。読めるうちに写真を撮っておきます。",
    },
    {
      t: "元箱・取扱説明書・保証書も手がかりになる",
      d: "本体の印字がすれて読めないときは、元箱の側面、取扱説明書の表紙、保証書などに型番が書かれていることがあります。購入時の書類を一緒にしまっていた家庭は多いので、カメラが出てきた引き出しや箱の周辺をもう一度見てみます。",
    },
    {
      t: "読めた型番は写真とメモで残す",
      d: "型番が読めたら、その部分を写真に撮り、紙やスマートフォンのメモにも書き写しておきます。問い合わせのときに打ち間違いを防げるほか、複数の業者へ同じ情報で相談するときの基本資料になります。本体の正面・背面・底面の写真もあわせて撮っておくと、状態の説明がしやすくなります。",
    },
  ];

  const accessories = [
    {
      label: "バッテリー",
      value:
        "多くのコンパクトデジタルカメラは専用の充電式バッテリーを使いますが、単三形などの乾電池で動く機種もあります。電池室を開けて、中に入ったままになっていないかをまず確認します。入っていた場合は、膨らみや液漏れがないかを見てから取り出します。予備のバッテリーが別の場所に保管されていることもあります。",
    },
    {
      label: "充電器・ACアダプター",
      value:
        "バッテリーを単体で充電する台座型の充電器か、本体にケーブルをつないで充電するタイプかは、機種によって異なります。充電器は他の家電のアダプター類と一緒にまとめてしまわれていることが多いため、家のケーブル類の箱を探すと見つかることがあります。ほかの機器の充電器を流用して試すのは避けた方が無難です。",
    },
    {
      label: "ケーブル類",
      value:
        "パソコンとつなぐためのUSBケーブル、テレビにつなぐための映像ケーブルなどが付属していた機種があります。古い機種では端子の形が今の一般的なものと違うことがあり、どれが付属品か見分けにくい場合があります。迷うものは処分せず、写真を撮って業者に確認します。",
    },
    {
      label: "メモリーカード",
      value:
        "本体に挿さったままのメモリーカードは、付属品ではなく持ち主の記録が入った媒体として扱います。売る前に必ず抜きます。カードは基本的に一緒に送る必要はありません。扱いは次の章で整理します。",
    },
    {
      label: "ストラップ・ケース・元箱・説明書",
      value:
        "手首に掛けるストラップ、ソフトケース、元箱、取扱説明書、保証書なども、揃っていれば一緒にまとめておきます。元箱や説明書の扱いも業者ごとに基準が異なるため、あるものは揃え、ないものはないと伝えるのが基本です。",
    },
  ];

  const operationChecks = [
    {
      t: "電池を入れる前に、電池室と端子を見る",
      d: "長くしまわれていたカメラは、動作を確かめる前に電池室の状態を見ます。端子に白い粉、緑色や茶色のさび、べたつきがある場合は、電池を入れて通電するのは控え、そのままの状態で業者や修理を扱う店に相談します。無理に通電すると、状態を悪くすることがあるとされています。",
    },
    {
      t: "電源が入るか、液晶に何が映るか",
      d: "充電できる状態のバッテリーと正しい充電器がそろっている場合に限り、電源が入るかを試します。電源が入ったら、液晶に映像が映るか、表示に線や黒い点、色むら、暗さがないかを見ます。電源が入らない場合も、それ自体で価値がないと決めつける必要はありません。「電源が入らない」「充電器がなく試せていない」という事実を、そのまま伝えます。",
    },
    {
      t: "レンズの繰り出しとレンズバリア",
      d: "電源を入れるとレンズが前に出てくる機種では、スムーズに出て、電源を切ると元に戻るかを見ます。途中で止まる、異音がする、エラーの表示が出る場合は、何度も電源を入れ直して試さず、その症状を控えておきます。レンズの前にある開閉式のふた（レンズバリア）が、完全に開くか、閉じきるかも確認します。バリアを指で無理に動かすのは避けます。",
    },
    {
      t: "レンズ表面と外装",
      d: "レンズ表面に傷、汚れ、くもりがないかを明るい場所で見ます。汚れを強くこすったり、溶剤で拭いたりするのは避け、乾いた柔らかい布でほこりを払う程度にとどめます。外装は、へこみ、割れ、塗装のはがれ、ゴム部品のべたつき、ボタンの欠け、ふたの爪の破損などを確認し、目立つものは写真に撮っておきます。",
    },
    {
      t: "確認できなかったことは「未確認」と伝える",
      d: "バッテリーが充電できない、充電器が見つからないなど、動作を確かめられないことはよくあります。その場合、動くかどうかを推測で伝えるのではなく、「動作未確認」と伝える方が、後の食い違いを防げます。故障があると分かっている機材の扱いは、壊れた・ジャンク品のページで整理しています。",
    },
  ];

  const dataSteps = [
    {
      t: "メモリーカードを抜く",
      d: "カードスロットのふたを開け、カードが挿さっていれば抜きます。押し込むと飛び出す方式が多いので、力を入れて引き抜かないようにします。抜いたカードは、何のカメラから抜いたかが分かるように、袋や封筒に入れてメモを添えておくと、後で中身を確認するときに迷いません。",
    },
    {
      t: "内蔵メモリがある可能性を考える",
      d: "機種によっては、カードを挿していなくても本体の内蔵メモリに写真が保存される仕組みになっています。カードを抜いた状態で電源を入れ、再生画面に写真が表示されるなら、内蔵メモリに残っている可能性があります。内蔵メモリの有無は機種により異なるため、取扱説明書の記載も参考になります。",
    },
    {
      t: "必要な写真は先に保存する",
      d: "カードの中身は、カードリーダーを使ってパソコンなどで読み出す方法が一般的です。古いカードの規格によっては、今のカードリーダーで読めないことがあります。内蔵メモリの写真は、本体とパソコンをケーブルでつなぐか、本体の機能でカードにコピーする方法がある場合があります。家族の写真が入っていることも多いため、必要なものを保存してから次の手順に進みます。",
    },
    {
      t: "消去・初期化は保存が済んでから",
      d: "必要な写真を保存したら、本体のメニューから写真の消去や内蔵メモリの初期化（フォーマット）を行う方法があります。一般に、消去や初期化は画面上から写真を見えなくする操作であり、専用の手段で復元できる可能性が残るとされています。気になる場合は、内蔵メモリのある本体は業者に対応を確認し、カードは手元に残す、という扱いがもっとも確実です。",
    },
    {
      t: "本体の設定に残る情報も見ておく",
      d: "機種によっては、撮影者名や著作権者名を写真に書き込む設定、通信機能の接続先などが本体に残っていることがあります。設定メニューのリセット（初期設定に戻す）を行うと、これらを消せる場合があります。ただし通電に不安がある状態の機材で無理に操作する必要はありません。",
    },
  ];

  const batterySafety = [
    {
      t: "膨らんだバッテリーは、充電しない・押さない",
      d: "充電式のバッテリーが膨らんでいる、電池ぶたが閉まらない、本体の継ぎ目が浮いている、といった状態は、一般に危険な兆候とされています。充電を試したり、押しつぶして元に戻そうとしたり、穴を開けたりするのは避けます。取り出しにくい場合は、無理にこじ開けず、そのままの状態で置いておきます。",
    },
    {
      t: "乾電池の液漏れは、素手で触らない",
      d: "乾電池式の機種で、電池室に白い粉や液体、さびが見られる場合は、手袋や紙を使って電池を取り出します。漏れた液が皮膚についたら水でよく洗い流します。電池室の端子の掃除を自分で行うかどうかは慎重に判断し、状態が悪ければ触らずにそのまま業者に相談します。",
    },
    {
      t: "熱のこもらない場所に、単独で置く",
      d: "膨張や損傷のあるバッテリーは、直射日光の当たる場所や暖房器具の近くを避け、燃えやすいものから離して保管します。ほかの電池や金属と一緒に袋へ入れると端子同士が触れることがあるため、端子部分に絶縁テープを貼る方法が一般に案内されています。",
    },
    {
      t: "処分は自治体の案内に従う",
      d: "膨張したバッテリーや液漏れした電池の処分方法は、自治体によって異なります。家庭ごみに混ぜず、お住まいの自治体の案内や、電池の回収を行っている販売店の案内を確認してください。",
    },
    {
      t: "送る前に、業者に状態を伝えて確認する",
      d: "膨張や損傷のあるリチウムイオン電池は、一般に輸送上の取り扱いに注意が必要とされています。宅配で送る予定がある場合は、電池の状態を申込時に伝え、本体と一緒に送ってよいか、電池を外して送るべきかを業者に確認してから発送します。",
    },
  ];

  const shippingNotes = [
    {
      t: "業者の案内する梱包方法に従う",
      d: "宅配買取では、業者から梱包キットが届く方式と、自分で箱を用意する方式があります。業者によっては、自分で用意した梱包材だけで発送することについて注意書きをしている場合もあるため、申込時の案内をよく読み、その方法に従います。",
    },
    {
      t: "本体は緩衝材でくるみ、箱の中で動かないようにする",
      d: "コンパクトデジタルカメラは小さく軽いため、箱の中で動いてぶつかりやすいものです。本体を緩衝材でくるみ、すき間を詰めて、振っても中で動かない状態にします。液晶面に硬いものが当たらないよう、付属品とは分けて包みます。",
    },
    {
      t: "電池の扱いは申込時の案内で確認する",
      d: "バッテリーを本体に入れたまま送るか、外して同梱するかは、業者の案内に従います。膨張や液漏れがある場合は、前の章のとおり、発送前に業者へ状態を伝えて確認します。",
    },
    {
      t: "メモリーカードと個人情報を入れていないか最後に確認する",
      d: "発送直前に、カードスロットが空であること、ケースやポーチの中に名刺やメモ、写真のプリントなどが入っていないことを確かめます。取扱説明書に名前や住所を書き込んでいる場合もあります。",
    },
    {
      t: "送った物の一覧と写真を手元に残す",
      d: "箱に入れた本体と付属品を並べて写真に撮り、送った物の一覧をメモしておきます。査定結果の連絡を受けたときに、送った付属品と照らし合わせることができます。キャンセルした場合の返送料の扱いは業者ごとに異なるため、申込前に確認しておきます。",
    },
  ];

  const noPriceOptions = [
    {
      t: "引き取りの有無を確認する",
      d: "値段が付かなかった場合に、業者が引き取りに応じるのか、返送するのかは、業者ごとに扱いが違います。申込の前に確認しておくと、査定後に迷わずに済みます。返送になる場合の送料負担も、あわせて確認します。",
    },
    {
      t: "別の業者にも同じ情報で相談する",
      d: "受付基準は業者ごとに異なります。ある業者で対象外とされた機材でも、別の業者では相談できる場合があります。型番、付属品の有無、確認できた動作、見つかった傷を同じ内容で伝えると、比較がしやすくなります。",
    },
    {
      t: "家族や知人に譲る、手元に残す",
      d: "値段が付かないことと、使えないことは別の話です。動く状態であれば、家族や知人に譲る、思い出の品として手元に残す、という選択もあります。手元に残す場合は、バッテリーを本体から外して保管します。",
    },
    {
      t: "自治体の小型家電回収を確認する",
      d: "デジタルカメラは、自治体によっては小型家電の回収の対象とされている場合があります。回収ボックスの設置場所、対象品目、電池を外す必要があるか、メモリーカードやデータの扱いなどは自治体ごとに異なるため、お住まいの自治体の案内を確認してください。回収に出す前にも、カードを抜き、必要な写真の保存を済ませておきます。",
    },
  ];

  const listed = [
    {
      slug: "arrows",
      name: "カメラ買取アローズ",
      target: "「デジタル一眼レフ・ミラーレス・コンパクトデジタルカメラ・フィルムカメラ・ビデオカメラ」ほか",
      methods: "宅配買取のみ（ヤマト運輸着払い・無料集荷あり）",
      note: "故障品は「商品によっては買取が可能な場合もございます」。ジャンク品・加工品・重度の付属品欠品（バッテリー・充電器がない商品）は買取不可と明記",
      checked: "2026年9月5日",
    },
    {
      slug: "kitamura",
      name: "カメラのキタムラ",
      target: "「交換レンズ／ミラーレス一眼・デジタル一眼レフ／コンパクトデジタルカメラ／フィルムカメラ／ビデオカメラ／カメラ用品」（買取方法により品目が異なると明記）",
      methods: "店頭買取・出張買取・宅配（直送）買取",
      note: "「元々製造番号（シリアルナンバー）があるのに消えてしまった、または、判別できないという場合は買い取ることが出来かねます」。カメラの故障品・カビの取り扱いの明記は公式では確認できず",
      checked: "2026年9月11日",
    },
    {
      slug: "fujiya",
      name: "フジヤカメラ",
      target: "「デジタルカメラ（ミラーレス・デジタル一眼レフ・デジタルレンジファインダー・中判デジタル・コンパクト）」ほか",
      methods: "宅配買取（無料の「楽々梱包キット」で着払い発送）・店頭買取",
      note: "故障品・ジャンク品・カビの買取可否の明記は公式では確認できず。宅配では、自分で用意した梱包材のみでの発送について注記あり",
      checked: "2026年9月11日",
    },
    {
      slug: "naniwa",
      name: "カメラのナニワ",
      target: "「デジタルカメラ／レンズ／フィルムカメラ」ほか",
      methods: "宅配買取・店頭買取・出張買取",
      note: "「状態が悪いものや欠品しているものに関しては買取の対象となりにくい場合がございます」。故障品・カビ・ジャンク品の可否の明記は公式では確認できず",
      checked: "2026年9月11日",
    },
    {
      slug: "daikokuya",
      name: "大黒屋",
      target: "「デジタル一眼レフカメラ・ミラーレス一眼カメラ・コンパクトデジタルカメラ・中判デジタルカメラ・ネオ一眼カメラ・フィルムカメラ」ほか",
      methods: "宅配買取・店頭買取・出張買取",
      note: "「一部パーツが壊れたカメラ」も買取対象と記載。ただし「製造番号やシリアルナンバーが元々入っているカメラで、消えてしまっていたり、判別できない状態のものはお買取りができません」",
      checked: "2026年9月11日",
    },
    {
      slug: "janpara",
      name: "じゃんぱら",
      target: "「デジタル一眼／コンパクトデジカメ／フィルムカメラ／交換レンズ」ほか",
      methods: "店頭買取・おまかせ宅配買取・法人買取（出張買取の記載なし）",
      note: "「基本的に通常正常動作品のみ買取対象となります」「規格があまり古すぎるものは買取できない物もございます」とし、迷う場合は最寄りの店舗へ問い合わせるよう案内",
      checked: "2026年9月11日",
    },
    {
      slug: "rakuuru",
      name: "ラクウル（ソフマップ）",
      target: "「カメラ・ビデオカメラ」カテゴリに「デジタルカメラ・デジタル一眼レフ・ミラーレス一眼」ほか",
      methods: "宅配買取・来店予約（店舗買取）。出張買取はカメラ対象外",
      note: "故障品・ジャンク品の扱いは公式で確認できなかった",
      checked: "2026年9月11日",
    },
    {
      slug: "camera-takakuureru",
      name: "カメラ高く売れるドットコム",
      target: "「デジタルカメラ／一眼レフカメラ／ミラーレス一眼カメラ／ビデオカメラ」ほか",
      methods: "出張買取・宅配買取・店頭買取",
      note: "「一部機能が使えないといった軽度の故障でしたら、買取価格がつく可能性があります」。付属品は「購入時の箱や付属品は残っていることが望ましいですが、なくてもお買取できます」",
      checked: "2026年9月11日",
    },
  ];

  const checklist = [
    "本体の底面・側面・電池ぶたの内側を見て、型番を確認した",
    "型番と製造番号の部分を写真に撮り、メモにも書き写した",
    "本体の正面・背面・底面の写真を撮った",
    "バッテリー・充電器・ケーブル・ストラップ・元箱・説明書を探し、見つかったものをまとめた",
    "見つからなかった付属品を書き出した",
    "電池室と端子に液漏れやさびがないかを見た",
    "バッテリーの膨らみがないかを確認し、異常があれば充電も通電もしていない",
    "試せる場合のみ、電源・液晶・レンズの繰り出し・レンズバリアを確認した",
    "確認できなかった項目を「動作未確認」として控えた",
    "メモリーカードを抜き、どのカメラのカードかメモを添えた",
    "カードを抜いた状態で内蔵メモリに写真が残っていないかを確認した",
    "必要な写真を保存したうえで、消去・初期化を検討した",
    "業者の対象品目と、付属品欠品・故障品の扱いを公式サイトで確認した",
    "値段が付かない場合の引き取り・返送の扱いを申込前に確認した",
    "発送前に、カードスロットが空で、個人情報の書かれたものが入っていないことを確かめた",
  ];

  const faqs = [
    {
      q: "かなり古いコンパクトデジカメでも、売れるのでしょうか？",
      a: "当サイトからは、個別の機材が売れるかどうかを断定できません。扱いは機種・状態・付属品の有無、そして業者ごとの受付基準によって変わります。規格が古すぎるものは受け付けない場合がある、と公式に記載している業者もあります。自分で処分を決める前に、型番・付属品・確認できた動作をまとめて、複数の業者に同じ情報で相談する方法があります。",
    },
    {
      q: "充電器が見つかりません。バッテリーだけでも送ってよいですか？",
      a: "業者によって扱いが異なります。当サイトの掲載社では、カメラ買取アローズがバッテリー・充電器がない商品を買取不可と記載しており（2026年9月5日確認）、一方でカメラ高く売れるドットコムは付属品がなくても買取できると記載しています（2026年9月11日確認）。申込前に公式サイトの条件を確認し、「充電器なし・動作未確認」と事実をそのまま伝えます。ほかの機器の充電器で代用して試すのは避けた方が無難です。",
    },
    {
      q: "電源が入らないコンデジは、捨てるしかありませんか？",
      a: "電源が入らない理由は、バッテリーの消耗、充電器の不一致、本体の故障などさまざまで、見た目だけでは判断できません。故障品の受け付けは業者ごとに異なり、軽度の故障なら値段が付く可能性があると記載している業者もあります。まずは「電源が入らない」という事実のまま相談し、値段が付かなかった場合に自治体の小型家電回収などを検討する、という順序が取りこぼしの少ない進め方です。",
    },
    {
      q: "写真を消したつもりでも、データは残りますか？",
      a: "一般に、写真の消去や初期化は画面上から見えなくする操作であり、専用の手段で復元できる可能性が残るとされています。メモリーカードは売る前に抜いて手元に残すのがもっとも確実です。本体の内蔵メモリに写真が残っている可能性がある場合は、必要なものを保存したうえで初期化を行い、気になる点は業者に確認します。",
    },
    {
      q: "バッテリーが膨らんでいます。どうすればよいですか？",
      a: "充電や通電を試さず、押したり穴を開けたりしないでください。熱のこもらない場所に、燃えやすいものから離して置きます。宅配で送る予定がある場合は、電池の状態を申込時に業者へ伝え、同梱してよいかを確認してから発送します。処分する場合は、お住まいの自治体の案内に従ってください。",
    },
    {
      q: "値段が付かなかった場合、送ったカメラはどうなりますか？",
      a: "業者によって、引き取りに応じる場合と返送になる場合があり、返送料の負担も業者ごとに異なります。申込前に公式サイトや申込時の案内で確認しておくと、査定後に迷わずに済みます。手元に戻った場合は、家族や知人に譲る、手元に残す、自治体の小型家電回収の案内を確認する、といった選択肢があります。",
    },
  ];

  return (
    <>
      <JsonLd data={articleLd} />
      <JsonLd data={faqPageLd(faqs)} />
      <Breadcrumbs
        items={[
          { name: "ホーム", path: "/" },
          { name: "デジタル一眼・ミラーレスの買取", path: "/digital/" },
          { name: "古いコンパクトデジカメを売る前に", path: PATH },
        ]}
      />
      <article className="mx-auto max-w-site px-4 py-10 md:py-14">
        <p className="kicker mb-3">COMPACT DIGITAL CAMERA</p>
        <h1 className="max-w-4xl font-display text-2xl leading-relaxed text-steel-900 md:text-3xl md:leading-relaxed">
          古いコンパクトデジカメ（コンデジ）を売る前に｜型番・付属品・データ・電池の確認手順
        </h1>
        <p className="mt-5 max-w-3xl text-sm leading-loose text-steel-600">
          引き出しの奥や押し入れの箱から、何年も使っていないコンパクトデジタルカメラが出てきた。売れるのかどうか分からず、そのままにしている。そうした機材を手放す前に、自分で確認しておくことを順番に整理しました。このページでは値段の見込みには触れません。型番の確認場所、付属品の揃え方、液晶とレンズまわりの見方、データとメモリーカードの扱い、電池に異常があるときの安全側の扱い、宅配で送るときの注意、値段が付かない場合の選択肢を、一般知識としてまとめます。
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

        {/* 型番 */}
        <section className="mt-14">
          <h2 className="section-title mb-2">まず型番を確認する</h2>
          <p className="mb-6 max-w-3xl text-sm leading-loose text-steel-600">
            業者へ問い合わせるとき、最初に聞かれるのが型番です。シリーズ名だけでは同じ名前の機種がいくつもあり、特定できないことがあります。次の順に探すと、たいていの機材で見つかります。
          </p>
          <div className="space-y-5">
            {modelChecks.map((s, i) => (
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
        </section>

        {/* 付属品 */}
        <section className="mt-14">
          <h2 className="section-title mb-2">付属品を揃える</h2>
          <p className="mb-5 max-w-3xl text-sm leading-loose text-steel-600">
            コンパクトデジタルカメラは、本体だけでは充電も動作確認もできないことがほとんどです。付属品が揃っているかどうかは、受け付けの可否そのものに関わる場合があります。見つかったものはまとめ、見つからなかったものは書き出しておきます。
          </p>
          <div className="overflow-x-auto border border-chalk-line">
            <table className="spec-table">
              <tbody>
                {accessories.map((r) => (
                  <tr key={r.label}>
                    <th className="w-40 md:w-56">{r.label}</th>
                    <td>{r.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-steel-500">
            ※ バッテリーや充電器がない機材の扱いは業者ごとに異なります。後述の掲載社データと、各社の公式サイトで確認してください。
          </p>
        </section>

        {/* 動作・外装 */}
        <section className="mt-14">
          <h2 className="section-title mb-2">液晶・レンズバリア・外装を見る</h2>
          <p className="mb-6 max-w-3xl text-sm leading-loose text-steel-600">
            動作の確認は、できる範囲で構いません。大切なのは、動かすことより、見えている事実を正確に控えることです。無理に試して状態を悪くするより、「未確認」と伝える方が安全です。
          </p>
          <div className="space-y-4">
            {operationChecks.map((c) => (
              <div key={c.t} className="border-l-2 border-vermilion bg-chalk-card p-5">
                <h3 className="font-display text-base text-steel-900">{c.t}</h3>
                <p className="mt-2 text-[13px] leading-loose text-steel-700">{c.d}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link href="/broken/" className="btn-primary">壊れた・ジャンク品の扱いを見る</Link>
            <Link href="/guide/uru-mae/" className="btn-ghost">売る前の準備を見る</Link>
          </div>
        </section>

        {/* データ */}
        <section className="mt-14">
          <h2 className="section-title mb-2">データとメモリーカードの扱い</h2>
          <p className="mb-6 max-w-3xl text-sm leading-loose text-steel-600">
            古いコンパクトデジタルカメラには、家族旅行や子どもの行事など、撮ったまま見返していない写真が残っていることがよくあります。写真は写っている人のプライバシーにも関わります。手放す前に、次の順で確認します。
          </p>
          <div className="space-y-5">
            {dataSteps.map((s, i) => (
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
            ※ 読み出せないカードや壊れたカードからのデータの取り出しが可能かどうかは、状態により異なります。必要な場合は専門の業者に相談してください。
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link href="/situation/koujin-film-data/" className="btn-primary">故人のメモリーカード・写真データの扱いを見る</Link>
          </div>
        </section>

        {/* 電池の安全 */}
        <section className="mt-14">
          <h2 className="section-title mb-2">電池の膨張・液漏れがある場合</h2>
          <p className="mb-6 max-w-3xl text-sm leading-loose text-steel-600">
            長く放置されたカメラでは、バッテリーの膨張や乾電池の液漏れが見つかることがあります。ここでは、状態を確かめることより、安全を優先した扱いを整理します。
          </p>
          <div className="space-y-4">
            {batterySafety.map((c) => (
              <div key={c.t} className="border-l-2 border-vermilion bg-chalk-card p-5">
                <h3 className="font-display text-base text-steel-900">{c.t}</h3>
                <p className="mt-2 text-[13px] leading-loose text-steel-700">{c.d}</p>
              </div>
            ))}
          </div>
          <p className="mt-3 text-xs text-steel-500">
            ※ 電池の処分方法・回収の方法は、お住まいの自治体の案内に従ってください。
          </p>
        </section>

        {/* 宅配 */}
        <section className="mt-14">
          <h2 className="section-title mb-2">宅配で送るときの注意</h2>
          <p className="mb-6 max-w-3xl text-sm leading-loose text-steel-600">
            コンパクトデジタルカメラは小さく、宅配買取を使いやすい機材です。一方で、小さいからこそ梱包が甘くなりがちです。発送前に次の点を確認します。
          </p>
          <div className="space-y-5">
            {shippingNotes.map((s, i) => (
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
            <Link href="/guide/trouble/" className="btn-primary">トラブル時の対処を見る</Link>
            <Link href="/compare/" className="btn-ghost">返送料などを比較表で見る</Link>
          </div>
        </section>

        {/* 掲載社データ */}
        <section className="mt-14">
          <h2 className="section-title mb-2">対象品目にデジタルカメラを挙げている掲載社</h2>
          <p className="mb-5 max-w-3xl text-sm leading-loose text-steel-600">
            当サイトの掲載社のうち、公式サイトの対象品目にコンパクトデジタルカメラまたはデジタルカメラの記載がある社を、確認日時点の公式記載の範囲で並べます。機種別の受付可否は、どの社のデータにも記載がないため、当サイトからは断定できません。申込前に各社の公式サイトで最新の条件を確認してください。
          </p>
          <div className="overflow-x-auto border border-chalk-line">
            <table className="spec-table">
              <thead>
                <tr>
                  <th>掲載社</th>
                  <th>対象品目の記載（抜粋）</th>
                  <th>買取方法</th>
                  <th>故障品・付属品などの記載</th>
                </tr>
              </thead>
              <tbody>
                {listed.map((c) => (
                  <tr key={c.slug}>
                    <th className="w-36 md:w-44">
                      <Link href={`/kaitori/${c.slug}/`} className="underline hover:text-vermilion">
                        {c.name}
                      </Link>
                      <span className="mt-1 block text-[11px] font-normal text-steel-500">{c.checked}確認</span>
                    </th>
                    <td>{c.target}</td>
                    <td>{c.methods}</td>
                    <td>{c.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs leading-loose text-steel-500">
            ※ 公式サイトの記載をもとに整理したもので、確認日以降に条件が変わっている場合があります。当サイトの分類で「故障品の受付を公式に明記する社」は、この表のうち大黒屋とカメラ高く売れるドットコムです（壊れた・ジャンク品のページを参照）。買取金額は機種・状態・時期により異なります。
          </p>
        </section>

        {/* 値段が付かない場合 */}
        <section className="mt-14">
          <h2 className="section-title mb-2">値段が付かない場合の選択肢</h2>
          <p className="mb-6 max-w-3xl text-sm leading-loose text-steel-600">
            相談の結果、値段が付かないこともあります。そのときに慌てずに済むよう、あらかじめ選択肢を知っておきます。
          </p>
          <div className="space-y-4">
            {noPriceOptions.map((c) => (
              <div key={c.t} className="border-l-2 border-vermilion bg-chalk-card p-5">
                <h3 className="font-display text-base text-steel-900">{c.t}</h3>
                <p className="mt-2 text-[13px] leading-loose text-steel-700">{c.d}</p>
              </div>
            ))}
          </div>
          <p className="mt-3 text-xs text-steel-500">
            ※ 小型家電回収の対象品目・方法は自治体ごとに異なります。お住まいの自治体の案内を確認してください。
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link href="/situation/ihin/" className="btn-primary">遺品・実家整理で出てきた場合を見る</Link>
            <Link href="/situation/tairyou/" className="btn-ghost">まとめて手放す場合を見る</Link>
          </div>
        </section>

        {/* チェックリスト */}
        <section className="mt-14">
          <h2 className="section-title mb-6">手放す前のチェックリスト</h2>
          <ul className="space-y-2 border border-chalk-line bg-chalk-card p-5">
            {checklist.map((c) => (
              <li key={c} className="flex gap-2 text-[13px] leading-loose text-steel-700">
                <span aria-hidden="true" className="text-vermilion">□</span>
                {c}
              </li>
            ))}
          </ul>
        </section>

        {/* FAQ */}
        <section className="mt-14">
          <h2 className="section-title mb-6">古いコンパクトデジカメについてよくある質問</h2>
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
              <Link href="/digital/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">デジタル一眼・ミラーレスの買取</span>
                <span className="mt-1 block text-xs text-steel-500">デジタル機全般の準備と掲載社の条件</span>
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
              <Link href="/situation/koujin-film-data/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">故人のフィルム・メモリーカード・写真データ</span>
                <span className="mt-1 block text-xs text-steel-500">未現像フィルムとデータの取り出し方</span>
              </Link>
            </li>
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
              <Link href="/situation/tairyou/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">カメラ・レンズを大量に売るには</span>
                <span className="mt-1 block text-xs text-steel-500">まとめ売りの進め方</span>
              </Link>
            </li>
            <li>
              <Link href="/film/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">フィルムカメラの買取</span>
                <span className="mt-1 block text-xs text-steel-500">フィルムのコンパクトカメラが出てきた場合</span>
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
                <span className="mt-1 block text-xs text-steel-500">出張対応・遺品対応・返送料を同じ物差しで</span>
              </Link>
            </li>
            <li>
              <Link href="/broken/dengen-hairanai/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">電源が入らないカメラを売る</span>
                <span className="mt-1 block text-xs text-steel-500">動作未確認と故障の切り分けと申告</span>
              </Link>
            </li>
          </ul>
        </section>

        <p className="mt-12 text-xs leading-loose text-steel-500">
          ※ 本ページの記載は{PAGE_DATE_LABEL}時点の一般的な整理です。掲載社の条件は各社の確認日時点の公式記載に基づきます。修理・データの取り出し・動作の可否は状態により異なるため、当サイトでは判断を示しません。電池や小型家電の処分方法は、お住まいの自治体の案内に従ってください。買取金額は機種・状態・時期により異なります。
        </p>
      </article>
    </>
  );
}
