<script lang="ts">
  import { filterAndSortStudents, type Student } from '../utils/students';
  import Button from './Button.svelte';

  type Props = {
    students: Student[];
    updatedStudents: Student[];
  };

  let { students, updatedStudents = $bindable() }: Props = $props();
  let panelState = $state({
    isSorted: false,
    isFiltered: false,
  });

  const SORT_LABEL_DEFAULT = 'Sort by Name';
  const SORTED_LABEL = 'Back to Original';
  const FILTER_LABEL_DEFAULT = 'Show only Active Students';
  const FILTERED_LABEL = 'Show All Students';

  function setStudents() {
    updatedStudents = filterAndSortStudents(students, panelState);
  }

  let sortLabel = $state(SORT_LABEL_DEFAULT);
  let filterLabel = $state(FILTER_LABEL_DEFAULT);

  function setSort() {
    panelState.isSorted = !panelState.isSorted;
    setStudents();
    sortLabel = panelState.isSorted ? SORTED_LABEL : SORT_LABEL_DEFAULT;
  }

  function setFilter() {
    panelState.isFiltered = !panelState.isFiltered;
    setStudents();
    filterLabel = panelState.isFiltered ? FILTERED_LABEL : FILTER_LABEL_DEFAULT;
  }
</script>

<section class="panel">
  <Button label={sortLabel} onclick={setSort} />
  <Button label={filterLabel} onclick={setFilter} />
</section>

<style>
  .panel {
    display: flex;
    flex-direction: column;
    gap: 10px;
    grid-area: panel;
    width: 322px;
  }
</style>
