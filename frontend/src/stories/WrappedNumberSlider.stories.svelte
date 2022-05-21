<script>
  import NumberSlider from "../widgets/NumberSlider.svelte";
  import WidgetWrapper from "../widgets/WidgetWrapper.svelte"


  import { Styles } from 'sveltestrap';
</script>

<Styles/>

<!--<Meta-->
<!--  title="Wrapped/NumberSlider"-->
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
	<WidgetWrapper widthPx={150*2} heightPx={150*1.25}>
		<NumberSlider />
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

