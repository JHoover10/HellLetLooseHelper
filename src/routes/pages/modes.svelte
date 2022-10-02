<script>
    import { offensive } from "../../data/modes";
</script>

<h1>Warfare</h1>

<h1>Offensive</h1>
<h2>General</h2>
<ul class="list-group">
    {#each offensive.general as rule}
        <li class="list-group-item">{rule}</li>
    {/each}
</ul>

<h2>Offensive Team</h2>
<ul class="list-group">
    {#each offensive.offensiveTeam as rule}
        <li class="list-group-item">{rule}</li>
    {/each}
</ul>

<h2>Defensive Team</h2>
<ul class="list-group">
    {#each offensive.defensiveTeam as rule}
        <li class="list-group-item">{rule}</li>
    {/each}
</ul>
