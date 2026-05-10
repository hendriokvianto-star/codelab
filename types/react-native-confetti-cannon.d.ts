declare module 'react-native-confetti-cannon' {
  import React from 'react';
  import { ViewStyle } from 'react-native';

  export interface ConfettiCannonProps {
    count: number;
    origin: { x: number; y: number };
    autoStart?: boolean;
    autoStartDelay?: number;
    colors?: string[];
    fallSpeed?: number;
    fadeOut?: boolean;
    explosionSpeed?: number;
    style?: ViewStyle;
    onAnimationStart?: () => void;
    onAnimationEnd?: () => void;
  }

  export default class ConfettiCannon extends React.Component<ConfettiCannonProps> {
    start(): void;
    stop(): void;
  }
}
