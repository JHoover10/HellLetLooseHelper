<script>
    import Gamemodes from "../faqs/gamemodes.svelte";

</script>
<h1>Gamemodes</h1>

<h2>Offensive</h2>

<h2>Warfare</h2>

<h1>Roles</h1>

<h2>Commander</h2>

<h2>Infantry</h2>

<h3>Officer</h3>

<h3>Rifleman</h3>

<h3>Assault</h3>

<h3>Automatic Rifleman</h3>

<h3>Medic</h3>

<h3>Support</h3>

<h3>Machine Gunner</h3>

<h3>Anti-Tank</h3>

<h3>Engineer</h3>

<h2>Armor</h2>

<h3>Tank Commander</h3>

<h3>Crewman</h3>

<h2>Recon</h2>

<h3>Spotter</h3>

<h3>Sniper</h3>

<h1>Maps</h1>

<h2>Carentan</h2>

<h2>Foy</h2>

<h2>Hill 400</h2>

<h2>Hürtgen Forest</h2>

<h2>Kursk</h2>

<h2>Omaha Beach</h2>

<h2>Purple Heart Lane</h2>

<h2>Sainte-Marie-du-Mont</h2>

<h2>Sainte-Mère-Église</h2>

<h2>Stalingrad</h2>

<h2>Utah Beach</h2>

<div class="row">
    <div class="col-4">
        <div class="list-group" id="list-tab" role="tablist">
            <a
                class="list-group-item list-group-item-action active"
                id="list-gamemodes-list"
                data-toggle="list"
                href="#list-gamemodes"
                role="tab"
                aria-controls="gamemodes">Gamemodes</a
            >
            <a
                class="list-group-item list-group-item-action"
                id="list-roles-list"
                data-toggle="list"
                href="#list-roles"
                role="tab"
                aria-controls="roles">Roles</a
            >
            <a
                class="list-group-item list-group-item-action"
                id="list-messages-list"
                data-toggle="list"
                href="#list-messages"
                role="tab"
                aria-controls="messages">Messages</a
            >
            <a
                class="list-group-item list-group-item-action"
                id="list-settings-list"
                data-toggle="list"
                href="#list-settings"
                role="tab"
                aria-controls="settings">Settings</a
            >
        </div>
    </div>
    <div class="col-8">
        <div class="tab-content" id="nav-tabContent">
            <div
                class="tab-pane fade show active"
                id="list-gamemodes"
                role="tabpanel"
                aria-labelledby="list-gamemodes-list"
            >
                <Gamemodes />
            </div>
            <div
                class="tab-pane fade"
                id="list-roles"
                role="tabpanel"
                aria-labelledby="list-roles-list"
            >
                ...
            </div>
            <div
                class="tab-pane fade"
                id="list-messages"
                role="tabpanel"
                aria-labelledby="list-messages-list"
            >
                ...
            </div>
            <div
                class="tab-pane fade"
                id="list-settings"
                role="tabpanel"
                aria-labelledby="list-settings-list"
            >
                ...
            </div>
        </div>
    </div>
</div>