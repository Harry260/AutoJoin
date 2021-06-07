//Made with moment.js, JQuery, by Harry Tom.

//Variables
var format = 'hh:mm';
const day = moment().format("ddd").toLowerCase();
var open;
var loopstatus;
var delay = 0;

//Fetching comfig and triggering
$.get("config.json", function(data){
    console.log(data)
    const meta = data.meta;
    delay = meta.delay;
    const today_timing = data.timing[day];
    var status = today_timing.status;


    console.log(status)
    //Check if the day is an active day
    if(status){

        loopstatus ={
            loop:0,
            length: Object.keys(today_timing.data).length
        }

        //Loop to check if date range is under entry
        for (const [key, value] of Object.entries(today_timing.data)) {
            loopstatus.loop ++;

            //Start time from range
            var start =  splitat(key, ".")[0],

            //End time from range
            end = splitat(key, ".")[1];

            if(returnStatus(start, end)){
                //Tringger if time falls in range
                var link = meta.links[value];               
                window.location.replace(link);
            }
            else{
                if(loopstatus.loop === loopstatus.length){
                    //Callback that no time is in the range
                    window.location.replace("noclass.html")
                } 
            }
 
        }
    }else{
        window.location.replace("noclass.html")
    }
})


function splitat(str, at){
    //Split out string into array from dot [.]
    var out = str.split(at);
    return out;
}

//Function to reduce the delay time from the prop
function reduceDelayTime(timeString){
    var time = moment(timeString)
    var r = moment(time).subtract(delay, "minutes");
    return r
}


//Function to check if current time falls between a time range
function returnStatus(a, b){
    //Init Private Variables
    var time = moment(),
    beforeTime = moment(a, format),
    afterTime = moment(b, format);
    //Check status
    if (time.isBetween(reduceDelayTime(beforeTime), afterTime)) {
        return true;
    } else {
        return false;
    }

}
