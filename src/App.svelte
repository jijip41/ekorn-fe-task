<script lang="ts" module>
  import Panel from './lib/components/Panel.svelte';
  import StudentCard from './lib/components/StudentCard.svelte';
  import { studentsData } from './lib/data';
  import { transformStudents, type Student } from './lib/utils/students';

  const students: Student[] = transformStudents(studentsData);

  let updatedStudents = $state(students);
</script>

<main>
  <section class="grid-container">
    <h1>Students</h1>
    <Panel {students} bind:updatedStudents />
    {#each updatedStudents as _, i}
      <StudentCard bind:student={updatedStudents[i]} />
    {/each}
  </section>
</main>

<style>
  :global(:root) {
    --background-color: #f7f3ed;
    --heading-color: #4b3d47;
    --shadow-color: #56574b24;
    --text-title-color: #6f626b;
    --white: #ffffff;
    --black: #000000;
    --font-family-heading: 'Tahoma';
    --font-family-card: 'Verdana';
    --font-size-lg: 32px;
    --font-size-md: 24px;
    --font-size-base: 20px;
  }

  main {
    padding: 30px;
    background-color: var(--background-color);
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
    grid-template-columns: repeat(3, 322px);
    grid-template-areas:
      'heading heading heading'
      'panel   panel   panel';
    gap: 20px;
    margin: 0 auto;
    width: fit-content;
    height: 100%;
    margin: 0 auto;
  }

  @media (max-width: 1024px) {
    .grid-container {
      grid-template-columns: repeat(2, 322px);
      grid-template-areas:
        'heading heading'
        'panel   panel   ';
    }
  }

  @media (max-width: 768px) {
    .grid-container {
      grid-template-columns: repeat(1, 322px);
      grid-template-areas:
        'heading'
        'panel';
    }
  }
</style>
