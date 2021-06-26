import { appStorage } from "./appStorage";
import firebase from "firebase";
import { firestoreConfig } from "./firestoreConfig";

export class appFireStore implements appStorage{

    fireStoreApp = firebase.initializeApp(firestoreConfig);
    db = firebase.firestore();
    
    saveData(data:any):void{};
    getData():string{return};
}