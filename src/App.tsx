import image from './assets/top.jpg';
import card1 from './assets/firstcard.webp';
import card2 from './assets/secondcard.webp';
import card3 from './assets/thirdcard.webp';
import card4 from './assets/fouthcard.jpeg';
import card5 from './assets/fifthcard.webp';
import card6 from './assets/sixthcard.webp';
function App() {

  return (
    <>
      <div className="relative">
        <div className="area w-auto h-screen absolute bg-gradient-to-l from-[#8f94fb] to-[#4e54c8] z-10">
          <img src={image} className='object-top object-cover w-full circles overflow-hidden' />
        </div>
        <div className="h-screen flex justify-center items-center">
          <h2 className="p-3 bg-white bg-clip-text text-6xl font-bold tracking-tight text-transparent z-20">
            思いっきり笑える白い歯へ
          </h2>
        </div>
        <div className="flex flex-col gap-10 px-4 py-10 @container mx-auto lg:px-40 md:px-20 px-10 text-center">
          <div className="text-center flex flex-col gap-2">
          <h2 className="text-[#595757] text-4xl font-bold text-center px-4 pb-3 pt-5">キースおとなこども歯科が選ばれる理由</h2>
          <h3 className="text-[#FFD900] text-2xl font-bold text-center px-4">Reason</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              { title: "個室をご用意", text: "当院はプライバシーに配慮し個室をご用意。ゆったりとおくつろぎいただけます。",image : card1 },
              { title: "医薬品配合", text: "セルフホワイトニングとは違い、歯科医院なので医療用ジェルを使用しており、元々の歯の色以上に白くしていくことができます。" ,image : card2},
              { title: "プロが施術", text: "スタッフは全員国家資格保持者の歯科医師・歯科衛生士です。ホワイトニングのトレーニングを積んでおります。",image : card3},
              {title: "飲食制限", text: "当院のホワイトニングは飲食制限がありません。コーヒー、紅茶など色の濃い飲食物を控える必要がありません。", image: card4},
              {title: "医療用", text: "医療用ジェルを使用しており、元々の歯の色以上に白くしていくことができます。", image: card5},
              {title: "リーズナブルな料金", text: "歯科医院のホワイトニングでありながら、リーズナブルな料金です。", image: card6},
            ].map(( card ) => (
              <div className="flex flex-col gap-3 pb-3">
                <img src={card.image} className='w-full object-center object-cover aspect-video rounded-xl' />
                <div>
                  <p className="text-[#111418] text-xl font-medium leading-normal">{card.title}</p>
                  <p className="text-[#637588] text-base font-normal leading-normal">
                    {card.text}
                  </p>
                </div>
              </div>
            ))
            }
          </div>
        </div>
        <h1 className="text-[#111418] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 text-center pb-3 pt-5">
          The best teeth whitening kit, delivered to you. In just 10 minutes a day.
        </h1>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(228px,1fr))] gap-2.5 px-4 py-3 @3xl:grid-cols-4">
          <div className="flex flex-1 flex-col gap-4 rounded-xl border border-solid border-[#dce0e5] bg-white p-6">
            <div className="flex flex-col gap-1">
              <div className="flex items-center justify-between">
                <h1 className="text-[#111418] text-base font-bold leading-tight">Standard</h1>
                <p className="text-white text-xs font-medium leading-normal tracking-[0.015em] rounded-xl bg-[#1980e6] px-3 py-[3px] text-center">Most popular</p>
              </div>
              <span className="text-[#111418] text-4xl font-black leading-tight tracking-[-0.033em]">6,600 yen</span>
            </div>
            <button
              className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#f0f2f4] text-[#111418] text-sm font-bold leading-normal tracking-[0.015em]"
            >
              <span className="truncate">Select</span>
            </button>
            <div className="flex flex-col gap-2">
              <div className="text-[13px] font-normal leading-normal flex gap-3 text-[#111418]">
                <div className="text-[#111418]" data-icon="Check" data-size="20px" data-weight="regular">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z"></path>
                  </svg>
                </div>
                10 day supply
              </div>
              <div className="text-[13px] font-normal leading-normal flex gap-3 text-[#111418]">
                <div className="text-[#111418]" data-icon="Check" data-size="20px" data-weight="regular">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z"></path>
                  </svg>
                </div>
                Safe for sensitive teeth
              </div>
              <div className="text-[13px] font-normal leading-normal flex gap-3 text-[#111418]">
                <div className="text-[#111418]" data-icon="Check" data-size="20px" data-weight="regular">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z"></path>
                  </svg>
                </div>
                Free shipping
              </div>
            </div>
          </div>
          <div className="flex flex-1 flex-col gap-4 rounded-xl border border-solid border-[#dce0e5] bg-white p-6">
            <div className="flex flex-col gap-1">
              <h1 className="text-[#111418] text-base font-bold leading-tight">Premium</h1>
              <span className="text-[#111418] text-4xl font-black leading-tight tracking-[-0.033em]">19,800 yen</span>
            </div>
            <button
              className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#f0f2f4] text-[#111418] text-sm font-bold leading-normal tracking-[0.015em]"
            >
              <span className="truncate">Select</span>
            </button>
            <div className="flex flex-col gap-2">
              <div className="text-[13px] font-normal leading-normal flex gap-3 text-[#111418]">
                <div className="text-[#111418]" data-icon="Check" data-size="20px" data-weight="regular">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z"></path>
                  </svg>
                </div>
                10 day supply
              </div>
              <div className="text-[13px] font-normal leading-normal flex gap-3 text-[#111418]">
                <div className="text-[#111418]" data-icon="Check" data-size="20px" data-weight="regular">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z"></path>
                  </svg>
                </div>
                Safe for sensitive teeth
              </div>
              <div className="text-[13px] font-normal leading-normal flex gap-3 text-[#111418]">
                <div className="text-[#111418]" data-icon="Check" data-size="20px" data-weight="regular">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z"></path>
                  </svg>
                </div>
                Free shipping
              </div>
            </div>
          </div>
          <div className="flex flex-1 flex-col gap-4 rounded-xl border border-solid border-[#dce0e5] bg-white p-6">
            <div className="flex flex-col gap-1">
              <h1 className="text-[#111418] text-base font-bold leading-tight">Pro</h1>
              <span className="text-[#111418] text-4xl font-black leading-tight tracking-[-0.033em]">33,000 yen</span>
            </div>
            <button
              className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#f0f2f4] text-[#111418] text-sm font-bold leading-normal tracking-[0.015em]"
            >
              <span className="truncate">Select</span>
            </button>
            <div className="flex flex-col gap-2">
              <div className="text-[13px] font-normal leading-normal flex gap-3 text-[#111418]">
                <div className="text-[#111418]" data-icon="Check" data-size="20px" data-weight="regular">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z"></path>
                  </svg>
                </div>
                10 day supply
              </div>
              <div className="text-[13px] font-normal leading-normal flex gap-3 text-[#111418]">
                <div className="text-[#111418]" data-icon="Check" data-size="20px" data-weight="regular">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z"></path>
                  </svg>
                </div>
                Safe for sensitive teeth
              </div>
              <div className="text-[13px] font-normal leading-normal flex gap-3 text-[#111418]">
                <div className="text-[#111418]" data-icon="Check" data-size="20px" data-weight="regular">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z"></path>
                  </svg>
                </div>
                Free shipping
              </div>
            </div>
          </div>
        </div>
        <h2 className="text-[#595757] text-4xl font-bold text-center px-4 pb-3 pt-5">お客様の声</h2>
        <h3 className="text-[#FFD900] text-lg font-bold text-center px-4">VOICE</h3>
        <div className="flex flex-col gap-8 overflow-x-hidden bg-white md:px-20 px-10">
          <div className="flex flex-col gap-3 bg-white">
            <div className="flex items-center gap-3">
              <div
                className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
              ></div>
              <div className="flex-1">
                <p className="text-[#111418] text-base font-medium leading-normal">Hannah</p>
                <p className="text-[#637588] text-sm font-normal leading-normal">2 months ago</p>
              </div>
            </div>
            <div className="flex gap-0.5">
              <div className="text-[#111418]" data-icon="Star" data-size="20px" data-weight="fill">
                <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                  <path
                    d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z"
                  ></path>
                </svg>
              </div>
              <div className="text-[#111418]" data-icon="Star" data-size="20px" data-weight="fill">
                <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                  <path
                    d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z"
                  ></path>
                </svg>
              </div>
              <div className="text-[#111418]" data-icon="Star" data-size="20px" data-weight="fill">
                <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                  <path
                    d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z"
                  ></path>
                </svg>
              </div>
              <div className="text-[#111418]" data-icon="Star" data-size="20px" data-weight="fill">
                <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                  <path
                    d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z"
                  ></path>
                </svg>
              </div>
              <div className="text-[#111418]" data-icon="Star" data-size="20px" data-weight="fill">
                <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                  <path
                    d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z"
                  ></path>
                </svg>
              </div>
            </div>
            <p className="text-[#111418] text-base font-normal leading-normal">
              I love this product! It works great and I love that it’s peroxide free. I’ve had no sensitivity. I’ve been using it for about 2 weeks now and have seen a
              noticeable difference in the color of my teeth. The LED light is a nice touch and the mouth guard is really comfortable. I highly recommend this product!
            </p>
          </div>
          <div className="flex flex-col gap-3 bg-white">
            <div className="flex items-center gap-3">
              <div
                className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
              ></div>
              <div className="flex-1">
                <p className="text-[#111418] text-base font-medium leading-normal">Liz</p>
                <p className="text-[#637588] text-sm font-normal leading-normal">2 months ago</p>
              </div>
            </div>
            <div className="flex gap-0.5">
              <div className="text-[#111418]" data-icon="Star" data-size="20px" data-weight="fill">
                <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                  <path
                    d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z"
                  ></path>
                </svg>
              </div>
              <div className="text-[#111418]" data-icon="Star" data-size="20px" data-weight="fill">
                <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                  <path
                    d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z"
                  ></path>
                </svg>
              </div>
              <div className="text-[#111418]" data-icon="Star" data-size="20px" data-weight="fill">
                <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                  <path
                    d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z"
                  ></path>
                </svg>
              </div>
              <div className="text-[#111418]" data-icon="Star" data-size="20px" data-weight="fill">
                <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                  <path
                    d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z"
                  ></path>
                </svg>
              </div>
              <div className="text-[#111418]" data-icon="Star" data-size="20px" data-weight="fill">
                <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                  <path
                    d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z"
                  ></path>
                </svg>
              </div>
            </div>
            <p className="text-[#111418] text-base font-normal leading-normal">
              I am loving the Glimmr whitening kit! It's super easy to use and I have noticed a difference after just a few days! The LED light is a nice bonus too!
            </p>
          </div>
          <div className="flex flex-col gap-3 bg-white">
            <div className="flex items-center gap-3">
              <div
                className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
              ></div>
              <div className="flex-1">
                <p className="text-[#111418] text-base font-medium leading-normal">Sarah</p>
                <p className="text-[#637588] text-sm font-normal leading-normal">2 months ago</p>
              </div>
            </div>
            <div className="flex gap-0.5">
              <div className="text-[#111418]" data-icon="Star" data-size="20px" data-weight="fill">
                <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                  <path
                    d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z"
                  ></path>
                </svg>
              </div>
              <div className="text-[#111418]" data-icon="Star" data-size="20px" data-weight="fill">
                <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                  <path
                    d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z"
                  ></path>
                </svg>
              </div>
              <div className="text-[#111418]" data-icon="Star" data-size="20px" data-weight="fill">
                <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                  <path
                    d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z"
                  ></path>
                </svg>
              </div>
              <div className="text-[#111418]" data-icon="Star" data-size="20px" data-weight="fill">
                <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                  <path
                    d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z"
                  ></path>
                </svg>
              </div>
              <div className="text-[#111418]" data-icon="Star" data-size="20px" data-weight="fill">
                <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                  <path
                    d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z"
                  ></path>
                </svg>
              </div>
            </div>
            <p className="text-[#111418] text-base font-normal leading-normal">
              I’m so happy with my purchase! I’ve been using the kit for a week and I can already see a big difference. My teeth are much whiter and I didn’t experience any
              sensitivity. The LED light is a cool feature and it’s really easy to use. I would definitely recommend this product to anyone looking for a gentle and effective
              whitening solution.
            </p>
          </div>
        </div>
        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
          <div className="max-w-2xl mx-auto mb-10 lg:mb-14">
            <h2 className="text-2xl font-bold md:text-4xl md:leading-tight">You might be wondering...</h2>
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
        <div className="flex px-4 py-3 justify-end">
          <button
            className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#1980e6] text-white text-sm font-bold leading-normal tracking-[0.015em]"
          >
            <span className="truncate">Get started</span>
          </button>
        </div>
      </div>
    </>
  )
}

export default App
