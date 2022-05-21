<script>
  import TextBox from "../widgets/TextBox.svelte";
  import WidgetWrapper from "../widgets/WidgetWrapper.svelte"


  import { Styles } from 'sveltestrap';
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
		<TextBox />
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

