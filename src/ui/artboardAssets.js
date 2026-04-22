const previewModules = import.meta.glob("/src/ui/专用手机_首页_课堂_学习/标注切图/res/*/preview.png", {
  eager: true,
  import: "default",
});

const artboardPreviewMap = Object.entries(previewModules).reduce((acc, [path, src]) => {
  const artboard = path.split("/res/")[1].replace("/preview.png", "");
  acc[artboard] = src;
  return acc;
}, {});

export function getArtboardPreview(artboard) {
  return artboardPreviewMap[artboard] || "";
}

export const availableArtboards = Object.keys(artboardPreviewMap);
