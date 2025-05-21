import React from 'react';
import JuegosProvider from './src/Provider/JuegosProvider';
import AppNavigator from './src/navigation/AppNavigator';

export default function App() {
  return (
    <JuegosProvider>
      <AppNavigator />
    </JuegosProvider>
  );
}
