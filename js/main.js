const AboutImageNode = document.getElementById("about-image")
const AboutTextNode = document.getElementById("about-text")
const AboutTitleNode = document.getElementById("about-title")
const AboutBtnNode = document.getElementById("about-btn")
const WorkTitleNode = document.getElementById("work-title")
const WorkTextNode = document.getElementById("work-text")
const WorkPosterNode = document.getElementById("work-poster")
const ProcessTitle = document.getElementById("process-subtitle")
const ProcessSubtitle = document.getElementById("process-title")
const GalleryTitle = document.getElementById("gallery-title")
const GallerySubtitle = document.getElementById("gallery-subtitle")
const ReviewTitle = document.getElementById("review-title")
const FaqText = document.getElementById("faq-text")
const FaqTitle = document.getElementById("faq-title")
const Faq1 = document.getElementById("faq-item-1")
const Faq2 = document.getElementById("faq-item-2")
const Faq3= document.getElementById("faq-item-3")
const Faq4 = document.getElementById("faq-item-4")
const ConnectedTitle = document.getElementById("connected-title")
const ConnectedBtn = document.getElementById("connected-btn")
const commentLine1 = document.getElementById("review-line-1")
const commentLine2 = document.getElementById("review-line-2")
const commentLine3 = document.getElementById("review-line-3")


let commentValue = 0;

const HomeSection = document.getElementById("home-section")
const HomeLink = document.getElementById("home-link")
const AboutLink= document.getElementById("about-link")
const AboutSection = document.getElementById("about-section")
const ProcessLink= document.getElementById("process-link")
const ProcessSection = document.getElementById("process-section")
const GalleryLink= document.getElementById("gallery-link")
const GallerySection = document.getElementById("gallery-section")
const ReviewsLink= document.getElementById("reviews-link")
const ReviewsSection = document.getElementById("reviews-section")
const FaqLink= document.getElementById("faq-link")
const FaqSection = document.getElementById("faq-section")

const checkElement = (element, link) => {
  const bodyRect = document.body.getBoundingClientRect()
  const elemRect = element.getBoundingClientRect()
  const  offset   = elemRect.top - bodyRect.top;

  if (window.scrollY > offset && window.scrollY < offset + element.clientHeight) {
    console.log("add")
    link.classList.add("nav-link-active")
  }
}


const CommentFunc = () => {
  if (commentValue > 384 * 4) {
    commentValue = 0
  } else commentValue++
  commentLine1.style.marginLeft = commentValue * 2 + 'px'
}

setInterval(() => {
  CommentFunc()
}, 20)

