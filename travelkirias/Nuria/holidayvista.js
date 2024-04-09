document.addEventListener('DOMContentLoaded', function () {
    const carouselItems = document.querySelectorAll('.carousel-item');
    let currentIndex = 0;

    function showItem(index) {
      carouselItems.forEach(item => {
        item.classList.remove('opacity-100');
        item.classList.add('opacity-0', 'hidden');
      });

      carouselItems[index].classList.remove('opacity-0', 'hidden');
      carouselItems[index].classList.add('opacity-100');
    }

    function nextItem() {
      currentIndex = (currentIndex + 1) % carouselItems.length;
      showItem(currentIndex);
    }

    function prevItem() {
      currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
      showItem(currentIndex);
    }

    document.getElementById('prevBtn').addEventListener('click', prevItem);
    document.getElementById('nextBtn').addEventListener('click', nextItem);

    // Mostrar el primer elemento al cargar la página
    showItem(currentIndex);
  });