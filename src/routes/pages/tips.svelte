<script>
    import { tips } from '../../data/tips'
</script>

<h1>
    General
</h1>

<ul class="list-group">
    {#each tips.general as tip}
        <li class="list-group-item">{tip}</li>
    {/each}
</ul>

<h1>
	Roles
</h1>

<h3>
    Machine Gunner
</h3>

<h3>
    Anti-Tank
</h3>

<ul class="list-group">
    {#each tips.roles.antiTank as tip}
        <li class="list-group-item">{tip}</li>
    {/each}
</ul>

<h3>
    Engineer
</h3>

<ul class="list-group">
    {#each tips.roles.engineer as tip}
        <li class="list-group-item">{tip}</li>
    {/each}
</ul>