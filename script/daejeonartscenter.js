$(document).ready(function () {
  //  menubutton  /nav 
  $(".menu").click(function (e) {
    e.preventDefault();
    $(this).toggleClass("active");
    $("#wrap_nav").stop().slideToggle();
  });

  $(".nav > ul > li").click(function () {

    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
    } else {
      $(".nav > ul > li").removeClass("active");
      $(this).addClass("active");
    }
  });

  // swiper
  var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
      responsive: true,
    },
    pagination: {
      el: ".swiper-pagination",
      // type: "fraction",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  var swiper = new Swiper(".mySwiper2", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
      responsive: true,
    },
  });

  var swiper = new Swiper(".mySwiper3", {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    loopAdditionalSlides: 1,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
      responsive: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      1400: {
        slidesPerView: 6,
        spaceBetween: 60,
      },
    },
  });

  // notice
  var mixer = mixitup('.notice_list');


  $("#filter-select").change(function () {
    var value = $(this).val();
    console.log(value);
    mixer.filter(value);
  });

  // tab
  $(".notice_btn .btn").click(function () {
    $(this).addClass("active");
    $(this).siblings().removeClass("active");
  });



  //calendar
  // window.onload = () => {
  let calendarRow = document.querySelector('#calendarRow');
  // 한달 row형 달력 커스터마이징
  let calmodal = $("#calendarModal");
  let modalTitle = $('#modalTitle');
  let modalCon = $('#modalBody');
  modalCon.prepend('<img><span></span><span></span>');
  let modalPoster = $('#modalBody img');
  let modalContent1 = $('#modalBody span').eq(0);
  let modalContent2 = $('#modalBody span').eq(1);
  let ebackgroundColor = 'rgba(255,255,255,0.5)';
  let eborderColor = 'rgba(0,0,0,0.05)';
  let calendar = new FullCalendar.Calendar(calendarRow, {
    // 이벤트 json 입력방식
    // events: 'https://fullcalendar.io/demo-events.json',
    // 이벤트 개별입력방식
    events: [
      {
        title: '대관공연',
        // 종일설정시
        start: '2022-06-02',
        // end: '2022-06-02',

        startStr: this.start,
        endStr: this.end,
        extendedProps: {
          // 비지정 옵션 선언법
          posterUrl: './img/연주일정/침신대.jpg',
          posterAlt: this.title + '포스터',
          description: '제18회 침례신학대학교 피아노 동문음악회'
        },
      },
      {
        title: '시립예술단공연',
        // 종일설정시
        start: '2022-06-03',
        startStr: this.start,
        endStr: this.end,
        extendedProps: {
          // 비지정 옵션 선언법
          posterUrl: './img/연주일정/시향챔버.jpg',
          posterAlt: this.title + '포스터',
          description: '대전시립교향악단 챔버시리즈 2 [컬러플 세레나데]'
        },
      },
      {
        title: '대관공연',
        // 종일설정시
        start: '2022-06-03',
        end: '2022-06-05',
        startStr: this.start,
        endStr: this.end,
        extendedProps: {
          // 비지정 옵션 선언법
          posterUrl: './img/연주일정/육군창작.jpg',
          posterAlt: this.title + '포스터',
          description: '육군 창작 뮤지컬 [블루헬멧 : 메이사의 노래]'
        },
      },
      {
        title: '대관공연',
        // 종일설정시
        start: '2022-06-05',
        startStr: this.start,
        endStr: this.end,
        extendedProps: {
          // 비지정 옵션 선언법
          posterUrl: './img/연주일정/jmc.jpg',
          posterAlt: this.title + '포스터',
          description: '제26회 JMC피아노음악연구회 정기연주회 [피아노로 들려주는 이야기 - 동행 1]'
        },
      },
      {
        title: '대관공연',
        // 종일설정시
        start: '2022-06-07',
        startStr: this.start,
        endStr: this.end,
        extendedProps: {
          // 비지정 옵션 선언법
          posterUrl: './img/연주일정/신포니에타.jpg',
          posterAlt: this.title + '포스터',
          description: '대전신포니에타 제13회 정기연주회 [SERENADE]'
        },
      },
      {
        title: '대관공연',
        // 종일설정시
        start: '2022-06-08',
        startStr: this.start,
        endStr: this.end,
        extendedProps: {
          // 비지정 옵션 선언법
          posterUrl: './img/연주일정/클래시모.jpg',
          posterAlt: this.title + '포스터',
          description: '제9회 클래시모필하모닉 정기연주회 [Baroque to Romantic]'
        },
      },
      {
        title: '시립예술단공연',
        // 종일설정시
        start: '2022-06-09',
        startStr: this.start,
        endStr: this.end,
        extendedProps: {
          // 비지정 옵션 선언법
          posterUrl: './img/연주일정/디스커버리8.jpg',
          posterAlt: this.title + '포스터',
          description: '대전시립교향악단 디스커버리시리즈 8 [비르투오소 데뷔 콘서트]'
        },
      },
      {
        title: '시립예술단공연',
        // 종일설정시
        start: '2022-06-10',
        end: '2022-06-11',
        startStr: this.start,
        endStr: this.end,
        extendedProps: {
          // 비지정 옵션 선언법
          posterUrl: './img/연주일정/시립무용단.jpg',
          posterAlt: this.title + '포스터',
          description: '대전시립무용단 제71회 정기공연 [因緣(인연)-가족사진]'
        },
      },
      {
        title: '기획공연',
        // 종일설정시
        start: '2022-06-10',

        startStr: this.start,
        endStr: this.end,
        extendedProps: {
          // 비지정 옵션 선언법
          posterUrl: './img/연주일정/심야극장.jpg',
          posterAlt: this.title + '포스터',
          description: '잠들기 전 심야극장 |_김정원x임동혁'
        },
      },
      {
        title: '대관공연',
        // 종일설정시
        start: '2022-06-11',

        startStr: this.start,
        endStr: this.end,
        extendedProps: {
          // 비지정 옵션 선언법
          posterUrl: './img/연주일정/오르간.jpg',
          posterAlt: this.title + '포스터',
          description: '이수정 오르간 기획연주 시리즈 1 [환희]'
        },
      },
      {
        title: '대관공연',
        // 종일설정시
        start: '2022-06-12',

        startStr: this.start,
        endStr: this.end,
        extendedProps: {
          // 비지정 옵션 선언법
          posterUrl: './img/연주일정/유망단체.jpg',
          posterAlt: this.title + '포스터',
          description: '2022 유망단체초청연주회 [위로(Consolation)]'
        },
      },
      {
        title: '대관공연',
        // 종일설정시
        start: '2022-06-12',

        startStr: this.start,
        endStr: this.end,
        extendedProps: {
          // 비지정 옵션 선언법
          posterUrl: './img/연주일정/유벨톤.jpg',
          posterAlt: this.title + '포스터',
          description: '유벨톤 심포니 오케스트라 기획 연주 시리즈 2 [헌정음악회-영웅을 기리며]'
        },
      },
      {
        title: '대관공연',
        // 종일설정시
        start: '2022-06-14',

        startStr: this.start,
        endStr: this.end,
        extendedProps: {
          // 비지정 옵션 선언법
          posterUrl: './img/연주일정/대전예고.jpg',
          posterAlt: this.title + '포스터',
          description: '제27회 대전예술고등학교 다스 심포니 오케스트라 정기연주회'
        },
      },
      {
        title: '기획공연',
        // 종일설정시
        start: '2022-06-14',

        startStr: this.start,
        endStr: this.end,
        extendedProps: {
          // 비지정 옵션 선언법
          posterUrl: './img/연주일정/아침을6.jpg',
          posterAlt: this.title + '포스터',
          description: '2022 아침을 여는 클래식 6월 [소프라노 홍혜란, 테너 최원휘]'
        },
      },
      {
        title: '대관공연',
        // 종일설정시
        start: '2022-06-15',

        startStr: this.start,
        endStr: this.end,
        extendedProps: {
          // 비지정 옵션 선언법
          posterUrl: './img/연주일정/올댓첼로.jpg',
          posterAlt: this.title + '포스터',
          description: '올댓첼로앙상블 [K-Music Festa]'
        },
      },
      {
        title: '대관공연',
        // 종일설정시
        start: '2022-06-16',

        startStr: this.start,
        endStr: this.end,
        extendedProps: {
          // 비지정 옵션 선언법
          posterUrl: './img/연주일정/리골레토.jpg',
          posterAlt: this.title + '포스터',
          description: '오페라 리골레또 렉처콘서트'
        },
      },
      {
        title: '대관공연',
        // 종일설정시
        start: '2022-06-16',

        startStr: this.start,
        endStr: this.end,
        extendedProps: {
          // 비지정 옵션 선언법
          posterUrl: './img/연주일정/윤유경.png',
          posterAlt: this.title + '포스터',
          description: '바이올리니스트 윤유경 독주회 [협주곡 시리즈: 모차르트]'
        },
      },
      {
        title: '시립예술단공연',
        // 종일설정시
        start: '2022-06-17',

        startStr: this.start,
        endStr: this.end,
        extendedProps: {
          // 비지정 옵션 선언법
          posterUrl: './img/연주일정/마스터즈6.jpg',
          posterAlt: this.title + '포스터',
          description: '대전시립교향악단 마스터즈시리즈 6 [저음의 유혹]'
        },
      },
      {
        title: '기획공연',
        // 종일설정시
        start: '2022-06-18',

        startStr: this.start,
        endStr: this.end,
        extendedProps: {
          // 비지정 옵션 선언법
          posterUrl: './img/연주일정/유자왕.jpg',
          posterAlt: this.title + '포스터',
          description: '피아니스트 유자 왕'
        },
      },
      {
        title: '대관공연',
        // 종일설정시
        start: '2022-06-18',

        startStr: this.start,
        endStr: this.end,
        extendedProps: {
          // 비지정 옵션 선언법
          posterUrl: './img/연주일정/세빌리아.jpg',
          posterAlt: this.title + '포스터',
          description: '가족 오페라 [세비야의 이발사 (Il Barbiere di Siviglia)]'
        },
      },
      {
        title: '대관공연',
        // 종일설정시
        start: '2022-06-21',

        startStr: this.start,
        endStr: this.end,
        extendedProps: {
          // 비지정 옵션 선언법
          posterUrl: './img/연주일정/스페이스연.jpg',
          posterAlt: this.title + '포스터',
          description: '스페이스연 제12회 정기연주회'
        },
      },
      {
        title: '대관공연',
        // 종일설정시
        start: '2022-06-21',

        startStr: this.start,
        endStr: this.end,
        extendedProps: {
          // 비지정 옵션 선언법
          posterUrl: './img/연주일정/뮤엔.jpg',
          posterAlt: this.title + '포스터',
          description: '제13회 뮤엔피아노퀸텟 정기연주회'
        },
      },
      {
        title: '대관공연',
        // 종일설정시
        start: '2022-06-22',

        startStr: this.start,
        endStr: this.end,
        extendedProps: {
          // 비지정 옵션 선언법
          posterUrl: './img/연주일정/스윙시대.jpg',
          posterAlt: this.title + '포스터',
          description: '자스무지쿠스 정기연주회 [스윙시대]'
        },
      },
      {
        title: '기획공연',
        // 종일설정시
        start: '2022-06-23',

        startStr: this.start,
        endStr: this.end,
        extendedProps: {
          // 비지정 옵션 선언법
          posterUrl: './img/연주일정/인문학윤혜진.jpg',
          posterAlt: this.title + '포스터',
          description: '2022 인문학콘서트 [발레무용가 윤혜진]'
        },
      },
      {
        title: '시립예술단공연',
        // 종일설정시
        start: '2022-06-23',

        startStr: this.start,
        endStr: this.end,
        extendedProps: {
          // 비지정 옵션 선언법
          posterUrl: './img/연주일정/시립합창단.jpg',
          posterAlt: this.title + '포스터',
          description: '대전시립합창단 제156회 정기연주회 [평화]'
        },
      },
      {
        title: '대관공연',
        // 종일설정시
        start: '2022-06-24',

        startStr: this.start,
        endStr: this.end,
        extendedProps: {
          // 비지정 옵션 선언법
          posterUrl: './img/연주일정/레이어스.jpg',
          posterAlt: this.title + '포스터',
          description: '레이어스 클래식 라이브 콘서트 2022'
        },
      },
      {
        title: '대관공연',
        // 종일설정시
        start: '2022-06-24',

        startStr: this.start,
        endStr: this.end,
        extendedProps: {
          // 비지정 옵션 선언법
          posterUrl: './img/연주일정/에듀스.jpg',
          posterAlt: this.title + '포스터',
          description: '2022 에듀스아트 특별기획 [Second Movement]'
        },
      },
      {
        title: '대관공연',
        // 종일설정시
        start: '2022-06-25',

        startStr: this.start,
        endStr: this.end,
        extendedProps: {
          // 비지정 옵션 선언법
          posterUrl: './img/연주일정/위드.jpg',
          posterAlt: this.title + '포스터',
          description: '앙상블위드 제18회 정기연주회 [Ensemble WITH = Ensemble Party]'
        },
      },
      {
        title: '대관공연',
        // 종일설정시
        start: '2022-06-25',

        startStr: this.start,
        endStr: this.end,
        extendedProps: {
          // 비지정 옵션 선언법
          posterUrl: './img/연주일정/대덕오케.jpg',
          posterAlt: this.title + '포스터',
          description: '제34회 대덕오케스트라 정기연주회'
        },
      },
      {
        title: '대관공연',
        // 종일설정시
        start: '2022-06-26',

        startStr: this.start,
        endStr: this.end,
        extendedProps: {
          // 비지정 옵션 선언법
          posterUrl: './img/연주일정/리모.jpg',
          posterAlt: this.title + '포스터',
          description: 'The Horror Classic [클래식 납량특집! 앙상블 리모 제 2회 정기연주회]'
        },
      },
      {
        title: '기획공연',
        // 종일설정시
        start: '2022-06-28',

        startStr: this.start,
        endStr: this.end,
        extendedProps: {
          // 비지정 옵션 선언법
          posterUrl: './img/연주일정/시라노.jpg',
          posterAlt: this.title + '포스터',
          description: '문화가 있는 날 | NT Live [시라노 드베르주라크]'
        },
      },
      {
        title: '대관공연',
        // 종일설정시
        start: '2022-06-29',

        startStr: this.start,
        endStr: this.end,
        extendedProps: {
          // 비지정 옵션 선언법
          posterUrl: './img/연주일정/리스트.jpg',
          posterAlt: this.title + '포스터',
          description: '제10회 한국리스트협회 대전충남지부 정기연주회 [피아노 앙상블의 향연]'
        },
      },
      {
        title: '대관공연',
        // 종일설정시
        start: '2022-06-30',
        end: '2022-07-02',
        startStr: this.start,
        endStr: this.end,
        extendedProps: {
          // 비지정 옵션 선언법
          posterUrl: './img/연주일정/지킬.jpg',
          posterAlt: this.title + '포스터',
          description: 'TJB 27주년 기념 뮤지컬 [지킬앤하이드]'
        },
      },
      {
        title: '대관공연',
        // 종일설정시
        start: '2022-06-30',

        startStr: this.start,
        endStr: this.end,
        extendedProps: {
          // 비지정 옵션 선언법
          posterUrl: './img/연주일정/유병혜.jpg',
          posterAlt: this.title + '포스터',
          description: '유병혜 첼로 리사이틀 [Freundschaft, 우정]'
        },
      },
      {
        title: '기획공연',
        // 종일설정시
        start: '2022-08-16',
        end: '2022-08-31',
        startStr: this.start,
        endStr: this.end,
        extendedProps: {
          // 비지정 옵션 선언법
          posterUrl: './img/연주일정/국제음악제p.jpg',
          posterAlt: this.title + '포스터',
          description: '2022대전국제음악제'
        },
      },
      // 
      {
        title: '공동기획',
        // 종일설정시
        start: '2022-08-16',

        startStr: this.start,
        endStr: this.end,
        extendedProps: {
          // 비지정 옵션 선언법
          posterUrl: './img/연주일정/국제음악베토벤.jpg',
          posterAlt: this.title + '포스터',
          description: '제22회 대전국제음악제 오프닝 콘서트 [베토벤과 시벨리우스의 만남]'
        },
      }, 
      {
        title: '공동기획',
        // 종일설정시
        start: '2022-08-17',

        startStr: this.start,
        endStr: this.end,
        extendedProps: {
          // 비지정 옵션 선언법
          posterUrl: './img/연주일정/국제음악슈베르티.jpg',
          posterAlt: this.title + '포스터',
          description: '제22회 대전국제음악제 [슈베르티아데]'
        },
      }, 
      {
        title: '공동기획',
        // 종일설정시
        start: '2022-08-18',

        startStr: this.start,
        endStr: this.end,
        extendedProps: {
          // 비지정 옵션 선언법
          posterUrl: './img/연주일정/국제음악황수미.jpg',
          posterAlt: this.title + '포스터',
          description: '제22회 대전국제음악제 [황수미 & 헬무트 도이치 듀오 리사이틀]'
        },
      }, 
      {
        title: '시립예술단공연',
        // 종일설정시
        start: '2022-08-19',

        startStr: this.start,
        endStr: this.end,
        extendedProps: {
          // 비지정 옵션 선언법
          posterUrl: './img/연주일정/대전시립.jpg',
          posterAlt: this.title + '포스터',
          description: '대전시립교향악단 마스터즈시리즈 8'
        },
      }, 
      {
        title: '공동기획',
        // 종일설정시
        start: '2022-08-19',

        startStr: this.start,
        endStr: this.end,
        extendedProps: {
          // 비지정 옵션 선언법
          posterUrl: './img/연주일정/국제음악윤소영.jpg',
          posterAlt: this.title + '포스터',
          description: '제22회 대전국제음악제 [윤소영 & DCMF신포니에타]'
        },
      }, 
      {
        title: '공동기획',
        // 종일설정시
        start: '2022-08-20',

        startStr: this.start,
        endStr: this.end,
        extendedProps: {
          // 비지정 옵션 선언법
          posterUrl: './img/연주일정/국제음악아메리칸.jpg',
          posterAlt: this.title + '포스터',
          description: '제22회 대전국제음악제 아메리칸 솔리스트 앙상블 [한국가곡의 밤]'
        },
      }, 
      {
        title: '공동기획',
        // 종일설정시
        start: '2022-08-20',

        startStr: this.start,
        endStr: this.end,
        extendedProps: {
          // 비지정 옵션 선언법
          posterUrl: './img/연주일정/국제음악홈커밍.jpg',
          posterAlt: this.title + '포스터',
          description: '제22회 대전국제음악제 홈커밍 콘서트 [브람스 아벤트]'
        },
      }, 
      {
        title: '공동기획',
        // 종일설정시
        start: '2022-08-21',

        startStr: this.start,
        endStr: this.end,
        extendedProps: {
          // 비지정 옵션 선언법
          posterUrl: './img/연주일정/국제음악금난새.jpg',
          posterAlt: this.title + '포스터',
          description: '제22회 대전국제음악제 금난새의 톡톡콘서트 [한국을 빛낼 내일의 음악가]'
        },
      }, 
      // 
      {
        title: '기획공연',
        // 종일설정시
        start: '2022-08-27',

        startStr: this.start,
        endStr: this.end,
        extendedProps: {
          // 비지정 옵션 선언법
          posterUrl: './img/연주일정/뉴아티스트.jpg',
          posterAlt: this.title + '포스터',
          description: '2022 썸머뉴아티스트콘서트 [첼리스트 원민지]'
        },
      },
      {
        title: '기획공연',
        // 종일설정시
        start: '2022-08-27',

        startStr: this.start,
        endStr: this.end,
        extendedProps: {
          // 비지정 옵션 선언법
          posterUrl: './img/연주일정/아트팝.jpg',
          posterAlt: this.title + '포스터',
          description: '아트팝 오페라 [안드로메다]'
        },
      },
      {
        title: '기획공연',
        // 종일설정시
        start: '2022-08-27',

        startStr: this.start,
        endStr: this.end,
        extendedProps: {
          // 비지정 옵션 선언법
          posterUrl: './img/연주일정/뉴아티스트.jpg',
          posterAlt: this.title + '포스터',
          description: '2022 썸머뉴아티스트콘서트 [피아니스트 김수빈]'
        },
      },
      {
        title: '기획공연',
        // 종일설정시
        start: '2022-08-28',

        startStr: this.start,
        endStr: this.end,
        extendedProps: {
          // 비지정 옵션 선언법
          posterUrl: './img/연주일정/뉴아티스트.jpg',
          posterAlt: this.title + '포스터',
          description: '2022 썸머뉴아티스트콘서트 [첼리스트 장예은]'
        },
      },
      {
        title: '공동기획',
        // 종일설정시
        start: '2022-08-30',

        startStr: this.start,
        endStr: this.end,
        extendedProps: {
          // 비지정 옵션 선언법
          posterUrl: './img/연주일정/마탄의사수.jpg',
          posterAlt: this.title + '포스터',
          description: '오페라 [마탄의 사수] 콘체르탄테'
        },
      },
      {
        title: '기획공연',
        // 종일설정시
        start: '2022-08-31',

        startStr: this.start,
        endStr: this.end,
        extendedProps: {
          // 비지정 옵션 선언법
          posterUrl: './img/연주일정/하얀산.jpg',
          posterAlt: this.title + '포스터',
          description: '문화가 있는 날 Ⅱ 인형극 [하얀산]'
        },
      },
      {
        title: '공동기획',
        // 종일설정시
        start: '2022-08-31',

        startStr: this.start,
        endStr: this.end,
        extendedProps: {
          // 비지정 옵션 선언법
          posterUrl: './img/연주일정/국제음악금난새영화.jpg',
          posterAlt: this.title + '포스터',
          description: '제22회 대전국제음악제 [금난새의 영화 이야기]'
        },
      },

      //9
      {
        title: '기획공연',
        // 종일설정시
        start: '2022-09-01',

        startStr: this.start,
        endStr: this.end,
        extendedProps: {
          // 비지정 옵션 선언법
          posterUrl: './img/연주일정/레이첸.jpg',
          posterAlt: this.title + '포스터',
          description: '레이 첸 & 선우예권'
        },
      },
      {
        title: '기획공연',
        // 종일설정시
        start: '2022-09-13',

        startStr: this.start,
        endStr: this.end,
        extendedProps: {
          // 비지정 옵션 선언법
          posterUrl: './img/연주일정/아침을.jpg',
          posterAlt: this.title + '포스터',
          description: '2022 아침을 여는 클래식 9월 [피아니스트 김태형 & 김규연]'
        },
      },
      {
        title: '기획공연',
        // 종일설정시
        start: '2022-09-16',

        startStr: this.start,
        endStr: this.end,
        extendedProps: {
          // 비지정 옵션 선언법
          posterUrl: './img/연주일정/심야극장2.jpg',
          posterAlt: this.title + '포스터',
          description: '잠들기 전 심야극장 Ⅱ_김정원X존노'
        },
      },
      {
        title: '기획공연',
        // 종일설정시
        start: '2022-09-23',

        startStr: this.start,
        endStr: this.end,
        extendedProps: {
          // 비지정 옵션 선언법
          posterUrl: './img/연주일정/살아있는.jpg',
          posterAlt: this.title + '포스터',
          description: '연극 [살아있는 자를 수선하기]'
        },
      },
      {
        title: '시립예술단공연',
        // 종일설정시
        start: '2022-09-23',

        startStr: this.start,
        endStr: this.end,
        extendedProps: {
          // 비지정 옵션 선언법
          posterUrl: './img/연주일정/대전시립.jpg',
          posterAlt: this.title + '포스터',
          description: '대전시립교향악단 마스터즈시리즈 9'
        },
      },
      {
        title: '기획공연',
        // 종일설정시
        start: '2022-09-27',

        startStr: this.start,
        endStr: this.end,
        extendedProps: {
          // 비지정 옵션 선언법
          posterUrl: './img/연주일정/양성원.jpg',
          posterAlt: this.title + '포스터',
          description: '양성원 & 엔리코 파체'
        },
      },
      {
        title: '기획공연',
        // 종일설정시
        start: '2022-10-06',

        startStr: this.start,
        endStr: this.end,
        extendedProps: {
          // 비지정 옵션 선언법
          posterUrl: './img/연주일정/레테.jpg',
          posterAlt: this.title + '포스터',
          description: '오페라 [레테 (The Lethe)]'
        },
      },
      //10
      {
        title: '기획공연',
        // 종일설정시
        start: '2022-10-06',

        startStr: this.start,
        endStr: this.end,
        extendedProps: {
          // 비지정 옵션 선언법
          posterUrl: './img/연주일정/정명훈.jpg',
          posterAlt: this.title + '포스터',
          description: '정명훈 [베토벤 교향곡 9번 합창]'
        },
      },
      {
        title: '기획공연',
        // 종일설정시
        start: '2022-10-09',

        startStr: this.start,
        endStr: this.end,
        extendedProps: {
          // 비지정 옵션 선언법
          posterUrl: './img/연주일정/천년지무.jpg',
          posterAlt: this.title + '포스터',
          description: 'UCLG 축하공연 [천년지무]'
        },
      },
      {
        title: '기획공연',
        // 종일설정시
        start: '2022-10-10',

        startStr: this.start,
        endStr: this.end,
        extendedProps: {
          // 비지정 옵션 선언법
          posterUrl: './img/연주일정/타카치.jpg',
          posterAlt: this.title + '포스터',
          description: '타카치 콰르텟'
        },
      },
      {
        title: '기획공연',
        // 종일설정시
        start: '2022-10-11',

        startStr: this.start,
        endStr: this.end,
        extendedProps: {
          // 비지정 옵션 선언법
          posterUrl: './img/연주일정/아침을3.jpg',
          posterAlt: this.title + '포스터',
          description: '2022 아침을 여는 클래식 10월 [피아니스트 송영민]'
        },
      },
      {
        title: '기획공연',
        // 종일설정시
        start: '2022-10-20',

        startStr: this.start,
        endStr: this.end,
        extendedProps: {
          // 비지정 옵션 선언법
          posterUrl: './img/연주일정/인문학.jpg',
          posterAlt: this.title + '포스터',
          description: '2022 인문학콘서트 [반도네오니스트 고상지]'
        },
      },
      {
        title: '기획공연',
        // 종일설정시
        start: '2022-10-26',

        startStr: this.start,
        endStr: this.end,
        extendedProps: {
          // 비지정 옵션 선언법
          posterUrl: './img/연주일정/플라멩코.jpg',
          posterAlt: this.title + '포스터',
          description: '문화가 있는 날 Ⅲ 열정의 플라멩코'
        },
      },
      {
        title: '기획공연',
        // 종일설정시
        start: '2022-11-04',
        end:'2022-11-06',
        startStr: this.start,
        endStr: this.end,
        extendedProps: {
          // 비지정 옵션 선언법
          posterUrl: './img/연주일정/스카팽.jpg',
          posterAlt: this.title + '포스터',
          description: '국립극단 [스카팽]'
        },
      },
      {
        title: '기획공연',
        // 종일설정시
        start: '2022-11-08',

        startStr: this.start,
        endStr: this.end,
        extendedProps: {
          // 비지정 옵션 선언법
          posterUrl: './img/연주일정/아침을11월.jpg',
          posterAlt: this.title + '포스터',
          description: '2022 아침을 여는 클래식 11월 [송지원×이한나×이정현×정재원]'
        },
      },
      {
        title: '기획공연',
        // 종일설정시
        start: '2022-11-10',
        end:'2022-11-13',
        startStr: this.start,
        endStr: this.end,
        extendedProps: {
          // 비지정 옵션 선언법
          posterUrl: './img/연주일정/토스카.jpg',
          posterAlt: this.title + '포스터',
          description: '제작오페라 [토스카]'
        },
      },
      {
        title: '시립예술단공연',
        // 종일설정시
        start: '2022-11-15',

        startStr: this.start,
        endStr: this.end,
        extendedProps: {
          // 비지정 옵션 선언법
          posterUrl: './img/연주일정/대전시립.jpg',
          posterAlt: this.title + '포스터',
          description: '대전시립교향악단 챔버시리즈 4'
        },
      },
      {
        title: '기획공연',
        // 종일설정시
        start: '2022-11-16',

        startStr: this.start,
        endStr: this.end,
        extendedProps: {
          // 비지정 옵션 선언법
          posterUrl: './img/연주일정/노부스콰르텟.jpg',
          posterAlt: this.title + '포스터',
          description: '노부스 콰르텟'
        },
      },
      {
        title: '기획공연',
        // 종일설정시
        start: '2022-11-17',

        startStr: this.start,
        endStr: this.end,
        extendedProps: {
          // 비지정 옵션 선언법
          posterUrl: './img/연주일정/인문학.jpg',
          posterAlt: this.title + '포스터',
          description: '2022 인문학콘서트 [재즈피아니스트 김광민]'
        },
      },
      {
        title: '시립예술단공연',
        // 종일설정시
        start: '2022-11-18',

        startStr: this.start,
        endStr: this.end,
        extendedProps: {
          // 비지정 옵션 선언법
          posterUrl: './img/연주일정/대전시립.jpg',
          posterAlt: this.title + '포스터',
          description: '대전시립합창단 가곡의 향기'
        },
      },
      {
        title: '시립예술단공연',
        // 종일설정시
        start: '2022-11-18',
        end: '2022-11-19',
        startStr: this.start,
        endStr: this.end,
        extendedProps: {
          // 비지정 옵션 선언법
          posterUrl: './img/연주일정/대전시립무용.jpg',
          posterAlt: this.title + '포스터',
          description: '대전시립무용단 제72회 정기공연'
        },
      },
      {
        title: '기획공연',
        // 종일설정시
        start: '2022-11-23',
        end: '2022-11-24',
        startStr: this.start,
        endStr: this.end,
        extendedProps: {
          // 비지정 옵션 선언법
          posterUrl: './img/연주일정/정글북.jpg',
          posterAlt: this.title + '포스터',
          description: '아크람 칸 컴퍼니 [정글북: 또 다른 세계]'
        },
      },
      {
        title: '시립예술단공연',
        // 종일설정시
        start: '2022-11-26',

        startStr: this.start,
        endStr: this.end,
        extendedProps: {
          // 비지정 옵션 선언법
          posterUrl: './img/연주일정/대전시립.jpg',
          posterAlt: this.title + '포스터',
          description: '대전시립청소년합창단 제80회 정기연주'
        },
      },
      //
    
    ],
    eventClick: function (target) {
      // 이벤트 클릭시 부트스트랩모달출력
      let extend = target.event.extendedProps; // 비지정 옵션 변수선언
      let posterurl = Object.values(extend)[0]; // 포스터
      let posteralt = Object.values(extend)[1]; // 포스터 대체텍스트
      let posterdes = Object.values(extend)[2]; // 공연설명
      modalTitle.text(`${target.event.title}`); // 공연제목
      // modalCon.prepend(`<img src="${posterurl}" alt="${posteralt}">`);
      modalPoster.attr('src', `${posterurl}`);
      modalPoster.attr('alt', `${posteralt}`);
      modalContent1.text(`${target.event.startStr} ~ ${target.event.endStr}`); // 공연기간
      modalContent2.text(`${posterdes}`); // 공연설명
      calmodal.modal('show');
    },
    eventColor: ebackgroundColor,
    eventBorderColor: eborderColor,
    locale: 'ko',
    contentHeight: 180,
    initialView: 'timeGridFourDay',
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'timeGridFourDay'
    },
    views: {
      dayGridMonth: {
        type: 'dayGridMonth',
        buttonText: 'Grid'
      },
      timeGridFourDay: {
        type: 'timeGrid',
        dayCount: 31,
        buttonText: 'Row',
        dayHeaderFormat: { day: '2-digit' },
        dateAlignment: 'month',
        allDayContent: '일정',
        scrollTime: '09:00:00',
      }
    },
    navLinks: true,
    themeSystem: 'Darkly',
    // themeSystem: 'Cybog',
  });
  calendar.render();
  window.addEventListener('resize', () => {
    let iw = window.innerWidth;
    if (iw < 1200) {
      calendar.changeView('dayGridMonth');
      calendar.setOption('contentHeight', 'auto');
      $(".btn").unbind('click').click(function(){
        // .unbind('click') 토글이벤트 중복클릭 방지
        doDisplay();
      });
    } else {
      $("#calendar_wrap").show();
      calendar.changeView('timeGridFourDay');
    }
  });
  //claendar btn
  function doDisplay() {
    $("#calendar_wrap").toggle();
    calendar.render();
    calendar.changeView('dayGridMonth');
    calendar.setOption('contentHeight', 'auto');
  };
  let iw = window.innerWidth;
  if (iw < 1200) {
    $(".btn").unbind('click').click(function(){
      // .unbind('click') 토글이벤트 중복클릭 방지
      doDisplay();
    });
  } else {
    $("#calendar_wrap").show();
  }
  

});