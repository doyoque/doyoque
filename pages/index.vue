<script setup lang="ts">
const nickName = ref('Abiyoga Bayu Primadi')
const descriptions = ref([
  'B̷͔̾a̴̪͚̿͝c̶̭̊̃k̷̠̯͙͂̀e̶̝͉̱̓̊ṋ̶̈́̋̋ď̵͎̱͎͑ ̸̥́̆D̶̝̉̋è̵͙͇̼̐ṿ̷̈́̈ě̶̱͝ḻ̸̬̒̈́o̸̧̟͍̽͗̍p̷̫̭͍̐͗͝ę̷̢̇ŕ̶̢̨̈́́͜',
  'F̸̢̯̭͆̀̿r̷̰̀̑ȏ̶̥̣͈̐n̷̨̰͌͆̚t̸̩͎̎̂͘e̵̘͛n̸͖̼̈́d̴͉̎̽̀ ̵̙̈́̉D̷͍̋̑ḛ̵̆v̵̨̼̟̇̃͗e̴̘̬͒͘͝l̴̘͘ŏ̸̧p̷̥̈̐ȅ̴̖͇͕̕r̵̰͖̭̀',
  'F̶̢̗͓̅̉û̴͇̟͓̍l̷͇̹̗̀̑l̵̟̦̎͗̌s̴͖̜͉͗̚͠t̵͖̖͎̓̓̀a̷͍͝ĉ̵̩k̴͙̟̭͋ ̵̡͆̉͆D̶̜̎e̵͍̘̘̓v̷̦̿e̷͔̓͌̃l̴̺̒́͂o̸̧̼͛ͅp̴͖̝̋̋̽ḙ̸̛͘r̸̫͊̋̓ͅ',
  'D̷̦̓̆͝ë̸̹̟́v̶̱͖̖̋O̷̮̙͗ͅp̴̤͖͕̀͆͝s̷͕̩͒ ̸̘͘E̸̖̔̏͝n̴̛̥̮̏̇ģ̷̠͌i̸̠͊͆̌͜n̸̻̊́e̸̹͑͆̈́ḙ̵̈́͑͝ͅř̶͎̌',
  'S̶͇̱̃̏y̷̺̺͔̋̍s̶̪̊͐̉a̴̬͕͙̒d̶͚̊̑͝m̸̜̜̓̀i̶̗̍̽͋n̴̝̹͘',
  'Ṣ̵̛͌̌y̵̘̝̫̅s̷̨͠ͅt̵̛̔̎͜ë̴͚͓́m̵̙̐ ̵̰͗Ḏ̷̳̈́̅̕e̷̻̞͍͌s̵͇̐̅̐i̸͚̎̒̈ģ̵̨̣̇ṇ̵̡̦̏'
])

const randomizeDesc = () => {
  const randomIndex = Math.floor(Math.random() * descriptions.value.length)
  return descriptions.value[randomIndex]
}

const description = ref(randomizeDesc())
let intervalId

const startInterval = () => {
  intervalId = setInterval(() => {
    description.value = randomizeDesc()
  }, 100)
}

const stopInterval = () => {
  clearInterval(intervalId)
}

onMounted(() => {
  startInterval()
})

onBeforeUnmount(() => {
  stopInterval()
})
</script>

<template>
  <div
    id="index-pages"
    class="bg-slate-800 rounded-md mx-10 sm:col-span-3 sm:row-span-4 sm:col-start-2 md:col-span-3 md:row-span-4 md:col-start-2 lg:col-span-3 lg:row-span-4 lg:col-start-2 xl:col-span-3 xl:row-span-4 xl:col-start-2 2xl:col-span-3 2xl:row-span-4 2xl:col-start-2 px-10 sm:px-0 md:px-0 lg:px-5 xl:px-24 2xl:px-32 py-24 md:py-40 lg:py-40 xl:py-56 2xl:py-64"
  >
    <section class="text-center">
      <div class="nickname">
        <h1 class="text-white">{{ nickName }}</h1>
      </div>
      <div class="skills">
        <ClientOnly>
          <p
            class="text-white"
            @mouseover="stopInterval"
            @mouseleave="startInterval"
          >
            {{ description }}
          </p>
        </ClientOnly>
      </div>
    </section>
  </div>
</template>
