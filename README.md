# rws_pcf_demo
Demo apps for showcasing pivotal cloudfoundry @RWS


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

## 2. Manifests
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


## 3. Code agnosticism:
In this demo you will show that cloudfoundry is capable of detecting the language that the app is written in.
You will enter one of three folders located in the repository:
```
./3.agnosticism/
    |-nodejs/
    |-python/
    |-static/
```
from within one of the folders execute a push:
```
cf push
```
demonstrate that the command is exactly the same for each of the three different languages, explain a little bit about how pcf recognises the different languages.
for example:"PCF recognises nodejs by the package.json file located in the root of the app, it recognises python by the Procfile and the requirements.txt file and lastly it recognises the static html by the Staticfile you have to provide.".

## 4. Scaling:
In your terminal enter the following folder:
```
./4.manual-scaling/
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
The instance ID on the app's page should change.

## 5. Auto-Scaling:
Explain how scaling is good but auto-scaling is better, you don't want a silly human monitoring your app and responding to heavy load when a computer is much better equipped to deal with situations like that.

To make the demo seamless it would be best if you already have an autoscaler in place, Bind the "scaling" app to the autoscaler service using either the cf-cli or the web interface, the audience would probably prefer seeing it in the web interface.
Set the minimum number of instances to 1 and the max to 4, set the scaling rules to "cpu utilization" low=20% high=60%, now start hitting the app with a load generator, i prefer to use apache jmeter (see the link in the tips chapter on how to install and set up jmeter).

Keep the scaling app open in your web browser and show the app details in the pcf web gui, watch it go from 4 (we set it to 4 in the previous demo) to one, this is logical because there is hardly any load.
Start jmeter, enter the correct url, start generating load on the app. watch it scale.

## 6. Blue-Green deployments:

Enter the following folder:
```
./6.blue-green-deployment/v1.0-blue/
```
push the app:
```
cf push
```
Show that the app is running by opening it in your web browser (should auto refresh):
this is version 1.0 of your code.
Now enter the v2.0-green folder:
```
./6.blue-green-deployment/v2.0-green/
```
push it using the following command:
```
cf push
```
At this point you should have 4 instances of Blue and one instances of Green.
Map the Green app to the Blue route:
```
cf map-route Green <domain - test-cf-prod.intranet.rws.nl> -n blue-green
```
Scale the blue app down by one:
```
cf scale Blue -i 3
```
Now we have 3 Blue instances and 1 green.
So customers would be seeing the new version of the app 25% of the time, the auto refreshing web browser should show this.
Scale the apps to 50/50:
```
cf scale Blue -i 2
cf scale Green -i 2
```
Now the instances are 50/50.
got to 25/75:
```
cf scale Blue -i 1
cf scale Green -i 3
```
and finally go to 100% Blue:
```
cf stop Blue
cf scale Green -i 4
```
there we are, a 100% blue environment.
no downtime and a slow controlled migration to a new version of code.
