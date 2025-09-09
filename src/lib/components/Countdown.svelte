<script lang="ts">
    import { slide } from 'svelte/transition'

    import { onMount } from "svelte";
    import { onDestroy } from 'svelte';
    import Separator from "$assets/images/line.png";
    import Border from "$assets/images/border1.png";
    const targetDate: Date = new Date("2026-01-24");
    let interval: number;

    let days: string = '0'
    let hours: string = '0'
    let minutes: string = '0'
    let seconds: string = '0'
    onMount(() => {
        updateCountdown()
      //  interval = setInterval(updateCountdown, 1000);
    });

    const updateCountdown = () => {
        const now: Date = new Date();
        const remainingTime: number = targetDate.getTime() - now.getTime(); // Diferencia en milisegundos

        days = (Math.floor(remainingTime / (1000 * 60 * 60 * 24))).toString().padStart(2, '0');
        hours =( Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).toString().padStart(2, '0');
        minutes = (Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60))).toString().padStart(2, '0');
        seconds = (Math.floor((remainingTime % (1000 * 60)) / 1000)).toString().padStart(2, '0');

        if (remainingTime <= 0) {
        // clearInterval(interval);
        }
    };


    onDestroy(() => {
     // clearInterval(interval);
    });

</script>

<div  class="text-center countdown-container" transition:slide>
    <img data-aos="fade-up" class="border-img" src={Border} alt="">
    <div>
        <h1 data-aos="fade-up" class="cursive title">We're getting married!</h1>
        <img data-aos="fade-up" class="separator" src={Separator} alt="">
        <div class="countdown" data-aos="zoom-in">
            <div class="countdown-item" >
                <p>{days}</p>
                <small>Days</small>
            </div>
            <div class="countdown-separator">:</div>
            <div class="countdown-item">
                <p>{hours}</p>
                <small>Hours</small>
            </div>
            <div class="countdown-separator">:</div>
            <div class="countdown-item">
                <p>{minutes}</p>
                <small>Minutes</small>
            </div>
            <div class="countdown-separator">:</div>
            <div class="countdown-item">
                <p>{seconds}</p>
                <small>Seconds</small>
            </div>
        </div>
    </div>
   
    <img data-aos="fade-up" class="border-img border-img_right" src={Border} alt="">
</div>

<style>
    
    .title{font-weight: 100;}
    .border-img{ padding-left: 25px;  height: 100%; }
    .border-img_right{-webkit-transform: scaleX(-1);transform: scaleX(-1);}
    .countdown-container{padding: 8rem 0; position: relative; display: flex; justify-content: space-between; align-items: center;}
    .countdown{
        color: rgba(23, 23, 23, 0.635);
        padding-top: 1rem;
        display: flex;
        width: 100%;
        justify-content: center;
    }
    .countdown-separator{
        font-size: 30px;
        font-weight: bold;
        padding-top: 2rem;
    }
    .countdown-item p{
        font-size: 4rem;
        margin-bottom: 0;
        padding: 5px 15px;
        width: 100px;
        border-radius: 15px;
    }
    .separator{max-width: 100%;}
    @media only screen and (max-width: 600px) {
        .countdown-container{padding: 6rem 0;}
        .separator{max-width: 50%;}
        .border-img{width: 10%;padding-left: 5px; }
        .countdown-separator{font-size: 20px;padding-top: .7rem;}
        .countdown-item p{font-size: 2rem;padding: 3px 10px; width: 20%; border-radius: 15px;
    }

    }
</style>


