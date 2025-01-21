
// live2d_path 参数建议使用绝对路径
  const live2d_path =
    "https://intmin.github.io/live2d-widget/";


  if (screen.width >= 768) {
      // 配置选项的具体用法见 README.md
      initWidget({
        waifuPath: live2d_path + "waifu-tips.json",
        cdnPath: live2d_path,
        tools: [
          "hitokoto",
          "asteroids",
          "switch-model",
          "switch-texture",
          "photo",
          "info",
          "quit",
        ],
    });
  }

  // console.log(`
  //   く__,.ヘヽ.        /  ,ー､ 〉
  //            ＼ ', !-─‐-i  /  /´
  //            ／｀ｰ'       L/／｀ヽ､
  //          /   ／,   /|   ,   ,       ',
  //        ｲ   / /-‐/  ｉ  L_ ﾊ ヽ!   i
  //         ﾚ ﾍ 7ｲ｀ﾄ   ﾚ'ｧ-ﾄ､!ハ|   |
  //           !,/7 '0'     ´0iソ|    |
  //           |.从"    _     ,,,, / |./    |
  //           ﾚ'| i＞.､,,__  _,.イ /   .i   |
  //             ﾚ'| | / k_７_/ﾚ'ヽ,  ﾊ.  |
  //               | |/i 〈|/   i  ,.ﾍ |  i  |
  //              .|/ /  ｉ：    ﾍ!    ＼  |
  //               kヽ>､ﾊ    _,.ﾍ､    /､!
  //               !'〈//｀Ｔ´', ＼ ｀'7'ｰr'
  //               ﾚ'ヽL__|___i,___,ンﾚ|ノ
  //                   ﾄ-,/  |___./
  //                   'ｰ'    !_,.:
  // `);