module.exports = {
  presets: [
    // '@vue/cli-plugin-babel/preset',
    "@vue/app"
  ],
  plugins: [
    [
      "import",
      { libraryName: "ant-design-vue", libraryDirectory: "es", style: true }
    ]
  ]
}
