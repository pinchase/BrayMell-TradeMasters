// header and sidebar

   
  document.getElementById('toggle').addEventListener('click', function() {
    document.getElementById('nav').classList.toggle('show');
});

// Close sidebar when a link is clicked
// document.querySelectorAll('.nav a').forEach(link => {
//     link.addEventListener('click', function() {
//         document.getElementById('nav').classList.remove('show');
//     });
// });

// Close sidebar when clicked outside
document.addEventListener('click', function(event) {
    if (!event.target.closest('.nav') && !event.target.closest('.toggle-button')) {
        document.getElementById('nav').classList.remove('show');
    }
});

// Array of images and corresponding text
const slides = [
    {
      image: "url('TEEAM.jpeg')",
      subheading: "Retail",
      heading: "ROUTE TO MARKET SOLUTION",
      text: "Enhanced visibility services countywide.",
    },
    {
        image: "url('MARKET.jpeg')",
        subheading: "Market Research and Retail Census",
        heading: "OUR MARKET RESEARCH AND RETAIL CENSUS",
        text: "Building connections that matter.",
      },
    {
      image: "url('about.jpeg')",
      subheading: "Technology",
      heading: "DISCOVER NEW SOLUTIONS",
      text: "Providing cutting-edge solutions for your business.",
    },
    {
      image: "url('TEAM.jpeg')",
      subheading: "Trade Insights and Retail Analytics",
      heading: "INTRODUCING OUR TRADE EXPERTS",
      text: "A specialized, tech-powered field force, expertly crafted to deliver your brand's retail strategies and unlock valuable trade opportunities."
    },
  ];
  
  // DOM Elements
  const heroSection = document.querySelector(".hero");
  const heroSubheading = document.getElementById("hero-subheading");
  const heroHeading = document.getElementById("hero-heading");
  const heroText = document.getElementById("hero-text");
  
  let currentSlide = 0;
  
  // Function to update the hero section
  function updateHero() {
    const slide = slides[currentSlide];
    heroSection.style.backgroundImage = slide.image;
    heroSubheading.textContent = slide.subheading;
    heroHeading.textContent = slide.heading;
    heroText.textContent = slide.text;
  
    // Move to the next slide, or loop back to the start
    currentSlide = (currentSlide + 1) % slides.length;
  }
  
  // Change the hero section every 5 seconds
  setInterval(updateHero, 5000);
  
  // Initialize the first slide
  updateHero();
  


    // Get the current year
    const currentYear = new Date().getFullYear();
    document.getElementById('current-year').textContent = currentYear;
    // Add smooth scrolling to anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach((link) => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        targetElement.scrollIntoView({ behavior:'smooth' });
      });
    });
    // Add active class to navigation links on scroll
    const navLinks = document.querySelectorAll('.nav-link');
    window.addEventListener('scroll', () => {
      const scrollPosition = window.scrollY;
      navLinks.forEach((link) => {
        const linkId = link.getAttribute('href').replace('#', '');
        const linkElement = document.getElementById(linkId);
        if (linkElement.offsetTop <= scrollPosition && linkElement.offsetTop + linkElement.offsetHeight > scrollPosition) {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
        });
        });



        // 
        document.addEventListener('DOMContentLoaded', () => {
          const button = document.querySelector('.learn-more');
        
          button.addEventListener('click', () => {
            // Check if the details div already exists
            if (!document.querySelector('.details')) {
              // Create a new div element
              const detailsDiv = document.createElement('div');
              detailsDiv.classList.add('details');
              detailsDiv.innerHTML = `
                <h4>More About Sales Force Automation</h4>
                <p>
                  Our Sales Force Automation system revolutionizes retail operations by automating repetitive tasks such as data collection, reporting, and performance tracking. This enables your team to focus on strategy and customer engagement while leveraging real-time insights for decision-making. With offline capabilities, the system ensures seamless functionality even in areas with limited connectivity.
                </p>
                <button class="close-btn">Close</button>
              `;
        
              // Append the new div to the body or section
              document.body.appendChild(detailsDiv);
        
              // Add close functionality
              const closeBtn = detailsDiv.querySelector('.close-btn');
              closeBtn.addEventListener('click', () => {
                detailsDiv.remove();
              });
        
              // Style the new div (optional inline styling or using CSS)
              detailsDiv.style.position = 'fixed';
              detailsDiv.style.right = '20px';
              detailsDiv.style.bottom = '20px';
              detailsDiv.style.width = '300px';
              detailsDiv.style.background = '#fff';
              detailsDiv.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
              detailsDiv.style.borderRadius = '10px';
              detailsDiv.style.padding = '20px';
              detailsDiv.style.zIndex = '1000';
            }
          });
        });

// counter
        document.addEventListener("DOMContentLoaded", () => {
          const counters = document.querySelectorAll(".counter");
        
          const animateCounters = () => {
            counters.forEach(counter => {
              const updateCount = () => {
                const target = +counter.getAttribute("data-target");
                const count = +counter.innerText;
        
                const increment = target / 100; // Adjust speed by changing divisor
        
                if (count < target) {
                  counter.innerText = Math.ceil(count + increment);
                  setTimeout(updateCount, 30); // Adjust timing for smoother animation
                } else {
                  counter.innerText = target;
                }
              };
        
              updateCount();
            });
          };
        
          // Observe when the section comes into view
          const observer = new IntersectionObserver(
            entries => {
              entries.forEach(entry => {
                if (entry.isIntersecting) {
                  animateCounters();
                  observer.disconnect(); // Stop observing after animation
                }
              });
            },
            { threshold: 0.1 } // Trigger when 10% of the section is visible
          );
        
          observer.observe(document.querySelector(".achievements"));
        });
        
        
// Sticky Header functionality
window.onscroll = function() {stickyHeader()};

var header = document.getElementById("header");
var sticky = header.offsetTop;

function stickyHeader() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}



