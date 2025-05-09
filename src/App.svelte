<script lang="ts" module>
  import Panel from './lib/components/Panel.svelte';
  import StudentCard from './lib/components/StudentCard.svelte';
  import { studentsData } from './lib/data';
  import type { Student } from './lib/type';
  import { transformStudents } from './lib/utils/students';

  const students: Student[] = transformStudents(studentsData);

  let updatedStudents = $state(students);
</script>

<main>
  <section class="grid-container">
    <h1>Students</h1>
    <Panel {students} bind:updatedStudents />
    {#each updatedStudents as student}
      <StudentCard {student} />
    {/each}
  </section>
</main>

<style>
  main {
    padding: var(--spacing-lg);
    background-color: var(--background-color);
    min-height: 100svh;
  }

  h1 {
    grid-area: heading;
    font-family: var(--font-family-heading);
    font-size: var(--font-size-lg);
    color: var(--heading-color);
    line-height: 100%;
    letter-spacing: -2%;
    width: 140px;
    height: 39px;
  }

  .grid-container {
    display: grid;
    grid-template-areas:
      'heading heading heading'
      'panel   panel   panel';
    gap: 20px;
    margin: 0 auto;
    width: fit-content;
    height: fit-content;
    margin: 0 auto;
  }

  @media (max-width: 1024px) {
    .grid-container {
      grid-template-areas:
        'heading heading'
        'panel   panel   ';
    }
  }

  @media (max-width: 768px) {
    .grid-container {
      grid-template-areas:
        'heading'
        'panel';
    }
  }
</style>
