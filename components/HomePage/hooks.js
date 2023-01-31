import {useState} from 'react';

const useHooks = () => {
    const [isSelected, setIsSelected] = useState(null);

  return {isSelected,
    setIsSelected
    }
}

export default useHooks