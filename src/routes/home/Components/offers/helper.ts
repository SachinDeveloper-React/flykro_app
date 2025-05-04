import {SCREEN_WIDTH} from '../../../../utils';

export const animatedCards = ({
  index,
  scrollX,
}: {
  index: number;
  scrollX: any;
}) => {
  const inputRange = [
    (index - 1) * SCREEN_WIDTH * 0.6,
    index * SCREEN_WIDTH * 0.6,
    (index + 1) * SCREEN_WIDTH * 0.6,
  ];

  const scale = scrollX.interpolate({
    inputRange,
    outputRange: [0.8, 1, 0.8],
    extrapolate: 'clamp',
  });

  const opacity = scrollX.interpolate({
    inputRange,
    outputRange: [0.6, 1, 0.6],
    extrapolate: 'clamp',
  });

  return {
    scale,
    opacity,
  };
};
