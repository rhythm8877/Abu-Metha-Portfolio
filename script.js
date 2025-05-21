document.addEventListener("DOMContentLoaded", () => {
  // Set current year in footer
  document.getElementById("current-year").textContent = new Date().getFullYear()

  // Initialize navbar
  initNavbar();

  // Quotes data
  const quotes = [
    {
      text: "Am humbled and greatly motivated to work harder for the cause of sports and to serve the nation and help create opportunities for our youth.",
      context: "On being elected Vice President of Athletics Federation of India",
    },
    {
      text: "We aspire to serve the citizens... justice, development, progress, unity.",
      context: "On his vision for Nagaland",
    },
    {
      text: "Sports has the power to transform lives, build character, and unite communities across boundaries.",
      context: "At the North East Olympic Games 2022",
    },
    {
      text: "Our cultural heritage is our strength. By sharing it with the world, we not only preserve it but also create bridges of understanding.",
      context: "During Adelaide Fringe Festival",
    },
  ]

  // Gallery data
  const galleryItems = [
    {
      src: "images/AFI.jpg",
      alt: "Shri Abu Metha at Athletics Federation of India meeting",
      caption: "Shri Abu Metha meets Athletics Federation of India",
    },
    {
      src: "images/training_camps_neo.jpg",
      alt: "Shri Abu Metha at training camps of Team Nagaland for the North East Olympics",
      caption: "Shri Abu Metha at training camps of Team Nagaland for the North East Olympics 2022",
    },
    {
      src: "images/young_athletes.jpg",
      alt: "Shri Abu Metha with youth athletes",
      caption: "Mentoring young athletes in Nagaland",
    },
    {
      src: "images/adelaide_fringe_festival.jpg",
      alt: "Shri Abu Metha at Adelaide Fringe Festival",
      caption: "Cultural exchange at Adelaide Fringe Festival",
    },
    {
      src: "images/paris_olympics.jpg",
      alt: "Shri Abu Metha at Paris Olympics",
      caption: "Indian delegation at Paris 2024 Olympics",
    },
    {
      src: "images/nsl_final_press.jpg",
      alt: "Shri Abu Metha at Nagaland Super League Final Press Conference",
      caption: "Shri Abu Metha at Nagaland Super League Final Press Conference",
    },
  ]

  // Initialize quotes carousel
  initQuoteCarousel()

  // Initialize gallery
  initGallery()

  // Initialize all scroll animations
  initAllScrollAnimations()

  // Initialize counter animations
  initCounters()

  // Quote carousel functionality
  function initQuoteCarousel() {
    const quoteContainer = document.querySelector(".quote-container")
    const dotsContainer = document.querySelector(".quote-dots")
    const prevButton = document.querySelector(".prev-quote")
    const nextButton = document.querySelector(".next-quote")
    let currentQuote = 0
    let interval

    // Create quotes
    quotes.forEach((quote, index) => {
      const quoteElement = document.createElement("div")
      quoteElement.classList.add("quote")
      if (index === 0) quoteElement.classList.add("active")

      quoteElement.innerHTML = `
        <p class="quote-text">"${quote.text}"</p>
        <p class="quote-context">${quote.context}</p>
      `

      quoteContainer.appendChild(quoteElement)

      // Create dots
      const dot = document.createElement("div")
      dot.classList.add("quote-dot")
      if (index === 0) dot.classList.add("active")
      dot.addEventListener("click", () => goToQuote(index))
      dotsContainer.appendChild(dot)
    })

    // Event listeners
    prevButton.addEventListener("click", prevQuote)
    nextButton.addEventListener("click", nextQuote)

    // Start autoplay
    startAutoplay()

    function startAutoplay() {
      interval = setInterval(nextQuote, 8000)
    }

    function stopAutoplay() {
      clearInterval(interval)
    }

    function nextQuote() {
      goToQuote((currentQuote + 1) % quotes.length)
    }

    function prevQuote() {
      goToQuote((currentQuote - 1 + quotes.length) % quotes.length)
    }

    function goToQuote(index) {
      stopAutoplay()

      const quoteElements = document.querySelectorAll(".quote")
      const dots = document.querySelectorAll(".quote-dot")

      quoteElements[currentQuote].classList.remove("active")
      dots[currentQuote].classList.remove("active")

      currentQuote = index

      quoteElements[currentQuote].classList.add("active")
      dots[currentQuote].classList.add("active")

      startAutoplay()
    }
  }

  // Gallery functionality
  function initGallery() {
    const galleryGrid = document.querySelector(".gallery-grid")
    const lightbox = document.getElementById("lightbox")
    const lightboxImage = document.querySelector(".lightbox-image")
    const lightboxCaption = document.querySelector(".lightbox-caption")
    const lightboxClose = document.querySelector(".lightbox-close")

    // Create gallery items
    galleryItems.forEach((item, index) => {
      const galleryItem = document.createElement("div")
      galleryItem.classList.add("gallery-item")
      galleryItem.innerHTML = `
        <img src="${item.src}" alt="${item.alt}" class="gallery-image">
        <div class="gallery-overlay">
          <p>${item.caption}</p>
        </div>
      `

      galleryItem.addEventListener("click", () => openLightbox(index))
      galleryGrid.appendChild(galleryItem)
    })

    // Lightbox functionality
    function openLightbox(index) {
      const item = galleryItems[index]
      lightboxImage.src = item.src
      lightboxImage.alt = item.alt
      lightboxCaption.textContent = item.caption
      lightbox.classList.add("active")
      document.body.style.overflow = "hidden"
    }

    lightboxClose.addEventListener("click", closeLightbox)
    lightbox.addEventListener("click", (e) => {
      if (e.target === lightbox) {
        closeLightbox()
      }
    })

    function closeLightbox() {
      lightbox.classList.remove("active")
      document.body.style.overflow = ""
    }
  }

  // Comprehensive scroll animations setup
  function initAllScrollAnimations() {
    // Setup section title animations
    const sectionTitles = document.querySelectorAll('.section-title:not(.hero *)');
    sectionTitles.forEach(title => {
      if (!title.classList.contains('animate-on-scroll')) {
        title.classList.add('animate-on-scroll', 'scale-in');
      }
    });
    
    // Set up achievement cards for staggered animation
    const achievementCards = document.querySelectorAll('.achievement-card');
    achievementCards.forEach((card, index) => {
      card.style.animationDelay = `${0.15 * index}s`;
    });
    
    // Set up gallery items for staggered animation
    const galleryItems = document.querySelectorAll('.gallery-item');
    galleryItems.forEach((item, index) => {
      item.style.transitionDelay = `${0.1 * index}s`;
    });

    // Set up social icons for animation
    const socialIcons = document.querySelectorAll('.social-icon');
    socialIcons.forEach((icon, index) => {
      icon.parentElement.classList.add('animate-on-scroll', 'scale-in');
      icon.parentElement.style.animationDelay = `${0.2 * index}s`;
    });

    // Add animation to contact button
    const contactButton = document.querySelector('.contact-button');
    if (contactButton) {
      contactButton.classList.add('animate-on-scroll', 'fade-in-up');
    }
    
    // Add floating animation to scroll indicator
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (scrollIndicator) {
      scrollIndicator.style.animation = 'bounce 2s infinite, fadeIn 1s forwards';
    }
    
    // Create intersection observer for scroll animations
    observeScrollAnimations();
  }
  
  // Scroll animations with Intersection Observer
  function observeScrollAnimations() {
    const animatedElements = document.querySelectorAll(".animate-on-scroll");
    const achievementCards = document.querySelectorAll('.achievement-card');
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Check specific element types for special animations
            if (entry.target.classList.contains('achievement-card')) {
              entry.target.classList.add('animated');
            } 
            else if (entry.target.classList.contains('gallery-item')) {
              entry.target.classList.add('animated');
            }
            // Apply standard animation classes
            else if (entry.target.classList.contains("slide-in-left")) {
              entry.target.style.animationPlayState = 'running';
            } 
            else if (entry.target.classList.contains("slide-in-right")) {
              entry.target.style.animationPlayState = 'running';
            } 
            else if (entry.target.classList.contains("scale-in")) {
              entry.target.style.animationPlayState = 'running';
            }
            else if (entry.target.classList.contains("rotate-in")) {
              entry.target.style.animationPlayState = 'running';
            }
            else if (entry.target.classList.contains("fade-in-up")) {
              entry.target.style.animationPlayState = 'running';
            }
            else {
              entry.target.style.animationPlayState = 'running';
              entry.target.classList.add("fade-in");
            }
            
            // Stop observing after animation is triggered
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -50px 0px" }
    );

    // Observe all animated elements
    animatedElements.forEach((element) => {
      element.style.animationPlayState = 'paused';
      observer.observe(element);
    });
    
    // Observe achievement cards
    achievementCards.forEach((card) => {
      observer.observe(card);
    });
    
    // Observe gallery items
    galleryItems.forEach((item) => {
      observer.observe(item);
    });
    
    // Add scroll-triggered parallax effect to sections
    addParallaxEffect();
  }
  
  // Add subtle parallax effect to background elements
  function addParallaxEffect() {
    window.addEventListener('scroll', () => {
      const scrollPosition = window.pageYOffset;
      
      // Hero parallax effect (subtle movement of background)
      const hero = document.querySelector('.hero');
      if (hero) {
        const heroBackground = hero.querySelector('.hero::before');
        if (heroBackground) {
          heroBackground.style.transform = `translateY(${scrollPosition * 0.15}px)`;
        }
      }
    });
  }

  // Counter animations
  function initCounters() {
    const counters = document.querySelectorAll(".counter")
    const counterSpeed = 200

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const counter = entry.target
            const target = Number.parseInt(counter.getAttribute("data-target"))
            let count = 0

            const updateCount = () => {
              const increment = target / (counterSpeed / 30)

              if (count < target) {
                count += increment
                counter.innerText = Math.floor(count)
                setTimeout(updateCount, 30)
              } else {
                counter.innerText = target
              }
            }

            updateCount()
            observer.unobserve(counter)
          }
        })
      },
      { threshold: 0.5 }
    )

    counters.forEach((counter) => {
      observer.observe(counter)
    })
  }

  // Initialize navbar functionality
  function initNavbar() {
    const navbar = document.querySelector('.navbar');
    const navbarToggle = document.querySelector('.navbar-toggle');
    const navbarLinks = document.querySelectorAll('.navbar-link');
    
    // Toggle mobile menu
    navbarToggle.addEventListener('click', () => {
      navbar.classList.toggle('open');
      document.body.classList.toggle('no-scroll');
    });
    
    // Handle navbar background on scroll
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });
    
    // Active link handling
    navbarLinks.forEach(link => {
      link.addEventListener('click', function() {
        if (navbar.classList.contains('open')) {
          navbar.classList.remove('open');
          document.body.classList.remove('no-scroll');
        }
      });
    });
    
    // Update active link on scroll
    window.addEventListener('scroll', () => {
      let current = '';
      const sections = document.querySelectorAll('section');
      const scrollPosition = window.pageYOffset + window.innerHeight * 0.5;
      const bottomOfPage = document.body.scrollHeight - window.innerHeight - 50;
      
      // Check if user has scrolled to bottom of page
      if (window.pageYOffset >= bottomOfPage) {
        current = 'contact'; // Force contact to be active near the bottom
      } else {
        sections.forEach(section => {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.clientHeight;
          
          if (scrollPosition >= sectionTop && scrollPosition <= (sectionTop + sectionHeight)) {
            current = section.getAttribute('id');
          }
        });
      }
      
      navbarLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === current) {
          link.classList.add('active');
        }
      });
    });
  }
})
