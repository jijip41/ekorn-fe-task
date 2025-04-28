<script lang="ts" module>
  import StudentCard from './lib/components/StudentCard.svelte';
  import { studentsData } from './lib/data';
  import { transformStudents, type Student } from './lib/utils/students';

  const students: Student[] = transformStudents(studentsData);

  let isSorted = $state(false);
  let isFiltered = $state(false);
</script>

<main>
  <section class="grid-container">
    <div class="panel">
      <button onclick={() => (isSorted = !isSorted)}>
        {isSorted ? 'Back to Original' : 'Sort by Name'}</button
      >
      <button onclick={() => (isFiltered = !isFiltered)}>
        {isFiltered ? 'Show All Students' : 'Show only Active Students'}
      </button>
    </div>
    <h1>Students</h1>
    {#each students as student}
      <StudentCard {student} />
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

  .panel {
    display: flex;
    flex-direction: column;
    gap: 10px;
    grid-area: panel;
    width: 322px;
  }

  button {
    cursor: pointer;
    background-color: var(--white);
    border-radius: 5px;
    border: solid 2px var(--black);
  }

  button:hover {
    box-shadow: 0px 2px 4px 0px var(--shadow-color);
    font-weight: 700;
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
