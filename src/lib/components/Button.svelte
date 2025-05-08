<script lang="ts">
  type Props = {
    label: string;
    onclick: () => void;
  };
  let { label, onclick }: Props = $props();
</script>

<button {onclick}>{label}</button>

<style>
  button {
    cursor: pointer;
    background-color: var(--white);
    border-radius: 5px;
    border: solid 2px var(--black);
  }

  button:hover {
    box-shadow: 0px 2px 4px 0px var(--shadow-color);
    font-weight: var(--font-weight-lg);
  }
</style>
