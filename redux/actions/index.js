import * as firebase from "firebase";

export const fetchData = (id) => {
  // firebase.firestore()
  // .collection('Profile')
  // .doc(id)
  // .get()
  // .then((snapshot) => {
  //     if (snapshot.exists) {
  //         dispatch({
  //             type : 'Profie',
  //             payload : snapshot.data()
  //         })
  //     }
  // })

  // Test Action
  return dispatch({
    type: "count",
    payload: id,
  });
};
