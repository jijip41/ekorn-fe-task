import { describe, expect, it } from 'vitest';
import { studentsData } from '../../data';
import {
  filterAndSortStudentsList,
  getAge,
  getAllScores,
  getAverageScore,
  getName,
  transformStudents,
} from '../students';

describe('getName', () => {
  it('should return full name', () => {
    const firstName = 'Jihye';
    const lastName = 'Pak';

    expect(getName(firstName, lastName)).toBe('Jihye Pak');
  });
});

describe('getAge', () => {
  it('should calculate age correctly when birthday is not passed this year yet', () => {
    const dateOfBirth = '1989-12-07';

    expect(getAge(dateOfBirth)).toBe(35);
  });

  it('should calculate age correctly when birthday is passed', () => {
    const dateOfBirth = '1989-04-01';

    expect(getAge(dateOfBirth)).toBe(36);
  });
});

describe('getAllScore', () => {
  it('should return scores value as an array', () => {
    const scores = studentsData[0].scores;

    expect(getAllScores(scores)).toEqual([98, 100, 99]);
  });
});

describe('getAverageScore', () => {
  it('should calculate average of scores correctly', () => {
    const scores = getAllScores(studentsData[0].scores);

    expect(getAverageScore(scores)).toBe(99);
  });

  it('should return 0 when scores array is empty', () => {
    expect(getAverageScore([])).toBe(0);
  });
});

describe('transformStudents', () => {
  let students = studentsData;
  it('should format student correctly with passed label yes', () => {
    expect(transformStudents(students)[0]).toEqual({
      id: '1',
      name: 'Hermione Granger',
      age: 22,
      averageScore: 99,
      passedLabel: 'Yes',
      activeLabel: 'Yes',
    });
  });

  it('should format student correctly with passed label no', () => {
    expect(
      transformStudents([
        {
          id: 4,
          firstName: 'Napoleon',
          lastName: 'Dynamite',
          birthdate: '1992-11-14',
          scores: {
            math: 50,
            english: 50,
            science: 50,
          },
          isActive: false,
        },
      ])[0],
    ).toEqual({
      id: '4',
      name: 'Napoleon Dynamite',
      age: 32,
      averageScore: 50,
      passedLabel: 'No',
      activeLabel: 'No',
    });
  });
});

describe('filterAndSortStudentsList', () => {
  let students = studentsData;
  it('should return only active students when filtered', () => {
    const filteredStudentsList = filterAndSortStudentsList(
      transformStudents(students),
      {
        isSorted: false,
        isFiltered: true,
      },
    );

    expect(filteredStudentsList.length).toBe(6);
  });

  it('should sort students by name', () => {
    const sortedStudentsList = filterAndSortStudentsList(
      transformStudents(students),
      {
        isSorted: true,
        isFiltered: false,
      },
    );
    console.log(sortedStudentsList);
    expect(sortedStudentsList).toEqual([
      {
        id: '3',
        name: 'Cady Heron',
        age: 37,
        averageScore: 91,
        passedLabel: 'Yes',
        activeLabel: 'Yes',
      },
      {
        id: '6',
        name: 'Cher Horowitz',
        age: 20,
        averageScore: 78,
        passedLabel: 'Yes',
        activeLabel: 'Yes',
      },
      {
        id: '5',
        name: 'Ferris Bueller',
        age: 27,
        averageScore: 83,
        passedLabel: 'Yes',
        activeLabel: 'No',
      },
      {
        id: '1',
        name: 'Hermione Granger',
        age: 22,
        averageScore: 99,
        passedLabel: 'Yes',
        activeLabel: 'Yes',
      },
      {
        id: '2',
        name: 'Marty McFly',
        age: 40,
        averageScore: 78,
        passedLabel: 'Yes',
        activeLabel: 'Yes',
      },
      {
        id: '4',
        name: 'Napoleon Dynamite',
        age: 32,
        averageScore: 65,
        passedLabel: 'Yes',
        activeLabel: 'No',
      },
      {
        id: '7',
        name: 'Peter Parker',
        age: 21,
        averageScore: 97,
        passedLabel: 'Yes',
        activeLabel: 'Yes',
      },
      {
        id: '8',
        name: 'Wednesday Addams',
        age: 20,
        averageScore: 90,
        passedLabel: 'Yes',
        activeLabel: 'Yes',
      },
    ]);
  });
});
