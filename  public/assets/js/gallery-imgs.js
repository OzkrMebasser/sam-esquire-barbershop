
// Array con las rutas de las imágenes y sus descripciones
const images = [
{ src: './assets/images/gallery/gallery_1.jpeg', alt: 'Sam Esquire barbershop' },
{ src: './assets/images/gallery/gallery_2.jpeg', alt: 'Sam Esquire barbershop' },
{ src: './assets/images/gallery/gallery_3.jpeg', alt: 'Sam Esquire barbershop' },
{ src: './assets/images/gallery/gallery_4.jpeg', alt: 'Sam Esquire barbershop' },
// { src: './assets/images/gallery/gallery_5.jpeg', alt: 'Sam Esquire barbershop' },
{ src: './assets/images/gallery/gallery_6.jpeg', alt: 'Sam Esquire barbershop' },
// { src: './assets/images/gallery/gallery_7.jpeg', alt: 'Sam Esquire barbershop' },
{ src: './assets/images/gallery/gallery_8.jpeg', alt: 'Sam Esquire barbershop' },
// { src: './assets/images/gallery/gallery_9.jpeg', alt: 'Sam Esquire barbershop' },
{ src: './assets/images/gallery/gallery_10.jpeg', alt: 'Sam Esquire barbershop' },
{ src: './assets/images/gallery/gallery_11.jpeg', alt: 'Sam Esquire barbershop' },
{ src: './assets/images/gallery/gallery_12.jpeg', alt: 'Sam Esquire barbershop' },
// { src: './assets/images/gallery/gallery_13.jpeg', alt: 'Sam Esquire barbershop' },
{ src: './assets/images/gallery/gallery_14.jpeg', alt: 'Sam Esquire barbershop' },
{ src: './assets/images/gallery/gallery_15.jpeg', alt: 'Sam Esquire barbershop' },
{ src: './assets/images/gallery/gallery_16.jpeg', alt: 'Sam Esquire barbershop' },
{ src: './assets/images/gallery/gallery_17.jpeg', alt: 'Sam Esquire barbershop' },
{ src: './assets/images/gallery/gallery_18.jpeg', alt: 'Sam Esquire barbershop' },
{ src: './assets/images/gallery/gallery_19.jpeg', alt: 'Sam Esquire barbershop' },
{ src: './assets/images/gallery/gallery_20.jpeg', alt: 'Sam Esquire barbershop' },
{ src: './assets/images/gallery/gallery_21.jpeg', alt: 'Sam Esquire barbershop' },
// { src: './assets/images/gallery/gallery_22.jpeg', alt: 'Sam Esquire barbershop' },
{ src: './assets/images/gallery/gallery_23.jpeg', alt: 'Sam Esquire barbershop' },
{ src: './assets/images/gallery/gallery_24.jpeg', alt: 'Sam Esquire barbershop' },

];


// Selecciona el contenedor de la galería
const galleryContainer = document.getElementById('gallery-container');

// Recorre el array de imágenes y crea cada elemento de manera dinámica
images.forEach((image) => {
  // Crea el div contenedor de la imagen
  const container = document.createElement('div');
  container.classList.add('container-glass');
  container.setAttribute('data-aos', 'zoom-in-up');

  // Crea la imagen y asigna los atributos
  const img = document.createElement('img');
  img.classList.add('img');
  img.src = image.src;
  img.alt = image.alt;

  // Añade la imagen al contenedor y el contenedor a la galería
  container.appendChild(img);
  galleryContainer.appendChild(container);
});
