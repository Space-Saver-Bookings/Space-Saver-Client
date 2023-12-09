import {useContext} from 'react';
import {ModalContext} from './ModalContext';

export default function useModal() {
  const context = useContext(ModalContext);

  if (!context) {
    throw new Error('ModalContext was used outside of ModalProvider');
  }

  return context;
}