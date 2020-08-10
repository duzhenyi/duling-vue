// 导入复制数据的依赖库 yarn add clipboard
import Clipboard from "clipboard";
import message from 'ant-design-vue/es/message'
export default function handleClipboard(text, event) {
  const clipboard = new Clipboard(event.target, {
    text: () => text,
  });
  clipboard.on("success", () => {
    message.success({ content: "复制成功" });
    clipboard.destroy();
  });
  clipboard.on("error", () => {
    message.error("复制失败");
    clipboard.destroy();
  });
  clipboard.onClick(event);
}
