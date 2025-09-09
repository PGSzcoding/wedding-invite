<script>
    import flowerPic from "$assets/images/flower1.png";
    import ShoesPic from "$assets/images/shoes.png";
</script>
<div id="our-story" class="story-container row justify-content-center m-0">
    <img class="flower" src={flowerPic} alt="" data-aos="fade-right">
    <div class="story col-sm-7" data-aos="fade-up">
        <h1 class="cursive mb-4">Our Story</h1>

        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt perferendis aut debitis necessitatibus, est ad dolorem, quidem, omnis quaerat illo nihil voluptate. Quia, quae voluptas beatae hic fugit veritatis tempora.
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt perferendis aut debitis necessitatibus, est ad dolorem, quidem, omnis quaerat illo nihil voluptate. Quia, quae voluptas beatae hic fugit veritatis tempora.
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt perferendis aut debitis necessitatibus, est ad dolorem, quidem, omnis quaerat illo nihil voluptate. Quia, quae voluptas beatae hic fugit veritatis tempora.
        </p>
         <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt perferendis aut debitis necessitatibus, est ad dolorem, quidem, omnis quaerat illo nihil voluptate. Quia, quae voluptas beatae hic fugit veritatis tempora.
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt perferendis aut debitis necessitatibus, est ad dolorem, quidem, omnis quaerat illo nihil voluptate. Quia, quae voluptas beatae hic fugit veritatis tempora.
       </p>
    </div>
    <img class="shoes" src={ShoesPic} alt="" data-aos="fade-down">
</div>

<style>
    .story-container{text-align: center; padding: 5rem 20px;position: relative;}
    .story{position: relative;z-index: 10;}
    p{color: rgba(23, 23, 23, 0.635);}
    .shoes{position: absolute; right: 5%; bottom: 0; width: 150px;transform: rotateY(180deg);opacity: 80%;}
    .flower{width: 130px;position: absolute;transform: rotate(30deg);left: 40px; top: 9%;}

    @media only screen and (max-width: 600px) {
        .shoes{width: 130px; opacity: 40%; bottom: 30px;}
    }
 
</style>