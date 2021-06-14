<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import ToggleSwitch from "../widgets/ToggleSwitch.svelte";

  import { Styles } from 'sveltestrap';

  // @todo on change to propagate data back to parent
</script>

<Styles/>

<Meta
  title="Widget/ToggleSwitch"
  component={ToggleSwitch}
  argTypes={{
    onClicked: { action: 'clicked' }
  }}

/>


<Template let:args>
  <ToggleSwitch {...args}  on:clicked={args.onClicked}/>
</Template>



<Story
  name="Default"
  args={{
  }}
/>

