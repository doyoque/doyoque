<template>
  <div class="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  mounted() {
    const styles = [
      'color: green',
      'background: yellow',
      'font-size: 30px',
      'border: 1px solid red',
      'text-shadow: 2px 2px black',
      'padding: 10px',
    ].join(';')

    let secondUppercastle = '▐█▄██▄█                               ▐█▄██▄██▄██▄█'
    let firstUpperCastle  = '▐██▄█▄█▄█▄█▐█┼██▌█▄█▄█▄█▄█       ▐█▄███▐███┼███┼███▐█▄█▄█▄█▄██▄█'
    let firstLowerCastle  = '▐██┼█████▐████▌█████┼███▐█▄██▄█▐█┼███▐█████████████▐██┼██████┼██▐█▄██▄██▄██▄█▐█'
    let secondLowerCastle = '▐████████▐████▌█████████▐██████▐█████▐█████┼███████▐████████████▐██████████████'

    console.log(`
${secondUppercastle}${secondUppercastle}${secondUppercastle}
${firstUpperCastle}${firstUpperCastle}${'▐██┼█████▐████▌█████┼███▐'}
${firstLowerCastle}${firstLowerCastle}
${secondLowerCastle}${secondLowerCastle}`)
    console.log("%cWhat are you looking for? a XSS vulnerability or some shit?! 🖕", styles)
  },
};
</script>
