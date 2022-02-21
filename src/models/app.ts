import { IApp,TEl } from '../type'

const initState: IApp = {
  contentEl: [],
  el: '',
  select: {} as TEl,
  text: '',
  img: '',
  save: null,
  dragEl: {} as TEl,
};

export default {
  namespace: 'app',
  state: initState,
  reducers: {
    update(state: IApp, action: any) {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
};
