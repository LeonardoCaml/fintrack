import { db } from "./firebase";
import { collection, addDoc, getDocs } from "firebase/firestore";

export const addTransaction = async (data) => {
  try {
    const docRef = await addDoc(collection(db, "transactions"), data);
    return docRef.id;
  } catch (err) {
    console.error("Erro ao adicionar transação:", err);
  }
};

export const getTransactions = async () => {
  const querySnapshot = await getDocs(collection(db, "transactions"));
  const transactions = [];
  querySnapshot.forEach((doc) => {
    transactions.push({ id: doc.id, ...doc.data() });
  });
  return transactions;
};