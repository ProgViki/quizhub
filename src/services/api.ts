import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";

export const fetchQuizzes = async () => {
  const snapshot = await getDocs(collection(db, "quizzes"));
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

export const fetchQuizById = async (id: string) => {
  const docSnap = await getDoc(doc(db, "quizzes", id));
  return docSnap.exists() ? docSnap.data() : null;
};
