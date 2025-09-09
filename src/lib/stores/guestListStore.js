import { get, writable } from 'svelte/store';
import { ref, onValue } from "firebase/database";
import { db } from '$lib/firebase';

export const guests = writable([]);

export function listenGuests() {
  const guestsRef = ref(db, "wedding1/guests");
   
  onValue(guestsRef, (snapshot) => {
    if (snapshot.exists()) {
      const data = snapshot.val();
      guests.set(
        Object.entries(data).map(([id, value]) => ({
          id,
          ...value
        }))
      ); 
    } else {
      guests.set([]);
    }
  });
}