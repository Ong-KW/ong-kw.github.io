// Image Carousel Functionality
        var slideIndex = [1,1,1];
        var slideId = ["mySlides1", "mySlides2", "mySlides3"];
        var dotId = ["dot1", "dot2", "dot3"];

        const timeDelay = 5000;
        var t1;
        var t2;
        var t3;

        carousel1();
        carousel2();
        carousel3();

        function plusDivs(n, no) {
            showDivs(slideIndex[no] += n, no);
        }

        function currentDiv(n, no) {
            showDivs(slideIndex[no] = n, no);
        }

        function showDivs(n, no) {
            var i;
            var x = document.getElementsByClassName(slideId[no]);
            var dots = document.getElementsByClassName(dotId[no]);
            if (n > x.length) {slideIndex[no] = 1}
            if (n < 1) {slideIndex[no] = x.length}
            for (i = 0; i < x.length; i++) {
                x[i].style.display = "none";  
            }
            x[slideIndex[no]-1].style.display = "block";

            for (i = 0; i < dots.length; i++) {
                dots[i].className = dots[i].className.replace(" active", "");
            }
            x[slideIndex[no]-1].style.display = "block";  
            dots[slideIndex[no]-1].className += " active";
        }

        // Pause Carousel
        function pauseCarousel(t) {
            clearTimeout(t)
        }

        // Carousel 1
        function carousel1() {
            plusDivs(1,0);
            t1 = setTimeout(carousel1, timeDelay);    
        }
        // Start Carousel 1
        function resetTimeout1() {
            t1 = setTimeout(carousel1, timeDelay);
        }
        
        // Carousel 2
        function carousel2() {
            plusDivs(1,1);
            t2 = setTimeout(carousel2, timeDelay);
        }
        // Start Carousel 2
        function resetTimeout2() {
            t2 = setTimeout(carousel2, timeDelay);
        }

        // Carousel 3
        function carousel3() {
            plusDivs(1,2);
            t3 = setTimeout(carousel3, timeDelay);
        }
        // Start Carousel 3
        function resetTimeout3() {
            t3 = setTimeout(carousel3, timeDelay);
        }

        // Smooth scroll progress indicator
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const maxHeight = document.body.scrollHeight - window.innerHeight;
            const progress = (scrolled / maxHeight) * 100;
            document.querySelector('.scroll-indicator').style.width = progress + '%';
        });

        // Intersection Observer for fade-in animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animationDelay = '0.1s';
                    entry.target.classList.add('fade-in');
                }
            });
        }, observerOptions);

        document.querySelectorAll('section:not(.hero)').forEach(section => {
            observer.observe(section);
        });

        // Dynamic particle generation
        function createParticle() {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.top = Math.random() * 100 + '%';
            particle.style.width = (Math.random() * 4 + 2) + 'px';
            particle.style.height = particle.style.width;
            particle.style.animationDelay = Math.random() * 6 + 's';
            particle.style.animationDuration = (Math.random() * 4 + 4) + 's';
            
            document.querySelector('.hero').appendChild(particle);
            
            setTimeout(() => {
                particle.remove();
            }, 8000);
        }

        // Create particles periodically
        setInterval(createParticle, 3000);

        // Add hover effects to project cards
        document.querySelectorAll('.project-card').forEach(card => {
            card.addEventListener('mouseenter', () => {
                card.style.transform = 'translateY(-10px) scale(1.02)';
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.transform = 'translateY(0) scale(1)';
            });
        });

        // Navbar background opacity on scroll
        window.addEventListener('scroll', () => {
            const nav = document.querySelector('nav');
            const scrolled = window.pageYOffset;
            
            if (scrolled > 100) {
                nav.style.background = 'rgba(15, 23, 42, 0.95)';
            } else {
                nav.style.background = 'rgba(15, 23, 42, 0.9)';
            }
        });

        // Dynamic year
        document.getElementById("current-year").innerHTML = new Date().getFullYear()