<script>
    let buttons = [
        {
            id: 0,
            title: "Data Sources",
            icon: "table"
        },
        {
            id: 1,
            title: "Tuning",
            icon: "speedometer2"
        },
        {
            id: 2,
            title: "Dashboards",
            icon: "grid"
        },
        {
            id: 3,
            title: "Settings",
            icon: "gear-fill",
            bottom: true
        }
    ];
    export let activeId = buttons[0].id;

    function getClickHandler(button) {
        return (event) => {
            // console.log("handleClick", event, button)
            if (activeId === button.id) {
                activeId = -1;
            } else {
                activeId = button.id
            }
        }
    }

</script>

<svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
    <symbol id="logo" viewBox="0 0 497 157">
        <title>Bionics 4909</title>
        <path d="M41.342 152.615c-2.938-2.352-13.33-10.274-23.092-17.604L.5 121.683v-81.92l3.217-2.685C6.765 34.534 26.14 17.69 38.856 6.53c3.22-2.826 6.399-5.452 7.063-5.834 1.353-.779 376.83.947 394.093 1.811l11.013.552 11.487 9.552A4318.622 4318.622 0 01485.25 31.68l11.25 9.514v78.456l-14.68 11.371a8732.484 8732.484 0 01-24.126 18.621l-9.445 7.25H46.683zm405.19-7.652a28000.47 28000.47 0 0129.317-22.869l10.651-8.298V46.831l-3.663-3.22c-2.015-1.77-8.203-6.976-13.75-11.568-10.255-8.488-12.329-10.233-18.74-15.766l-3.609-3.115-117.869-.637c-64.828-.351-154.094-.897-198.369-1.213L50 10.737l-11.066 9.828C32.848 25.97 24.17 33.542 19.65 37.392c-4.52 3.85-8.44 7.9-8.713 9-.272 1.1-.37 17.296-.216 35.991L11 116.374l20 15.16 20 15.161 196.533.099c192.695.096 196.581.06 199-1.831zM101.5 103.393v-15.5H35.783l-3.628-5.25c-1.995-2.888-4.371-6.275-5.28-7.528-.91-1.252-1.48-2.443-1.265-2.646.215-.204 7.815-3.342 16.89-6.974S60.35 58.265 62 57.5c1.65-.766 11.006-4.59 20.79-8.5l17.79-7.108h22.92v77h-22zm-.206-38.25c.227-5.62-.015-7.25-1.078-7.25-1.312 0-9.724 3.215-18.216 6.964-2.2.971-6.813 2.837-10.25 4.145-3.438 1.31-6.25 2.73-6.25 3.158 0 .428 7.987.656 17.75.505l17.75-.273zM138.5 118.26c0-.348 3.238-3.948 7.195-8l7.195-7.368H204.4l3.046-3.25c2.404-2.565 3.047-4.145 3.05-7.5l.005-4.25h-56.74l-8.13-10.885c-4.471-5.987-8.13-11.336-8.13-11.885 0-.55 2.818-4.764 6.263-9.364 3.445-4.601 7.055-9.603 8.023-11.116l1.76-2.75H219.048l4.279 5.75c2.353 3.163 6.275 8.45 8.715 11.75l4.437 6 .01 14.746.011 14.746-8.75 11.962-8.75 11.962-40.25.042c-22.137.023-40.25-.242-40.25-.59zm72-49.791c0-3.3-.658-5.205-2.589-7.5l-2.589-3.077h-37.72l-2.551 3.345c-1.403 1.84-2.551 3.663-2.551 4.053 0 .39 1.238 2.26 2.75 4.156l2.75 3.446h42.5zm47.228 42.152l-8.228-8.27V59.244l8.695-8.676 8.696-8.676H331.042l8.729 8.77 8.729 8.77v42.488l-8.316 8.486-8.316 8.486h-65.912zM325.5 80.376V57.86l-26.75.266-26.75.266-.271 20.974c-.149 11.536-.05 21.549.219 22.25.38.99 6.431 1.276 27.02 1.276H325.5zm43.531 32.341c10.446-10.806 6.618-9.754 35.635-9.791l25.666-.034 3.084-3.894c2.155-2.721 3.084-4.98 3.084-7.5v-3.606h-57.536l-7.482-10.123c-4.115-5.568-7.837-10.735-8.271-11.482-.704-1.211 5.624-10.957 13.244-20.395 1.11-1.375 2.024-2.837 2.032-3.25.007-.412 14.825-.75 32.928-.75h32.915l8.585 11.586 8.585 11.586V95.059l-8.56 11.916-8.56 11.917h-81.318zM436.5 69.12c0-2.736-.844-4.796-3.073-7.5l-3.073-3.728H393l-2.843 3.563-2.842 3.563 2.728 3.937 2.729 3.937H436.5z"
              fill="#0d663a" stroke="#0d663a"/>
    </symbol>
</svg>

<div class="d-flex flex-column flex-shrink-0 bg-light" style="width: 4.5rem;border-right: 1px solid #dee2e6">

    <div class="d-block py-3 mx-auto link-dark text-decoration-none border-bottom" title="Bionic Dashboard">
        <svg class="bi" width="65" height="32">
            <use xlink:href="#logo"></use>
        </svg>
        <span class="visually-hidden">Icon-only</span>
    </div>

    <ul class="nav nav-pills nav-flush flex-column text-center vh-100">

        {#each buttons as button (button.id)}
        <li class:mt-auto={button.bottom}>
            <button class="nav-link py-3 border-bottom w-100"
               class:active={button.id === activeId}
               title={button.title}
               on:click={getClickHandler(button)}
            >
                <i class="bi bi-{button.icon} fs-3 text-body"></i>
            </button>
        </li>
        {/each}

    </ul>
<!--    <div class="border-top">-->
<!--        <button class="btn btn-link py-3 w-100 border-bottom align-items-center justify-content-center text-center"-->
<!--           title="Settings">-->
<!--            <svg class="bi" width="24" height="24">-->
<!--                <use xlink:href="#gear-fill"></use>-->
<!--            </svg>-->
<!--        </button>-->
<!--    </div>-->
</div>

<style>

    .nav-pills .nav-link.active {
        background-color: #bbb;
    }
</style>