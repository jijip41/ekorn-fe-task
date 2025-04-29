<script lang="ts">
  import type { Student } from '../utils/students';

  type Props = {
    students: Student[];
    updatedStudents: Student[];
  };

  let { students, updatedStudents = $bindable() }: Props = $props();

  let isSorted = $state(false);
  let isFiltered = $state(false);

  function setStudents() {
    let filteredStudents = isFiltered
      ? [...students].filter(stu => stu.activeLabel === 'Yes')
      : students;
    let sortedStudents = isSorted
      ? [...filteredStudents].sort((a, b) => a.name.localeCompare(b.name))
      : filteredStudents;
    updatedStudents = sortedStudents;
  }
</script>

<div class="panel">
  <button
    onclick={() => {
      isSorted = !isSorted;
      setStudents();
    }}
  >
    {isSorted ? 'Back to Original' : 'Sort by Name'}</button
  >
  <button
    onclick={() => {
      isFiltered = !isFiltered;
      setStudents();
    }}
  >
    {isFiltered ? 'Show All Students' : 'Show only Active Students'}
  </button>
</div>

<style>
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
</style>
