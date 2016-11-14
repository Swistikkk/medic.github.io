$(document).ready(function(){


  // мобильное меню

  $(".main-header-switch").click(function() {
    $(this).toggleClass("on");
    $('.main-header-menu').toggleClass('main-header-menu--active');
  });

  $('.main-header-logo').on('click', function(){
    window.scrollTo(0, 0);
  });
  $('.js-number').inputmask("8 (999) 999-99-99");
  $('.parallax').parallax({imageSrc: 'img/third_screen.png'});

  function loader() {
    $('body').addClass('loader');

    // loader
    setTimeout(function(){
      window.scrollTo(0, 0);
      $('body').removeClass('loader');
      $('.main-header-loader').fadeOut();
    }, 3000);
  }

  function fixedHeader() {
    var header = $('.site-header');
    var topBackground = $('.main-header');
    var headerHeight = $('.site-header').height();

    window.addEventListener('scroll', function(e){
      var y = window.scrollY;

      if(headerHeight < y) {
        header.addClass('site-header--active');
      } else {
        header.removeClass('site-header--active');
      }
    });
  }

  function scrollingMenu() {
    $(".main-header-menu").on("click","a", function (event) {
      $('.main-header-menu').removeClass('main-header-menu--active');
      $(".main-header-switch").removeClass('on');

      event.preventDefault();
      //забираем идентификатор бока с атрибута href
      var id  = $(this).attr('href'),
      //узнаем высоту от начала страницы до блока на который ссылается якорь
      top = $(id).offset().top;
      //анимируем переход на расстояние - top за 1500 мс
      $('body,html').animate({scrollTop: top - 50}, 1500);
    });

  }


  // галерея

  function gallery() {
    var med = $('#about-med');
    var items = $('.content-wrapper');
    var idMed = document.getElementById('about-med');

    items.on('click', function(e) {
      for(var i = 0; i < this.children.length; i++) {
        this.children[i].classList.remove('item--active');
        if(e.target == this.children[i]) {
          this.children[i].classList.add('item--active');
          var className = "about-med-image_" + (i + 1);
          var m = i;

          switch (m) {
            case 0:
              $('.about-med-items .content').text("На фото: Главное здание Клинического госпиталя на Яузе");
              break;
            case 1:
              $('.about-med-items .content').text("На фото: Приемная-регистратура Клинического госпиталя на Яузе");
              break;
            case 2:
              $('.about-med-items .content').text("На фото: Операционная");
              break;
            case 3:
              $('.about-med-items .content').text("На фото: Рентген");
              break;
          }

          if(idMed.classList.length > 1) {
            idMed.classList.remove(idMed.classList[idMed.classList.length - 1]);
          }

          idMed.classList.add(className);
        }
      }
    });

  }

  function activePopup(){

    // открытие попапа

    $('.js-button').on('click', function(){
      $('.main-popup .title').text('Записаться на прием');
      $('.main-popup').addClass('main-popup--active');
      $('.main-popup-background').addClass('main-popup-background--active');
    });

    $('.js-call').on('click', function(){
      $('.main-popup .title').text('Перезвоните мне');
      $('.main-popup').addClass('main-popup--active');
      $('.main-popup-background').addClass('main-popup-background--active');
    });

    // закрытие попапа

    $('.main-popup-background').on('click', function(){
      $('.main-popup').removeClass('main-popup--active');
      document.querySelector('.main-form').children[1].classList.remove('error');
      document.querySelector('.main-form').children[2].classList.remove('error');
      $('.main-popup-background').removeClass('main-popup-background--active');
    });
  };

  function sliderTechnic() {
    var block = document.querySelector('.photos-items');
    var imageBlock = document.querySelector('.machine-content .image');
    console.log(imageBlock);

    block.addEventListener('click', function(e){

      if(e.target != this) {
        for(var i = 0; i < block.children.length; i++) {
          block.children[i].classList.remove('item--active');
        }
      }

      if(e.target.parentElement == this.children[0]) {
        imageBlock.classList = "";
        imageBlock.classList.add('image-1');
        this.children[0].classList.add('item--active');
      } else if (e.target.parentElement == this.children[1]) {
        imageBlock.classList = "";
        imageBlock.classList.add('image-2');
        this.children[1].classList.add('item--active');
      } else if (e.target.parentElement == this.children[2]) {
        imageBlock.classList = "";
        imageBlock.classList.add('image-3');
        this.children[2].classList.add('item--active');
      }

    });
  };

  function validationForms() {
    var mainForm = document.querySelector('.main-form');
    var costForm = document.querySelector('.cost-form');

    mainForm.addEventListener('submit', function(e) {

      this.children[1].classList.remove('error');
      this.children[2].classList.remove('error');

      if(this.children[1].value.length < 3) {
        e.preventDefault();
        this.children[1].classList.add('error');
      } else if(this.children[2].value.length < 11) {
        e.preventDefault();
        this.children[2].classList.add('error');
      }

      if(this.children[1].value.length > 3 && this.children[2].value.length > 11) {
        $.ajax({
    			type: "POST",
    			url: "mail.php",
    			data: $(this).serialize()
    		}).done(function() {
    			$(this).find("input").val("");

          // закрытие попапа

          $('.main-popup').removeClass('main-popup--active');

          document.querySelector('.main-form').children[1].classList.remove('error');

          document.querySelector('.main-form').children[2].classList.remove('error');

          document.querySelector('.success').classList.add('success--active');

          setTimeout(function(){
            $('.main-popup-background').removeClass('main-popup-background--active');
            document.querySelector('.success').classList.remove('success--active');
          }, 3000);
    			//$("#form").trigger("reset");
    		});
      };

      e.preventDefault();
      return false;
    });

    costForm.addEventListener('submit', function(e) {

      this.children[1].classList.remove('error');
      this.children[2].classList.remove('error');

      if(this.children[1].value.length < 3) {
        e.preventDefault();
        this.children[1].classList.add('error');
      } else if(this.children[2].value.length < 11) {
        e.preventDefault();
        this.children[2].classList.add('error');
      }

      if(this.children[1].value.length > 3 && this.children[2].value.length > 11) {
        $.ajax({
    			type: "POST",
    			url: "mail.php",
    			data: $(this).serialize()
    		}).done(function() {
    			$(this).find("input").val("");
          $('.main-popup').removeClass('main-popup--active');
          document.querySelector('.main-form').children[1].classList.remove('error');
          document.querySelector('.main-form').children[2].classList.remove('error');

          document.querySelector('.success').classList.add('success--active');

          setTimeout(function(){
            $('.main-popup-background').removeClass('main-popup-background--active');
            document.querySelector('.success').classList.remove('success--active');
          }, 3000);
    		});
      };

      e.preventDefault();
      return false;
    });
  }

  function flyPopup() {
    var flyPopup = $('.cost-popup');
    var forPopup = flyPopup.offset().top - flyPopup.height();
    var items = $('.cost-items');

    window.addEventListener('scroll', function(e){
      var y = window.scrollY;

      upArray();

      if(y < 5300 + flyPopup.outerHeight()) {
        flyPopup.css('top', 0 + 'px');
      } else if(y > (5300 + flyPopup.outerHeight())  && y < (5300 + items.height() - 50)) {
        flyPopup.css('top', y - flyPopup.height() - 5300 + 'px');
      } else if(y > 5300 + items.height()) {
        flyPopup.css('top', items.outerHeight() - flyPopup.outerHeight() + 'px');
      }
    });
  }

  function upArray() {
    var up = document.querySelector('.up');

    up.addEventListener('click', function(){
      window.scrollTo(0, 0);
    });

    if(window.scrollY > 300) {
      up.classList.add("up--active");
    } else {
      up.classList.remove("up--active");
    }
  }

  loader();
  validationForms();
  sliderTechnic();
  activePopup();
  gallery();
  scrollingMenu();
  flyPopup();
  upArray();
  fixedHeader();
});
