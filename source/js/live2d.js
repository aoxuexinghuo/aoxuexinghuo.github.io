const cdnPath = 'https://cdn.jsdelivr.net/gh/aoxuexinghuo/live2d-widget-v3@main';

const config = {
  // 资源路径
  path: {
    modelPath: "../../../../Resources/",
    cssPath: cdnPath + "/waifu.css",
    tipsJsonPath: cdnPath + "/waifu-tips.json",
    tipsJsPath: cdnPath + "/waifu-tips.js",
    live2dCorePath: cdnPath + "/Core/live2dcubismcore.js",
    live2dSdkPath: cdnPath + "/live2d-sdk.js"
  },
  // 工具栏
  // tools: ["hitokoto", "asteroids", "express", "switch-model", "switch-texture", "info", "quit"],
  tools: ["hitokoto", "asteroids", "quit"],
  // 模型拖拽
  drag: {
    enable: true,
    direction: ["x", "y"]
  },
  // 模型切换(order: 顺序切换，random: 随机切换)
  switchType: "order"
};

// 将资源加载和初始化封装成函数
function loadResourcesAndInit() {
  if (screen.width >= 768) {
    Promise.all([
      loadExternalResource(config.path.cssPath, "css"),
      loadExternalResource(config.path.live2dCorePath, "js"),
      loadExternalResource(config.path.live2dSdkPath, "js"),
      loadExternalResource(config.path.tipsJsPath, "js")
    ]).then(() => {
      initWidget({
        waifuPath: config.path.tipsJsonPath,
        cdnPath: config.path.modelPath,
        tools: config.tools,
        dragEnable: config.drag.enable,
        dragDirection: config.drag.direction,
        switchType: config.switchType
      });
    }).catch((error) => {
      console.error('资源加载失败:', error);
    });
  }
}

// 异步加载资源
function loadExternalResource(url, type) {
  return new Promise((resolve, reject) => {
    let tag;
    if (type === "css") {
      tag = document.createElement("link");
      tag.rel = "stylesheet";
      tag.href = url;
    } else if (type === "js") {
      tag = document.createElement("script");
      tag.src = url;
    }
    if (tag) {
      tag.onload = () => resolve(url);
      tag.onerror = () => reject(url);
      document.head.appendChild(tag);
    }
  });
}

loadResourcesAndInit();
//
// $(document).on('pjax:end', function() {
//   console.log("PJAX 页面加载完毕，重新初始化 Live2D 模型...");
//   loadResourcesAndInit(); // 每次 PJAX 完成后重新加载并初始化资源
// });
