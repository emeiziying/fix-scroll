/**
 * Created by Quan on 2017/9/5.
 */

document.body.addEventListener('touchmove', function (e) {
	if (!e._isScroller) {
		e.preventDefault()
	}
});

var fixScroll = function (el) {
	el.addEventListener('touchstart', function () {
		var top             = el.scrollTop
			, totalScroll   = el.scrollHeight
			, currentScroll = top + el.offsetHeight;
		if (top === 0) {
			el.scrollTop = 1;
		} else if (currentScroll === totalScroll) {
			el.scrollTop = top - 1;
		}
	});
	el.addEventListener('touchmove', function (evt) {
		if (el.offsetHeight < el.scrollHeight)
			evt._isScroller = true;
	});
};

