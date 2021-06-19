<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import NumberSlider from "../widgets/NumberSlider.svelte";

  import { Styles } from 'sveltestrap';

  // @todo on change to propagate data back to parent
</script>

<Styles/>

<Meta
  title="Widget/NumberSlider"
  component={NumberSlider}
  argTypes={{
    onChanged: { action: 'changed' }
  }}

/>


<Template let:args>
  <NumberSlider {...args}  on:changed={args.onChanged}/>
</Template>



<Story
  name="Default"
  args={{
  }}
/>

