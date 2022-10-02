<script>
    import { links } from '../../data/links'
</script>

<ul>
    {#each links as link}
        <li><a href={link.link} class="link-primary">{link.title}</a></li>
    {/each}
</ul>