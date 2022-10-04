<script>
    import { links } from '../../data/links'
</script>

<ul class="list-group" style="padding: 16px;">
    {#each links as link}
        <li class="list-group-item"><a href={link.link} class="link-primary">{link.title}</a></li>
    {/each}
</ul>