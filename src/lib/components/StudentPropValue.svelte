<script lang="ts">
  type Props = {
    title: string;
    value: string | number;
  };

  let { title, value }: Props = $props();
</script>

<p>
  <span class="title">{title}:</span>
  <span class="value">{value}</span>
</p>
