<script>
    import LogoPic from "$assets/images/Logo2.png";
    import { dangerToast, successToast } from "$lib/constants";
    import { checkUserCredentials } from "$lib/firebase";
    import { toast } from "@zerodevx/svelte-toast";
    import { onMount } from "svelte";
    export let is_logged
    export let user = {name:'',password:''}
    
    function setUserLocal(){
        localStorage.setItem('wedding_user',JSON.stringify(user));
    }

    async function login(){
        if(user.name && user.password){
            let x = await checkUserCredentials(user.name,user.password)
            console.log(x)
            if(x?.id){
                user = x
                is_logged = true
                setUserLocal()
                toast.push('Welcome back '+user.name,successToast)
            }else{
                toast.push('Wrong credentials',dangerToast)
                is_logged = false

            }
            
        }else{
            toast.push('Fill the fields',dangerToast)
        }
    }
</script>
<div class="admin-screen text-center">

    <div class="loggin-container text-center">
        <a href="/"><img class="logo" src={LogoPic} alt=""></a>

        <form action="">
            <input bind:value={user.name} class="form-control mt-3 bg-nude" type="text" name="" id="" placeholder="User">
            <input bind:value={user.password} class="form-control mt-2 mb-3 bg-nude" type="password" name="" id="" placeholder="Password">
            <button on:click={login} class="btn btn-blue">Login</button>
        </form>
    </div>

</div>

<style>
    .loggin-container{padding-bottom: 6rem;}
    .logo{width: 200px;}
    .admin-screen{ min-height: 100vh; display: flex; justify-content: center; align-items: center;}
    
</style>