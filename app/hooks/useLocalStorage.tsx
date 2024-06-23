// OBS: como next roda no servidor é preciso fazer esta verificação para usar o localstorage
import { useState, useEffect } from 'react';
export const useLocalStorage = (key: string, initialValue: string) => {
  const [value, setValue] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      // chave do localstorage
      const storedValue = localStorage.getItem(key);
      return storedValue !== null ? storedValue : initialValue;
    }
    return initialValue;
  });
  useEffect(() => {
    if (typeof window !== 'undefined') {

      localStorage.setItem(key, value);
    }
  }, [key, value]);

  return [value, setValue] as const;
};
