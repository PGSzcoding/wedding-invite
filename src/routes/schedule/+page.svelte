<script>
     import Separator from "$assets/images/line.png";
    import Rings from "$assets/images/rings.png";
    import Cake from "$assets/images/cake.png";
    import Camera from "$assets/images/camera.png";
    import Cheers from "$assets/images/cheers.png";
    import Car from "$assets/images/car.png";
    import Couple from "$assets/images/couple.png";
    import Dinner from "$assets/images/dinner.png";

    let schedule = [{image:Rings,time:'5:30 - 6:30 P.M',title:'CEREMONY'},{image:Camera,time:'7:00 - 7:20 P.M',title:'SUNSET PHOTOS'},{image:Cheers,time:'7:30 - 8:00 P.M',title:'WELCOME TOASTS'},
        {image:Dinner,time:'8:00 - 9:30 P.M',title:'DINNER'},{image:Couple,time:'9:30 - 10:30 P.M',title:'DANCE'},{image:Cake,time:'10:30 - 11:00 P.M',title:'CAKE CUTTING'},
        {image:Car,time:'11:30 P.M',title:'GRAND EXIT'}
    ]
</script>
<div class="schedule-container row m-0 justify-content-center bg-nude align-items-center">
    <div class="col-7">
        <div class="title" data-aos="fade-up">
            <h2 class="cursive">Schedule</h2>
            <p>May 24th, 2027 | Seattle, WA</p>
            <img class="separator" src={Separator} alt="">
        </div>
        <div class="schedule" >
            <hr class="line" data-aos="fade-down">
            {#each schedule as event,i}
                 <div class="item {i % 2 === 0 ? 'item-left' : 'item-right'}" style="top:-{i*60}px" data-aos="fade-up">
                    <hr class="line {i % 2 === 0 ? 'line-s' : 'line-y'}">
                    <img src={event.image} alt="">
                    <p class="text-center mt-1">
                        <b>{event.time}</b> <br>
                        <span class="cursive">{event.title}</span>
                    </p>
                </div>
            {/each}
        </div>
        
    </div>
</div>

<style>
    .schedule-container{min-height: 90vh; padding-top: 5rem;}
    .title{text-align: center;}
    .schedule{position: relative;display: flex; flex-direction: column; align-items: center; padding: 5rem 0 0rem 0;}
    .schedule .line{height: 70%; position: absolute; width: 3px; background-color: black; opacity: 100; top: 2rem;}
    .schedule .item {position: relative;}
    .schedule .item img{width: 160px;}
    .item-left{left: -110px;}
    .item-right{right: -120px;}
    .item .line{position: absolute; height: 2px; width: 18px;  background-color: black; opacity: 100;top: 40%;}
    .item .line-s{ right: -29px; }
    .item .line-y{left: -39px;}
    .separator{max-width: 100%;}
    @media only screen and (max-width: 600px) {
        .schedule .item img{width: 130px;}
    }
</style>