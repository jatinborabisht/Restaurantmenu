<script>
    export let item;
  </script>
  
  <div class="bg-white rounded-lg shadow-sm p-4 flex items-center space-x-4">
    <img src={item.image} alt={item.name} class="w-20 h-20 rounded-lg object-cover"/>
    <div>
      <h3 class="font-medium text-lg">{item.name}</h3>
      <p class="text-gray-600 text-sm">{item.description}</p>
      <div class="mt-2 flex items-center space-x-2">
        <span class="text-lg font-semibold">₹{item.price}</span>
        {#if item.tag}
          <span class="px-2 py-1 rounded-full text-xs" 
            class:bg-red-100={item.tag === 'bestseller'}
            class:text-red-600={item.tag === 'bestseller'}
            class:bg-orange-100={item.tag === "chef's choice"}
            class:text-orange-600={item.tag === "chef's choice"}>
            {item.tag}
          </span>
        {/if}
      </div>
    </div>
  </div>