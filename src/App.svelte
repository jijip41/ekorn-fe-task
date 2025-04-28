<script lang="ts" module>
  import StudentCard from './lib/components/StudentCard.svelte';
  import { studentsData } from './lib/data';
  import { transformStudents, type Student } from './lib/utils/students';

  const students: Student[] = transformStudents(studentsData);
</script>

<main>
  <!-- The list of students -->
  <h1>Students</h1>
  {#each students as student}
    <StudentCard {student} />
  {/each}
</main>

<style>
  main {
    padding: 30px;
  }
</style>
