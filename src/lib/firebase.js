import { initializeApp } from "firebase/app";
import { get, getDatabase, onValue, push, ref, set, set as set2, update } from "firebase/database";
import { guests } from "./stores/guestListStore";

const firebaseConfig = {
  apiKey: "AIzaSyBP2IlQ3A_KX9rjEIpppf41o7KjQPujxeE",
  authDomain: "weddingrsvp-f985a.firebaseapp.com",
  databaseURL: "https://weddingrsvp-f985a-default-rtdb.firebaseio.com",
  projectId: "weddingrsvp-f985a",
  storageBucket: "weddingrsvp-f985a.firebasestorage.app",
  messagingSenderId: "222227272207",
  appId: "1:222227272207:web:7086c1154a0639144e097a",
  measurementId: "G-VYM4ZH7NKP"
};
let users = []
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);

export async function addGuest(first_name, last_name, rsvp = 0) {
  const guestsRef = ref(db, "wedding1/guests");
  const newGuestRef = push(guestsRef); // generates a unique id

  await set2(newGuestRef, {
    first_name,
    last_name,
    rsvp
  });

  return newGuestRef.key; // return the generated id if you need it
}

export async function checkUserById(id) {
    let users = await getUsers()
    let usr = users.find((val)=>val.id == id)
    return usr ? usr:null
}

export async function sendRSVP(id,rsvp){
  const guestRef = ref(db, `wedding1/guests/${id}`);
  await update(guestRef, { rsvp });
  return true;
} 

export async function checkUserCredentials(name,password) {
    let users = await getUsers()
    let usr = users.find((val)=>val.name == name && val.password == password)
    return usr ? usr:null
}

async function getUsers() {
    if(users.length==0){
        const guestsRef = ref(db, "wedding1/users");
        const snapshot = await get(guestsRef);
        if (snapshot.exists()) {
            const data = snapshot.val();
            return Object.entries(data).map(([id, value]) => ({
            id,
            ...value
            }));
        } else {
            return [];
        }
    }
  else return users
}
