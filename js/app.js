gsap.registerPlugin(ScrollTrigger, ScrollSmoother)



if (ScrollTrigger.isTouch !== 1){
    document.addEventListener("DOMContentLoaded", function() {
        new PanelSnap();
    });
}



document.addEventListener('DOMContentLoaded', function() {
    new Slider(document.querySelector('.carousel'));
});





class Slider {
    constructor(slider, autoplay = true) {
        // элемент div.carousel
        this.slider = slider;
        // все кадры (слайды)
        this.allFrames = slider.querySelectorAll('.carousel-item');
        // цепочка кадров
        this.frameChain = slider.querySelector('.carousel-slides');
        // кнопка «вперед»
        this.nextButton = slider.querySelector('.carousel-next');
        // кнопка «назад»
        this.prevButton = slider.querySelector('.carousel-prev');

        this.index = 0; // индекс кадра, который сейчас в окне просмотра
        this.length = this.allFrames.length; // сколько всего есть кадров
        this.autoplay = autoplay; // включить автоматическую прокрутку?
        this.paused = null; // чтобы можно было выключать автопрокрутку

        this.init(); // инициализация слайдера
    }

    init() {
        // this.dotButtons = this.dots(); // создать индикатор текущего кадра

        // все кадры должны быть одной ширины, равной ширине окна просмотра;
        // если кадров три, то ширина каждого кадра будет 100/3 = 33.33333%
        // от ширины контейнера .carousel-slides, то есть 900 пикселей
        this.allFrames.forEach(frame => frame.style.width = "45rem");
        // ширина цепочки кадров должна равна ширине всех кадров, то есть
        // 900*3 = 2700 пикселей; но удобнее задать в процентах от родителя,
        // если кадров три, то ширина контейнера кадров будет 100*3 = 300%
        this.frameChain.style.width = "60rem";

        this.nextButton.addEventListener('click', event => { // клик по кнопке «вперед»
            event.preventDefault();
            this.next();
        });

        this.prevButton.addEventListener('click', event => { // клик по кнопке «назад»
            event.preventDefault();
            this.prev();
        });

        // клики по кнопкам индикатора текущего кадра
        this.dotButtons.forEach(dot => {
            dot.addEventListener('click', event => {
                event.preventDefault();
                const index = this.dotButtons.indexOf(event.target);
                if (index === this.index) return;
                this.goto(index);
            });
        });

        // if (this.autoplay) { // включить автоматическую прокрутку?
        //     this.play();
        //     // когда мышь над слайдером — останавливаем автоматическую прокрутку
        //     this.slider.addEventListener('mouseenter', () => clearInterval(this.paused));
        //     // когда мышь покидает пределы слайдера — опять запускаем прокрутку
        //     this.slider.addEventListener('mouseleave', () => this.play());
        // }
    }

    // перейти к кадру с индексом index
    goto(index) {
        // изменить текущий индекс...
        if (index > this.length - 1) {
            this.index = 0;
        } else if (index < 0) {
            this.index = this.length - 1;
        } else {
            this.index = index;
        }
        // ...и выполнить смещение
        this.move();
    }

    // перейти к следующему кадру
    next() {
        this.goto(this.index + 1);
    }

    // перейти к предыдущему кадру
    prev() {
        this.goto(this.index - 1);
    }

    // рассчитать и выполнить смещение
    move() {
        // на сколько нужно сместить, чтобы нужный кадр попал в окно
        const offset = 100/this.length * this.index;
        this.frameChain.style.transform = `translateX(-${offset}%)`;
        this.dotButtons.forEach(dot => dot.classList.remove('active'));
        this.dotButtons[this.index].classList.add('active');
    }

    // запустить автоматическую прокрутку
    play() {
        this.paused = setInterval(() => this.next(), 3000);
    }

    // создать индикатор текущего слайда
    // dots() {
    //     const ol = document.createElement('ol');
    //     ol.classList.add('carousel-indicators');
    //     const children = [];
    //     for (let i = 0; i < this.length; i++) {
    //         let li = document.createElement('li');
    //         if (i === 0) li.classList.add('active');
    //         ol.append(li);
    //         children.push(li);
    //     }
    //     this.slider.prepend(ol);
    //     return children;
    // }
}




// var defaultOptions = {
//     container: '.bd',
//     panelSelector: '> section',
//     directionThreshold: 50,
//     delay: 0,
//     duration: 300,
//     easing: function(t) { return t },
// };
//
// new PanelSnap(options);
// document.addEventListener("DOMContentLoaded", function() {
//     new PanelSnap();
// });


function activeLeft(){
    // document.querySelector("#level__1").classList.toggle("active")
    document.querySelector("#level__1").classList.add("active")
    document.querySelector("#level__2").classList.remove("active")
    document.querySelector("#level__3").classList.remove("active")
}
function activeMiddle(){
    // document.querySelector("#level__1").classList.toggle("active")
    document.querySelector("#level__2").classList.add("active")
    document.querySelector("#level__1").classList.remove("active")
    document.querySelector("#level__3").classList.remove("active")
}
function activeRight(){
    // document.querySelector("#level__1").classList.toggle("active")
    document.querySelector("#level__3").classList.add("active")
    document.querySelector("#level__2").classList.remove("active")
    document.querySelector("#level__1").classList.remove("active")
}




// if (ScrollTrigger.isTouch !== 1) {


    gsap.fromTo(".about-us__title",{opacity:0, y:200}, {
        scrollTrigger:".about-us__title",
        opacity:1, y:0,
        delay:0.25,
    });

    gsap.fromTo(".about-as__description",{opacity:0, y:200}, {
        scrollTrigger:".about-as__description",
        opacity:1, y:0,
        delay:0.25,
    });


    let itemsL = gsap.utils.toArray('.score__indicator')

    itemsL.forEach(item => {
        gsap.fromTo(item, { opacity: 0, y: 200 }, {
            scrollTrigger:".about-as__description",
            opacity:1, y:0,
            delay:0.25,
        })
    })

gsap.fromTo(".prepare-levels__title",{opacity:0, y:200}, {
    scrollTrigger:".prepare-levels__title",
    opacity:1, y:0,
    delay:0.25,
});



let itemsLvl = gsap.utils.toArray('.level')

itemsLvl.forEach(item => {
    gsap.fromTo(item, { opacity: 0, y: 200, scale:1 }, {
        scrollTrigger:".prepare-levels__levels",
        opacity:1, y:0, scale:1,
        delay:0.15,

    })
})





// }

















var typingEffect = new Typed(".multiText",{
    strings:["новое поколение профи в digital-сфере", "креативных специалистов", "будущих гиков",
         "fullstack разработчиков", "новое поколение профи в digital-сфере"],
    loop:true,
    typeSpeed:60,
    backSpeed:40,
    backDelay: 2500,
})


var btn = document.querySelector('.button');
var hiddenElement = document.querySelector('.about-us')

btn.addEventListener('click', handleButtonClick);
function handleButtonClick() {
    hiddenElement.scrollIntoView({block: "center", behavior: "smooth"});
}