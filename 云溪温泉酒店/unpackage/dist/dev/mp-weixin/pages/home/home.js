"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {};
  },
  methods: {}
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: _ctx.indicatorDots,
    b: _ctx.autoplay,
    c: _ctx.interval,
    d: _ctx.duration,
    e: _ctx.indicatorDots,
    f: common_vendor.o((...args) => _ctx.changeIndicatorDots && _ctx.changeIndicatorDots(...args)),
    g: _ctx.autoplay,
    h: common_vendor.o((...args) => _ctx.changeAutoplay && _ctx.changeAutoplay(...args)),
    i: common_vendor.t(_ctx.duration),
    j: common_vendor.o((...args) => _ctx.durationChange && _ctx.durationChange(...args)),
    k: _ctx.duration,
    l: common_vendor.t(_ctx.interval),
    m: common_vendor.o((...args) => _ctx.intervalChange && _ctx.intervalChange(...args)),
    n: _ctx.interval
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
