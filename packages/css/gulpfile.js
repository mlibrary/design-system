const { src, dest, series, watch, task } = require("gulp");
const sass = require("gulp-sass");
const rename = require("gulp-rename");
const theo = require("gulp-theo");

sass.compiler = require("node-sass");

task("css:build-dist", function() {
  return src("src/scss/main.scss")
    .pipe(sass())
    .pipe(rename("umich-lib.css"))
    .pipe(dest("dist/"));
});

const scssWatcher = watch(["src/scss/*.scss"]);

scssWatcher.on("change", function() {
  task("css:build-dist");
});

task("tokens:scss", function() {
  return src("src/tokens.json")
    .pipe(
      theo({
        transform: { type: "web" },
        format: { type: "scss" }
      })
    )
    .pipe(rename("_tokens.scss"))
    .pipe(dest("src/scss/"));
});

task("tokens:custom-properties", function() {
  return src("src/tokens.json")
    .pipe(
      theo({
        transform: { type: "web" },
        format: { type: "custom-properties.css" }
      })
    )
    .pipe(rename("_custom-properties.scss"))
    .pipe(dest("src/scss"));
});

const build = series(
  task("tokens:scss"),
  task("tokens:custom-properties"),
  task("css:build-dist")
);

exports.default = build;
