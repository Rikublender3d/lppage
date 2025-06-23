import image from './assets/top1.webp';
import card1 from './assets/firstcard.jpg';
import card2 from './assets/secondcard.webp';
import card3 from './assets/thirdcard.jpg';
import card4 from './assets/fouthcard.jpeg';
import card5 from './assets/fifthcard.webp';
import card6 from './assets/sixthcard.jpeg';
import bg from './assets/bg.png';
import { IoMdCheckboxOutline } from "react-icons/io";
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";
import docter from './assets/docter.webp';
import { RiNumber1 } from "react-icons/ri";
import { RiNumber2 } from "react-icons/ri";
import { RiNumber3 } from "react-icons/ri";
import feature1 from './assets/feature1.jpg';
import feature2 from './assets/feature2.webp';
import feature3 from './assets/feature3.webp';
import './index.css';
import icon1 from './assets/icon1.png';
import icon2 from './assets/icon2.png';
import icon3 from './assets/icon3.png';
import Banner from './components/banner';
function App() {
  interface Testimonial {
    id: number;
    name: string;
    age: string;
    gender: string;
    rating: number;
    icon: string;
    comment: string;
  }

  interface StarRatingProps {
    rating: number;
  }

  // お客様の声データ
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Y.U　さん",
      age: "20代",
      gender: "女性",
      rating: 5,
      icon: icon1, // 実際のアイコンパスに置き換え
      comment: "1回の施術だけで、2トーンぐらい白くなり満足です。今まで歯磨き粉ジェルやセルフホワイトニングの機会を使用していましたが、こちらでお願いするのと効果が全く違いますね。明るい印象になりました。LINEから予約できるのが嬉しいです。"
    },
    {
      id: 2,
      name: "T.I さん",
      age: "30代",
      gender: "男性",
      rating: 5,
      icon: icon2,
      comment: "先日初めてのホワイトニングで行きました！女性のスタッフさんが丁寧に説明、ご対応くださり終始居心地いい空間でした。ここでホワイトニングデビューしようと思います！よろしくお願いいたします。"
    },
    {
      id: 3,
      name: "E.K さん",
      age: "40代",
      gender: "女性",
      rating: 5,
      icon: icon3,
      comment: "理想の歯の色になるまでのアドバイスや、プランなど親身になって提案してくれました。1回でも白くなっているのが驚きでした！また継続的に行きたいと思います。素敵な接客にありがとうございました。"
    }
  ];

  // 星評価コンポーネント
  const StarRating: React.FC<StarRatingProps> = ({ rating }) => (
    <div className="flex gap-0.5">
      {[...Array(rating)].map((_, i) => (
        <div key={i} className="text-[#111418]" data-icon="Star" data-size="20px" data-weight="fill">
          <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
            <path d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z"></path>
          </svg>
        </div>
      ))}
    </div>
  );
  return (
    <>
      <header>
        <article className="relative h-[80vh]">
          {/* 背景エリア */}
          <section className="absolute inset-0 bg-gray-900">
            <img
              src={image}
              alt="キースブライトクリニック メインビジュアル - 白い歯で笑顔の女性"
              className="w-full h-full object-cover opacity-80"
              loading="eager"
            />
          </section>
          <section className="relative h-[80vh] flex items-center justify-start px-8 lg:px-16">
            <div className="relative z-20 w-full max-w-lg text-left">
              <h1 className="text-5xl font-bold tracking-tight text-white drop-shadow-lg">
                周りから褒められる<br />理想の白さへ
              </h1>
              <p className="mt-4 text-lg text-white">
                ホワイトニング専門の歯科医院。<br />国家資格を持つ歯科医師・歯科衛生士が担当。
              </p>
              {/* メリットリスト */}
              <ul className="mt-4 text-white space-y-2 text-lg" role="list">
                <li>☑︎　症例数 地域 No.1</li>
                <li>☑︎　平日夜8時まで診療</li>
                <li>☑︎　完全個室・完全予約制</li>
              </ul>
              {/* CTAボタン */}
              <a
                target='_blank'
                rel="noopener noreferrer"
                href="https://clinics-app.com/dental/06cb0916-ca56-4284-b963-447a34e5286f"
                className="mt-6 inline-block px-8 py-4 text-lg font-semibold text-white bg-[#7facdc] rounded-xl shadow-lg hover:bg-[#CFCCAA] transition"
                aria-label="キースブライトクリニックの無料カウンセリングを今すぐ予約">
                今すぐ予約
              </a>
            </div>
          </section>
        </article>
      </header>
      <body>
        <main>
          <Banner />
          <article className="relative" aria-labelledby="problems-section">
            <section className="w-[100%] md:h-[80vh] h-[60vh] md:absolute bg-gradient-to-l from-[#8f94fb] to-[#4e54c8] z-10">
              <img
                src={bg}
                alt="背景パターン"
                className='object-center object-cover w-full aspect-video circles overflow-hidden'
                loading="lazy"
              />
            </section>
            <section className="hidden md:block md:h-[80vh] h-[60vh] flex justify-center items-center">
              <h2 className='md:absolute left-1/24 top-1/12 bg-gray-700 bg-clip-text text-4xl font-bold text-transparent z-20' data-aos="fade-up" data-aos-duration="1000">ホワイトニングってどれを選ベばいいのかわからない</h2>
              <h2 className='md:absolute right-1/50 top-2/5 bg-gray-700 bg-clip-text text-4xl font-bold  text-transparent z-20 ' data-aos="fade-up" data-aos-duration="1000">最近歯が黄ばんできた…</h2>
              <h2 className='md:absolute left-1/12 bottom-1/12 bg-gray-700 bg-clip-text text-4xl font-bold  text-transparent z-20' data-aos="fade-up" data-aos-duration="1000">マスクを外すと急に口元が目立つようになった</h2>
            </section>
            <section className="md:hidden text-left flex flex-col justify-evenly items-left w-[95%] mx-auto">
              <div className="flex gap-2 items-center py-2" data-aos="fade-right" data-aos-duration="800" data-aos-delay="0">
                <IoMdCheckboxOutline className='w-10 h-10' aria-hidden="true" />
                <h2 className="md:hidden bg-gray-700 bg-clip-text text-[1.5rem] font-medium text-transparent z-20">
                  ホワイトニングって<br />どれを選ベばいいのかわからない
                </h2>
              </div>
              <div className="flex gap-2 items-center py-2" data-aos="fade-right" data-aos-duration="800" data-aos-delay="200">
                <IoMdCheckboxOutline className='w-10 h-10' aria-hidden="true" />
                <h2 className="md:hidden bg-gray-700 bg-clip-text text-[1.5rem] font-medium text-transparent z-20">
                  最近歯が黄ばんできた…
                </h2>
              </div>
              <div className="flex gap-2 items-center py-2" data-aos="fade-right" data-aos-duration="800" data-aos-delay="400">
                <IoMdCheckboxOutline className='w-10 h-10 ' aria-hidden="true" />
                <h2 className="md:hidden bg-gray-700 bg-clip-text text-[1.5rem] font-medium text-transparent z-20">
                  マスクを外すと<br />急に口元が目立つようになった
                </h2>
              </div>
            </section>
          </article>
          <p className="text-3xl font-bold text-center px-4 py-10 @container mx-auto lg:px-40 md:px-20 px-10">そんなお悩みは...</p>
          <MdOutlineKeyboardDoubleArrowDown className='w-20 h-20 mx-auto my-5 animate-bounce' aria-hidden="true" />

          <section className='md:flex justify-center items-center' aria-labelledby="doctor-section">
            <img
              src={docter}
              alt="キースブライトクリニックの歯科医師"
              className='mx-auto object-center object-cover'
              loading="lazy"
            />
            <h2 id="doctor-section" className="object-center text-[#595757] text-4xl font-bold text-center px-4 pb-3 pt-5">
              <span className="text-[#FFD900] text-5xl font-black line-clamp-2">キースブライト<br className='md:hidden' />クリニック</span><br />にお任せください。
            </h2>
          </section>
          <section className="flex flex-col gap-10 px-4 py-10 @container mx-auto lg:px-40 md:px-20 px-10 text-center" aria-labelledby="reasons-section">
            <div className="text-center flex flex-col gap-2">
              <h2 id="reasons-section" className="text-[#595757] text-4xl font-bold text-center px-4 pb-3 pt-5">選ばれる理由</h2>
              <h3 className="text-[#FFD900] text-2xl font-bold text-center px-4">Reason</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {[
                { title: "個室をご用意", text: "当院はプライバシーに配慮し個室をご用意。ゆったりとおくつろぎいただけます。", image: card1, alt: "プライベート個室でのホワイトニング治療風景" },
                { title: "医薬品配合", text: "セルフホワイトニングとは違い、歯科医院なので医療用ジェルを使用しており、元々の歯の色以上に白くしていくことができます。", image: card2, alt: "医療用ホワイトニングジェル" },
                { title: "プロが施術", text: "スタッフは全員国家資格保持者の歯科医師・歯科衛生士です。ホワイトニングのトレーニングを積んでおります。", image: card3, alt: "国家資格を持つ歯科衛生士による施術" },
                { title: "飲食制限なし", text: "当院のホワイトニングは飲食制限がありません。コーヒー、紅茶など色の濃い飲食物を控える必要がありません。", image: card4, alt: "ホワイトニング後も飲食制限なし" },
                { title: "医療用ジェル", text: "医療用ジェルを使用しており、元々の歯の色以上に白くしていくことができます。", image: card5, alt: "医療用ホワイトニングジェルによる効果" },
                { title: "リーズナブルな料金", text: "歯科医院のホワイトニングでありながら、リーズナブルな料金です。", image: card6, alt: "リーズナブルな料金でのホワイトニング" },
              ].map((card, index) => (
                <article key={index} className="flex flex-col gap-3 pb-3">
                  <img
                    src={card.image}
                    alt={card.alt}
                    className='w-full object-center object-cover aspect-video rounded-xl'
                    loading="lazy"

                  />
                  <div>
                    <h3 className="text-[#111418] text-xl font-medium leading-normal">{card.title}</h3>
                    <p className="text-[#637588] text-base font-normal leading-normal">
                      {card.text}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </section>
          <section aria-labelledby="commitment-section">
            <h2 id="commitment-section" className="text-[#595757] text-4xl font-bold text-center px-4 pb-3 pt-5">
              こだわり
            </h2>
            <h3 className="text-[#FFD900] text-2xl font-bold text-center px-4">Commitment</h3>
            <div className="relative overflow-hidden pt-16 pb-32 space-y-24">
              <article className="relative">
                <div className="lg:mx-auto grid grid-cols-1 lg:grid-cols-2 lg:gap-24 lg:px-8">
                  <div className="order-first lg:order-last mt-12 sm:mt-16 lg:mt-0">
                    <div className="-mr-48 pl-6 md:-mr-16 lg:relative lg:m-0 lg:h-full lg:px-0">
                      <img
                        loading="lazy"
                        src={feature1}
                        alt="国家資格を持つ歯科医師による専門的なホワイトニング施術"
                        className="aspect-video object-cover w-full rounded-xl shadow-2xl ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                      />
                    </div>
                  </div>
                  <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0">
                    <div>
                      <div>
                        <span className="flex h-12 w-12 text-white items-center justify-center rounded-xl bg-[#595757]">
                          <RiNumber1 aria-hidden="true" />
                        </span>
                      </div>
                      <div className="mt-6">
                        <h3 className="text-3xl font-bold tracking-tight">
                          プロが施術
                        </h3>
                        <p className="mt-4 text-lg text-gray-700 min-h-[150px]">
                          担当は全て国家資格を持つ歯科医師・歯科衛生士が行い、知識・技術の研修を十分に行っております。最適な方法・期間を無料カウンセリングでご説明しております。ぜひこの機会に私たちにご相談ください。
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
              <article className="relative">
                <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
                  <div className="mt-12 sm:mt-16 lg:mt-0">
                    <div className="-ml-48 pr-6 md:-ml-16 lg:relative lg:m-0 lg:h-full lg:px-0">
                      <img
                        loading="lazy"
                        src={feature2}
                        alt="24時間ネット予約システム"
                        className="aspect-video object-cover w-full rounded-xl shadow-2xl ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                      />
                    </div>
                  </div>
                  <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0">
                    <div>
                      <div>
                        <span className="flex h-12 w-12 text-white items-center justify-center rounded-xl bg-[#595757]">
                          <RiNumber2 aria-hidden="true" />
                        </span>
                      </div>
                      <div className="mt-6">
                        <h3 className="text-3xl font-bold tracking-tight">
                          24時間予約受付
                          問診対応
                        </h3>
                        <p className="mt-4 text-lg text-gray-700 min-h-[150px]">
                          当院では、歯の黄ばみが気になった時すぐにご予約ができるように24時間ネット予約を承っております。
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
              <article className="relative">
                <div className="lg:mx-auto grid grid-cols-1 lg:grid-cols-2 lg:gap-24 lg:px-8">
                  <div className="order-first lg:order-last mt-12 sm:mt-16 lg:mt-0">
                    <div className="-mr-48 pl-6 md:-mr-16 lg:relative lg:m-0 lg:h-full lg:px-0">
                      <img
                        loading="lazy"
                        src={feature3}
                        alt="口腔内トータルケアサービス"
                        className="aspect-video object-cover w-full rounded-xl shadow-2xl ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                      />
                    </div>
                  </div>
                  <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0">
                    <div>
                      <div>
                        <span className="flex h-12 w-12 text-white items-center justify-center rounded-xl bg-[#595757]">
                          <RiNumber3 aria-hidden="true" />
                        </span>
                      </div>
                      <div className="mt-6">
                        <h3 className="text-3xl font-bold tracking-tight">
                          お口の中をトータルケア
                        </h3>
                        <p className="mt-4 text-lg text-gray-700 min-h-[150px]">
                          ホワイトニングの種類も豊富で、患者様のご希望に寄り添い目的・時間に合わせてプランをご提供致します。歯科医師・歯科衛生士が密にコミュニケーションを取り、ホワイトニングのみならず治療も可能なためお口の中をトータルケアできることも選んでいただいているポイントになっております。
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </section>
          <Banner />
          <section area-labelledby="pricing-section">
            <h2 id="pricing-section" className="text-[#595757] text-4xl font-bold text-center px-4 pb-3 pt-5">料金一覧</h2>
            <h3 className="text-[#FFD900] text-2xl font-bold text-center px-4">Price</h3>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(228px,1fr))] gap-2.5 px-4 py-3 @3xl:grid-cols-4">
              <article className="flex flex-1 flex-col gap-4 rounded-xl border border-solid border-[#dce0e5] bg-white p-6">
                <div className="flex flex-col gap-1">
                  <div className="flex items-center justify-between">
                    <h1 className="text-[#111418] text-base font-bold leading-tight">無料カウンセリング30分</h1>
                    <p className="text-white text-xs font-medium leading-normal tracking-[0.015em] rounded-xl bg-[#FFD900] px-3 py-[3px] text-center">一番人気</p>
                  </div>
                  <span className="text-[#111418] text-4xl font-black leading-tight tracking-[-0.033em]">0円</span>
                </div>
                <a href="https://clinics-app.com/dental/06cb0916-ca56-4284-b963-447a34e5286f" target="_blank">
                  <button className="w-[100%] group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-neutral-950 px-6 font-medium text-neutral-200 transition hover:scale-105 hover:bg-neutral-900 active:scale-95 duration-200"><span>申し込む</span><div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]"><div className="relative h-full w-15 bg-white/10"></div></div></button>
                </a>
                <div className="flex flex-col gap-2">
                  <p>
                    歯の白くなりやすさ・期間・方法はその方の歯の質によって異なります。最適な方法・期間を無料カウンセリングでご説明しております。患者様のご希望に寄り添いながらカウンセリングを行いますので、ぜひご相談ください。
                  </p>
                </div>
              </article>
              <div className="flex flex-1 flex-col gap-4 rounded-xl border border-solid border-[#dce0e5] bg-white p-6">
                <div className="flex flex-col gap-1">
                  <h1 className="text-[#111418] text-base font-bold leading-tight">オフィスホワイトニング</h1>
                  <span className="text-[#111418] text-4xl font-black leading-tight tracking-[-0.033em]">13,200円</span>
                </div>
                <a href="https://clinics-app.com/dental/06cb0916-ca56-4284-b963-447a34e5286f">
                  <button className="w-[100%] group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-neutral-950 px-6 font-medium text-neutral-200 transition hover:scale-105 hover:bg-neutral-900 active:scale-95 duration-200"><span>申し込む</span><div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]"><div className="relative h-full w-15 bg-white/10"></div></div></button>
                </a>
                <div className="flex flex-col gap-2">
                  <p>
                    歯の表面に漂白剤を塗り、LEDのライトを数分間照射して薬剤を活性化させ、短時間で白くしていきます。
                    ホームホワイトニングで使用する薬剤より濃度が高く、短時間で白くなるのが特徴です。個人差はありますが、１回の施術で2〜4段階白くなります。
                  </p>
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-4 rounded-xl border border-solid border-[#dce0e5] bg-white p-6">
                <div className="flex flex-col gap-1">
                  <h1 className="text-[#111418] text-base font-bold leading-tight">ホームホワイトニング初回</h1>
                  <span className="text-[#111418] text-4xl font-black leading-tight tracking-[-0.033em]">20,000円</span>
                </div>
                <a href="https://clinics-app.com/dental/06cb0916-ca56-4284-b963-447a34e5286f">
                  <button className="w-[100%] group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-neutral-950 px-6 font-medium text-neutral-200 transition hover:scale-105 hover:bg-neutral-900 active:scale-95 duration-200"><span>申し込む</span><div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]"><div className="relative h-full w-15 bg-white/10"></div></div></button>
                </a>
                <p>
                  マウスピースを使用し、自宅など好きな場所で行うホワイトニングです。オフィスホワイトニングよりも低濃度のジェルを使用し、毎日３０分〜２時間程度マウスピースにいれて装着します。
                  オフィスホワイトニングに比べて、長期の使用が必要ですが、後戻りがしにくいのが特徴です。
                </p>
              </div>
            </div>
            <section>
              <h2 className="text-[#595757] text-4xl font-bold text-center px-4 pb-3 pt-5">お客様の声</h2>
              <h3 className="text-[#FFD900] text-lg font-bold text-center px-4">VOICE</h3>
              <div className="flex flex-col gap-8 overflow-x-hidden bg-white md:px-20 px-10">
                {testimonials.map((testimonial: Testimonial) => (
                  <div key={testimonial.id} className="flex flex-col gap-3 bg-white">
                    <div className="flex items-center gap-3">
                      <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10">
                        <img
                          src={testimonial.icon}
                          alt={`${testimonial.age}${testimonial.gender}のアイコン`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <p className="text-[#111418] text-base font-medium leading-normal">{testimonial.name}</p>
                        <p className="text-[#637588] text-sm font-normal leading-normal">
                          {testimonial.age}　{testimonial.gender}
                        </p>
                      </div>
                    </div>
                    <StarRating rating={testimonial.rating} />
                    <p className="text-[#111418] text-base font-normal leading-normal">
                      {testimonial.comment}
                    </p>
                  </div>
                ))}
              </div>
            </section>
            <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
              <div className="max-w-2xl mx-auto mb-10 lg:mb-14">
                <h2 className="text-[#595757] text-4xl font-bold text-center px-4 pb-3 pt-5">よくあるご質問</h2>
                <h3 className="text-[#FFD900] text-2xl font-bold text-center px-4">Question</h3>
              </div>
              <div className="max-w-2xl mx-auto divide-y divide-gray-200 dark:divide-neutral-700">
                <div className="py-8 first:pt-0 last:pb-0">
                  <div className="flex gap-x-5">
                    <svg className="shrink-0 mt-1 size-6 text-gray-500 dark:text-neutral-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10" /><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" /><path d="M12 17h.01" /></svg>

                    <div className="grow">
                      <h3 className="md:text-lg font-semibold text-gray-800">
                        痛みはありますか？
                      </h3>
                      <p className="mt-1 text-gray-500 dark:text-neutral-500">
                        ホワイトニングによるお痛みは一過性のものが多く、次第におさまります。
                        また、当院ではしみ止め成分を含む薬剤を使用しております。しみ・痛みを軽減する配慮を行なっております。
                      </p>
                    </div>
                  </div>
                </div>

                <div className="py-8 first:pt-0 last:pb-0">
                  <div className="flex gap-x-5">
                    <svg className="shrink-0 mt-1 size-6 text-gray-500 dark:text-neutral-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10" /><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" /><path d="M12 17h.01" /></svg>

                    <div className="grow">
                      <h3 className="md:text-lg font-semibold text-gray-800 ">
                        ホワイトニングってどんなことするんですか？
                      </h3>
                      <p className="mt-1 text-gray-500 dark:text-neutral-500">
                        歯の表面に薬剤を塗布して、ライト照射を行います。そうすることで、黄ばみの原因である着色物質を分解させ、歯を白くしてくれます。          </p>
                    </div>
                  </div>
                </div>

                <div className="py-8 first:pt-0 last:pb-0">
                  <div className="flex gap-x-5">
                    <svg className="shrink-0 mt-1 size-6 text-gray-500 dark:text-neutral-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10" /><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" /><path d="M12 17h.01" /></svg>

                    <div className="grow">
                      <h3 className="md:text-lg font-semibold text-gray-800 ">
                        何回くらいで白くなりますか？
                      </h3>
                      <p className="mt-1 text-gray-500 dark:text-neutral-500">
                        歯の質や現在の黄ばみの程度や生活環境により異なる為、お口の中を拝見させて頂いてからの判断となりますが、芸能人のような真っ白にしたい方は2〜3ヶ月かかります。ですが、1度の来院である程度実感される方が多いです。
                      </p>
                    </div>
                  </div>
                </div>

                <div className="py-8 first:pt-0 last:pb-0">
                  <div className="flex gap-x-5">
                    <svg className="shrink-0 mt-1 size-6 text-gray-500 dark:text-neutral-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10" /><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" /><path d="M12 17h.01" /></svg>

                    <div className="grow">
                      <h3 className="md:text-lg font-semibold text-gray-800 ">
                        時間はどれくらいかかりますか？
                      </h3>
                      <p className="mt-1 text-gray-500 dark:text-neutral-500">
                        施術のお時間は約1時間です。初回の方はカウンセリングのお時間も含め、1時間半でご予約を頂いております。
                      </p>
                    </div>
                  </div>
                </div>
                <div className="py-8 first:pt-0 last:pb-0">
                  <div className="flex gap-x-5">
                    <svg className="shrink-0 mt-1 size-6 text-gray-500 dark:text-neutral-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10" /><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" /><path d="M12 17h.01" /></svg>

                    <div className="grow">
                      <h3 className="md:text-lg font-semibold text-gray-800 ">
                        セルフホワイトニングとどう違いますか？
                      </h3>
                      <p className="mt-1 text-gray-500 dark:text-neutral-500">
                        セルフホワイトニングでは、法律上歯を白くする効果のある医薬品を使用できません。なので、ご自身の本来の歯のお色以上に白くすることはできません。
                        当院は歯科医院ですので、歯の白くなる成分の入った薬剤を使用しております。ご自身の本来の歯のお色よりもさらに白くしていく事が可能になります。          </p>
                    </div>
                  </div>
                </div>

                <div className="py-8 first:pt-0 last:pb-0">
                  <div className="flex gap-x-5">
                    <svg className="shrink-0 mt-1 size-6 text-gray-500 dark:text-neutral-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10" /><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" /><path d="M12 17h.01" /></svg>

                    <div className="grow">
                      <h3 className="md:text-lg font-semibold text-gray-800 ">
                        支払いは現金の他に何が使えますか？
                      </h3>
                      <p className="mt-1 text-gray-500 dark:text-neutral-500">
                        ホワイトニングが利用できるデンタルローンもご準備しております。
                      </p>
                    </div>
                  </div>
                </div>
                <div className="py-8 first:pt-0 last:pb-0">
                  <div className="flex gap-x-5">
                    <svg className="shrink-0 mt-1 size-6 text-gray-500 dark:text-neutral-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10" /><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" /><path d="M12 17h.01" /></svg>

                    <div className="grow">
                      <h3 className="md:text-lg font-semibold text-gray-800 ">
                        保険証は必要ですか？
                      </h3>
                      <p className="mt-1 text-gray-500 dark:text-neutral-500">
                        保険証は、ご本人の確認のためご持参いただいております。（マイナンバーカードも対応しております。）
                      </p>
                    </div>
                  </div>
                </div>
                <div className="py-8 first:pt-0 last:pb-0">
                  <div className="flex gap-x-5">
                    <svg className="shrink-0 mt-1 size-6 text-gray-500 dark:text-neutral-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10" /><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" /><path d="M12 17h.01" /></svg>
                    <div className="grow">
                      <h3 className="md:text-lg font-semibold text-gray-800 ">
                        ホワイトニングをしたあと、どれくらいで飲食できますか？
                      </h3>
                      <p className="mt-1 text-gray-500 dark:text-neutral-500">
                        当院のホワイトニングは飲食制限がなしというのが特徴です。
                        なので、ホワイトニング直後よりご飲食して頂けます。
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="z-100 flex fixed bottom-0 px-4 py-3 justify-end">
              <a href="https://clinics-app.com/dental/06cb0916-ca56-4284-b963-447a34e5286f" target="_blank" rel="noopener noreferrer" className="truncate">
                <button
                  className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 px-4 bg-[#7facdc] z-100 text-white text-sm font-bold leading-normal tracking-[0.015em]"
                >
                  申し込みはこちら
                </button>
              </a>
            </div>
          </section>
        </main>
      </body >
    </>
  )
}

export default App
