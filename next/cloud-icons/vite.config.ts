import { defineConfig } from 'vite'

// import UnoCSS from "unocss/vite";
// import presetIcons from "@unocss/preset-icons";
// import { categorys } from "./categorys";

// 预加载图标名
// const safelist = [
//   ...Object.values(categorys.base),
//   ...Object.values(categorys.svc),
//   ...Object.values(categorys.ext)
// ].flat().map((nameInfo:any) => "tn-" + nameInfo.name)

// https://vitejs.dev/config/
export default defineConfig({
  // plugins: [
  //   UnoCSS({
  //     presets: [
  //       presetIcons({
  //         prefix: "",
  //         extraProperties: {
  //           display: "inline-block",
  //           "vertical-align": "middle"
  //         },
  //         collections: {
  //           ci: () => import("./json/icons.json").then((i) => i.default)
  //         }
  //       })
  //     ],
  //     safelist: safelist
  //   })
  // ],
  build: {
    outDir: 'example'
  }
})
