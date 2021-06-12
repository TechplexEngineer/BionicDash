<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import BooleanBox from "../widgets/BooleanBox.svelte";

  import { Styles } from 'sveltestrap';
</script>

<Styles/>

<Meta
  title="Widget/BooleanBox"
  component={BooleanBox}
  argTypes={{
    // state: { control: "boolean" },
    // title: { control: "text" },
    trueColor: { control: "color" },
    falseColor: { control: "color" },
  }}

/>

<Template let:args>
  <BooleanBox {...args} />
</Template>

<Story
  name="Primary"
  args={{
  }}
/>

