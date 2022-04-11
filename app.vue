<template>
  <main>
    <header>
      <h1>A Test Repository</h1>
      <p>For debugging Storyblok Nuxt 3</p>
    </header>
    <article>
      <header>
        <h2>Error Messages</h2>
        <p>
          A quick view of the error message. This is done after the node
          modules folder is removed and then <code>npm i</code> is ran
          again.
        </p>
      </header>
      <section>
        <h3><code>npm i</code> output</h3>
        <code>
          ERROR Cannot start nuxt: Cannot find module
          '@nuxtjs/composition-api' 14:34:24 Require stack: -
          /home//storyblok-nuxt-error-demo/node_modules/@storyblok/nuxt/dist/storyblok-nuxt.js
          Require stack: -
          node_modules/@storyblok/nuxt/dist/storyblok-nuxt.js at
          Function.Module._resolveFilename
          (node:internal/modules/cjs/loader:933:15) at Function.resolve
          (node:internal/modules/cjs/helpers:108:19) at _resolve
          (node_modules/jiti/dist/jiti.js:1:192841) at jiti
          (node_modules/jiti/dist/jiti.js:1:195025) at
          node_modules/@storyblok/nuxt/dist/storyblok-nuxt.js:1:217 at
          node_modules/@storyblok/nuxt/dist/storyblok-nuxt.js:1:523 at jiti
          (node_modules/jiti/dist/jiti.js:1:196506) at requireModule
          (node_modules/@nuxt/kit/dist/index.mjs:255:26) at normalizeModule
          (node_modules/@nuxt/kit/dist/index.mjs:408:53) at installModule
          (node_modules/@nuxt/kit/dist/index.mjs:391:47)
        </code>
      </section>
      <section>
        <h3>Applying Fix</h3>
        <ol>
          <li>Comment out all storyblok content from your config</li>
          <li><code>npm remove @storyblok/nuxt</code></li>
          <li><code>rm -rf node_modules package-lock.json</code> -- necessary before reinstall</li>
          <li><code>npm i</code></li>
          <li><code>npm run dev</code> -- to verify that it worked</li>
          <li><code>npm i @storyblok/nuxt@next</code></li>
          <li>Uncomment storyblok content from the nuxt config</li>
        </ol>
        <p>Now everything should work again</p>
        <div>
          <h4>Note: If you don't remove the package-lock.json file, you will get this error</h4>
          <code>
             ERROR  Cannot start nuxt:  Cannot find module '@nuxt/vite-builder'                                                                 14:42:09
Require stack:
- storyblok-nuxt-error-demo/index.js

  Require stack:
  - index.js
  at Function.Module._resolveFilename (node:internal/modules/cjs/loader:933:15)
  at Function.resolve (node:internal/modules/cjs/helpers:108:19)
  at Function._resolve [as resolve] (node_modules/jiti/dist/jiti.js:1:192841)
  at resolveModule (node_modules/@nuxt/kit/dist/index.mjs:236:29)
  at importModule (node_modules/@nuxt/kit/dist/index.mjs:259:24)
  at bundle (node_modules/nuxt3/dist/index.mjs:1664:82)
  at build (node_modules/nuxt3/dist/index.mjs:1639:11)
  at async Promise.all (index 1)
  at async load (node_modules/nuxi/dist/chunks/dev.mjs:6760:9)
  at async Object.invoke (node_modules/nuxi/dist/chunks/dev.mjs:6801:5)
          </code>
        </div>
      </section>
    </article>
  </main>
</template>

<style>
h1,
h2,
h3,
p {
  font-family: sans-serif;
}
header {
  display: grid;
  place-items: center;
}
</style>
