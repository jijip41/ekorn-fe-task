<script lang="ts">
  type Props = {
    title: string;
    value: string | number;
  };

  let { title, value }: Props = $props();
</script>

<p class="container">
  <span class="title">{title}:</span>
  <span class="value">{value}</span>
</p>

<style>
  .container {
    font-size: var(--font-size-base);
    font-family: var(--font-family-card);
    line-height: 100%;
    font-size: 20px;
    height: 15px;
    display: flex;
    justify-content: space-between;
  }

  .title {
    font-weight: 400;
    color: var(--text-title-color);
  }

  .value {
    font-weight: 700;
    text-align: right;
    color: var(--black);
  }
</style>
