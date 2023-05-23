

import { createSlice } from '@reduxjs/toolkit';

// Начальное значение
const initialState = {
  login: 'dasdad',
  password:'41c24124s',
};

const LoginSlice = createSlice({
  name: 'login',
  initialState,
  // Редьюсеры в слайсах мутируют состояние и ничего не возвращают наружу
  reducers: {
    setLogin: (state,action) => {
      state.login = action.payload;
    },
    setPassword: (state,action) => {
        state.password = action.payload;
    }
    // пример с данным
  },
});

// Слайс генерирует действия, которые экспортируются отдельно
// Действия генерируются автоматически из имен ключей редьюсеров
export const { setLogin, setPassword } = LoginSlice.actions;

// По умолчанию экспортируется редьюсер, сгенерированный слайсом
export default LoginSlice.reducer;