/* eslint-disable no-loop-func */
import admin from 'firebase-admin';

import { COLLECTION_NAMES } from '../services/react-typescript-firebase/invariables';
import { User } from '../services/react-typescript-firebase/models/user';

export const findPublisher = async (
  db: admin.firestore.Firestore,
  id: string,
) => {
  const doc = await db
    .collection(COLLECTION_NAMES.USERS)
    .doc(id)
    .get();
  const user = doc.data() as User;

  return { ...user, id: doc.id };
};
