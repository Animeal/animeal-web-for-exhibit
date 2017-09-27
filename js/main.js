$(document).ready(function () {

    var infoContentIndex = 1;
    var infoContentList = [
        [
            'It\'s very important that',
            'considering companion',
            'animal\'s feed by status, but',
            'it is hard to find what is the',
            'proper feed.'
        ],
        [
            '\'Animeal\' helps you to choose',
            'more resonable food for your',
            'companion animal in irreverent',
            'advertisments. And also make',
            'growth about your knowledge',
            'of feeds.'
        ],
        [
            '\'Animeal\' encourages you to',
            'buy more proper feeds for',
            'companion animals and helps',
            'them to build ties with others',
            'by participate various',
            'meetings.'
        ],
        [
            'Find out your pet’s meal with',
            'more clever ways.',
            '<img src="image/button-playstore.png">'
        ]
    ];

    var aboutContentIndex = 0;
    var aboutContentList = [
        {
            timing: 3000,
            title: '반려동물에게 딱 맞는 사료 추천',
            content: '반려동물의 나이, 상태에 따른 맞춤 사료가 필요하지만,\n' +
                '연관된 성분을 포함한 사료를 쉽게 찾기 어렵습니다.\n' +
                '\n' +
                'ANIMEAL을 통해 반려동물 건강정보를 등록하고, 반려동물\n' +
                '에게 딱 맞는 사료를 추천받으세요!'
        },
        {
            timing: 3000,
            title: '사료 성분 분석',
            content: '반려동물 사료 봉투에는 사료 성분이 나열되어 있을 뿐, \n' +
                '반려인이 해당 성분에 대한 정보를 알기 쉽지 않습니다. 또한\n' +
                '사료 성분을 하나하나 검색하기에는 많은 시간이 소요됩니다.\n' +
                '\n' +
                '심지어 ‘육분’, ‘육골분’과 같이 반려동물에게 위험한 성분이 \n' +
                '들어있는 사료들이 종종 있는데, 이를 대부분의 반려인들이 \n' +
                '모르고 있는 것이 현실입니다.\n' +
                '\n' +
                'ANIMEAL은 사료 검색만으로 쉽게 사료 성분을 분석하고, \n' +
                '반려인들이 사료를 똑똑하게 구매할 수 있도록 도와드립니다.'
        },
        {
            timing: 3000,
            title: '건강카드',
            content: 'ANIMEAL은 반려동물의 건강상태를 건강카드에 등록하고,\n' +
                '반려동물의 상태에 따라 맞춤 추천 사료를 추천해드립니다.\n' +
                '\n' +
                '이제 ANIMEAL을 통해 반려동물의 예방접종, 병원 진료, 미용\n' +
                '날짜까지 한번에 체크해보세요! '
        },
        {
            timing: 3000,
            title: '위치기반 커뮤니티',
            content: 'ANIMEAL은 반려동물을 위한 올바른 사료 구매를 유도할 뿐\n' +
                '만 아니라, 다양한 모임 참여를 통해 반려인과 반려동물의 \n' +
                '유대관계 형성을 유도합니다.\n' +
                '다양한 반려동물 모임은 물론, GPS기반으로 근처 동물병원과\n' +
                '애견카페의 정보를 알 수 있습니다. \n' +
                '\n' +
                '우리동네 커뮤니티에 가입하고 반려동물에게 친구를 만들어\n' +
                '주세요!'
        }
    ];

    function hideInfoContent() {
        var list = document.querySelectorAll('.intro-container .content-wrap > span');

        list.forEach(function (value, index) {
            setTimeout(function () {
                var item = $(list[index]);
                item.removeClass('show');
                item.addClass('hide');

                setTimeout(function () {
                    item.removeClass('hide');
                }, 600);
            }, index * 70);
        });

        return list.length;
    }
    function showInfoContent() {
        var list = document.querySelectorAll('.intro-container .content-wrap > span');

        list.forEach(function (value, index) {
            setTimeout(function () {
                var item = $(list[index]);
                item.addClass('show');
            }, index * 70);
        });

        return list.length;
    }
    function reloadInfoContent() {
        $('.intro-container .content-wrap > .content').remove();

        var index = parseInt($('.intro-container .pagination-wrap .first > span.curr').text());
        var body = $('.intro-container .content-wrap');
        var data = infoContentList[index];
        data.forEach(function (value) {
            body.append('<span class="content">' + value + '</span>');
        });
    }
    function resetInfoContent() {
        infoContentIndex = 1;

        $('.intro-container .pagination-wrap .first > span.curr').text('00');
        $('.intro-container .pagination-wrap .first > span.next').text('01');
        reloadInfoContent();
        $('.intro-container .content-wrap > span').addClass('show');
        $('.intro-container .right-wrap').removeClass('page4');
    }
    window.resetInfoContent = resetInfoContent;

    function nextInfoContent() {
        $('.intro-container .pagination-wrap').addClass('show');
        setTimeout(function () {
            infoContentIndex = infoContentIndex >= 3 ? 0 : infoContentIndex + 1;
            var nextContentIndex = (infoContentIndex >= 3) ? 0 : infoContentIndex + 1;

            var first = $('.intro-container .pagination-wrap .first');
            var second = $('.intro-container .pagination-wrap .second');

            first.find('span.curr').text(first.find('span.next').text());
            second.find('span.curr').text(second.find('span.next').text());
            first.find('span.next').text('0' + infoContentIndex.toString());
            second.find('span.next').text('0' + nextContentIndex.toString());
            $('.intro-container .pagination-wrap').removeClass('show');
        }, 550);
    }
    function nextInfoImage() {
        var wrap = $('.intro-container .right-wrap');
        if (wrap.hasClass('page1')) {
            wrap.removeClass('page1');
            wrap.addClass('page2');
        } else if (wrap.hasClass('page2')) {
            wrap.removeClass('page2');
            wrap.addClass('page3');
        } else if (wrap.hasClass('page3')) {
            wrap.removeClass('page3');
            wrap.addClass('page4');
        }
    }

    function hideAboutContent() {
        $('.about-container .desc-wrap')
            .removeClass('show')
            .addClass('hide');

        setTimeout(function () {
            $('.about-container .desc-wrap').removeClass('hide');
        }, 350);
    }
    function showAboutContent() {
        $('.about-container .desc-wrap').removeClass('show');

        setTimeout(function () {
            $('.about-container .desc-wrap').addClass('show');
        }, 350);
    }
    function nextAboutContent() {
        var content = $('.about-container .desc-wrap');
        var data = aboutContentList[aboutContentIndex ++];
        content.find('.title').text(data.title);
        content.find('.desc').html(data.content.replace(/\n/g, '<br>'));
    }

    function animation(func, time) {
        var funcQueue = [];
        var timeQueue = [];

        var animate = function (func, time) {
            setTimeout(function () {
                func();

                if (funcQueue.length > 0) {
                    var newFunc = funcQueue[0];
                    var newTime = timeQueue[0];

                    funcQueue.splice(0, 1);
                    timeQueue.splice(0, 1);

                    if (newTime === undefined) {
                        newFunc();
                    } else {
                        animate(newFunc, newTime);
                    }
                }
            }, time());
        };
        var next = function (func, time) {
            funcQueue.push(func);
            timeQueue.push(time);

            return {
                next: next
            };
        };
        animate(func, time);

        return {
            next: next
        };
    }

    function categoryAnimation() {
        animation(
            function () {
                var body = $('html, body');
                body.stop().animate({ scrollTop: 2190 }, 1000);
            }, function () {
                return 0;
            }
        ).next(
            function () {
                var body = $('html, body');
                body.stop().animate({ scrollTop: 3192 }, 10000);
            }, function () {
                return 1500;
            }
        ).next(
            function () {
                $('body').removeClass('show');
            }, function () {
                return 11000;
            }
        ).next(
            startAnimation,
            function () {
                return 1000;
            }
        );
    }
    function rankingAnimation() {
        animation(
            function () {
                var body = $('html, body');
                body.stop().animate({ scrollTop: 1500 }, 1000);
            }, function () {
                return 0;
            }
        ).next(
            function () {
                $('.ranking-container .content-wrap').addClass('product1');

                animation(
                    function () {
                        $('.ranking-container .background-area > .fp-1').addClass('show');
                    }, function () {
                        return 350;
                    }
                ).next(
                    function () {
                        $('.ranking-container .background-area > .fp-2').addClass('show');
                    }, function () {
                        return 350;
                    }
                ).next(
                    function () {
                        $('.ranking-container .background-area > .fp-3').addClass('show');
                    }, function () {
                        return 350;
                    }
                ).next(
                    function () {
                        $('.ranking-container .background-area > .fp-4').addClass('show');
                    }, function () {
                        return 350;
                    }
                ).next(
                    function () {
                        $('.ranking-container .background-area > .fp-5').addClass('show');
                    }, function () {
                        return 350;
                    }
                );
            }, function () {
                return 1500;
            }
        ).next(
            function () {
                $('.ranking-container .content-wrap')
                    .removeClass('product1')
                    .addClass('product2');
            }, function () {
                return 2000;
            }
        ).next(
            function () {
                $('.ranking-container .content-wrap')
                    .removeClass('product2')
                    .addClass('product3');
            }, function () {
                return 2000;
            }
        ).next(
            function () {
                $('.ranking-container .content-wrap')
                    .removeClass('product3')
                    .addClass('product4');
            }, function () {
                return 2000;
            }
        ).next(
            function () {
                $('.ranking-container .content-wrap')
                    .removeClass('product4')
                    .addClass('product5');
            }, function () {
                return 2000;
            }
        ).next(
            function () {
                $('.ranking-container .content-wrap').removeClass('product5');
            }, function () {
                return 2000;
            }
        ).next(
            categoryAnimation,
            function () {
                return 1000;
            }
        );
    }
    function aboutAnimation() {
        animation(
            function () {
                var body = $('html, body');
                body.stop().animate({ scrollTop: 735 }, 1000);
            }, function () {
                return 0;
            }
        ).next(
            function () {
                $('video')[0].play();
                animation(
                    function () {
                        $('.about-container .background-area > .fp-1').addClass('show');
                    }, function () {
                        return 350;
                    }
                ).next(
                    function () {
                        $('.about-container .background-area > .fp-2').addClass('show');
                    }, function () {
                        return 350;
                    }
                ).next(
                    function () {
                        $('.about-container .background-area > .fp-3').addClass('show');
                    }, function () {
                        return 350;
                    }
                ).next(
                    function () {
                        $('.about-container .background-area > .fp-4').addClass('show');
                    }, function () {
                        return 350;
                    }
                );

                $('.about-container .background-area > .circle1').addClass('show');
            }, function () {
                return 1500;
            }
        ).next(
            function () {
                $('.about-container .background-area > .circle2').addClass('show');
            }, function () {
                return 100;
            }
        ).next(
            function () {
                $('.about-container .phone-area').addClass('show');

                nextAboutContent();
                showAboutContent();
            }, function () {
                return 100;
            }
        ).next(
            function () {
                hideAboutContent();
            }, function () {
                return 3000;
            }
        ).next(
            function () {
                nextAboutContent();
                showAboutContent();
            }, function () {
                return 700;
            }
        ).next(
            function () {
                hideAboutContent();
            }, function () {
                return 3000;
            }
        ).next(
            function () {
                nextAboutContent();
                showAboutContent();
            }, function () {
                return 700;
            }
        ).next(
            function () {
                hideAboutContent();
            }, function () {
                return 3000;
            }
        ).next(
            function () {
                nextAboutContent();
                showAboutContent();
            }, function () {
                return 700;
            }
        ).next(
            rankingAnimation,
            function () {
                return 3000;
            }
        );
    }
    function introAnimation() {
        animation(
            function () {
                nextInfoContent();
                nextInfoImage();
            }, function () {
                return 3000;
            }
        ).next(
            function () {
                reloadInfoContent();
            }, function () {
                return hideInfoContent() * 70 + 600;
            }
        ).next(
            function () {
                nextInfoContent();
                nextInfoImage();
            }, function () {
                return showInfoContent() * 70 + 600 + 3000;
            }
        ).next(
            function () {
                reloadInfoContent();
            }, function () {
                return hideInfoContent() * 70 + 600;
            }
        ).next(
            function () {
                nextInfoContent();
                nextInfoImage();
            }, function () {
                return showInfoContent() * 70 + 600 + 3000;
            }
        ).next(
            function () {
                reloadInfoContent();
            }, function () {
                return hideInfoContent() * 70 + 600;
            }
        ).next(
            function () {
                aboutAnimation();
            }, function () {
                return showInfoContent() * 70 + 600 + 1000
            }
        )
    }
    function startAnimation() {
        animation(
            function () {
                aboutContentIndex = 0;

                resetInfoContent();

                var body = $('html, body');
                body.stop().animate({ scrollTop: 0 }, 0);

                $('body').addClass('show');
            }, function () {
                return 1000;
            }
        ).next(introAnimation);
    }
    startAnimation();

});