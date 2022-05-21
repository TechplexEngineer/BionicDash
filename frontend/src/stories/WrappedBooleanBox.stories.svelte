<script>
  import BooleanBox from "../widgets/BooleanBox.svelte";
  import WidgetWrapper from "../widgets/WidgetWrapper.svelte"


  import { Styles } from 'sveltestrap';
</script>

<Styles/>

<!--<Meta-->
<!--  title="Wrapped/BooleanBox"-->
<!--  component={WidgetWrapper}-->
<!--  argTypes={{-->
<!--    // state: { control: "boolean" },-->
<!--    // title: { control: "text" },-->
<!--    trueColor: { control: "color" },-->
<!--    falseColor: { control: "color" },-->
<!--    onExpanded: { action: 'expanded' }-->
<!--  }}-->

<!--/>-->

<!--<Template let:args>-->
	<WidgetWrapper >
		<BooleanBox />
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

