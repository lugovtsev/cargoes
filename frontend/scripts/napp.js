jQuery(document).ready(function() {

/*collapse FAQ*/
jQuery('.collapse-link').click(function() {
	if (jQuery(this).hasClass('opened')) {
		jQuery(this).removeClass('opened');
		jQuery(this).siblings('.collapse-content').slideUp(300);
	}
	else {
		jQuery('.collapse-link').removeClass('opened');
		jQuery('.collapse-content').slideUp(300);
		jQuery(this).addClass('opened');
		jQuery(this).siblings('.collapse-content').slideDown(300);
	}
});

if (jQuery(document).width() < 1200)
{
	/*show mob menu*/
	jQuery('#burger').click(function() {
		jQuery('#menu-box').animate({
			left: 0
		},
		200,
		function() {
			jQuery('.left-menu-overlay').fadeIn(200);
			jQuery('body').css('overflow','hidden');
		});
	});

	jQuery('.left-menu-overlay').click(function() {
		jQuery('.left-menu-overlay').fadeOut();
		jQuery("#menu-box").animate({
			left: "-100%"
		},
		200,
		function() {
			jQuery('body').css('overflow','auto');
		});

	});
	jQuery('.open-sub-menu').click(function() {
		jQuery(this).toggleClass('opened');
		jQuery(this).siblings('ul').slideToggle(200);
	});
}

if (jQuery(document).width() >= 1200)
{
	/*шапка*/
	jQuery('.head2').scroolly([
		{
			from: 'doc-top',
			to: 'con-bottom = vp-top',
			css: {position: 'static'},
			removeClass: 'head2--fixed'
		},
		{
			from: 'con-bottom = vp-top',
			css: {position: 'fixed',top: 0},
			addClass: 'head2--fixed'
		}
	], jQuery('.head1'));
	/*sidebar в услугах*/
	jQuery('.sidebar').scroolly([
		{
			from: 'doc-top',
			to: 'con-bottom = vp-top + 100px',
			removeClass: 'sidebar-fixed'
		},
		{
			from: 'con-bottom = vp-top + 100px',
			addClass: 'sidebar-fixed'
		}
	], jQuery('.services-menu'));
}

/*для добавления файла*/
jQuery('#add_file').click(function(){
   jQuery("#attached_file").click();
})

jQuery("#attached_file").change(function(){
	console.log('added file')
	if (this.value != "")
  	jQuery('#add_file').text(this.value.replace(/C:\\fakepath\\/i, ''));
	else {
		jQuery('#add_file').text("Прикрепить файл");
	}
})

/* Прокрутка вверх */

jQuery('#totop').click(function()
{
	 jQuery('html, body').animate({
        scrollTop: 0
    }, 500);
});


/* Плавная прокрутка меню

jQuery('#main-menu a').click(function(e)
{
	e.preventDefault();
	var blockId = jQuery(this).attr('href');
	 jQuery('html, body').animate({
        scrollTop: jQuery(blockId).offset().top - 50
    }, 500);
});

*/

/*маска для input c телефоном*/
	jQuery(".phone-input").mask("+7 (999) 999-99-99");

/*colorbox*/
	/*jQuery('.cert-item a').colorbox({
			rel: '.cert-item a', //для группировки изображений
			opacity: 0.7,
			speed: 350,
			title: false
		});*/

/*slick*/
	/*jQuery('.slick-container').slick({
	  infinite: true,
	  arrows: false,
	  dots: true,
	  slidesToShow: 4,
	  slidesToScroll: 2
	});*/

	jQuery('#fb_btn, #vk_btn, #tw_btn, #gpl_btn').click(function(){
		window.open(jQuery(this).attr("href"),'displayWindow', 'width=700,height=400,left=200,top=100,location=no, directories=no,status=no,toolbar=no,menubar=no');
		return false;
 });

/*валидация формы*/
	jQuery("form").submit(function() {
		var checkError = false; //проверка прохождения валидации
		var regExpMail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,6})+$/;
		var email = jQuery(this).find('.email-input');
		var regExpName = /[^а-яЁё\s]/i;
		var name = jQuery(this).find('.name-input');
		var phone = jQuery(this).find('.phone-input');
		var message = jQuery(this).find('textarea');

		//не заполнено имя
		if (name.val() != undefined)
		{
			if (name.val()=="")
				{
					name.addClass("fill-error");
					name.attr("placeholder","*Заполните имя");
					checkError = true;
				}
			else if (regExpName.test(name.val())) //неверный формат имени
						{
							name.addClass("fill-error");
							name.attr("placeholder","Неверный формат имени");
							name.val("");
							checkError = true;
						}
			else
			{
				name.removeClass("fill-error");
				name.attr("placeholder","Имя*");
			}
		}

		//неверный формат email
		if (email.val() != undefined)
		{
			if (email.val()=="")
				{
					email.addClass("fill-error");
					email.attr("placeholder","*Заполните email");
					checkError = true;
				}
			else if (!regExpMail.test(email.val()))
				{
					email.addClass("fill-error");
					email.attr("placeholder","Неверный формат e-mail");
					email.val("");
					checkError = true;
				}
			else
				{
					email.removeClass("fill-error");
					email.attr("placeholder","Email*");
				}
			}

		// если форма онлайн-расчета
		if (jQuery(this).hasClass('calc_form')) {
			var from = jQuery(this).find('.from-input');
			var destination = jQuery(this).find('.destination-input');
			var item_name = jQuery(this).find('.item_name-input');
			var weight = jQuery(this).find('.weight-input');
			if (phone.val() != undefined)
			{
				//город отправки
				if (from.val()=="") {
						from.addClass("fill-error").attr("placeholder","*Заполните город отправки");
						checkError = true;
					}
				else {
						from.removeClass("fill-error").attr("placeholder","Страна, город отправки*");
					}
				//город доставки
				if (destination.val()=="") {
							destination.addClass("fill-error").attr("placeholder","*Заполните город доставки");
							checkError = true;
						}
				else {
						destination.removeClass("fill-error").attr("placeholder","Страна, город доставки*");
					}
				//название груза
				if (item_name.val()=="") {
							item_name.addClass("fill-error").attr("placeholder","*Заполните наименование товара");
							checkError = true;
						}
				else {
						item_name.removeClass("fill-error").attr("placeholder","Наименование товара*");
					}
				//название груза
				if (weight.val()=="") {
							weight.addClass("fill-error").attr("placeholder","*Заполните вес");
							checkError = true;
						}
				else {
						weight.removeClass("fill-error").attr("placeholder","Вес нетто/брутто, кг*");
					}
				}
		} // конец if формы онлайн-расчета
		else {
			//не заполнен телефон
			if (phone.val() != undefined)
			{
				if (phone.val()=="")
					{
						phone.addClass("fill-error");
						phone.attr("placeholder","*Заполните телефон");
						checkError = true;
					}
				else
					{
						phone.removeClass("fill-error");
						phone.attr("placeholder","Телефон*");
					}
				}

				//не заполнено сообщение
				if (message.val() != undefined)
				{
					if (message.val()=="")
						{
							message.addClass("fill-error");
							message.attr("placeholder","*Заполните поле");
							checkError = true;
						}
					else
						{
							message.removeClass("fill-error");
							message.attr("placeholder","Телефон*");
						}
					}
			}


		if (checkError) return false; //отменить отправку формы, если валидация не пройдена
	});

});
