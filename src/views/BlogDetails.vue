<template>
    <section class="blog_area single-post-area section-padding2">
        <div class="container">
            <div class="row ">
                
                <div class="col-lg-9 col-md-11 col-sm-12 posts-list story center-block">
                    <div class="section-tittle text-center">
                            <h2>Let's Debug a Node.js Application</h2>
                        </div>
                    
		    
                    <div class="">
                        <div class="single-post">
                        <div class="blog_details">
                                <div>
                                    <textarea id="textToSpeech" hidden="">There are always challenges when it comes to debugging applications. Node.js' asynchronous workflows add an extra layer of complexity to this arduous process. Although there have been some updates made to the V8 engine in order to easily access asynchronous stack traces, most of the time, we just get errors on the main thread of our applications, which makes debugging a little bit difficult. As well, when our Node.js applications crash, we usually need to&nbsp;rely on some complicated CLI tooling to analyze the core dumps.In this article, we'll take a look at some easier ways to debug your Node.js applications.LoggingOf course, no developer toolkit is complete without logging. We tend to place&nbsp;console.log&nbsp;statements all over our code in local development, but this is not a really scalable strategy in production. You would likely need to do some filtering and cleanup, or implement a consistent logging strategy, in order to identify important information from genuine errors.Instead, to implement a proper log-oriented debugging strategy, use a logging tool like&nbsp;Pino&nbsp;or&nbsp;Winston. These will allow you to set log levels (INFO,&nbsp;WARN,&nbsp;ERROR), allowing you to print verbose log messages locally and only severe ones for production. You can also stream these logs to aggregators, or other endpoints, like LogStash, Papertrail, or even Slack.Working with Node Inspect and Chrome DevToolsLogging can only take us so far in understanding why an application is not working the way we would expect. For sophisticated debugging sessions, we will want to use breakpoints to inspect how our code behaves at the moment it is being executed.To do this, we can use Node Inspect. Node Inspect is a debugging tool which comes with Node.js. It's actually just an implementation of&nbsp;Chrome DevTools&nbsp;for your program, letting you add breakpoints, control step-by-step execution, view variables, and follow the call stack.There are a couple of ways to launch Node Inspect, but the easiest is perhaps to just call your Node.js application with the&nbsp;--inspect-brk&nbsp;flag:$ node --inspect-brk $your_script_name
                        After launching your program, head to the&nbsp;chrome://inspect&nbsp;URL in your Chrome browser to get to the Chrome DevTools. With Chrome DevTools, you have all of the capabilities you'd normally expect when debugging JavaScript in the browser. One of the nicer tools is&nbsp;the ability to inspect memory. You can&nbsp;take heap snapshots&nbsp;and profile memory usage to understand how memory is being allocated, and potentially, plug any memory leaks.Using a supported IDERather than launching your program in a certain way, many modern IDEs also support debugging Node applications. In addition to having many of the features found in Chrome DevTools, they bring their own features, such as&nbsp;creating logpoints&nbsp;and allowing you to create multiple debugging profiles. Check out&nbsp;the Node.js' guide on inspector clients&nbsp;for more information on these IDEs.Using NDBAnother option is to install&nbsp;ndb, a standalone debugger for Node.js. It makes use of the same DevTools that are available in the browser, just as an isolated, local debugger. It also has some extra features that aren't available in DevTools. It supports edit-in-place, which means you can make changes to your code and have the updated logic supported directly by the debugger platform. This is very useful for doing quick iterations.Post-Mortem DebuggingSuppose your application crashes due to a catastrophic error, like a memory access error. These may be rare, but they do happen, particularly if your app relies on native code.To investigate these sorts of issues, you can use&nbsp;llnode. When your program crashes,&nbsp;llnode&nbsp;can be used to inspect JavaScript stack frames and objects by mapping them to objects on the C/C++ side. In order to use it, you first need a core dump of your program. To do this, you will need to use&nbsp;process.abort&nbsp;instead of&nbsp;process.exit&nbsp;to shut down processes in your code. When you use&nbsp;process.abort, the Node process generates a core dump file on exit.To better understand what&nbsp;llnode&nbsp;can provide,&nbsp;here is a video&nbsp;which demonstrates some of its capabilities.Useful Node ModulesAside from all of the above, there are also a few third-party packages that we can recommend for further debugging.debugThe first of these is called, simply enough,&nbsp;debug. With debug, you can assign a specific namespace to your log messages, based on a function name or an entire module. You can then selectively choose which messages are printed to the console via a specific environment variable.For example, here's a Node.js server which is logging several messages from the entire application and middleware stack, like&nbsp;sequelize,&nbsp;express:application, and&nbsp;express:router:If we set the&nbsp;DEBUG&nbsp;environment variable to&nbsp;express:router&nbsp;and start the same program, only the messages tagged as&nbsp;express:router&nbsp;are shown:By filtering messages in this way, we can hone in on how a single segment of the application is behaving, without needing to drastically change the logging of the code.trace and clarifyTwo more modules that go together are&nbsp;trace&nbsp;and&nbsp;clarify.trace&nbsp;augments your asynchronous stack traces by providing much more detailed information on the async methods that are being called, a roadmap which Node.js does not provide by default.&nbsp;clarify&nbsp;helps by removing all of the information from stack traces which are specific to Node.js internals. This allows you to concentrate on the function calls that are just specific to your application.Neither of these modules are recommended for running in production! You should only enable them when debugging issues in your local development environment.Find out moreIf you'd like to follow along with how to use these debugging tools in practice,&nbsp;here is a video recording&nbsp;which provides more detail. It includes some live demos of how to narrow in on problems in your code. Or, if you have any other questions, you can find me on Twitter&nbsp;@julian_duque!</textarea>
                                </div>
                                <ul>
                                
                                    <div class="author mb-4 d-flex align-items-center">
                                        <a href="#" class="img" style="background-image: url(/static/app/img/blog/author.png);"></a>
                                        <div class="ml-3 info">
                                            <span>Written by</span>
                                            <h3><a href="/author/puneethreddyhc.html" title="View all articles published by puneethreddyhc" rel="author"><span itemprop="author" itemscope="" itemtype="http://schema.org/Person">
                                        <span itemprop="name">puneethreddyhc</span></span></a>, <span>Aug 10, 2020</span></h3>
                                        </div>
                                    </div>
                                    
                                <!-- .entry-meta -->
                            


                                </ul>
                            <p class="excert">
                                </p><p style="margin-bottom: 30px; color: rgb(50, 56, 57); font-family: BentonSans, &quot;Helvetica Neue&quot;, sans-serif; font-size: 15px;">There are always challenges when it comes to debugging applications. Node.js' asynchronous workflows add an extra layer of complexity to this arduous process. Although there have been some updates made to the V8 engine in order to easily access asynchronous stack traces, most of the time, we just get errors on the main thread of our applications, which makes debugging a little bit difficult. As well, when our Node.js applications crash, we usually need to&nbsp;<a href="https://www.ibm.com/developerworks/library/wa-ibm-node-enterprise-dump-debug-sdk-nodejs-trs/index.html" style="color: rgb(25, 105, 202); text-decoration-line: underline; transition: color 0.1s linear 0s;">rely on some complicated CLI tooling to analyze the core dumps</a>.</p><p style="margin-bottom: 30px; color: rgb(50, 56, 57); font-family: BentonSans, &quot;Helvetica Neue&quot;, sans-serif; font-size: 15px;">In this article, we'll take a look at some easier ways to debug your Node.js applications.</p><h2 class="anchored" style="margin: 0px 0px 0.5em; line-height: 1.2; font-weight: 700; font-size: 24px; color: rgb(121, 88, 159); font-family: BentonSans, &quot;Helvetica Neue&quot;, sans-serif;"><a name="logging" href="https://blog.heroku.com/debug-node-applications#logging" style="color: rgb(121, 88, 159); transition: color 0.1s linear 0s;">Logging</a></h2><p style="margin-bottom: 30px; color: rgb(50, 56, 57); font-family: BentonSans, &quot;Helvetica Neue&quot;, sans-serif; font-size: 15px;">Of course, no developer toolkit is complete without logging. We tend to place&nbsp;<code style="font-family: Inconsolata, monospace; font-size: inherit; background: rgb(238, 241, 246); display: inline-block; padding: 0px 5px; border-radius: 3px;">console.log</code>&nbsp;statements all over our code in local development, but this is not a really scalable strategy in production. You would likely need to do some filtering and cleanup, or implement a consistent logging strategy, in order to identify important information from genuine errors.</p><p style="margin-bottom: 30px; color: rgb(50, 56, 57); font-family: BentonSans, &quot;Helvetica Neue&quot;, sans-serif; font-size: 15px;">Instead, to implement a proper log-oriented debugging strategy, use a logging tool like&nbsp;<a href="https://github.com/pinojs/pino" style="color: rgb(25, 105, 202); text-decoration-line: underline; transition: color 0.1s linear 0s;">Pino</a>&nbsp;or&nbsp;<a href="https://github.com/winstonjs/winston" style="color: rgb(25, 105, 202); text-decoration-line: underline; transition: color 0.1s linear 0s;">Winston</a>. These will allow you to set log levels (<code style="font-family: Inconsolata, monospace; font-size: inherit; background: rgb(238, 241, 246); display: inline-block; padding: 0px 5px; border-radius: 3px;">INFO</code>,&nbsp;<code style="font-family: Inconsolata, monospace; font-size: inherit; background: rgb(238, 241, 246); display: inline-block; padding: 0px 5px; border-radius: 3px;">WARN</code>,&nbsp;<code style="font-family: Inconsolata, monospace; font-size: inherit; background: rgb(238, 241, 246); display: inline-block; padding: 0px 5px; border-radius: 3px;">ERROR</code>), allowing you to print verbose log messages locally and only severe ones for production. You can also stream these logs to aggregators, or other endpoints, like LogStash, Papertrail, or even Slack.</p><h2 class="anchored" style="margin: 0px 0px 0.5em; line-height: 1.2; font-weight: 700; font-size: 24px; color: rgb(121, 88, 159); font-family: BentonSans, &quot;Helvetica Neue&quot;, sans-serif;"><a name="working-with-node-inspect-and-chrome-devtools" href="https://blog.heroku.com/debug-node-applications#working-with-node-inspect-and-chrome-devtools" style="color: rgb(121, 88, 159); transition: color 0.1s linear 0s;">Working with Node Inspect and Chrome DevTools</a></h2><p style="margin-bottom: 30px; color: rgb(50, 56, 57); font-family: BentonSans, &quot;Helvetica Neue&quot;, sans-serif; font-size: 15px;">Logging can only take us so far in understanding why an application is not working the way we would expect. For sophisticated debugging sessions, we will want to use breakpoints to inspect how our code behaves at the moment it is being executed.</p><p style="margin-bottom: 30px; color: rgb(50, 56, 57); font-family: BentonSans, &quot;Helvetica Neue&quot;, sans-serif; font-size: 15px;">To do this, we can use Node Inspect. Node Inspect is a debugging tool which comes with Node.js. It's actually just an implementation of&nbsp;<a href="https://developers.google.com/web/tools/chrome-devtools/" style="color: rgb(25, 105, 202); text-decoration-line: underline; transition: color 0.1s linear 0s;">Chrome DevTools</a>&nbsp;for your program, letting you add breakpoints, control step-by-step execution, view variables, and follow the call stack.</p><p style="margin-bottom: 30px; color: rgb(50, 56, 57); font-family: BentonSans, &quot;Helvetica Neue&quot;, sans-serif; font-size: 15px;">There are a couple of ways to launch Node Inspect, but the easiest is perhaps to just call your Node.js application with the&nbsp;<code style="font-family: Inconsolata, monospace; font-size: inherit; background: rgb(238, 241, 246); display: inline-block; padding: 0px 5px; border-radius: 3px;">--inspect-brk</code>&nbsp;flag:</p><pre style="font-family: Inconsolata, monospace; background: rgb(238, 241, 246); padding: 20px 30px; border-radius: 7px; box-shadow: none; margin-bottom: 30px; line-height: 18px; color: rgb(50, 56, 57);"><code class="bash" style="font-family: Inconsolata, monospace; font-size: 14px; background: rgb(238, 241, 246); display: inline-block; border-radius: 3px;">$ node --inspect-brk $your_script_name
                        </code></pre><p style="margin-bottom: 30px; color: rgb(50, 56, 57); font-family: BentonSans, &quot;Helvetica Neue&quot;, sans-serif; font-size: 15px;"><img src="https://heroku-blog-files.s3.amazonaws.com/posts/1595873126-image1.png" alt="Node inspector" style="max-width: 100%;"></p><p style="margin-bottom: 30px; color: rgb(50, 56, 57); font-family: BentonSans, &quot;Helvetica Neue&quot;, sans-serif; font-size: 15px;">After launching your program, head to the&nbsp;<code style="font-family: Inconsolata, monospace; font-size: inherit; background: rgb(238, 241, 246); display: inline-block; padding: 0px 5px; border-radius: 3px;">chrome://inspect</code>&nbsp;URL in your Chrome browser to get to the Chrome DevTools. With Chrome DevTools, you have all of the capabilities you'd normally expect when debugging JavaScript in the browser. One of the nicer tools is&nbsp;<a href="https://developers.google.com/web/tools/chrome-devtools/memory-problems" style="color: rgb(25, 105, 202); text-decoration-line: underline; transition: color 0.1s linear 0s;">the ability to inspect memory</a>. You can&nbsp;<a href="https://developers.google.com/web/tools/chrome-devtools/memory-problems/heap-snapshots" style="color: rgb(25, 105, 202); text-decoration-line: underline; transition: color 0.1s linear 0s;">take heap snapshots</a>&nbsp;and profile memory usage to understand how memory is being allocated, and potentially, plug any memory leaks.</p><h3 class="anchored" style="margin: 0px 0px 0.5em; line-height: 1.2; font-size: 20px; color: rgb(121, 88, 159); font-family: BentonSans, &quot;Helvetica Neue&quot;, sans-serif;"><a name="using-a-supported-ide" href="https://blog.heroku.com/debug-node-applications#using-a-supported-ide" style="color: rgb(121, 88, 159); transition: color 0.1s linear 0s;">Using a supported IDE</a></h3><p style="margin-bottom: 30px; color: rgb(50, 56, 57); font-family: BentonSans, &quot;Helvetica Neue&quot;, sans-serif; font-size: 15px;">Rather than launching your program in a certain way, many modern IDEs also support debugging Node applications. In addition to having many of the features found in Chrome DevTools, they bring their own features, such as&nbsp;<a href="https://code.visualstudio.com/blogs/2018/07/12/introducing-logpoints-and-auto-attach" style="color: rgb(25, 105, 202); text-decoration-line: underline; transition: color 0.1s linear 0s;">creating logpoints</a>&nbsp;and allowing you to create multiple debugging profiles. Check out&nbsp;<a href="https://nodejs.org/en/docs/guides/debugging-getting-started/#inspector-clients" style="color: rgb(25, 105, 202); text-decoration-line: underline; transition: color 0.1s linear 0s;">the Node.js' guide on inspector clients</a>&nbsp;for more information on these IDEs.</p><h3 class="anchored" style="margin: 0px 0px 0.5em; line-height: 1.2; font-size: 20px; color: rgb(121, 88, 159); font-family: BentonSans, &quot;Helvetica Neue&quot;, sans-serif;"><a name="using-ndb" href="https://blog.heroku.com/debug-node-applications#using-ndb" style="color: rgb(121, 88, 159); transition: color 0.1s linear 0s;">Using NDB</a></h3><p style="margin-bottom: 30px; color: rgb(50, 56, 57); font-family: BentonSans, &quot;Helvetica Neue&quot;, sans-serif; font-size: 15px;"><img src="https://heroku-blog-files.s3.amazonaws.com/posts/1595873374-image4.png" alt="NDB" style="max-width: 100%;"></p><p style="margin-bottom: 30px; color: rgb(50, 56, 57); font-family: BentonSans, &quot;Helvetica Neue&quot;, sans-serif; font-size: 15px;">Another option is to install&nbsp;<a href="https://github.com/GoogleChromeLabs/ndb" style="color: rgb(25, 105, 202); text-decoration-line: underline; transition: color 0.1s linear 0s;">ndb</a>, a standalone debugger for Node.js. It makes use of the same DevTools that are available in the browser, just as an isolated, local debugger. It also has some extra features that aren't available in DevTools. It supports edit-in-place, which means you can make changes to your code and have the updated logic supported directly by the debugger platform. This is very useful for doing quick iterations.</p><h2 class="anchored" style="margin: 0px 0px 0.5em; line-height: 1.2; font-weight: 700; font-size: 24px; color: rgb(121, 88, 159); font-family: BentonSans, &quot;Helvetica Neue&quot;, sans-serif;"><a name="post-mortem-debugging" href="https://blog.heroku.com/debug-node-applications#post-mortem-debugging" style="color: rgb(121, 88, 159); transition: color 0.1s linear 0s;">Post-Mortem Debugging</a></h2><p style="margin-bottom: 30px; color: rgb(50, 56, 57); font-family: BentonSans, &quot;Helvetica Neue&quot;, sans-serif; font-size: 15px;">Suppose your application crashes due to a catastrophic error, like a memory access error. These may be rare, but they do happen, particularly if your app relies on native code.</p><p style="margin-bottom: 30px; color: rgb(50, 56, 57); font-family: BentonSans, &quot;Helvetica Neue&quot;, sans-serif; font-size: 15px;">To investigate these sorts of issues, you can use&nbsp;<a href="https://github.com/nodejs/llnode" style="color: rgb(25, 105, 202); text-decoration-line: underline; transition: color 0.1s linear 0s;">llnode</a>. When your program crashes,&nbsp;<code style="font-family: Inconsolata, monospace; font-size: inherit; background: rgb(238, 241, 246); display: inline-block; padding: 0px 5px; border-radius: 3px;">llnode</code>&nbsp;can be used to inspect JavaScript stack frames and objects by mapping them to objects on the C/C++ side. In order to use it, you first need a core dump of your program. To do this, you will need to use&nbsp;<code style="font-family: Inconsolata, monospace; font-size: inherit; background: rgb(238, 241, 246); display: inline-block; padding: 0px 5px; border-radius: 3px;">process.abort</code>&nbsp;instead of&nbsp;<code style="font-family: Inconsolata, monospace; font-size: inherit; background: rgb(238, 241, 246); display: inline-block; padding: 0px 5px; border-radius: 3px;">process.exit</code>&nbsp;to shut down processes in your code. When you use&nbsp;<code style="font-family: Inconsolata, monospace; font-size: inherit; background: rgb(238, 241, 246); display: inline-block; padding: 0px 5px; border-radius: 3px;">process.abort</code>, the Node process generates a core dump file on exit.</p><p style="margin-bottom: 30px; color: rgb(50, 56, 57); font-family: BentonSans, &quot;Helvetica Neue&quot;, sans-serif; font-size: 15px;">To better understand what&nbsp;<code style="font-family: Inconsolata, monospace; font-size: inherit; background: rgb(238, 241, 246); display: inline-block; padding: 0px 5px; border-radius: 3px;">llnode</code>&nbsp;can provide,&nbsp;<a href="https://asciinema.org/a/29589" style="color: rgb(25, 105, 202); text-decoration-line: underline; transition: color 0.1s linear 0s;">here is a video</a>&nbsp;which demonstrates some of its capabilities.</p><h2 class="anchored" style="margin: 0px 0px 0.5em; line-height: 1.2; font-weight: 700; font-size: 24px; color: rgb(121, 88, 159); font-family: BentonSans, &quot;Helvetica Neue&quot;, sans-serif;"><a name="useful-node-modules" href="https://blog.heroku.com/debug-node-applications#useful-node-modules" style="color: rgb(121, 88, 159); transition: color 0.1s linear 0s;">Useful Node Modules</a></h2><p style="margin-bottom: 30px; color: rgb(50, 56, 57); font-family: BentonSans, &quot;Helvetica Neue&quot;, sans-serif; font-size: 15px;">Aside from all of the above, there are also a few third-party packages that we can recommend for further debugging.</p><h3 class="anchored" style="margin: 0px 0px 0.5em; line-height: 1.2; font-size: 20px; color: rgb(121, 88, 159); font-family: BentonSans, &quot;Helvetica Neue&quot;, sans-serif;"><a name="debug" href="https://blog.heroku.com/debug-node-applications#debug" style="color: rgb(121, 88, 159); transition: color 0.1s linear 0s;">debug</a></h3><p style="margin-bottom: 30px; color: rgb(50, 56, 57); font-family: BentonSans, &quot;Helvetica Neue&quot;, sans-serif; font-size: 15px;">The first of these is called, simply enough,&nbsp;<a href="https://www.npmjs.com/package/debug" style="color: rgb(25, 105, 202); text-decoration-line: underline; transition: color 0.1s linear 0s;">debug</a>. With debug, you can assign a specific namespace to your log messages, based on a function name or an entire module. You can then selectively choose which messages are printed to the console via a specific environment variable.</p><p style="margin-bottom: 30px; color: rgb(50, 56, 57); font-family: BentonSans, &quot;Helvetica Neue&quot;, sans-serif; font-size: 15px;">For example, here's a Node.js server which is logging several messages from the entire application and middleware stack, like&nbsp;<code style="font-family: Inconsolata, monospace; font-size: inherit; background: rgb(238, 241, 246); display: inline-block; padding: 0px 5px; border-radius: 3px;">sequelize</code>,&nbsp;<code style="font-family: Inconsolata, monospace; font-size: inherit; background: rgb(238, 241, 246); display: inline-block; padding: 0px 5px; border-radius: 3px;">express:application</code>, and&nbsp;<code style="font-family: Inconsolata, monospace; font-size: inherit; background: rgb(238, 241, 246); display: inline-block; padding: 0px 5px; border-radius: 3px;">express:router</code>:</p><p style="margin-bottom: 30px; color: rgb(50, 56, 57); font-family: BentonSans, &quot;Helvetica Neue&quot;, sans-serif; font-size: 15px;"><img src="https://heroku-blog-files.s3.amazonaws.com/posts/1595873233-image2.png" alt="Debug module full output" style="max-width: 100%;"></p><p style="margin-bottom: 30px; color: rgb(50, 56, 57); font-family: BentonSans, &quot;Helvetica Neue&quot;, sans-serif; font-size: 15px;">If we set the&nbsp;<code style="font-family: Inconsolata, monospace; font-size: inherit; background: rgb(238, 241, 246); display: inline-block; padding: 0px 5px; border-radius: 3px;">DEBUG</code>&nbsp;environment variable to&nbsp;<code style="font-family: Inconsolata, monospace; font-size: inherit; background: rgb(238, 241, 246); display: inline-block; padding: 0px 5px; border-radius: 3px;">express:router</code>&nbsp;and start the same program, only the messages tagged as&nbsp;<code style="font-family: Inconsolata, monospace; font-size: inherit; background: rgb(238, 241, 246); display: inline-block; padding: 0px 5px; border-radius: 3px;">express:router</code>&nbsp;are shown:</p><p style="margin-bottom: 30px; color: rgb(50, 56, 57); font-family: BentonSans, &quot;Helvetica Neue&quot;, sans-serif; font-size: 15px;"><img src="https://heroku-blog-files.s3.amazonaws.com/posts/1595873290-image3.png" alt="Debug module filtered output" style="max-width: 100%;"></p><p style="margin-bottom: 30px; color: rgb(50, 56, 57); font-family: BentonSans, &quot;Helvetica Neue&quot;, sans-serif; font-size: 15px;">By filtering messages in this way, we can hone in on how a single segment of the application is behaving, without needing to drastically change the logging of the code.</p><h3 class="anchored" style="margin: 0px 0px 0.5em; line-height: 1.2; font-size: 20px; color: rgb(121, 88, 159); font-family: BentonSans, &quot;Helvetica Neue&quot;, sans-serif;"><a name="trace-and-clarify" href="https://blog.heroku.com/debug-node-applications#trace-and-clarify" style="color: rgb(121, 88, 159); transition: color 0.1s linear 0s;">trace and clarify</a></h3><p style="margin-bottom: 30px; color: rgb(50, 56, 57); font-family: BentonSans, &quot;Helvetica Neue&quot;, sans-serif; font-size: 15px;">Two more modules that go together are&nbsp;<a href="https://github.com/AndreasMadsen/trace" style="color: rgb(25, 105, 202); text-decoration-line: underline; transition: color 0.1s linear 0s;">trace</a>&nbsp;and&nbsp;<a href="https://github.com/AndreasMadsen/clarify" style="color: rgb(25, 105, 202); text-decoration-line: underline; transition: color 0.1s linear 0s;">clarify</a>.</p><p style="margin-bottom: 30px; color: rgb(50, 56, 57); font-family: BentonSans, &quot;Helvetica Neue&quot;, sans-serif; font-size: 15px;"><code style="font-family: Inconsolata, monospace; font-size: inherit; background: rgb(238, 241, 246); display: inline-block; padding: 0px 5px; border-radius: 3px;">trace</code>&nbsp;augments your asynchronous stack traces by providing much more detailed information on the async methods that are being called, a roadmap which Node.js does not provide by default.&nbsp;<code style="font-family: Inconsolata, monospace; font-size: inherit; background: rgb(238, 241, 246); display: inline-block; padding: 0px 5px; border-radius: 3px;">clarify</code>&nbsp;helps by removing all of the information from stack traces which are specific to Node.js internals. This allows you to concentrate on the function calls that are just specific to your application.</p><p style="margin-bottom: 30px; color: rgb(50, 56, 57); font-family: BentonSans, &quot;Helvetica Neue&quot;, sans-serif; font-size: 15px;">Neither of these modules are recommended for running in production! You should only enable them when debugging issues in your local development environment.</p><h2 class="anchored" style="margin: 0px 0px 0.5em; line-height: 1.2; font-weight: 700; font-size: 24px; color: rgb(121, 88, 159); font-family: BentonSans, &quot;Helvetica Neue&quot;, sans-serif;"><a name="find-out-more" href="https://blog.heroku.com/debug-node-applications#find-out-more" style="color: rgb(121, 88, 159); transition: color 0.1s linear 0s;">Find out more</a></h2><p style="margin-bottom: 30px; color: rgb(50, 56, 57); font-family: BentonSans, &quot;Helvetica Neue&quot;, sans-serif; font-size: 15px;">If you'd like to follow along with how to use these debugging tools in practice,&nbsp;<a href="https://vimeo.com/428003519/f132859d08" style="color: rgb(25, 105, 202); text-decoration-line: underline; transition: color 0.1s linear 0s;">here is a video recording</a>&nbsp;which provides more detail. It includes some live demos of how to narrow in on problems in your code. Or, if you have any other questions, you can find me on Twitter&nbsp;<a href="https://twitter.com/julian_duque" style="color: rgb(25, 105, 202); text-decoration-line: underline; transition: color 0.1s linear 0s;">@julian_duque</a>!</p>
                                <p></p>
                            <p class="tagcloud">
                                    
                                        
                                            
                                                <a href=" /tag/economy.html" rel="tag" title="View all articles tagged with economy">economy</a>
                                            
                                        
                                    
                                    </p>
                        </div>
                    </div>
                    </div>
                    <div class="navigation-top">
                        <div class="d-sm-flex justify-content-between text-center">
                            <div class="col-sm-4 text-center my-2 my-sm-0">
                                <p class="like-info mr-5"><span class="align-middle"></span></p>
                            </div>
                            <div class="col-sm-4 text-center my-2 my-sm-0">
                            
                            
                                <p class="comment-count"><span class="align-middle"><i class="fa fa-comment"></i></span>0  Comments</p>
                            </div>
                            <ul class="social-icons">
                                <li><a href="#"><i class="fa fa-facebook-f"></i></a></li>
                                <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                                <li><a href="#"><i class="fa fa-dribbble"></i></a></li>
                                <li><a href="#"><i class="fa fa-behance"></i></a></li>
                            </ul>
                        </div>
                        
                            <div class="navigation-area">
                                <div class="row">
                                
                                
                                    <div class="col-lg-6 col-md-6 col-12 nav-right flex-row d-flex justify-content-end align-items-center">
                                    <div class="detials">
                                        <p>Next Post</p>
                                        <a href="/article/2020/8/10/1/how-a-live-tutoring-platform-helps-the-working-world-get-ahead.html">
                                            <h4>How a Live Tutoring Platform Helps the Working World Get Ahead</h4>
                                        </a>
                                    </div>
                                    <div class="arrow">
                                        <a href="/article/2020/8/10/1/how-a-live-tutoring-platform-helps-the-working-world-get-ahead.html">
                                            <span class="lnr text-white ti-arrow-right"></span>
                                        </a>
                                    </div>
                                    <div class="thumb">
                                        <a href="/article/2020/8/10/1/how-a-live-tutoring-platform-helps-the-working-world-get-ahead.html">
                                            <img class="img-fluid" src="/static/app/img/post/next.png" alt="">
                                        </a>
                                    </div>
                                    </div>
                                
                                </div>
                            </div>
                        
                    </div>
                    
                    
                    

        <div class="comments-area">
                                        
                <h2 class="title" id="comment"> comments</h2>
                <ol>
                    
                    <li class="single_comment_area" id="comment_list">
                            <!-- Comment Content -->
                            
                            
                        There are no comments for this article. Just say a few words!
                        
                        </li>
                    </ol>
                </div>
                        <div class="comment-form">
                            <h2 class="mb-4">Leave A Comment</h2>
                            
                                Please login and comment
                                <a class="btn btn-primary" href="/login/?from=/article/2020/8/10/2/let-s-debug-a-node-js-application.html">log in</a>
                                <span> or </span>
                        <div class="col-md-8">
                            <ckeditor :editor="editor" v-model="editorData" :config="editorConfig"></ckeditor>
                        </div>
                                            
                    </div>
                        
                    </div>
                </div>
                
            </div>
                <div class="container-fluid">
                    <div class="job-page-tittle text-center mb-80">
                            <h2 class="heading">Related<span class="accent"> Articles</span>.
                            </h2>
                    </div>
                    <div class="row">
                        
                        
                        
                            <div class="col-lg-4 col-md-6 col-sm-12">
                                

                                
                            </div>
                        
                            <div class="col-lg-4 col-md-6 col-sm-12">
                                
                                




                                
                            </div>
                        
                </div>  
            </div>
    </section>
</template>
<script>
import { BCarousel } from "bootstrap-vue/esm/components/carousel/carousel";
import { BCarouselSlide } from "bootstrap-vue/esm/components/carousel/carousel-slide";
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
export default {
    data() {
            return {
                editor: ClassicEditor,
                editorData: '',
                editorConfig: {
                    // The configuration of the editor.
                }
            };
        },
  components: {
    BCarousel,
    BCarouselSlide
  },
  mounted(){
  },
    
};
</script>
<style scoped>
.center-block {
  display: block;
  margin-left: auto;
  margin-right: auto;
}
p[style] {
   color: white !important;
}
</style>