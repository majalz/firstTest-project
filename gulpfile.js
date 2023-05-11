function defaultTask(cb) {
    // place code for your default task here
    cb();
}

exports.default = defaultTask;

var elixir = require("laravel-elixir");

elixir(function (mix) {
    mix.sass(main.scss).coffee("module.coffee");
});
