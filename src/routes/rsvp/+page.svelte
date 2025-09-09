<script>
    import { onMount } from "svelte";
   import { toast } from '@zerodevx/svelte-toast'
    import { dangerToast, successToast } from "$lib/constants";
    import { guests } from "$lib/stores/guestListStore";
    import { sendRSVP } from "$lib/firebase";
    let guest = {name:'',last_name:'',rsvp:'RSVP'}

   async function send(){
        let _guest = getGuest()
        console.log(_guest)
        if(guest.name&&guest.name!=''&&guest.last_name&&guest.last_name!=''){
            if(_guest){
                if(!_guest.rsvp || _guest.rsvp == '0' || _guest.rsvp == 0){
                    try {
                        let id = guest.rsvp == 'Joyfully Acept'?1:guest.rsvp=='Regretfully Decline'?2:0
                        await sendRSVP(_guest.id,id)
                        toast.push('RSVP send, Thank you for your time',successToast)
                    }catch(err){
                        toast.push('There was an error, try again later',dangerToast)
                    }
                }else{
                    toast.push('Guest already RSVP',dangerToast)
                }
                guest = {name:'',last_name:'',rsvp:'RSVP'}
            }else{
                toast.push('Guest not in list',dangerToast)
            }
        }
        else{
            toast.push('Fill all the fields',dangerToast)
        }
       
   }

   function getGuest(){
        let guest_list = $guests
        let index = guest_list.findIndex(val=>val.first_name.toUpperCase()==guest.name.toUpperCase()&&val.last_name.toUpperCase()==guest.last_name.toUpperCase())
        return index!=-1?guest_list[index]:null
   }
</script>
<div class="rsvp-container bg-nude row mx-0 justify-content-center align-items-center">
    <div class="col-sm-5 col-10 text-center">
        <h2 class="cursive" data-aos="fade-down">Paola and Nikola</h2>
        <h3 class="cursive" data-aos="fade-down">Saturday, May 24, 2026</h3>

            <form action="" class="pt-5 row m-0 justify-content-center" data-aos="fade-up">
                <div class="col-12 px-0">
                    <div class="input-group name-group mb-2">
                    <input bind:value={guest.name} type="text" class="form-control bg-nude" aria-label="" placeholder="First name">
                    <input bind:value={guest.last_name} type="text" class="form-control bg-nude" aria-label="" placeholder="Last name">
                    <button class="btn  dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">{guest.rsvp}</button>
                    <ul class="dropdown-menu dropdown-menu-end">
                        <li><button on:click={()=>guest.rsvp = 'Joyfully Acept'} class="dropdown-item" >Joyfully Acept</button></li>
                        <li><button on:click={()=>guest.rsvp = 'Regretfully Decline'} class="dropdown-item" >Regretfully Decline</button></li>
                    </ul>
                    </div>
                </div>
                <div class="col-12 px-0">
                    <div class="input-group name-group col-12 p-0">
                    <button on:click={send} disabled={guest.rsvp=='RSVP'} class="btn mt-3 btn-blue">Send <i class="bi bi-envelope-paper-heart"></i> </button>
                </div>
                </div>
            </form>
    </div>
</div>

<style>
    .rsvp-container{min-height: 75vh;}
    .name-group input{border-color: #88a5bf;}
    .name-group .dropdown-toggle{border-color: #88a5bf; background-color: #88a5bf; color: white;}
    .name-group .dropdown-item:hover{background-color: transparent !important; color: #88a5bf;}
     @media only screen and (max-width: 600px) {
        .rsvp-container{min-height: 80vh;}
     }
  
</style>