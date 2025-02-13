function loadSakuraScript() {
    // 检查当前页面路径，决定是否加载樱花特效
    if (window.location.pathname === "/link/") { // 修改为实际路径
        setTimeout(() => {
            if (!document.querySelector("#sakuraScript")) {
                const script = document.createElement("script");
                script.id = "sakuraScript";
                script.src = "https://npm.elemecdn.com/tzy-blog/lib/js/other/sakura.js";
                script.async = true;
                document.body.appendChild(script);
                console.log("樱花脚本已加载");
            }
        }, 50); // 延迟 50ms
    }
}

function removeSakuraEffect() {
    // 查找可能的 DOM 元素
    const sakuraCanvas = document.querySelector("canvas");
    if (sakuraCanvas) {
        sakuraCanvas.remove(); // 移除特效 Canvas
        console.log("樱花 Canvas 已移除");
    }

    // 停止所有动画帧（全局强制停止）
    if (window.cancelAnimationFrame) {
        let id = window.requestAnimationFrame(() => {});
        while (id--) {
            cancelAnimationFrame(id);
        }
        console.log("所有动画帧已停止");
    }

    // 移除动态加载的脚本
    const script = document.querySelector("#sakuraScript");
    if (script) {
        script.remove();
        console.log("樱花脚本已移除");
    }
}

//  页面切换前清除樱花特效
document.addEventListener("pjax:send", removeSakuraEffect);

//  页面切换结束后进行检测
document.addEventListener("pjax:complete", loadSakuraScript);

// 页面初次加载或刷新时也要检测路径
document.addEventListener("DOMContentLoaded", loadSakuraScript);
