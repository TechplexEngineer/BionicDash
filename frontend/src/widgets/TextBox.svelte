<script>
	export let title = "TEXTBOX"
	export let value = "THIS IS A VALUE";
	export let inputType = "text";
	// export let placeholder = ""; // floating does not support placeholder


	// We need a unique id so the floating text will work
	//src https://stackoverflow.com/a/1349426/429544
    function makeid(length) {
        let result             = '';
        const characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;
        for ( let i = 0; i < length; i++ ) {
            result += characters.charAt(Math.floor(Math.random() *
                    charactersLength));
        }
        return result;
    }
    const inputId = makeid(4);

</script>

<div class="form-floating">
  <input type="text" class="form-control" id="floatingInput-{inputId}" placeholder=" ">
  <label for="floatingInput-{inputId}">{title}</label>
</div>

