<script>
  import '@splidejs/svelte-splide/css';
  import { Splide, SplideSlide } from '@splidejs/svelte-splide';
  import photo1 from "$assets/images/1.jpg";
  import photo2 from "$assets/images/2.jpg";
  import photo3 from "$assets/images/3.jpg";
  import photo4 from "$assets/images/4.jpg";
  import photo5 from "$assets/images/5.jpg";
  import photo6 from "$assets/images/6.jpg";
  let photos = [photo6,photo2,photo3,photo4,photo5,photo1]
    
</script>
<!--,autoplay:true,interval:2000-->
<section class="shadow" data-aos="fade-down">
    <Splide aria-label="My Favorite Images" options={ {type  : 'loop',focus  : 'center', padding: '5rem',pauseOnHover:false,
        perPage: 3,pagination : false,breakpoints: {
		    640: {perPage: 1,},}} }>
        {#each photos as photo}
            <SplideSlide>
              <div class="image-topper"></div>
              <img src={photo} alt="photos"/>
          </SplideSlide>
        {/each}
        
    </Splide>
</section>

<style>
    img{width: 100%; object-fit: cover;height: 500px;}
    .shadow{box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;}
    @media only screen and (max-width: 600px) {
      img{height: 400px;}
    }
</style>
