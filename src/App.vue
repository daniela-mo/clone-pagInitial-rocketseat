<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
*,
*::before,
*::after {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
:root {
  --color-background: linear-gradient(270deg, #0f0c14, #121214);
  --color-blecaute: #191820;
  --color-button: #8257e5;
  --color-text: #fff;
  --color-light-silver: #adadad52;
  --shape-hover: #29292e;
  --background: #121214;
  --darker-gradient-right: linear-gradient(270deg, #09090a, #121214);
  --darker-gradient-left: linear-gradient(270deg, #121214, #09090a);
  --purple-gradient: linear-gradient(90deg, #8257e6, rgba(130, 87, 230, 0.25));
  --darke-gradient: linear-gradient(90deg, #202024, rgba(32, 32, 36, 0.2));
  --react-gradient: linear-gradient(180deg, #182328, rgba(18, 18, 20, 0));
  --blue-gradient-right: linear-gradient(
    90deg,
    #202024,
    rgba(32, 32, 36, 0.25)
  );
  --green-darker: #0f3924;
  --linear: linear-gradient(
    270deg,
    rgba(50, 50, 56, 0),
    rgb(50, 50, 56) 113.36%
  );
}

.container {
  background: var(--color-background);
  font-family: "Roboto", sans-serif;
}
</style>
