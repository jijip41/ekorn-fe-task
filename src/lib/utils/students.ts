import type { StudentDataItem } from '../data';

export type Student = {
  id: string;
  name: string;
  age: number;
  averageScore: number;
  passedLabel: 'Yes' | 'No';
  activeLabel: 'Yes' | 'No';
};

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
      averageScore: getAverageScores(allScores),
      passedLabel: isPassed ? 'Yes' : 'No',
      activeLabel: isActive ? 'Yes' : 'No',
    };
  });
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

function getAverageScores(scores: number[]) {
  return Math.round(
    scores.reduce((acc, curr) => acc + curr, 0) / scores.length,
  );
}

export function getObjectValues<T extends object>(obj: T): Array<T[keyof T]> {
  return Object.values(obj);
}
