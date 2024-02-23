export interface INote {
  id: string;
  title: string;
  body: string;
  date: string | number | Date;
  imageUrls: string[];
}

export interface IDairy {
  status: 'init' | 'loading' | 'saving' | 'updated' | 'deleted' | 'saving-images';

  saveMessage?: string;

  notes: INote[];
  active?: INote;
}

export const dairyInitialState: IDairy = {
  status: 'init',

  saveMessage: undefined,

  notes: [],
  active: undefined,
};
