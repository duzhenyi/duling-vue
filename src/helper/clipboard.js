import Vue from "vue";

// 导入复制数据的依赖库 yarn add clipboard
import Clipboard from "clipboard";

/**
 * @description 复制数据
 * @param text
 * @param event
 */
export default function handleClipboard(text, event) {
  const clipboard = new Clipboard(event.target, {
    text: () => text,
  });
  clipboard.on("success", () => {
    Vue.prototype.$sucess("复制成功");
    clipboard.destroy();
  });
  clipboard.on("error", () => {
    Vue.prototype.$error("复制失败");
    clipboard.destroy();
  });
  clipboard.onClick(event);
}
