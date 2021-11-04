import firebase from 'firebase'
import { ref, onUnmounted } from 'vue'

const config = {
    apiKey: "AIzaSyAiXV1vXFqi6Bcm39zLN0dpSYXKC9t5JEw",
    authDomain: "vue-key.firebaseapp.com",
    projectId: "vue-key",
    storageBucket: "vue-key.appspot.com",
    messagingSenderId: "951628084205",
    appId: "1:951628084205:web:e50f87a144613bc1f06de4"
}

const firebaseApp = firebase.initializeApp(config)

const db = firebaseApp.firestore()
const usersCollection = db.collection('users')

export const createUser = user => {
  return usersCollection.add(user)
}

export const getUser = async id => {
  const user = await usersCollection.doc(id).get()
  return user.exists ? user.data() : null
}

export const updateUser = (id, user) => {
  return usersCollection.doc(id).update(user)
}

export const deleteUser = id => {
  return usersCollection.doc(id).delete()
}

export const useLoadUsers = async () => {
  // const users = ref([])
  // const close = await usersCollection.onSnapshot(snapshot => {
  //   users.value = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
  // })
  // onUnmounted(close)
  var users = []
    var userRef = await usersCollection.get()
    .then(snapshot => {
        snapshot.forEach(doc => {
            users.push(doc.data())
            console.log(doc.id, '=>', doc.data());
        });
    })
    .catch(err => {
        console.log('Error getting documents', err);
    });
    console.log(userRef)

  
  return users
}