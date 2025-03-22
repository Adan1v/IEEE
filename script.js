document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll("nav a");

    links.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            targetElement.scrollIntoView({ behavior: "smooth" });
        });
    });
});
// وظيفة للتبديل بين إظهار وإخفاء الإجابة عند الضغط على السؤال
function toggleAnswer(questionElement) {
    const answerElement = questionElement.nextElementSibling;
    const plusSign = questionElement.querySelector('.plus-sign');
    
    // إخفاء أو إظهار الإجابة
    if (answerElement.style.display === "none" || answerElement.style.display === "") {
      answerElement.style.display = "block";
      plusSign.textContent = "-"; // تغيير الزائد إلى ناقص
    } else {
      answerElement.style.display = "none";
      plusSign.textContent = "+"; // إعادة الزائد عند إخفاء الإجابة
    }
  }

  document.addEventListener("DOMContentLoaded", function () {
    const allElements = document.querySelectorAll("body *"); // تحديد كل العناصر داخل body

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    }, { threshold: 0.1 });

    allElements.forEach((el) => observer.observe(el));
});


document.addEventListener("DOMContentLoaded", function () {
    const sliders = document.querySelectorAll('.image-slider');

    function startImageSlider(slider) {
        let currentIndex = 0;
        const images = slider.querySelectorAll('img');

        // إخفاء جميع الصور
        images.forEach((image, index) => {
            image.style.display = 'none'; // إخفاء الصور
        });

        // إظهار الصورة الأولى
        images[currentIndex].style.display = 'block';

        // تغيير الصورة بشكل دوري
        setInterval(() => {
            // إخفاء جميع الصور
            images.forEach((image) => {
                image.style.display = 'none';
            });

            // إظهار الصورة الحالية
            images[currentIndex].style.display = 'block';

            // تحديث الفهرس للصورة التالية
            currentIndex = (currentIndex + 1) % images.length; // العودة إلى أول صورة بعد آخر صورة
        }, 3000); // كل 3 ثواني
    }

    sliders.forEach(slider => {
        startImageSlider(slider);
    });
});
 
