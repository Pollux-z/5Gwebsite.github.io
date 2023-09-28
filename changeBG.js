function cgColors(fc, bg) {
    const bodyColor = document.body;
    bodyColor.style.background = bg;
    bodyColor.style.color = fc;
    const cardColor = document.querySelectorAll(".card , button, footer, i, ul, h3, h4");
      for (let i = 0; i < cardColor.length; i++) {
        cardColor[i].style.backgroundColor = bg;
        cardColor[i].style.color = fc;
      }
      const carouselColor = document.querySelectorAll(".text-stroke, a, p");
      for (let i = 0; i < carouselColor.length; i++) {
        carouselColor[i].style.color = fc;
      }
      const imgColor = document.querySelectorAll("img");
      for (let i = 0; i < imgColor.length; i++) {
        imgColor[i].style.filter = 'grayscale(100%)';
      }
      
}
