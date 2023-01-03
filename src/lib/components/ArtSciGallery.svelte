<script lang="ts">
  import "react-image-gallery/styles/css/image-gallery.css";
  import ImageGallery from 'react-image-gallery';

  import img1 from '$lib/assets/artscights/1.-Santiago-Ramón-y-Cajal-Glial-cells-of-the-Cerebral-Cortex-of-a-Child.jpg';
  import img2 from '$lib/assets/artscights/2.-Fabian-Oefner-Millefiori.jpg';
  import img3 from '$lib/assets/artscights/3.-Kerry-Mitchell-Curosity.jpg';

  const images = [
    {
      original: img1,
    },
    {
      original: img2,
    },
    {
      original: img3,
    },
  ];

</script>

<div class="grid grid-cols-3 gap-2">
  <img src={img1} />
  <img src={img2} />
  <img src={img3} />
</div>

<react:ImageGallery items={images} />
