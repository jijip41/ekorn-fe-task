import type { StudentDataItem } from '../data';
import type { Student } from '../type';
import { getObjectValues } from './object';

// Transforms raw data into a structured format I need to render the student card.
export function transformStudents(
  students: readonly StudentDataItem[],
): Student[] {
  return students.map(student => {
    const { id, firstName, lastName, birthdate, scores, isActive } = student;

    const allScores = getAllScores(scores);
    const isPassed = !allScores.some(score => score < 60);

    return {
      id: id.toString(),
      name: getName(firstName, lastName),
      age: getAge(birthdate),
      averageScore: getAverageScore(allScores),
      passedLabel: isPassed ? 'Yes' : 'No',
      activeLabel: isActive ? 'Yes' : 'No',
    };
  });
}

export function filterAndSortStudentsList(
  students: Student[],
  { isSorted, isFiltered }: { isSorted: boolean; isFiltered: boolean },
): Student[] {
  let filtered = isFiltered
    ? students.filter(stu => stu.activeLabel === 'Yes')
    : students;
  return isSorted
    ? [...filtered].sort((a, b) => a.name.localeCompare(b.name))
    : filtered;
}

function getName(
  firstName: StudentDataItem['firstName'],
  lastName: StudentDataItem['lastName'],
): Student['name'] {
  return `${firstName} ${lastName}`;
}

function getAge(dateOfBirth: StudentDataItem['birthdate']): number {
  const birthDate = new Date(dateOfBirth);
  const currentDate = new Date();

  let currentYear = currentDate.getFullYear();
  let currentMonth = currentDate.getMonth();
  let currentDay = currentDate.getDate();

  let birthYear = birthDate.getFullYear();
  let birthMonth = birthDate.getMonth();
  let birthDay = birthDate.getDate();

  let age = currentYear - birthYear;

  if (
    currentMonth < birthMonth ||
    (currentMonth === birthMonth && currentDay < birthDay)
  ) {
    age--;
  }
  return age;
}

function getAllScores(scores: StudentDataItem['scores']): number[] {
  return getObjectValues(scores);
}

function getAverageScore(scores: number[]) {
  return Math.round(
    scores.reduce((acc, curr) => acc + curr, 0) / scores.length,
  );
}
