Hinge HTTP Server Output for Écoute
===================================
An [Écoute][ecoute-core] transform output that creates a HTTP-server from a given key-value output using [Hinge][hinge].

[hinge]: https://github.com/gausby/hinge
[ecoute-core]: https://github.com/gausby/ecoute

This outputer should only be used for development.


## Usage
Attach it as an output of an Écoute data transformer. It takes two configuration options:

  * `port` The port number the server should respond to. Default is *8080*.

  * `contentType` The content type the server will send. Default is *text/html*.

Options should get passed in as an Object.


## Development
The project scaffold includes unit test framework, and other QA tools, but they are not set up yet. This might happen eventually, but this module is not yet ment for production usage.


## License
The MIT License (MIT)

Copyright (c) 2013 Martin Gausby

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
