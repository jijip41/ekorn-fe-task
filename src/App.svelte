<script lang="ts" module>
  import { studentsData } from './lib/data';
  import { transformStudents, type Student } from './lib/utils/students';

  const students: Student[] = transformStudents(studentsData);
  console.log({ students });
</script>

<main>
  <!-- The list of students -->
  {#each students as student}
    <p>{student.name}</p>
  {/each}
</main>

<style>
  main {
    padding: 30px;
  }
</style>
