import * as yup from 'yup';

export const TaskYupSchema = yup.object().shape({
    title: yup.string().required('Введите заголовок').min(2, 'Заголовок должен содержать минимум 2 символа'),
    description: yup.string().required('Введите описание').min(4, 'Описание должно содержать минимум 4 символа'),
    status: yup.string().oneOf(['pending', 'in_progress', 'done']).required(),
})