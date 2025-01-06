<script>
  import { onMount } from 'svelte';
  import { fade } from 'svelte/transition';

  let isMenuOpen = false;
  
  const menuItems = [
    'Appetizers or staters ',
    'Salads',
    'Pasta',
    'Grill and Steak Items',
    'Burgers and Sandwiches',
    'Desserts',
    'Non-Alcoholic and Alcoholic Beverages'
  ];

  function toggleMenu() {
    isMenuOpen = !isMenuOpen;
  }

  function handleClickOutside(event) {
    const menuButton = document.getElementById('menuButton');
    const menuList = document.getElementById('menuList');
    
    if (
      isMenuOpen && 
      !menuButton?.contains(event.target) && 
      !menuList?.contains(event.target)
    ) {
      isMenuOpen = false;
    }
  }

  onMount(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  });
</script>

<!-- Menu Button -->
<button 
  id="menuButton" 
  class="fixed bottom-10 right-4 w-16 h-16 flex items-center justify-center z-50 hover:scale-110 transition-transform duration-200"
  on:click|stopPropagation={toggleMenu}
>
  <img 
    src="/images/menuimage.png" 
    alt="Menu" 
    class="w-full h-full"
  />
</button>

<!-- Menu List -->
{#if isMenuOpen}
  <div 
    id="menuList" 
    class="fixed bottom-28 right-4 w-44 bg-white border border-gray-200 rounded-xl shadow-lg p-2 z-50"
    transition:fade={{ duration: 200 }}
  >
    <ul class="space-y-1">
      {#each menuItems as item}
        <li 
          class="p-2 cursor-pointer hover:bg-orange-50 rounded-lg transition-colors font-poppins text-sm"
          on:click|stopPropagation={() => {
            isMenuOpen = false;
          }}
        >
          {item}
        </li>
      {/each}
    </ul>
  </div>
{/if} 