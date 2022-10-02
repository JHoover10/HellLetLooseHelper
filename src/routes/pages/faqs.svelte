<script>
    import Gamemodes from "../faqs/gamemodes.svelte";
    import { faqs } from "../../data/faqs";
    import QandAs from "../components/QandAs.svelte";
</script>

<h2>Armor</h2>

<h3>General</h3>

<QandAs questionsAnswers={faqs.armor.general}/>