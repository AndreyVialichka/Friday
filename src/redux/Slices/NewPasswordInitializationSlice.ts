

import { createSlice } from '@reduxjs/toolkit';

// Начальное значение
const initialState = {
  newPassword:'41c24124dass',
};

const NewPasswordInitializationSlice = createSlice({
  name: 'NewPasswordInitialization',
  initialState,
  // Редьюсеры в слайсах мутируют состояние и ничего не возвращают наружу
  reducers: {
    setNewPassword: (state,action) => {
        state.newPassword = action.payload;
    }
    // пример с данным
  },
});

// Слайс генерирует действия, которые экспортируются отдельно
// Действия генерируются автоматически из имен ключей редьюсеров
export const { setNewPassword} = NewPasswordInitializationSlice.actions;

// По умолчанию экспортируется редьюсер, сгенерированный слайсом
export default NewPasswordInitializationSlice.reducer;