<script>
    import { fade } from 'svelte/transition';
    import MenuItem from './MenuItem.svelte';
    
    export let title;
    export let items;
    export let activeTab;
    
    let isExpanded = false;
  </script>
  
  <div class="mb-6">
    <button
      class="w-full flex justify-between items-center bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
      on:click={() => isExpanded = !isExpanded}>
      <h2 class="text-xl font-serif text-brown-800">{title}</h2>
      
    </button>
  
    {#if isExpanded}
      <div class="mt-4 space-y-4" transition:fade>
        {#each items as item}
          {#if activeTab === 'all' || activeTab === item.type}
            <MenuItem {item} />
          {/if}
        {/each}
      </div>
    {/if}
  </div>