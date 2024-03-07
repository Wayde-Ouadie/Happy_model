import type { IconNames } from '@uiKits'; 
import React from 'react';

export interface Props extends React.ComponentPropsWithoutRef<"button"> {
      back?: 'black' | 'white' | 'gradien' | 'none',
      icon?: any,
      shadow?: boolean,
      border?: 'black' | 'white' | 'none',
      size?: 'lg' | 'sm' | 'xs';
      action: () => any,
      children?: React.ReactElement | string

}