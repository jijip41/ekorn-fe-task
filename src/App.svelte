<script lang="ts" module>
  import { studentsData } from './lib/data';
  import { transformStudents, type Student } from './lib/utils/students';

  const students: Student[] = transformStudents(studentsData);
  console.log({ students });
</script>

<main>
  <!-- The list of students -->
  <h1>Students</h1>
  {#each students as student}
    <article>
      <h2>{student.name}</h2>
      <ul>
        <li>Age: {student.age}</li>
        <li>Average score: {student.averageScore}</li>
        <li>Active: {student.activeLabel}</li>
        <li>Passed: {student.passedLabel}</li>
        <li>ID: {student.id}</li>
      </ul>
    </article>
  {/each}
</main>

<style>
  main {
    padding: 30px;
  }
</style>
