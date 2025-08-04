// src/firebase/firestore.js
import { db } from './firebase';
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc
} from 'firebase/firestore';

const transacoesRef = collection(db, 'transacoes');

export async function adicionarTransacao(transacao) {
  await addDoc(transacoesRef, transacao);
}

export async function buscarTransacoes() {
  const snapshot = await getDocs(transacoesRef);
  return snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data(),
  }));
}

export async function deletarTransacao(id) {
  const docRef = doc(db, 'transacoes', id);
  await deleteDoc(docRef);
}
