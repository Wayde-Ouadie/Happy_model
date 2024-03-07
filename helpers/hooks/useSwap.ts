import { useState, useCallback } from 'react';

const useSwap = (numberItems: number) => {
      const [[position, direction], setPosition] = useState<[number, -1 | 1 | 0]>([0, 1]);
  
      const paginate = useCallback((newDirection, numberIteration = 1) => {
          const swap = (position) => {
              if(direction == 1){
                  return position >= numberItems ? 0 : position + direction;
              }else if(direction == -1){
                  return position == 0 ? numberItems : position + direction;
              }else{
                  return 0;
              }
          }
  
          let newPosition = swap(position);
          if(numberIteration > 1){
              newPosition = swap(newPosition);
          }
          setPosition(() => [newPosition, newDirection]);
      }, [position, direction, numberItems]);

      const goToPage = useCallback((newPosition) => {
            setPosition(() => [newPosition, 1]);
      }, [])
  
      return { position, direction, paginate, goToPage } as const;
  }

export default useSwap;