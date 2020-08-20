$(document).ready(function() {
	let position = 0;
	const slidesToShow = 3;
	const slidesToScroll = 3;
	const container = $('.photo-team-container');
	const track = $('.photo-team-track');
	const item = $('.photo-team');
	const BtnPrev = $('.btn-prev');
	const BtnNext = $('.btn-next');
	const ItemWidth = container.width() / slidesToShow;
	const movePosition = slidesToScroll * ItemWidth;
	const itemsCount = item.length;

	item.each(function(index, item) {
		$(item).css({
			minWidth: ItemWidth,
		});
	});

	BtnPrev.click(function() {
		const itemsLeft = Math.abs(position) / ItemWidth;
		position += itemsLeft >= slidesToScroll ? movePosition : itemsLeft * ItemWidth;
		setPosition();
		checkBtns();
	});
	BtnNext.click(function() {
		const itemsLeft = itemsCount - (Math.abs(position) + slidesToShow * ItemWidth) / ItemWidth;
		position -= itemsLeft >= slidesToScroll ? movePosition : itemsLeft * ItemWidth;
		setPosition();
		checkBtns();
	})

	const setPosition = () => {
		track.css({
			transform: `translateX(${position}px)`
		});
	}

		const checkBtns = () => {
			BtnPrev.prop('disabled', position === 0);
			BtnNext.prop('disabled', position <= -(itemsCount - slidesToShow) * ItemWidth) ;
			console.log(itemsCount - (Math.abs(position) + slidesToShow * ItemWidth) / ItemWidth)
			if (position === 0) {$('.arrow-left-top, .arrow-left-bottom').css({background: '#bbbbbb'})} else {$('.arrow-left-top, .arrow-left-bottom').css({background: '#00897b'})};
			if (position <= -(itemsCount - slidesToShow) * ItemWidth) {$('.arrow-right-top, .arrow-right-bottom').css({background: '#bbbbbb'})} else {$('.arrow-right-top, .arrow-right-bottom').css({background: '#00897b'})};
	};

	checkBtns();
});