const animate = () => {
  const item = document.getElementById("nav-wrap")


  const navLinks = document.getElementsByClassName("nav-link")
  for (let item of navLinks) {
    item.classList.remove("nav-link-active")
  }

  checkElement(HomeSection, HomeLink)
  checkElement(AboutSection, AboutLink)
  checkElement(ProcessSection, ProcessLink)
  checkElement(GallerySection, GalleryLink)
  checkElement(ReviewsSection, ReviewsLink)
  checkElement(FaqSection, FaqLink)






  if (window.pageYOffset > 10) {
    if (!item.classList.contains("nav-wrap-active")) {
      item.classList.add("nav-wrap-active")
    }
  } else {
    if (item.classList.contains("nav-wrap-active")) {
      item.classList.remove("nav-wrap-active")
    }
  }
  

  if (inView(AboutImageNode)) {
    AboutImageNode.classList.add("active")
    AboutImageNode.classList.add('animate__animated');
    AboutImageNode.classList.add('animate__bounceInLeft');
  }


  if (inView(AboutTitleNode)) {
    AboutTitleNode.classList.add("active")
    AboutTitleNode.classList.add('animate__animated');
    AboutTitleNode.classList.add('animate__bounceInRight');
  }

  if (inView(AboutTextNode)) {
    AboutTextNode.classList.add("active")
    AboutTextNode.classList.add('animate__animated');
    AboutTextNode.classList.add('animate__bounceInRight');
  }

  if (inView(AboutBtnNode)) {
    AboutBtnNode.classList.add("active")
    AboutBtnNode.classList.add('animate__animated');
    AboutBtnNode.classList.add('animate__bounceInUp');
  }

  if (inView(WorkTitleNode)) {
    WorkTitleNode.classList.add("active")
    WorkTitleNode.classList.add('animate__animated');
    WorkTitleNode.classList.add('animate__bounceInRight');
  }

  if (inView(WorkTextNode)) {
    WorkTextNode.classList.add("active")
    WorkTextNode.classList.add('animate__animated');
    WorkTextNode.classList.add('animate__bounceInLeft');
  }

  if (inView(WorkPosterNode)) {
    WorkPosterNode.classList.add("active")
    WorkPosterNode.classList.add('animate__animated');
    WorkPosterNode.classList.add('animate__zoomIn');
  }

  if (inView(ProcessSubtitle)) {
    ProcessSubtitle.classList.add("active")
    ProcessSubtitle.classList.add('animate__animated');
    ProcessSubtitle.classList.add('animate__bounceInRight');
  }

  if (inView(ProcessTitle)) {
    ProcessTitle.classList.add("active")
    ProcessTitle.classList.add('animate__animated');
    ProcessTitle.classList.add('animate__bounceInLeft');
  }

  if (inView(GalleryTitle)) {
    GalleryTitle.classList.add("active")
    GalleryTitle.classList.add('animate__animated');
    GalleryTitle.classList.add('animate__bounceInRight');
  }

  if (inView(GallerySubtitle)) {
    GallerySubtitle.classList.add("active")
    GallerySubtitle.classList.add('animate__animated');
    GallerySubtitle.classList.add('animate__bounceInLeft');
  }

  if (inView(ReviewTitle)) {
    ReviewTitle.classList.add("active")
    ReviewTitle.classList.add('animate__animated');
    ReviewTitle.classList.add('animate__lightSpeedInRight');
  }

  if (inView(FaqTitle)) {
    FaqTitle.classList.add("active")
    FaqTitle.classList.add('animate__animated');
    FaqTitle.classList.add('animate__bounceInLeft');
  }

  if (inView(FaqText)) {
    FaqText.classList.add("active")
    FaqText.classList.add('animate__animated');
    FaqText.classList.add('animate__bounceInRight');
  }

  if (inView(Faq1)) {
    Faq1.classList.add("active")
    Faq1.classList.add('animate__animated');
    Faq1.classList.add('animate__lightSpeedInRight');
  }

  if (inView(Faq2)) {
    setTimeout(() => {
      Faq2.classList.add("active")
      Faq2.classList.add('animate__animated');
      Faq2.classList.add('animate__lightSpeedInRight');
    }, 30)
  }

  if (inView(Faq3)) {
    setTimeout(() => {
      Faq3.classList.add("active")
      Faq3.classList.add('animate__animated');
      Faq3.classList.add('animate__lightSpeedInRight');
    }, 60)
  }

  if (inView(Faq4)) {
    setTimeout(() => {
      Faq4.classList.add("active")
      Faq4.classList.add('animate__animated');
      Faq4.classList.add('animate__lightSpeedInRight');
    }, 90)
  }

  if (inView(ConnectedTitle)) {
    setTimeout(() => {
      ConnectedTitle.classList.add("active")
      ConnectedTitle.classList.add('animate__animated');
      ConnectedTitle.classList.add('animate__fadeInDown');
    }, 60)
  }

  if (inView(ConnectedBtn)) {
    setTimeout(() => {
      ConnectedBtn.classList.add("active")
      ConnectedBtn.classList.add('animate__animated');
      ConnectedBtn.classList.add('animate__flipInX');
    }, 90)
  }
}

const swiperGallery = new Swiper('.swiper-gallery', {
  // Optional parameters
  direction: 'horizontal',
  slidesPerView: 1,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination"
  },
  breakpoints: {
    // mobile + tablet - 320-990
    550: {
      slidesPerView: 2
    },
    // desktop >= 991
    991: {
      slidesPerView: 3
    }
  }
});

function inView(element) {
  // get window height
  const windowHeight = window.innerHeight;
  // get number of pixels that the document is scrolled
  const scrollY = window.scrollY || window.pageYOffset;

  // get current scroll position (distance from the top of the page to the bottom of the current viewport)
  const scrollPosition = scrollY + windowHeight;
  // get element position (distance from the top of the page to the bottom of the element)
  const elementPosition = element.getBoundingClientRect().top + scrollY + element.clientHeight;

  // is scroll position greater than element position? (is element in view?)
  if (scrollPosition + 100 > elementPosition) {
    return true;
  }

  return false;
}

const galleryNextSlide = () => {
  swiperGallery.slideNext()
}

const galleryPrevSlide = () => {
  swiperGallery.slidePrev()
}

const startVideo = () => {
  const videoWrap = document.getElementById("video-wrap")
  const video = document.getElementById("video")

  videoWrap.classList.add("video-wrap-active")
  video.play()
}

const endVideo = () => {
  const videoWrap = document.getElementById("video-wrap")
  const video = document.getElementById("video")

  videoWrap.classList.remove("video-wrap-active")
  video.stop()
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

const changeActiveFaq = (id) => {
  const elem = document.getElementsByClassName("faq-item-" + id)[0]

  if (elem.classList.contains("faq-item-active")) {
    elem.classList.remove("faq-item-active")
  } else {
    elem.classList.add("faq-item-active")
  }
}


const FaqButtons = document.getElementsByClassName("faq-arrow-wrap")
for (let item of FaqButtons) {
  item.addEventListener("click", () => changeActiveFaq(item.dataset.id))
}

const start = () => {
  const item = document.getElementById("nav-wrap")
  item.style.top = '0px'
}


document.addEventListener('scroll', animate);
start()