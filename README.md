# AutoJoin
A javascript base project to automatically open class according to timetable

#Usage

NOTE: THE DELAY TIME WAS REPORTED THAT IT WAS GLITCHED : So it has been disabled

1) Fork this repo for github page or clone thi repo and use it locally.
2) Setup `config.json` file for timetable.

# config.json set-up
You can set your timetable with this config.json file.

### Setting links and Timetable<br>

1) In the config file, under the `meta` child, and inside it, in the child `links`, type your subject name as key and link as it's value to use it.<br>
2) Then, inside the `timing` child, there is every day's names as it's first three letters. Inside it, You can create the timing, for example, if you want to open the link from `09:30` to `10:30`, create a child with key `09:30.10:30` (separated with period '.') and you can give the value of the child as the name of the subject title you gave before.
And don't forget to put the child `"status":"true"`, for the days, there is class, and you can put `"status":"false"`, if there is no class on that day!<br>
3) **[optional]** If you want to have custom page for `no-class` page, you can either edit the `noclass.html` or redirect it to another one **[if you can, you can also edit the page in app.js file]**<br>

4) **[important]** You can also open the link before the given time for all links without editing the keys inside days. To do so, In the `meta` child, change the value of `delay` child eg. 10 for 10 minutes as it is calculated as minutes. **(if you don't want any delay, set it to `0`, and try not to remove the child)**

NOTE: YOU should not give one digit for hour and minute eg. `07:05` instead of `7:5`, `07:5`, `7:05`;

# If you forked the repo, just deploy it with [GitHub Pages](https://pages.github.com/) and it will work for you.. If you locally created timetable, just open the `index.html` and there you go! 

# Credits
Created by `HARRY TOM` [Portfolio](http://harrytom.ml/), [GitHub](https://github.com/harry260/), [Twitter](https://twitter.com/@me_harrify/)<br>
Created with : [moment.js](https://momentjs.com/) and [JQuery](https://jquery.com/)

##maybe..
1) You can create a short link for it if you think that github page link is so long as the great wall of china. click [here (tiny.cc)](http://tiny.cc/)
2) If you dont want to edit the default timetable in it, just use use the blank_config.json and rename it into `config.json` (it should be in the root folder)
