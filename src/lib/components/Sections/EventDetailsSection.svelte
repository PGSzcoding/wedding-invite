<script>
    import { ButtonCalendar } from "$components";
    import Picture from "$assets/images/collage.png";
     import Separator from "$assets/images/line.png";
</script>
<div class="details-container row mx-0 bg-nude">
    <div class="col-sm-6 col-12 px-0">
        <div class="details" data-aos="fade-right">
            <h2 class="cursive">Save the date</h2>
             <img class="separator" src={Separator} alt="">
            <h3 class="cursive title mt-4">Saturday, May 24, 2027 </h3>
            <h5 class="mt-3">Evergreen Hall</h5>
            <p class="mb-5">7426 Pineview Avenue, Seattle, WA 98109</p>
            <ButtonCalendar/>
        </div>
    </div>
    <div class="col-sm-5 col-12 px-0">
        <div class="photos" data-aos="zoom-in">
            <img class="photo-1" src={Picture} alt="">
        </div>
    </div>
</div>

<style>
    .details-container{ padding: 1rem 0 8rem 0;}
    .title{font-size: 25px;}
    .details{text-align: center;}
    .photos{position: relative;}
    .photo-1{max-width: 100%;}
    .separator{width: 200px;}

    @media only screen and (max-width: 600px) {
        .details-container{flex-direction: column-reverse;}
        .photos{margin-bottom: 2rem;}
    }
</style>