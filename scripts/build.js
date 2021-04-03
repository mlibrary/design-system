require('esbuild').build({
  entryPoints: ['umich-lib.js'],
  outdir: 'dist',
  bundle: true,
  sourcemap: true,
  watch: {
    onRebuild(error, result) {
      if (error) console.error('watch build failed:', error)
      else console.error('watch build succeeded:', result)
    },
  },
}).then(result => {
  // Call "stop" on the result when you're done
  result.stop()
})