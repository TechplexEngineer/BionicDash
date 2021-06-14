<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import TextBox from "../widgets/TextBox.svelte";

  import { Styles } from 'sveltestrap';

  // @todo on change to propagate data back to parent
</script>

<Styles/>

<Meta
  title="Widget/TextBox"
  component={TextBox}
  argTypes={{
    onChanged: { action: 'changed' }
  }}

/>


<Template let:args>
  <TextBox {...args}  on:changed={args.onChanged}/>
</Template>



<Story
  name="Default"
  args={{
  }}
/>

