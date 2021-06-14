<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import ToggleButton from "../widgets/ToggleButton.svelte";

  import { Styles } from 'sveltestrap';

  // @todo on change to propagate data back to parent
</script>

<Styles/>

<Meta
  title="Widget/ToggleButton"
  component={ToggleButton}
  argTypes={{
    onClicked: { action: 'clicked' }
  }}

/>


<Template let:args>
  <ToggleButton {...args}  on:clicked={args.onClicked}/>
</Template>



<Story
  name="Default"
  args={{
  }}
/>

