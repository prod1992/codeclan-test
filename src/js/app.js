import '../scss/app.scss';
// Your JS Code goes here

/**
 * Element.closest() polyfill
 * https://developer.mozilla.org/en-US/docs/Web/API/Element/closest#Polyfill
 */
if (!Element.prototype.closest) {
    if (!Element.prototype.matches) {
        Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
    }
    Element.prototype.closest = function (s) {
        var el = this;
        var ancestor = this;
        if (!document.documentElement.contains(el)) return null;
        do {
            if (ancestor.matches(s)) return ancestor;
            ancestor = ancestor.parentElement;
        } while (ancestor !== null);
        return null;
    };
}

document.addEventListener("click", function (e) {
    let clickedIcon = e.target.closest('.cdcl-icon');
    if (clickedIcon) {
        let wrapperListItem = clickedIcon.closest('li');
        if (!wrapperListItem.classList.contains("expanded"))
            wrapperListItem.classList.add("expanded");
        else
            wrapperListItem.classList.remove("expanded");
    }
});
