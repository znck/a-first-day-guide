<template lang="html">
<Keynote @keydown.alt.meta.up="fullscreen" tabindex="1">
  <AuthorSlide name="Rahul Kadyan" v-bind="{ photo }" animation="slide-in-right">
    <small>Vue.js Core Team Member</small>
    |
    <small>Developer @ Scalex</small>
  </AuthorSlide>

  <TitleSlide title="A First Day Guide" animation="slide-in-right">
    Quick introduction to Vue.js
  </TitleSlide>

  <PhotoTitleSlide title="Contents" right vertical
                   photo="https://cdn.meme.am/cache/instances/folder561/500x/72732561.jpg"
                   animation="slide-in-right">
    <ul class="d-inline-block text-left">
      <li>Why?</li>
      <li>What?</li>
      <li>How?</li>
      <li>And...</li>
    </ul>
  </PhotoTitleSlide>

  <TitleSlide title="Why Vue.js?" animation="slide-in-right">
    <h1>Simplicity</h1>
    <h2>Learning Curve</h2>
    <h3>Progressive</h3>
    <h4>Incrementally Adoptable</h4>
    <h5>Performance</h5>
    <h5>
      <small>SPA</small>
    </h5>
  </TitleSlide>

  <Slide class="center" animation="slide-in-bottom">
    <h3>https://about.gitlab.com/2016/10/20/<b class="text-primary">why-we-chose-vue</b>/</h3>
  </Slide>

  <TitleSlide title="What does Vue.js offers?" animation="slide-in-right">
    <ul class="d-inline-block text-left">
      <li>Reactive Interfaces</li>
      <li>Declarative Rendering</li>
      <li>Data Binding</li>
      <li>Directives</li>
      <li>Template Logic</li>
      <li>Components</li>
    </ul>

    <ul class="d-inline-block text-left">
      <li>Event Handling</li>
      <li>Computed Properties</li>
      <li>Transitions & Animations</li>
      <li>Filters</li>
      <li>Single File Components</li>
      <li>Mixins</li>
    </ul>
  </TitleSlide>

  <TitleSlide title="Reactive Interfaces" animation="slide-in-bottom">

  </TitleSlide>

  <TitleSlide title="Declarative Rendering" animation="slide-in-bottom"/>
  <TitleSlide title="Declarative Rendering" animation="slide-in-bottom">
    <Markdown v-pre>
      ```html
      &lt;div&gt;Hello {{ name }}&lt;/div&gt;
      ```
    </Markdown>

    <Markdown>
      ```jsx
      render () {
        return (&lt;div&gt;Hello {this.name}&lt;/div&gt;)
      }
      ```
    </Markdown>

    <Markdown>
      ```js
      render (h) {
        return h('div', 'Hello ' + this.name)
      }
      ```
    </Markdown>
  </TitleSlide>

  <TitleSlide title="Directives" animation="slide-in-bottom"/>
  <TitleSlide title="Directives" animation="slide-in-bottom">
    <Markdown v-pre>
      ```html
      &lt;div v-show="foo"&gt;Hello&lt;/div&gt;
      ```

      ```html
      v-name:argument.modifier1.modifier2="expression"
      ```
    </Markdown>
  </TitleSlide>

  <TitleSlide title="Data Binding" animation="slide-in-bottom"/>
  <TitleSlide title="Data Binding" animation="slide-in-bottom">
    <Markdown v-pre>
      ```html
      &lt;input id="app" v-bind:class="style" v-model="name"&gt;
      ```

      ```js
      new Vue({
        el: '#app',

        data: () => ({
          style: 'red',
          name: 'John Doe'
        })
      })
      ```
    </Markdown>
  </TitleSlide>

  <TitleSlide title="Template Logic" animation="slide-in-bottom"/>
  <TitleSlide title="Template Logic" animation="slide-in-bottom">
    <Markdown v-pre>
      ```html
      &lt;div v-if="x > 0"&gt;None&lt;div&gt;
      &lt;div v-else-if="x === 1"&gt;One&lt;div&gt;
      &lt;div v-else&gt;Many&lt;div&gt;
      ```
      ```html
      &lt;div v-for="i in 5"&gt;{{ i }}&lt;div&gt;
      ```
    </Markdown>
  </TitleSlide>

  <TitleSlide title="Components" animation="slide-in-bottom"/>
  <TitleSlide title="Components" animation="slide-in-bottom">
    <Markdown v-pre>
      ```js
      Vue.component('name-component', {
        template: `
          &lt;div&gt;My name is {{ name }}.&lt;/div&gt;
        `,

        props: ['name']
      })
      ```
      ```html
      &lt;name-component name="John Doe"&gt;&lt;/name-component&gt;
      ```
    </Markdown>
  </TitleSlide>

  <TitleSlide title="Event Handling" animation="slide-in-bottom"/>
  <TitleSlide title="Event Handling" animation="slide-in-bottom">
    <Markdown v-pre>
      ```html
      Clicks: {{ count }}

      &lt;button v-on:click="count++"&gt;Click Me&lt;/button&gt;
      ```
    </Markdown>
  </TitleSlide>

  <TitleSlide title="Computed Properties & Watchers" animation="slide-in-bottom"/>
  <TitleSlide title="Computed Properties" animation="slide-in-bottom">
    <Markdown v-pre>
      ```js
      ...
      data: () => ({ first_name: 'John', last_name: 'Doe' }),

      computed: {
        name () {
          return this.first_name + ' ' + this.last_name // John Doe
        }
      }
      ```
    </Markdown>
  </TitleSlide>
  <TitleSlide title="Watchers" animation="slide-in-bottom">
    <Markdown v-pre>
      ```js
      ...
      data: () => ({ name: 'John Doe', first_name: '', last_name: '' }),

      watch: {
        name (value) {
          const parts = value.split(' ')
          this.first_name = parts.shift()
          this.last_name = parts.join(' ')
        }
      }
      ```
    </Markdown>
  </TitleSlide>

  <TitleSlide title="Filters" animation="slide-in-bottom"/>
  <TitleSlide title="Filters" animation="slide-in-bottom">
    <Markdown v-pre>
      ```html
      {{ name | uppercase }}
      ```
    </Markdown>
  </TitleSlide>

  <TitleSlide title="Single File Components" animation="slide-in-bottom"/>

  <TitleSlide title="Mixins" animation="slide-in-bottom"/>


  <TitleSlide title="How?" animation="slide-in-right"/>
  <TitleSlide title="Resources & Tutorials" animation="slide-in-bottom">
    <h1>vuejs.org</h1>
    <h2>Laracasts</h2>
  </TitleSlide>
  <TitleSlide title="Questions & Discussions" animation="slide-in-bottom">
    <h1>forum.vuejs.org</h1>
    <h2>gitter.im/vuejs/vue</h2>
    <h3>vue.js tag on stackoverflow</h3>
  </TitleSlide>
  <TitleSlide title="News & Updates" animation="slide-in-bottom">
    <h1>medium.com/the-vue-point</h1>
    <h2>@vuejs</h2>
    <h3>vue-newsletter</h3>
  </TitleSlide>

  <TitleSlide title="And..." animation="slide-in-right"/>
  <TitleSlide title="Vuex">
    State Management
  </TitleSlide>
  <TitleSlide title="Vue Router">
    Routing
  </TitleSlide>
  <TitleSlide title="Vue Devtools">
    Chrome devtools extension
  </TitleSlide>
  <TitleSlide title="Vue CLI">
    Project scaffolding & building
  </TitleSlide>
</Keynote>
</template>

<script lang="babel">
import 'prismjs/components/prism-jsx'
import photo from './assets/author.jpg'

export default {
  name: 'A-First-Day-Guide',

  data: () => ({}),

  computed: {
    photo: () => photo
  },

  mounted () {
    document.title = 'A First Day Guide'
  }
}
</script>


<style lang="scss">
@import './node_modules/vue-keynote/dist/vue-keynote.css';
@import './node_modules/prismjs/themes/prism.css';

html, body {
  font-size: 24px;
}

.text-left {
  text-align: left;
}

.text-primary {
  color: #41b883;
}

.d-inline-block {
  display: inline-block !important;
}

.slide.slide-photo-title.vertical .photo {
  height: 100% !important;
  object-fit: contain;
}

.no-margin {
  padding: 0 !important;
}
</style>
