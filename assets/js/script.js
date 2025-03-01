// countdown code
var leftOfferDay = document.querySelector("#leftOfferDay")
var leftOfferHours = document.querySelector("#leftOfferHours")
var leftOfferMinutes = document.querySelector("#leftOfferMinutes")
var leftOfferSeconds = document.querySelector("#leftOfferSeconds")

var counTimer = document.querySelector(".counTimer")

function updateCoundown() {
    let endOfferTime = moment("2025-03-01 17:00:00");
    let curretTime = moment()

    let duration = moment.duration(endOfferTime.diff(curretTime))

    if (duration > 0) {
        leftOfferDay.textContent = duration.days()
        leftOfferHours.textContent = duration.hours()
        leftOfferMinutes.textContent = duration.minutes()
        leftOfferSeconds.textContent = duration.seconds()
    } else {
        counTimer.innerHTML = "<h1> Offer End! </h1>";
        clearInterval(countdownInterval)
    }

}

updateCoundown()

var countdownInterval = setInterval(() => {
    updateCoundown()
}, 1000) // 1 second'



// // carousel code

// var owl = $('.owl-carousel').owlCarousel({
//     loop: false,
//     margin: 10,
//     responsiveClass: true,
//     responsive: {
//         0: {
//             items: 1,
//             nav: false,
//             loop: true
//         },
//         600: {
//             items: 2,
//             nav: false,
//             loop: true
//         },
//         1000: {
//             items: 5,
//             nav: false,
//             loop: true
//         }
//     }
// })

// $("#nextBtn").click(function () {
//     owl.trigger('next.owl.carousel')
// })

// $("#prevBtn").click(function () {
//     owl.trigger('prev.owl.carousel')
// })


// // carousel for category

// var owl_category = $('.owl-carousel-category').owlCarousel({
//     loop: true,
//     margin: 10,
//     responsiveClass: true,
//     responsive: {
//         0: {
//             items: 1,
//             nav: false,
//             loop: true
//         },
//         600: {
//             items: 2,
//             nav: false,
//             loop: true
//         },
//         1000: {
//             items: 5,
//             nav: false,
//             loop: true
//         }
//     }
// })


// $("#nextCategoryBtn").click(function () {
//     owl.trigger('next.owl.carousel')
// })

// $("#prevCategoryBtn").click(function () {
//     owl.trigger('prev.owl.carousel')
// })

// $("#nextExploreBtn").click(function () {
//     owl.trigger('next.owl.carousel')
// })

// $("#prevExploreBtn").click(function () {
//     owl.trigger('prev.owl.carousel')
// })

// Initialize Flash Sales Carousel
var owlFlash = $('#flashSalesCarousel').owlCarousel({
    loop: false,
    margin: 10,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
            nav: false,
            loop: true
        },
        600: {
            items: 2,
            nav: false,
            loop: true
        },
        1000: {
            items: 5,
            nav: false,
            loop: true
        }
    }
});

// Initialize Category Carousel
var owlCategory = $('#categoryCarousel').owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
            nav: false,
            loop: true
        },
        600: {
            items: 2,
            nav: false,
            loop: true
        },
        1000: {
            items: 6,
            nav: false,
            loop: true
        }
    }
});

// Initialize Explore Products Carousel
var owlExplore = $('#exploreCarousel').owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
            nav: false,
            loop: true
        },
        600: {
            items: 2,
            nav: false,
            loop: true
        },
        1000: {
            items: 5,
            nav: false,
            loop: true
        }
    }
});

// Flash Sales controls
$("#nextBtn").click(function() {
    owlFlash.trigger('next.owl.carousel');
});
$("#prevBtn").click(function() {
    owlFlash.trigger('prev.owl.carousel');
});

// Category controls
$("#nextCategoryBtn").click(function() {
    owlCategory.trigger('next.owl.carousel');
});
$("#prevCategoryBtn").click(function() {
    owlCategory.trigger('prev.owl.carousel');
});

// Explore Products controls
$("#nextExploreBtn").click(function() {
    owlExplore.trigger('next.owl.carousel');
});
$("#prevExploreBtn").click(function() {
    owlExplore.trigger('prev.owl.carousel');
});



