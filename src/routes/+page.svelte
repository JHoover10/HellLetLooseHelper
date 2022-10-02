<script>
    import { base } from "$app/paths";
    import FAQs from "./pages/faqs.svelte";
    import Me from "./pages/about-me.svelte";
    import Contact from "./pages/contact.svelte";
    import Tips from "./pages/tips.svelte";
    import Links from "./pages/links.svelte";
    import Modes from "./pages/modes.svelte";

    export let menu = "Home";
</script>

<nav class="navbar navbar-expand-lg bg-light">
    <div class="container-fluid">
        <a class="navbar-brand" href="/HellLetLooseHelper"
            >Hell Let Loose Helper</a
        >
        <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
        >
            <span class="navbar-toggler-icon" />
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
                <a
                    class={menu === "Home" ? "nav-link active" : "nav-link"}
                    href="{base}/"
                    on:click|preventDefault={() => (menu = "Home")}>Home</a
                >
                <a
                    class={menu === "Modes" ? "nav-link active" : "nav-link"}
                    href="{base}/"
                    on:click|preventDefault={() => (menu = "Modes")}>Mode Rules</a
                >
                <a
                    class={menu === "Tips" ? "nav-link active" : "nav-link"}
                    href="{base}/"
                    on:click|preventDefault={() => (menu = "Tips")}>Tips</a
                >
                <a
                    class={menu === "Links" ? "nav-link active" : "nav-link"}
                    href="{base}/"
                    on:click|preventDefault={() => (menu = "Links")}>Links</a
                >
                <a
                    class={menu === "Me" ? "nav-link active" : "nav-link"}
                    href="{base}/"
                    on:click|preventDefault={() => (menu = "Me")}>About Me</a
                >
                <a
                    class={menu === "Contact" ? "nav-link active" : "nav-link"}
                    href="{base}/"
                    on:click|preventDefault={() => (menu = "Contact")}
                    >Contact</a
                >
            </div>
        </div>
    </div>
</nav>

{#if menu === "Home"}
    <h1>Page In Progress</h1>
{:else if menu === "Modes"}
    <Modes/>
{:else if menu === "Tips"}
    <Tips/>
{:else if menu === "Links"}
    <Links/>
{:else if menu === "Me"}
    <Me/>
{:else if menu === "Contact"}
    <Contact/>
{:else}
    <h1>Page Not Found</h1>
{/if}
