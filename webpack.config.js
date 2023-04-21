module.exports = {
  // メインとなるJavaScriptファイル（エントリーポイント）
  entry: `./src/index.ts`,

  // ファイルの出力設定
  output: {
    //  出力ファイルのディレクトリ名
    path: `${__dirname}/dist`,
    // 出力ファイル名
    filename: "bundle.js",
    // filename: "[name].js"
  },

  // 開発モード
  mode: "development",

  // 拡張子の省略
  resolve: {
    extensions: [".ts", ".js"], // from "./index.ts"
  },
  //   開発サーバーの設定
  devServer: {
    static: {
      directory: `${__dirname}/dist`,
    },
    //   自動的なブラウザの立ち上げ
    open: true,
    },
    module: {
        rules: [
            {
                test: /\.ts$/,  // TypeScriptのコンパイル
                loader: "ts-loader",  //ts-loaderを利用する
            },
        ],
    },
};

// コピペしよう！！！！！！！！！！１
