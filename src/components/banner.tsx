function Banner() {
  return (
    <div className="relative z-10 py-12 mx-auto px-2  bg-[#bcd3ed]">
      {/* Main message */}
      <div className="relative max-w-4xl mx-auto text-center">
        <h2 className="text-gray-800 text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 leading-[1.5]">
          まずはお気軽にお問い合わせください！<br />
          24時間365日受付中
        </h2>
      </div>
      {/* CTA Button */}
      <div className="flex justify-center">
        <button className="group relative px-12 py-4 bg-gradient-to-r from-[#7facdc] to-[#a4cadb] text-gray-700 font-bold text-xl rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
          <span className="flex items-center gap-3">
            お問い合わせ・ご予約はこちら
            <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </div>
          </span>
        </button>
      </div>
    </div>
  )
}
export default Banner;

