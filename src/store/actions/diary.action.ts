import { INote } from '@/domain/entities';
import { deleteFirebaseApi, getFirebaseApi, postFirebaseApi, putFirebaseApi } from '@/config/firebase';
import {
  addNewEmptyNote,
  setNotes,
  updateNote,
  setImagesToActiveNotes,
  deleteNoteById,
  AppDispatch,
  RootStore,
  onLoadingNotes,
} from '@/store';
import { fileSave } from '@/shared/utils';
import { toast } from 'sonner';

export const startLoadingNotes = () => {
  return async (dispatch: AppDispatch, getState: () => RootStore) => {
    dispatch(onLoadingNotes('loading'));

    try {
      const { user } = getState().auth;

      if (!user?.uid) throw new Error('uid is required');

      const docs = await getFirebaseApi(`/${user.uid}/diary/notes`);

      let notes: INote[] = [];

      docs.forEach((doc) => {
        const docObj: any = { id: doc.id, ...doc.data() };

        notes = [docObj, ...notes];
      });

      dispatch(setNotes(notes));
    } catch (error: any) {
      console.log(error);
    }
  };
};

export const startNewNote = () => {
  return async (dispatch: AppDispatch, getState: () => RootStore) => {
    dispatch(onLoadingNotes('saving'));

    const { user } = getState().auth;
    if (!user?.uid) throw new Error('uid is required');

    const newNote = {
      title: '',
      body: '',
      date: new Date().getTime(),
      imageUrls: [],
    };

    const newDoc = await postFirebaseApi(`/${user?.uid}/diary/notes`, newNote);

    toast.success('La nota se ha creado correctamente');

    dispatch(addNewEmptyNote({ ...newNote, id: newDoc.id }));
  };
};

export const startUpdateNote = () => {
  return async (dispatch: AppDispatch, getState: () => RootStore) => {
    dispatch(onLoadingNotes('updated'));

    const { user } = getState().auth;
    if (!user?.uid) throw new Error('uid is required');

    const { active } = getState().diary;

    const noteToFirestore = { ...active };
    delete noteToFirestore.id;

    await putFirebaseApi(`/${user.uid}/diary/notes/${active?.id}`, noteToFirestore);

    toast.success(`La nota "${noteToFirestore.title}", se ha actualizado correctamente`);

    dispatch(updateNote(active));
  };
};

export const startSaveImages = (files: FileList) => {
  return async (dispatch: AppDispatch, getState: () => RootStore) => {
    dispatch(onLoadingNotes('saving-images'));

    const { user } = getState().auth;
    if (!user?.uid) throw new Error('uid is required');

    const imagesUrl = await Promise.all([...files].map(fileSave));

    toast.info(`Se han guardado ${imagesUrl.length} imágenes en la nota actual`);

    dispatch(setImagesToActiveNotes(imagesUrl));
  };
};

export const startDeleteNote = () => {
  return async (dispatch: AppDispatch, getState: () => RootStore) => {
    dispatch(onLoadingNotes('deleted'));

    const { user } = getState().auth;
    if (!user?.uid) throw new Error('uid is required');

    const { active: note } = getState().diary;
    if (!note) throw new Error('note is required');

    await deleteFirebaseApi(`${user.uid}/diary/notes/${note.id}`);

    toast.success(`La nota se ha eliminado correctamente`);

    dispatch(deleteNoteById(note.id));
  };
};