const carousel = document.querySelector('.logo-carousel');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const items = document.querySelectorAll('.carousel-item');
const itemWidth = items[0].offsetWidth;
const gap = 32; // 2rem gap

// Clone items for infinite effect
items.forEach(item => {
    carousel.appendChild(item.cloneNode(true));
    carousel.insertBefore(item.cloneNode(true), carousel.firstChild);
});

let currentPosition = items.length * (itemWidth + gap);
carousel.style.transform = `translateX(-${currentPosition}px)`;

function moveToNext() {
    currentPosition += itemWidth + gap;
    carousel.style.transform = `translateX(-${currentPosition}px)`;
    
    // Check if we need to reset
    if (currentPosition >= (items.length * 3) * (itemWidth + gap)) {
        setTimeout(() => {
            currentPosition = items.length * (itemWidth + gap);
            carousel.style.transition = 'none';
            carousel.style.transform = `translateX(-${currentPosition}px)`;
            setTimeout(() => carousel.style.transition = 'transform 0.5s ease', 10);
        }, 500);
    }
}

function moveToPrev() {
    currentPosition -= itemWidth + gap;
    carousel.style.transform = `translateX(-${currentPosition}px)`;
    
    // Check if we need to reset
    if (currentPosition <= 0) {
        setTimeout(() => {
            currentPosition = items.length * 2 * (itemWidth + gap);
            carousel.style.transition = 'none';
            carousel.style.transform = `translateX(-${currentPosition}px)`;
            setTimeout(() => carousel.style.transition = 'transform 0.5s ease', 10);
        }, 500);
    }
}

nextBtn.addEventListener('click', moveToNext);
prevBtn.addEventListener('click', moveToPrev);

// Auto-play option (uncomment to enable)
// setInterval(moveToNext, 3000);

// Handle window resize
let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        currentPosition = items.length * (itemWidth + gap);
        carousel.style.transform = `translateX(-${currentPosition}px)`;
    }, 250);
});
