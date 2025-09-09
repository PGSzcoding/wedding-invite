<script>
    import { AdminLogin } from "$components";
    import LogoPic from "$assets/images/Logo2.png";
    import { onMount } from "svelte";
    import { guests } from '$lib/stores/guestListStore.js';
    import { toast } from "@zerodevx/svelte-toast";
    import { dangerToast, successToast } from "$lib/constants";
    import { addGuest, checkUserById, checkUserCredentials } from "$lib/firebase";

    let is_logged = false
     $: guest_list = $guests;
    let filter_type = 3
    let search_value = ''
    let newGuest = {first_name:'',last_name:'',rsvp:null}
    let loggedUser ={name:'',password:''}
    onMount(()=>{
        checkLoggin()
        console.log($guests)
    })


    async function checkLoggin(){
        let user = localStorage.getItem('wedding_user')
        if(user && user!=undefined){
            let usr = JSON.parse(user);
            let x = await checkUserById(usr.id)
            if(x?.id){
                console.log(x)
                loggedUser = x
                is_logged = true
                localStorage.setItem('wedding_user',JSON.stringify(loggedUser));
            } 
        }
    }

    function logout(){
        localStorage.removeItem('wedding_user')
        is_logged = false
        loggedUser = {name:'',password:''}
    }

    function filter(type = 3){
        filter_type = type

        if(type == 3) guest_list =  $guests
        else{
            guest_list =  $guests.filter(val=>val.rsvp == type)
        }
    }

    function search(){
        if(search_value!=''){
            let temp = []
            if(filter_type == 3) temp =  $guests
            else  temp = $guests.filter(val=>val.rsvp == filter_type)

            guest_list =  temp.filter(val=>val.first_name.toUpperCase().includes(search_value.toUpperCase())||val.last_name.toUpperCase().includes(search_value.toUpperCase()))
        }else{
            if(filter_type != 3) guest_list =  $guests.filter(val=>val.rsvp == filter_type)
            else guest_list = $guests
        }
    }

    async function addnewGuest(){
        if(newGuest.first_name && newGuest.first_name !=''&&newGuest.last_name&&newGuest.last_name!=''&&newGuest.rsvp){
          await addGuest(newGuest.first_name,newGuest.last_name,newGuest.rsvp)
          toast.push('New guest added',successToast)
        }else{
            toast.push('Fill all the fields',dangerToast)
        }
    }

</script>

