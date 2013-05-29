# Installation

- `rvm --create --rvmrc 1.9.3@grunterplate`
- `cd .. && cd grunterplate`
- `gem install bundler`
- `bundle install`
- `brew install phantomjs`
- `npm install`

Run `grunt --verbose` and make some changes to watch the magics. You can also run `grunt taskname` to run an individual task without watching.

To install a new module, run `npm install modulename --save`, which will both install it and save it to the package.json file.
