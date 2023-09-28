module.exports = {
    extends: "stylelint-config-standard",//stylelint-config-airbnb
    rules: {
        "string-quotes": "single",
        "property-no-unknown": true,
        "selector-pseudo-class-no-unknown": true,
        "at-rule-empty-line-before": "always",
        "block-no-empty": true,
        "indentation": 4  // http://cui.ulanqab.huawei.com/#/articalDetail?id=b76da810d8ed8
    }
};
