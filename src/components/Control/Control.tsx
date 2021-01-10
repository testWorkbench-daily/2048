import React, { FC } from 'react';
import { MAX_SCALE, MIN_SCALE } from '../../utils/constants';
import Box from '../Box';
import Button from '../Button';
import Text from '../Text';

export interface ControlProps {
  rows: number;
  cols: number;
  onReset: () => void;
  onChangeRow: (newRow: number) => void;
  onChangeCol: (newCol: number) => void;
}

const Control: FC<ControlProps> = ({
  rows,
  cols,
  onReset,
  onChangeRow,
  onChangeCol,
}) => (
  <Box inlineSize="100%" justifyContent="space-between">
    <Button onClick={onReset}>
      <Text fontSize={16} textTransform="capitalize">
        new game
      </Text>
    </Button>
    <Box>
      <Box marginInlineEnd="s3">
        <Box marginInlineEnd="s1">
          <Text textTransform="uppercase" fontSize={13} color="primary">
            rows:
          </Text>
        </Box>
        <Button
          mini
          onClick={() => onChangeRow(rows - 1)}
          disable={rows === MIN_SCALE}
        >
          -
        </Button>
        <Box marginInline="s2">
          <Text fontSize={16} color="primary">
            {rows}
          </Text>
        </Box>
        <Button
          mini
          onClick={() => onChangeRow(rows + 1)}
          disable={rows === MAX_SCALE}
        >
          +
        </Button>
      </Box>
      <Box>
        <Box marginInlineEnd="s1">
          <Text textTransform="uppercase" fontSize={13} color="primary">
            cols:
          </Text>
        </Box>
        <Button
          mini
          onClick={() => onChangeCol(cols - 1)}
          disable={cols === MIN_SCALE}
        >
          -
        </Button>
        <Box marginInline="s2">
          <Text fontSize={16} color="primary">
            {cols}
          </Text>
        </Box>
        <Button
          mini
          onClick={() => onChangeCol(cols + 1)}
          disable={cols === MAX_SCALE}
        >
          +
        </Button>
      </Box>
    </Box>
  </Box>
);

export default React.memo(Control);