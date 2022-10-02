<script>
    import Gamemodes from "../faqs/gamemodes.svelte";
    import { faqs } from "../../data/faqs";
    import QandAs from "../components/QandAs.svelte";
</script>

<h1>Gamemodes</h1>

<h2>Offensive</h2>

<QandAs section={"gamemodes-offensive"} questionsAnswers={faqs.gamemodes.offensive}/>

<h2>Armor</h2>

<h3>General</h3>

<QandAs section={"armor-general"} questionsAnswers={faqs.roles.armor.general}/>