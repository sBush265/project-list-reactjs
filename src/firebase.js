import * as firebase from 'firebase'; /*importing everything from firebase module*/

const config = { /*our needed config data to connect to firebase*/
  
  };

  export const firebaseApp = firebase.initializeApp(config);
  export const projectsRef = firebase.database().ref('projects'); /*creating a constant and setting it equal to the firebase  we created, then we call the database module, then call ref and pass in the key goals*/


/*
FIREBASE DATA STRUCTURE

Database name
    Projects,
      Key1,
        title
        description
        link
      Key2,
        title
        description
        link
*/
