<script lang="ts">
  import type { Student } from '../type';
  import StudentPropValue from './StudentPropValue.svelte';

  type Props = {
    student: Student;
  };

  let { student }: Props = $props();
</script>

<article>
  <h2>{student.name}</h2>
  <div class="content">
    <StudentPropValue title="Age" value={student.age} />
    <StudentPropValue title="Avg score" value={student.averageScore} />
    <StudentPropValue title="Active" value={student.activeLabel} />
    <StudentPropValue title="Passed" value={student.passedLabel} />
    <StudentPropValue title="ID" value={student.id} />
  </div>
</article>

<style>
  article {
    width: 322px;
    height: 244px;
    padding: var(--spacing-md);
    border-radius: 6px;
    background-color: var(--white);
    box-shadow: 0px 6px 20px 0px var(--shadow-color);
    display: flex;
    flex-direction: column;
    gap: var(--spacing-md);
  }

  h2 {
    font-size: var(--font-size-md);
    font-weight: var(--font-weight-lg);
    font-family: var(--font-family-card);
    line-height: 100%;
    text-align: -4%;
    color: var(--heading-color);
    height: 29px;
    text-align: left;
  }

  .content {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-md);
    line-height: 100%;
    text-align: left;
  }
</style>
