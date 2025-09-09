<script>
   import LogoPic from "$assets/images/Logo2.png";
  import { page } from '$app/stores';
    import { onMount } from "svelte";
  let currentUrl;

  $: currentUrl = $page.url.pathname;
  let is_open = false
  let isSmallScreen = false;


  onMount(() => {
    const mediaQuery = window.matchMedia('(max-width: 768px)');
    isSmallScreen = mediaQuery.matches;
  });

  function toggleMenu(){
    is_open = !is_open
  }
  
</script>
 
<header class="header">

  <div class:menu_open={is_open} id="mySidenav"  class="sidenav">
        <a on:click={toggleMenu} href="/#home">Home</a>
        <a on:click={toggleMenu}  href="/#our-story">Our Story</a>
        <a on:click={toggleMenu}  href="/schedule">Schedule</a>
        <a on:click={toggleMenu}  href="/rsvp">RSVP</a>
  </div>
  {#if currentUrl == '/'}
    <img data-aos="fade-right" class='logo' src={LogoPic} alt="">
  {/if}
   {#if currentUrl != '/rsvp/admin'}
  <button data-aos="fade-down" class='menu-btn' class:is_open={is_open} on:click="{toggleMenu}" aria-label="menu">
      <svg width="{isSmallScreen?40:60}" height="{isSmallScreen?40:60}" viewBox="0 0 100 100">
        <path class="line line1" d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058" />
        <path class="line line2" d="M 20,50 H 80" />
        <path class="line line3" d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942" />
      </svg>
  </button>
  {/if}
</header>

<style>
  .menu-btn{position: absolute; right: 40px; z-index: 1000; top: 20px; }
  .is_open{position: fixed !important;}
  .is_open .line{stroke: #818181;}
  .is_open:hover .line {stroke: #88a5bf;}
  .menu_open {width: 300px !important; }
  .logo{position: absolute;z-index: 30;width: 400px; top: 10px; left: 30px;}
  .line {fill: none;stroke: black;stroke-width: 6;
    transition: stroke-dasharray 600ms cubic-bezier(0.4, 0, 0.2, 1),
    stroke-dashoffset 600ms cubic-bezier(0.4, 0, 0.2, 1),stroke 1.5s ;
  }
  .line1 {stroke-dasharray: 60 207;stroke-width: 6;}
  .line2 {stroke-dasharray: 60 60;stroke-width: 6;}
  .line3 {stroke-dasharray: 60 207;stroke-width: 6;}
  .is_open .line1 { stroke-dasharray: 90 207;stroke-dashoffset: -134;stroke-width: 6;}
  .is_open .line2 {stroke-dasharray: 1 60;stroke-dashoffset: -30;stroke-width: 6;}
  .is_open .line3 {stroke-dasharray: 90 207;stroke-dashoffset: -134;stroke-width: 6;}

.sidenav {
  height: 100vh;
  width: 0; 
  position: fixed;
  z-index: 100;
  top: 0;
  right: 0;
  background-color:#ede4d0d9;
  overflow-x: hidden;
  transition: 0.5s;
  text-align: right;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.sidenav a:hover{color: #88a5bf ;}
.menu_open.sidenav a {opacity: 100; font-size: 40px;}
.sidenav a {
  padding: 15px 50px 15px 32px;
  text-decoration: none;
  font-size: 0px;
  color: #818181;
  display: block;
  transition: opacity 2s,font-size 1s;
  opacity: 0;
}



@media only screen and (max-width: 600px) {
 .logo{width: 200px;  left: 0px;}
 .menu-btn{right: 20px;  }
 .menu_open.sidenav a{font-size: 30px;padding: 15px 35px 15px 32px;}
}

</style>