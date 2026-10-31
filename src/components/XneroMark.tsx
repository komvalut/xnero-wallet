import type { LayoutChangeEvent } from 'react-native';

import Svg, { Defs, LinearGradient, Path, Stop } from 'react-native-svg';

type Props = {
  size: number;
  onLayout?: (event: LayoutChangeEvent) => void;
};

const MARK_PATH = 'M220 250H804L725 355H570V540L710 680L630 760L512 642L394 760L314 680L454 540V355H299L220 250Z';

export const XneroMark = ({ size, onLayout }: Props) => (
  <Svg width={size} height={size} viewBox="0 0 1024 1024" onLayout={onLayout}>
    <Defs>
      <LinearGradient id="xnero-mark-gradient" x1="320" y1="250" x2="700" y2="760" gradientUnits="userSpaceOnUse">
        <Stop offset="0" stopColor="#FFFFFF" />
        <Stop offset="0.35" stopColor="#D9DEE6" />
        <Stop offset="0.6" stopColor="#8F97A3" />
        <Stop offset="0.8" stopColor="#E6EAF0" />
        <Stop offset="1" stopColor="#A9B1BC" />
      </LinearGradient>
    </Defs>
    <Path d={MARK_PATH} fill="url(#xnero-mark-gradient)" transform="translate(-205 -205) scale(1.4)" />
  </Svg>
);
