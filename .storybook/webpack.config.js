module.exports = async ({ config }) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    exclude: /(node_modules\/(?!@g2crowd\/.+)|vendor)/,
    use: { loader: "ts-loader" }
  })
  config.resolve.extensions.push(".ts", ".tsx")
  return config
}
