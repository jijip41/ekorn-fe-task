import { describe, expect, it } from 'vitest';
import { studentsData } from '../../data';
import { getObjectValues } from '../object';

describe('getObjectValues', () => {
  it('should return all scores as array', () => {
    let student = studentsData[0].scores;

    expect(getObjectValues(student)).toEqual([98, 100, 99]);
  });
});
