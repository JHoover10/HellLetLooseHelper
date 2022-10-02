<script>
    import { tips } from "../../data/tips";
</script>

<h1>General</h1>

<ul class="list-group">
    {#each tips.general as tip}
        <li class="list-group-item">{tip}</li>
    {/each}
</ul>

<h1>Game Modes</h1>

<h3>Offensive</h3>

<ul class="list-group">
    {#each tips.gameModes.offensive as tip}
        <li class="list-group-item">{tip}</li>
    {/each}
</ul>

<h1>Roles</h1>

<h3>Commander</h3>

<ul class="list-group">
    {#each tips.roles.commander as tip}
        <li class="list-group-item">{tip}</li>
    {/each}
</ul>

<h3>Infantry</h3>

<h5>Anti-Tank</h5>

<ul class="list-group">
    {#each tips.roles.antiTank as tip}
        <li class="list-group-item">{tip}</li>
    {/each}
</ul>

<h5>Engineer</h5>

<ul class="list-group">
    {#each tips.roles.engineer as tip}
        <li class="list-group-item">{tip}</li>
    {/each}
</ul>

<h3>Armor</h3>

<ul class="list-group">
    {#each tips.roles.armor as tip}
        <li class="list-group-item">{tip}</li>
    {/each}
</ul>
