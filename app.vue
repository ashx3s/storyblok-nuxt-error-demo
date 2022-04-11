<template>
  <main>
    <header>
      <h1>A Test Repository</h1>
      <p>For debugging Storyblok Nuxt 3</p>
    </header>
    <section>
      <header>
        <h2>Error Output</h2>
        <p>
          A quick view of the error message. This is done after the node
          modules folder is removed and then <code>npm i</code> is ran
          again.
        </p>
      </header>
      <div>
        <code> </code>
      </div>
    </section>
  </main>
</template>
<style>
h1,
p {
  font-family: sans-serif;
}
header {
  display: grid;
  place-items: center;
}
</style>
