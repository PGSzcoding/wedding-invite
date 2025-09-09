<script>
    import { slide } from 'svelte/transition'
    import {Countdown,ButtonCalendar} from "$components";
    import heroPic from "$assets/images/home2.jpg";

</script>
<div id="home" >
    <div class="hero" style="background-image:url({heroPic})">
        <div class="image-topper"></div>
    </div>
   <Countdown/>
</div>


<style>
    
    #home{background-color:#ede4d08c;}
    .hero{height:100vh; width: 100%; position: relative; box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
     background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;}
</style>

