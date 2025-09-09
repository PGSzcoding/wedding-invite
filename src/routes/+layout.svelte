<script lang="ts">
    import { SvelteToast } from '@zerodevx/svelte-toast'
    import {Footer,Header} from "$components";
    import { onMount } from "svelte";
    import "../app.css"
    import AOS from 'aos';
    import { guests, listenGuests } from '$lib/stores/guestListStore';
    import { onValue, ref } from 'firebase/database';
    import { db } from '$lib/firebase';

    onMount(async ()=>{
        AOS.init({duration: 1000});
        listenGuests()
    })

    
</script>
<svelte:head>
    <title>Paola & Nikola</title> 
</svelte:head>
<Header/>
<slot />
<Footer/>
<SvelteToast  />