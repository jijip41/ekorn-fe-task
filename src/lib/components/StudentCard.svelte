<script lang="ts">
  import type { Student } from '../utils/students';

  type Props = {
    student: Student;
  };

  let { student }: Props = $props();
</script>

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
