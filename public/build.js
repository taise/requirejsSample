({
  baseUrl: "js",
  mainConfigFile: "js/main.js",
  include: ["requireLib"],
  paths: {
    "jquery": "empty:",
    "requireLib": "require"
  },
  name: "main",
  out: "js/main.min.js",
})
