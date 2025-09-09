<script>
     import LogoPic from "$assets/images/Logo2.png";
    import { page } from '$app/stores';
  let currentUrl;
  $: currentUrl = $page .url.pathname;
  
</script>
{#if currentUrl != '/rsvp/admin'}
    <footer >
        <div class="footer">
            <div class="row m-0 details align-items-center justify-content-center" data-aos="fade-down">
                <div class="col-sm-2 col-6">
                    <a href="/"><img class='logo' src={LogoPic} alt=""></a>
                </div>
                <div class="col-3">
                    <ul class="menu">
                        <li ><a href="/">Home</a></li>
                        <li><a href="/schedule">Schedule</a></li>
                        <li><a href="/rsvp">RSVP</a></li>
                
                    </ul>
                </div>
            </div>
        </div>
        <div class="privacy-policy">
            <small>Designed and developed by Paola © 2025</small>
        </div>
    </footer>
{/if}
<style>
    footer{width: 100%; background-color: #ede4d08c;}
    .logo{max-width: 100%;}
    .privacy-policy{text-align: center; width: 100%; color: white;background-color: black;}
    .details{padding: 2rem 4rem}
    .menu li{text-align: right; padding: 5px 0; font-size: 18px;color: rgba(23, 23, 23, 0.635);}
    .menu li:hover{color: black;}

     @media only screen and (max-width: 600px) {
        .details{padding: 1rem 2rem 2rem 0}
     }
</style>