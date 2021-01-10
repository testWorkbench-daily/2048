import { Color } from '../themes/common';

// eslint-disable-next-line @typescript-eslint/naming-convention, no-underscore-dangle
let _tileIndex = 0;

// eslint-disable-next-line no-plusplus
export const nextTileIndex = () => _tileIndex++;

export const resetTileIndex = () => {
  _tileIndex = 0;
};

export const getId = (ind: number) => `${ind}_${Date.now()}`;

export const clamp = (d: number, min: number, max: number) =>
  Math.max(Math.min(max, d), min);

export const getTileFontSize = (w: number, h: number, v: number) => {
  const min = Math.min(w, h);
  return v >= 1024 ? min / 2.8 : min / 2;
};

export const getTileColor = (v: number) => `tile${clamp(v, 2, 2048)}` as Color;

export const calcSegmentSize = (
  length: number,
  segmentNum: number,
  spacing: number,
) => (length - (segmentNum + 1) * spacing) / segmentNum;

export const calcTileSize = (
  gridSize: number,
  rows: number,
  cols: number,
  spacing: number,
) => ({
  width: calcSegmentSize(gridSize, cols, spacing),
  height: calcSegmentSize(gridSize, rows, spacing),
});

export const calcLocation = (l: number, c: number, spacing: number) =>
  (spacing + l) * c + spacing;

export const createIndexArray = (num: number) => Array.from(Array(num).keys());
