
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function initSwiper(opts, otherOptions) {
    return new Swiper(opts.el, _extends({
        speed: 300,
        autoplay: 5000,
        pagination: opts.pagination || null,
        paginationClickable: opts.paginationClick || false,
        prevButton: opts.prevButton || null,
        nextButton: opts.nextButton || null
    }, otherOptions));
}

function initBtn(opts, otherOpts) {
    var parent = opts.parent,
        dataText = opts.dataText,
        isBlank = opts.isBlank,
        otherClass = opts.otherClass,
        href = opts.href,
        animateType = opts.animateType,
        rel = opts.rel,
        resetStyle = opts.resetStyle,
        btnStyle = opts.btnStyle;

    var a = _extends({
        parent: parent || '.fkw_hcr_content',
        dataText: dataText || _signUpBtn,
        isBlank: isBlank || '_blank',
        otherClass: otherClass || 'fkw_hcrc_signUpBtn',
        href: href || _regUrl,
        animateType: animateType || 1,
        rel: rel || 'nofollow',
        resetStyle: resetStyle || 'true',
        btnStyle: btnStyle || {
            w: 121,
            h: 44
        }
    }, otherOpts);
}
function initSwiper (opts, otherOptions) {
    return new Swiper(opts.el, {
        speed:300,
        autoplay: 5000,
        pagination : opts.pagination || null,
        paginationClickable : opts.paginationClick || false,
        prevButton: opts.prevButton || null,
        nextButton: opts.nextButton || null,
        ...otherOptions
    })

}

function initBtn (opts, otherOpts) {
    var {parent,dataText,isBlank,otherClass,href,animateType,rel,resetStyle,btnStyle} = opts;
    var a = {
        parent: parent || '.fkw_hcr_content',
        dataText: dataText || _signUpBtn,
        isBlank:isBlank || '_blank',
        otherClass: otherClass || 'fkw_hcrc_signUpBtn',
        href: href || _regUrl,
        animateType: animateType || 1,
        rel: rel || 'nofollow',
        resetStyle: resetStyle || 'true',
        btnStyle: btnStyle || {
            w:121,
            h:44
            },
        ...otherOpts
        };
}