// import { configureStore } from '@reduxjs/toolkit';
// import phonebookReducer from './Phonebook/phonebook-reducer';
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

// const contactsPersistConfig = {
//   key: 'contacts',
//   storage,
//   blacklist: ['filter'],
// };

// const middleware = getDefaultMiddleware => [
//   ...getDefaultMiddleware({
//     serializableCheck: {
//       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//     },
//   }),
// ];

// const store = configureStore({
//   reducer: {
//     contacts: persistReducer(contactsPersistConfig, phonebookReducer),
//   },
//   middleware,
//   devTools: process.env.NODE_ENV === 'development',
// });

// const persistor = persistStore(store);

// export default { store, persistor };

////////////////////////////////////////////////////////
////////////////////////////////////////////////////////
////////////////////////////////////////////////////////
////////////////////////////////////////////////////////
