import * as Yup from 'yup';

export const NoteSchema = Yup.object().strict().shape({
  name: Yup.string().required(),
  date: Yup.string().required(),
  category: Yup.string().required(),
  content: Yup.string().required(),
  isArchived: Yup.boolean().required(),
});
