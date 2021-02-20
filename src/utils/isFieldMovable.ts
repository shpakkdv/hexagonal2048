import { cloneDeep, isEqual } from 'lodash';

import type { HexagonArray } from 'models';
import { Direction} from 'constant';
import { moveField } from './moveField';

export function isFieldMovable(field: HexagonArray): boolean {
  const allDirections = Object.values(Direction);
  const fieldCopy = cloneDeep(field);

  allDirections.forEach(direction => {
    const actualField = cloneDeep(fieldCopy);
    moveField(actualField, fieldCopy, direction)
  });

  return !isEqual(field, fieldCopy);
}
