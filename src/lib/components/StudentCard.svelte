<script lang="ts">
  import type { Student } from '../utils/students';
  import StudentPropValue from './StudentPropValue.svelte';

  type Props = {
    student: Student;
  };

  let { student }: Props = $props();
</script>

<article>
  <h2>{student.name}</h2>
  <div>
    <StudentPropValue title="Age" value={student.age} />
    <StudentPropValue title="Avg score" value={student.averageScore} />
    <StudentPropValue title="Active" value={student.activeLabel} />
    <StudentPropValue title="Passed" value={student.passedLabel} />
    <StudentPropValue title="ID" value={student.id} />
  </div>
</article>