<div class="bg-nude">
    {#if !is_logged}
        <AdminLogin bind:is_logged bind:user = {loggedUser}/>
    {:else}
    
        <div class="row m-0 admin-screen">
            <div class="col-sm-2 menu-left p-0">
                <div class="text-center">
                    <a href="/" ><img class="logo" src={LogoPic} alt=""></a>
                </div>
                <ul class="menu">
                    <li class:active = {filter_type == 3}><button on:click={()=>filter(3)}>List</button></li>
                    <li class:active = {filter_type == 1}><button on:click={()=>filter(1)}>Attending</button></li>
                    <li class:active = {filter_type == 0}><button on:click={()=>filter(0)}>Pending</button></li>
                    <li class:active = {filter_type == 2}><button on:click={()=>filter(2)}>Declined</button></li>
                </ul>
                <div>
                     <ul class="menu">
                        <li><button type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">Add Guest</button></li>
                        <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                            <div class="accordion-body p-3">
                                <div class="input-group">
                                    <input type="text" class="form-control" placeholder="Name" bind:value={newGuest.first_name}>
                                    <input type="text" class="form-control " placeholder="Last name" bind:value={newGuest.last_name}>
                                </div>
                                <div class="input-group">
                                    <select bind:value={newGuest.rsvp} class="form-select mt-1" >
                                        <option selected disabled value="{null}">RSVP</option>
                                        <option value="0">Pending</option>
                                        <option value="1">Attending</option>
                                    </select>
                                </div>
                                <div class="input-group mt-2">
                                    <button class="btn-blue btn" on:click={addnewGuest}>Add Guest</button>
                                </div>
                            </div>
                         </div>
                    </ul>
                   
                </div>
                <button on:click={logout} class="logout-btn">Logout</button>
            </div>

            <div class="col-sm-9 col-12 p-0">
                <div class="list">
                    <div class="row m-0 align-items-center">
                        <div class="col-sm-5 col-12 px-0">
                            <h2 class="cursive pb-3">{filter_type == 3 ?'All': filter_type == 1 ?'Attending' : filter_type == 2 ? 'Declined':'Pending'} Guests </h2>
                        </div>
                        <div class="col-sm-6 col-11 px-0">
                            <form action="" class="search mt-2">
                                <div class="input-group mb-3 ">
                                    <input  on:keydown={(e) => e.key === 'Enter' && search()} type="text" class="form-control" placeholder="" bind:value={search_value}>
                                    <div class="input-group-append">
                                        <button on:click={search} class="btn btn-blue" type="button">Search</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                   
                    <small>Total: {guest_list.length}</small>
                    <table class="table table-hover">
                        <thead>
                            <tr>
                            <th scope="col">NAME</th>
                            <th scope="col">LAST NAME</th>
                            <th scope="col" class="col-2 text-center">STATUS</th>
                            </tr>
                        </thead>
                        <tbody>
                            {#if guest_list.length!=0}
                                {#each guest_list as guest}
                                    <tr>
                                        <td>{guest.first_name}</td>
                                        <td>{guest.last_name}</td>
                                        <td class="text-{guest.rsvp} text-center"><b>{guest.rsvp == 2? 'Declined' : guest.rsvp == 1? 'Attending' : 'Pending'}</b></td>
                                    </tr>
                                {/each}
                            {:else}
                                 <tr>
                                    <td class="text-center text-light" colspan="3"><small>No guests found</small></td>
                                </tr>   
                            {/if}
                        </tbody>
                    </table>
                </div>
            </div>
          </div>  
    {/if}

</div>


<style>
    .logo{width: 100%;}
    .admin-screen{min-height: 100vh; font-family: Sans-serif; background-color: rgba(175, 204, 228, 0.662);}
    .menu-left{ background-color: rgba(161, 195, 225, 0.653);}
    .menu li button,.guest-btn button{font-size: 16px; width: 100%; color: rgba(255, 255, 255, 0.806);text-align: left;}
    .menu li,.guest-btn{margin: 10px 0;background-color: rgba(139, 169, 195, 0.735) ; padding: 5px 15px; color: rgba(255, 255, 255, 0.806);}
    .active{background-color: rgba(91, 115, 135, 0.735) !important;color: white !important;}
    .menu li:hover{background-color: rgba(91, 115, 135, 0.662)}
    .list{padding: 5rem 2rem;}
    .table td{background-color: rgba(175, 204, 228, 0.662)  !important;}
    .table th{background-color: rgba(125, 158, 185, 0.662) !important; color: white;}
    .search .btn-blue{border-top-left-radius: 0; border-bottom-left-radius: 0;}
    .accordion-button::after{margin-left: 15px !important;}
    .accordion-button{padding: 0 !important;}
    .accordion-item{ border: none !important;}
    .accordion-body,.guest-btn{background-color: rgba(77, 103, 126, 0.866)}
    .accordion-body input,.accordion-body select{background-color: rgba(102, 138, 169, 0.866);border-color: rgba(102, 138, 169, 0.866); color: white;}
    .guest-btn{margin: 0;}
    .text-0{color: #fff0c0;}
    .text-1{color:  rgb(42, 165, 144);}
    .text-2{color:  brown;}
    .logout-btn{
            position: fixed;
    bottom: 20px;
    left: 10px;
    font-size: 15px; color: rgba(102, 138, 169, 0.866);
    }
     @media only screen and (max-width: 600px) {
        .logo{width: 50%;}
        .menu{display: flex; justify-content: center;}
        .list{padding: 2rem 2rem;}
     }
</style>

