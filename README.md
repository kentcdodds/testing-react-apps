<div>
  <h1 align="center"><a href="https://epicreact.dev/testing">🧐 Testing React Applications 🚀 EpicReact.Dev</a></h1>
  <strong>
    Learn the essential tools and techniques to ship with confidence
  </strong>
  <p>
    In this hands-on workshop you'll learn everything you need to test React
    components and applications with ease and get the knowledge you need to ship
    your applications with confidence.
  </p>

  <a href="https://epicreact.dev">
    <img
      alt="Learn React from Start to Finish"
      src="https://kentcdodds.com/images/epicreact-promo/er-1.gif"
    />
  </a>
</div>

<hr />

<!-- prettier-ignore-start -->
[![Build Status][build-badge]][build]
[![All Contributors][all-contributors-badge]](#contributors)
[![GPL 3.0 License][license-badge]][license]
[![Code of Conduct][coc-badge]][coc]
<!-- prettier-ignore-end -->

## Prerequisites

- Read
  [But really, what is a JavaScript Test?](https://kentcdodds.com/blog/but-really-what-is-a-javascript-test)
- Read
  [But really, what is a JavaScript Mock?](https://kentcdodds.com/blog/but-really-what-is-a-javascript-mock)

## System Requirements

- [git][git] v2.13 or greater
- [NodeJS][node] `12 || 14 || 15 || 16`
- [npm][npm] v6 or greater

All of these must be available in your `PATH`. To verify things are set up
properly, you can run this:

```shell
git --version
node --version
npm --version
```

If you have trouble with any of these, learn more about the PATH environment
variable and how to fix it here for [windows][win-path] or
[mac/linux][mac-path].

## Setup

> If you want to commit and push your work as you go, you'll want to
> [fork](https://docs.github.com/en/free-pro-team@latest/github/getting-started-with-github/fork-a-repo)
> first and then clone your fork rather than this repo directly.

After you've made sure to have the correct things (and versions) installed, you
should be able to just run a few commands to get set up:

```
git clone https://github.com/kentcdodds/testing-react-apps.git
cd testing-react-apps
node setup
```

This may take a few minutes. **It will ask you for your email.** This is
optional and just automatically adds your email to the links in the project to
make filling out some forms easier.

If you get any errors, please read through them and see if you can find out what
the problem is. If you can't work it out on your own then please [file an
issue][issue] and provide _all_ the output from the commands you ran (even if
it's a lot).

If you can't get the setup script to work, then just make sure you have the
right versions of the requirements listed above, and run the following commands:

```
npm install
npm run validate
```

If you are still unable to fix issues and you know how to use Docker 🐳 you can
setup the project with the following command:

```
docker-compose up
```

It's recommended you run everything locally in the same environment you work in
every day, but if you're having issues getting things set up, you can also set
this up using [GitHub Codespaces](https://github.com/features/codespaces)
([video demo](https://www.youtube.com/watch?v=gCoVJm3hGk4)) or
[Codesandbox](https://codesandbox.io/s/github/kentcdodds/testing-react-apps).

## Running the app

For this one, there's not much to the app itself. The whole reason we have the
app is just so you can see examples of the components that we'll be testing.
You'll spend most of your time in the tests.

To get the app up and running, run:

```shell
npm start
```

This should start up your browser. If you're familiar, this is a standard
[react-scripts](https://create-react-app.dev/) application.

You can also open
[the deployment of the app on Netlify](https://testing-react-apps.netlify.app/).

## Running the tests

```shell
npm test
```

This will start [Jest](https://jestjs.io/) in watch mode. Read the output and
play around with it. The tests are there to help you reach the final version,
however _sometimes_ you can accomplish the task and the tests still fail if you
implement things differently than I do in my solution, so don't look to them as
a complete authority.

### Exercises

- `src/__tests__/exercise/00.md`: Background, Exercise Instructions, Extra
  Credit
- `src/__tests__/exercise/00.js`: Exercise with Emoji helpers
- `src/__tests__/final/00.js`: Final version
- `src/__tests__/final/00.extra-0.js`: Final version of extra credit

The purpose of the exercise is **not** for you to work through all the material.
It's intended to get your brain thinking about the right questions to ask me as
_I_ walk through the material.

### Helpful Emoji 🐨 💪 🏁 💰 💯 🦉 📜 💣 👨‍💼 🚨

Each exercise has comments in it to help you get through the exercise. These fun
emoji characters are here to help you.

- **Kody the Koala** 🐨 will tell you when there's something specific you should
  do
- **Matthew the Muscle** 💪 will indicate that you're working with an exercise
- **Chuck the Checkered Flag** 🏁 will indicate that you're working with a final
  version
- **Marty the Money Bag** 💰 will give you specific tips (and sometimes code)
  along the way
- **Hannah the Hundred** 💯 will give you extra challenges you can do if you
  finish the exercises early.
- **Olivia the Owl** 🦉 will give you useful tidbits/best practice notes and a
  link for elaboration and feedback.
- **Dominic the Document** 📜 will give you links to useful documentation
- **Berry the Bomb** 💣 will be hanging around anywhere you need to blow stuff
  up (delete code)
- **Peter the Product Manager** 👨‍💼 helps us know what our users want
- **Alfred the Alert** 🚨 will occasionally show up in the test failures with
  potential explanations for why the tests are failing.

## Contributors

Thanks goes to these wonderful people
([emoji key](https://github.com/kentcdodds/all-contributors#emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://kentcdodds.com"><img src="https://avatars.githubusercontent.com/u/1500684?v=3?s=100" width="100px;" alt=""/><br /><sub><b>Kent C. Dodds</b></sub></a><br /><a href="https://github.com/kentcdodds/testing-react-apps/commits?author=kentcdodds" title="Code">💻</a> <a href="https://github.com/kentcdodds/testing-react-apps/commits?author=kentcdodds" title="Documentation">📖</a> <a href="#infra-kentcdodds" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> <a href="https://github.com/kentcdodds/testing-react-apps/commits?author=kentcdodds" title="Tests">⚠️</a></td>
    <td align="center"><a href="https://relayr.io/"><img src="https://avatars1.githubusercontent.com/u/32642691?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Gautam Pahuja</b></sub></a><br /><a href="https://github.com/kentcdodds/testing-react-apps/commits?author=gautam-pahuja" title="Tests">⚠️</a></td>
    <td align="center"><a href="https://github.com/pom421"><img src="https://avatars1.githubusercontent.com/u/3749428?v=4?s=100" width="100px;" alt=""/><br /><sub><b>pom421</b></sub></a><br /><a href="https://github.com/kentcdodds/testing-react-apps/commits?author=pom421" title="Documentation">📖</a></td>
    <td align="center"><a href="https://github.com/marcosvega91"><img src="https://avatars2.githubusercontent.com/u/5365582?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Marco Moretti</b></sub></a><br /><a href="https://github.com/kentcdodds/testing-react-apps/commits?author=marcosvega91" title="Code">💻</a></td>
    <td align="center"><a href="https://www.linkedin.com/in/pritamsangani/"><img src="https://avatars3.githubusercontent.com/u/22857896?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Pritam Sangani</b></sub></a><br /><a href="https://github.com/kentcdodds/testing-react-apps/commits?author=PritamSangani" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/emzoumpo"><img src="https://avatars2.githubusercontent.com/u/2103443?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Emmanouil Zoumpoulakis</b></sub></a><br /><a href="https://github.com/kentcdodds/testing-react-apps/commits?author=emzoumpo" title="Documentation">📖</a></td>
    <td align="center"><a href="http://peter.hozak.info/"><img src="https://avatars0.githubusercontent.com/u/1087670?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Peter Hozák</b></sub></a><br /><a href="https://github.com/kentcdodds/testing-react-apps/commits?author=Aprillion" title="Code">💻</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://github.com/milamer"><img src="https://avatars2.githubusercontent.com/u/12884134?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Christian Schurr</b></sub></a><br /><a href="https://github.com/kentcdodds/testing-react-apps/commits?author=milamer" title="Code">💻</a> <a href="https://github.com/kentcdodds/testing-react-apps/commits?author=milamer" title="Documentation">📖</a></td>
    <td align="center"><a href="https://github.com/tiodan81"><img src="https://avatars2.githubusercontent.com/u/13711104?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Dan Schwartz</b></sub></a><br /><a href="https://github.com/kentcdodds/testing-react-apps/commits?author=tiodan81" title="Documentation">📖</a></td>
    <td align="center"><a href="http://wbeuil.com"><img src="https://avatars1.githubusercontent.com/u/8110579?v=4?s=100" width="100px;" alt=""/><br /><sub><b>William BEUIL</b></sub></a><br /><a href="https://github.com/kentcdodds/testing-react-apps/commits?author=wbeuil" title="Documentation">📖</a></td>
    <td align="center"><a href="https://vk.com/vasilii_kovalev"><img src="https://avatars0.githubusercontent.com/u/10310491?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Vasilii Kovalev</b></sub></a><br /><a href="https://github.com/kentcdodds/testing-react-apps/issues?q=author%3Avasilii-kovalev" title="Bug reports">🐛</a></td>
    <td align="center"><a href="https://github.com/RobbertWolfs"><img src="https://avatars2.githubusercontent.com/u/12511178?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Robbert Wolfs</b></sub></a><br /><a href="https://github.com/kentcdodds/testing-react-apps/issues?q=author%3ARobbertWolfs" title="Bug reports">🐛</a></td>
    <td align="center"><a href="http://twitter.com/peramanathan"><img src="https://avatars2.githubusercontent.com/u/9104920?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Peramanathan Sathyamoorthy</b></sub></a><br /><a href="https://github.com/kentcdodds/testing-react-apps/commits?author=p10ns11y" title="Tests">⚠️</a> <a href="https://github.com/kentcdodds/testing-react-apps/commits?author=p10ns11y" title="Code">💻</a></td>
    <td align="center"><a href="https://michaeldeboey.be"><img src="https://avatars3.githubusercontent.com/u/6643991?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Michaël De Boey</b></sub></a><br /><a href="https://github.com/kentcdodds/testing-react-apps/commits?author=MichaelDeBoey" title="Code">💻</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://bartwijnants.be/"><img src="https://avatars1.githubusercontent.com/u/822859?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Bart Wijnants</b></sub></a><br /><a href="https://github.com/kentcdodds/testing-react-apps/commits?author=bartw" title="Documentation">📖</a></td>
    <td align="center"><a href="https://www.daleseo.com"><img src="https://avatars1.githubusercontent.com/u/5466341?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Dale Seo</b></sub></a><br /><a href="https://github.com/kentcdodds/testing-react-apps/commits?author=DaleSeo" title="Code">💻</a> <a href="https://github.com/kentcdodds/testing-react-apps/commits?author=DaleSeo" title="Documentation">📖</a></td>
    <td align="center"><a href="https://github.com/falldowngoboone"><img src="https://avatars0.githubusercontent.com/u/3603771?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Ryan Boone</b></sub></a><br /><a href="https://github.com/kentcdodds/testing-react-apps/commits?author=falldowngoboone" title="Documentation">📖</a></td>
    <td align="center"><a href="https://bobowen.tech"><img src="https://avatars3.githubusercontent.com/u/603731?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Bob Owen</b></sub></a><br /><a href="https://github.com/kentcdodds/testing-react-apps/commits?author=onetruebob" title="Code">💻</a> <a href="https://github.com/kentcdodds/testing-react-apps/commits?author=onetruebob" title="Documentation">📖</a></td>
    <td align="center"><a href="http://www.sharpbites.com"><img src="https://avatars.githubusercontent.com/u/72561?v=4?s=100" width="100px;" alt=""/><br /><sub><b>alberto</b></sub></a><br /><a href="https://github.com/kentcdodds/testing-react-apps/commits?author=alberto" title="Documentation">📖</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the
[all-contributors](https://github.com/kentcdodds/all-contributors)
specification. Contributions of any kind welcome!

## Workshop Feedback

Each exercise has an Elaboration and Feedback link. Please fill that out after
the exercise and instruction.

At the end of the workshop, please go to this URL to give overall feedback.
Thank you! https://kcd.im/tra-ws-feedback

<!-- prettier-ignore-start -->
[npm]: https://www.npmjs.com/
[node]: https://nodejs.org
[git]: https://git-scm.com/
[build-badge]: https://img.shields.io/github/workflow/status/kentcdodds/testing-react-apps/validate/main?logo=github&style=flat-square
[build]: https://github.com/kentcdodds/testing-react-apps/actions?query=workflow%3Avalidate
[license-badge]: https://img.shields.io/badge/license-GPL%203.0%20License-blue.svg?style=flat-square
[license]: https://github.com/kentcdodds/testing-react-apps/blob/main/LICENSE
[coc-badge]: https://img.shields.io/badge/code%20of-conduct-ff69b4.svg?style=flat-square
[coc]: https://github.com/kentcdodds/testing-react-apps/blob/main/CODE_OF_CONDUCT.md
[emojis]: https://github.com/kentcdodds/all-contributors#emoji-key
[all-contributors]: https://github.com/kentcdodds/all-contributors
[all-contributors-badge]: https://img.shields.io/github/all-contributors/kentcdodds/testing-react-apps?color=orange&style=flat-square
[win-path]: https://www.howtogeek.com/118594/how-to-edit-your-system-path-for-easy-command-line-access/
[mac-path]: http://stackoverflow.com/a/24322978/971592
[issue]: https://github.com/kentcdodds/testing-react-apps/issues/new
<!-- prettier-ignore-end -->
