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

## 1. Ease of deployment
Explain a little bit about the deployment procedures in old world scenarios, like for example how you would have to upload your code through ftp and restart web servers or how you could have cron jobs run git pulls and service restarts. Now show how easy it is to push an app using pivotal cloud foundry.
Enter the following folder:
```
./1.hello-world/
```
push the app using the following command:
```
cf push hello-world -m 128M --random-route
```
browse to the webui, show that the app shows up, go to the url. show that the app works.
Delete the app:
```
cf delete hello-world -r -f
```

## 2. manifests
The hello-world demo is great but defining the amount of memory required using "-m" and the random route using "--random-route" is tiresome.
Show how we can use manifests to predefine all that stuff, got to folder:
```
./2.manifests/
```
Show the content of the manifest file using something like cat:
```
cat manifest.yml
```
Now show how brief the command has become to do the same thing:
```
cf push
```
show that the app shows up, browse to the app. delete the app.


## 3. Showcase PCF agnosticism:
In this demo you will show that cloudfoundry is capable of detecting the language that the app is written in.
You will enter one of three folders located in the repository:
```
./1.hello-world/
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

## 4. Showcase pcf scaling capabilities:
In your terminal enter the following folder:
```
./2.manual-scaling/
```
Push the app to pcf:
```
cf push
```
Open the app in a browser, this is where the auto-refresh chrome plugin will come in handy, set it to auto refresh every few seconds.
now in the terminal scale the app's memory:
```
cf scale scaling -m 128M
```
The web browser should show the change swiftly.
now do the same but for the amount of instances:
```
cf scale scaling -i 4
```
In the pcf webui on the app details page, show that we have multiple instances:
The instance ID on the app's page should change, explain how this is awesome.
