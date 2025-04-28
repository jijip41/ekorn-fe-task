<script lang="ts" module>
  import StudentCard from './lib/components/StudentCard.svelte';
  import { studentsData } from './lib/data';
  import { transformStudents, type Student } from './lib/utils/students';

  const students: Student[] = transformStudents(studentsData);
</script>

<main>
  <h1>Students</h1>
  {#each students as student}
    <StudentCard {student} />
  {/each}
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
    display: grid;
    grid-template-areas: 'heading heading heading';
    background-color: var(--background-color);
    gap: 20px;
    margin: 0 auto;
    width: 100svw;
    height: 100svh;
    text-align: center;
  }

  h1 {
    grid-area: heading;
    text-align: left;
    font-family: var(--font-family-heading);
    font-size: var(--font-size-lg);
    color: var(--heading-color);
    line-height: 100%;
    letter-spacing: -2%;
    width: 140px;
    height: 39px;
  }
</style>
