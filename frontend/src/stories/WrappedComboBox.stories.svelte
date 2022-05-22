<script>
  import WidgetWrapper from "../widgets/WidgetWrapper.svelte"

  import { Styles } from 'sveltestrap';
  import ComboBox from "../widgets/ComboBox.svelte";
</script>

<Styles/>

<!--<Meta-->
<!--  title="Wrapped/TextBox"-->
<!--  component={WidgetWrapper}-->
<!--  argTypes={{-->
<!--    // state: { control: "boolean" },-->
<!--    // title: { control: "text" },-->
<!--    // trueColor: { control: "color" },-->
<!--    // falseColor: { control: "color" },-->
<!--    onExpanded: { action: 'expanded' }-->
<!--  }}-->

<!--/>-->

<!--<Template let:args>-->
	<WidgetWrapper >
		<ComboBox />
	</WidgetWrapper>
<!--</Template>-->

<!--<Story-->
<!--  name="True"-->
<!--  args={{-->
<!--    state: true-->
<!--  }}-->
<!--/>-->

<!--<Story-->
<!--  name="False"-->
<!--  args={{-->
<!--    state: false-->
<!--  }}-->
<!--/>-->

