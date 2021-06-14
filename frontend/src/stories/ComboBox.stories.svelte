<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import ComboBox from "../widgets/ComboBox.svelte";

  import { Styles } from 'sveltestrap';

  // @todo on change to propagate data back to parent
</script>

<Styles/>

<Meta
  title="Widget/ComboBox"
  component={ComboBox}
  argTypes={{
  }}

/>


<Template let:args>
  <ComboBox {...args} />
</Template>



<Story
  name="Default"
  args={{
  }}
/>

