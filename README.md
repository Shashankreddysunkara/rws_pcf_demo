# rws_pcf_demo
Demo apps for showcasing pivotal cloudfoundry @RWS

## Prerequisites:
Install cf-cli
connect to your pcf environment using cf:
```
cf api https://awesome.url.com
cf login
```
Clone the repo.
enter the repository folder:

#### tip:
Use the chrome extension "auto-refresh" to automatically refresh a webpage at a set interval, this makes presenting changes easier.
[LINK](https://chrome.google.com/webstore/detail/auto-refresh/ifooldnmmcmlbdennkpdnlnbgbmfalko)

## Showcase PCF agnosticism:
In this demo you will show that cloudfoundry is capable of detecting the language that the app is written in.
You will enter one of three folders located in the repository:
```
./hello-world/
    |-nodejs/
    |-python/
    |-static/
```
from within one of the folders execute a push:
```
cf push <app-name> --random-route -m 128M
```
demonstrate that the command is exactly the same for each of the three different languages, explain a little bit about how pcf recognises the different languages.
for example:"PCF recognises nodejs by the package.json file located in the root of the app, it recognises python by the Procfile and the requirements.txt file and lastly it recognises the static html by the Staticfile you have to provide.", perhaps you could also explain a little bit about buildpacks and how you might even create your own if you so desire.
