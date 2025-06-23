function Banner_white() {
  return (
    <div className="relative z-10 py-12 mx-auto px-2 ">
      {/* Main message */}
      <div className="relative max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">本格的な白い歯を手に入れるなら</h2>
        <p className="text-lg text-gray-600 mb-8">医療ホワイトニングで確実な効果を実感してください</p>
      </div>
      {/* CTA Button */}
      <div className="flex justify-center">
        <button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-4 px-12 rounded-full shadow-xl transform hover:scale-105 transition-all duration-300 pulse-glow">
          24時間365日予約可能　まずはお気軽に
        </button>
      </div>
    </div>
  )
}
export default Banner_white;
