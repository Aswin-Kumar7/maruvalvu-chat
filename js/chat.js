// Collapsible
var coll = document.getElementsByClassName("collapsible");
var key = "1";
var con1 = "temp";
var temp = 0;
var check = "temp";
var ccheck = "temp";
var checkpoint = "4";
var response = "I'm sorry, I didn't understand. Could you please rephrase";
var response1 = "I'm sorry, I didn't understand. Could you please rephrase";
var response2 = "I'm sorry, I didn't understand. Could you please rephrase";
var response3 = "I'm sorry, I didn't understand. Could you please rephrase";

for (let i = 0; i < coll.length; i++){
    coll[i].addEventListener("click", function () {
        this.classList.toggle("active");

        var content = this.nextElementSibling;

        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }

    });
}

function getTime(){
    let today = new Date();
    hours = today.getHours();
    minutes = today.getMinutes();

    if (hours < 10) {
        hours = "0" + hours;
    }

    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    let time = hours + ":" + minutes;
    return time;
}

// Gets the first message
function firstBotMessage(){
    let firstMessage = "Hello, I am Maruvalvu the Motivational Alcohol Dependence chat bot.I am here to tell you how you can quit drinking. Alright let’s get started."
    document.getElementById("botStarterMessage").innerHTML = '<p class="botText"><span>' + firstMessage + '</span></p>';

    let time = getTime();

    $("#chat-timestamp").append(time);
    document.getElementById("userInput").scrollIntoView(false);
}

firstBotMessage();

// Retrieves the response
function getHardResponse(userText){
    flag = false;
    exception(userText);
    if (!flag){
        printResponse(userText);
        flag = true;
        if(key !== "3" && check === "1" && flag === true){
            exception(userText);
        }
        if (con1 === "3") {
            checkpoint = "1";
        }
    }
    document.getElementById("chat-bar-bottom").scrollIntoView(true);
}

// Exceptional cases - key generation
function exception(userText){
    if (check === "14"){
        key = evaluateInput(userText);
        temp = 28;
    }
    if (check === "15"){
        temp = 40;
    }
    if (check === "16"){
        temp = 45;
    }
    if (check === "17"){
        key = evaluateInput(userText);
        temp = 50;
        if (key === "k1"){
            temp = 25;
        }
    }
    if (key === "1" || check === "9" || check === "13" || (check === "14" && (key === "g1" || key === "g3")) || (check === "15" && (ccheck === "12" || ccheck === "7")) || (check === "17" && key === "k1")){
        for(let j = 0; j <3; j++){
            temp ++;
            printResponse(userText);
        }
        flag = true;
    }
    else if (key !== "3" && check === "1" && flag === true){
        let q = '<p class="botText"><span>' + "Let me ask you, have you tried to quit drinking before?" + '</span></p>';
        $("#chatbox").append(q);
        check = "2";
    }
    else if (check === "3" && con1 === "3" && checkpoint === "1"){
        for(let m = 0; m < 9; m++){
            temp ++;
            printResponse(userText);
        }
        checkpoint = "7";
        flag = true;
    }
   else if ((check === "5" && (ccheck === "2" || ccheck === "3") && checkpoint === "11") || check === "7" || check === "8" || check === "10" || check === "11"){
        for(let b = 0; b < 2; b++){
            temp ++;
            printResponse(userText);
        }
        checkpoint = "5";
        flag = true;
    }
    else if (check === "14" && (key === "g2" || key === "g5")){
        for(let it = 0; it < 5; it ++){
            temp ++;
            printResponse(userText);
        }
        flag = true;
    }
    else if ((check === "14" && key === "g7") || (check === "15" && ccheck === "10") || (check === "17" && key === "k2")){
        for(let ite = 0; ite < 4; ite ++){
            temp ++;
            printResponse(userText);
        }
        flag = true;
    }
    else if (check === "15" && (ccheck === "8" || ccheck === "9" || ccheck === "11" || ccheck === "13" )|| (check === "16" && ccheck === "12")){
        for(let iter = 0; iter < 2; iter ++){
            temp ++;
            printResponse(userText);
        }
        flag = true;
    }
    else if (check === "14" && (key === "g4" || key === "g6")){
        flag = false;
    }
}

// Prints the response
function printResponse(userText){
    // 1 sec delay
    let botResponse = getBotResponse(userText);
    let botHtml = '<p class="botText"><span>' + botResponse + '</span></p>';
    $("#chatbox").append(botHtml);
}

// Gets the text text from the input box and processes it
function getResponse(){
    let userText = $("#textInput").val();
    let userHtml = '<p class="userText"><span>' + userText + '</span></p>';

    $("#textInput").val("");
    $("#chatbox").append(userHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);

    setTimeout(() => {
        getHardResponse(userText);
    }, 1000)

}

// Handles sending text via button clicks
function buttonSendText(sampleText) {
    let userHtml = '<p class="userText"><span>' + sampleText + '</span></p>';

    $("#textInput").val("");
    $("#chatbox").append(userHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);

    setTimeout(() => {
        getHardResponse(sampleText);
    }, 1000)
}

function sendButton() {
    getResponse();
}

// Press enter to send a message
$("#textInput").keypress(function (e) {
    if (e.which == 13) {
        getResponse();
    }
});

function getBotResponse(userText){
    key = evaluateInput(userText);

    if (key === "1") {
        var a = "First, I will ask you some questions about your drinking behavior. So, I can get a general idea of your situation.";
        var b = "IMPORTANT: if you are not completely sure, please just give me an estimate.";
        var c = "On a regular day, how many amounts of alcohol do you usually drink?";
    }
    
    else if (key === "2") {
        key = "3";
        response = "Okay, lets's say amount of alcohol you currently drink per day is the amount you have always drink per day. Agree..?";
    }

    else if (key === "3") {
        check = "1";
        response = "Anyway, How soon after you wake up do you drink your first alcohol of the day? [Note: like, 30 mins or less or more]";
        con1 = "0";
    }    

    else if (check === "1"){
        if (key === "Condition1") {
            response = "So, your shot of drinking is one of the first things you think about in the morning after you wake up. That's quite worrisome.";
          } 
          else if (key === "Condition2") {
            response = "Okay, you need your shot of not too bad alcohol before you are actually ready to start your day. That's quite worrisome.";
          } 
          else if (key === "Condition3") {
            response = "Not too bad.";
          }
        con1 = "2";
    }

    else if (check === "2"){
        check = "3";
        if (key === "a"){
            response = "I am assuming you went back to Drinking sometime after, then"
        }
        else if (key === "b"){
            response = "You haven't tried to quit in all your years of drinking. Alright, then."
        }
        con1 = "3";
    }

    else if (check === "3"){
        check = "4";
        var d = "It's possible that the cravings you get when you haven't had an alcohol in a while prevent you from quitting. This indicates that your drinking behavior really is a problem.";
        var e = "The undesirable withdrawal symptoms that may come from a quit attempt are not a food reason to not even try to quit, since there are only temporary and can easily be taken care of.";
        var f = "If you keep drinking, it is likely that you may get worse health problems that stretch far beyond uncomfortable feeling and cravings.";
        var g = "Think of heart failure, dangerously high blood pressure and cirrhosis of liver. I'm assuming that's not what you want for yourself.";
        var h = "Before you can start your quit attempt, you must feel 100% ready. That why, your chances of a successful attempt are higher.";
        var i = "It may be uncomfortable at first, nut if you stop drinking now, you'll reap the benefits of it's in the future.";
        var j = "So, I am here to tell you some techniques to help you quiet, and make you feel ready enough to quit for good.";
        var k = "Let's dive a little deeper into why you haven't been able to stay away from the silent killer that is alcohol.";
        var l = "On a scale from 1 to 10, with 1 being the lowest and 10 being the highest, how good does drinking make you feel?";
        con1 = "4";
    }

    else if (check === "4"){
        check = "5";
        if (key === "c1"){
            ccheck = "1";
            response = "So, drinking makes you feel Quite bad. That's good Start to quit: Please Elaborate on why drinking makes you feel so bad.";
        }
        else if (key === "c2"){
            ccheck = "2";
            response = "So, drinking doesn't make You feel too great. Tell me why it doesn't make you feel bad, nor does it make you feel good?";
        }
        else if (key === "c3"){
            ccheck = "3";
            response = "It seems that drinking make you feel quite good. Considering the negative health consequences of drinking I just told you about, tell me why drinking makes you feel so good?";
        }
        checkpoint = "11";
        con1 = "5";
    }

    else if (check === "5"){
        check = "6";
        if (ccheck === "1"){
            ccheck = "4";
            response = "If drinking makes you feel bad every time you light up an alcohol, imagine how much better you'd feel if you got rid of that negative influence on your live. You'll also be far less susceptible to cirrhosis of liver -15 to 30 times less likely-or heart disease-4 times less likely";
        }
        else if (ccheck === "2"){
            ccheck = "5";
            response1 = "What I am getting from this is that there's discrepancy between what you know and what you feel. Knowing about the negative consequences of drinking makes drinking less pleasurable for your, perhaps.";
            response2 = "Not strange, considering smokers are 4 times more likely to suffer from heart disease and 15 to  30 times more likely to get cirrhosis of liver than people who don't drink.";
        }
        else if (ccheck === "3"){
            ccheck = "6";
            response1 = "It may feel good now, but think about your future self for a second. You must realize you shouldn't minimize your chances of being affected by the negative consequences of drinking.";
            response2 = "This is called the “Optimism bias”. It is the false belief that the negative consequences of a certain behaviour don't apply to yes, but only to others. You are just as susceptible to alcohol induced cirrhosis of liver and heart disease as other smokers.";
        }
        con1 = "6";
    }

    else if (check === "6"){
        check = "7";
        response = "I would like to talk about your drinking beliefs for a second. Worldwide, how many people die per year because of drinking-related reasons?";
        con1 = "7";
    }

    else if(check === "7"){
        check = "8";
        response1 = "According to the World Health organization alcohol use accounts for 8,700,000 deaths per year worldwide. That's a million of people, often young people too, that died because of their drinking behavior. This is often combined with years of physical discomfort and illness in advance.";
        response2 = "Assuming that's not what you want for your future self. Why do you think you are not going to be sick because of your drinking behaviour?";
        con1 = "8";
    }

    else if(check === "8"){
        check = "9";
        response1 = "The 140,000 people that die every year from drinking-induced sickness may have thought the same thing.";
        response2 = "I asked you before about whether you have tried to quit before. Why did you come back to drinking again, or why have you never tried to quit in the first place?";
        con1 = "9";
    }

    else if(check === "9"){
        check = "10";
        response = "Actually, I don't think there is an excuse that is good enough.";
        response1 = "In fact, according to the Centers for Disease Control and Prevention, almost 62% of adults whoever drunk has successfully quit. That's 55 million former drinkers. Unfortunately, you are not of them right now. You must fit that, if you don't want to suffer from chronic illnesses caused by your problematic dependency on alcohol.";
        response2 = "What exactly is it that you are most afraid of when you try to quit drinking?";
        con1 = "10";
    }

    else if(check === "10"){
        check = "11";
        response1 = "I am not sure that's worse than becoming chronically ill due to something that could have been prevented.";
        response2 = "If you want to quit drinking for good, total abstinence is what you should aim for. Small amount of alcohol could trigger your alcohol dependency again, meaning that all progress you have made during quit attempt, is lost. that's not what you want, right?";
        con1 = "11";
    }

    else if(check === "11"){
        check = "12";
        response1 = "You must realize that any withdrawal symptoms you may have when you quit drinking are just temporary. Also, not everyone gets the same withdrawal symptoms and some people don't even get any withdrawal symptoms at all.";
        response2 = "Are you afraid to suffer from any withdrawal symptoms when you try to quit drinking?";
        con1 = "12";
    }

    else if(check === "12"){
        check = "13";
        if (key === "z"){
            response = "Okay, given that you known the risks that are attached to drinking, you feel invincible enough to think you can avoid those, but somehow feel vulnerable when it comes to withdrawal symptoms. Those thoughts are quite conflicting with each other, don't you think?";
        }
        else if (key === "y"){
            response = "Okay, if you think quitting is not so hard, it's a kind of strange that you are still drinking at all, given that you know the negative health consequences. Those thoughts are quit conflicting with each other, don't you think?";
        }
        con1 = "13";
        checkpoint = "17";
    }

    else if(check === "13" && checkpoint === "17"){
        check = "14";
        checkpoint = "18";
        response = "Regardless, the Centers of Disease Control and Prevention has made a list of common withdrawal symptoms and ways to tackle them. I will now present you with a list of symptoms. Since I am the expert here, I will tell you what to do when you are experiencing symptoms.";
        response1 = "Which topic do you want to receive my expert advice on?";
        response2 = "Urges and cravings/ Feeling irritated/ Feeling restless/ Difficulty in concentrating/ Feeling exhausted/ Feeling hungry and weight gain/ Smoking issues";
        con1 = "14";
    }

    else if(check === "14"){
        check = "15";
        if (key === "g1"){
            ccheck = "7";
            response = "These cravings are usually triggers when you come across something that reminds you of drinking. The fact that drinking is so salient in you mind indicates the existence of a dependency issue.";
            response1 = "I advise you to distract yourself by thinking about your reasons for quitting and what you are doing all this for.";
            response2 = "Tell me a distracting thought you can think of when you experience cravings.";
        }
        else if (key === "g2"){
            ccheck = "8";
            var m = "If you can't feel happy and calm without a drink, that is a serious sign of massive dependency on alcohol.";
            var n = "Remind yourself that you are feeling this way because your body is getting used to functioning without alcohol.";
            var o = "Also remind yourself of why you are quitting drinking in the first place and think of how quitting drinking will help you feel better in the future.";
            var p = "And lastly, focus on doing thing shall make you feel happy again, such as cooking a nice meal for yourself";
            var q = "Tell me a distracting thought you can think of when you are feeling irritated.";
        }
        else if (key === "g3"){
            ccheck = "9";
            response = "To replace the alcohol buzz you are missing during your quit attempt you might be turning to other substance. Going from one type of dependency to another isnt going to help you, though, when you quit drinking, alcohol will stay in your body for longer making you feel restless. Thus cut down on alcohol containing drinks.";
            response1 = "Additionally, get up and do some exercise. This can be mild exercise such as cleaning the house, or something more demanding such as a gym session.";
            response2 = "Tell me another solution for handling feelings of restlessness.";
        }
        else if (key === "g4"){
            ccheck = "10";
            response = "Because alcohol is a depressant, a drunker will temporarily feel more alert and energetic and temporarily able to concentrate better. Do you recognize yourself in that?";
        }
        else if (key === "g5"){
            ccheck = "11";
            var r = "When you are feeling exhausted as result of your sleeping trouble, it's especially tempting to grab alcohol for those extra drinks.";
            var s = "However, the fact that you need a stimulant to function properly in day-to-day life is extremely problematic.";
            var t = "Anyway, when you quit drinking, alcohol will stay in your body for longer, making you feel restless.";
            var u = "Thus, avoid drinking caffeinated drinks in the late afternoon and the evening. Also look into other method of improving sleep such as engaging in more physical activity.";
            var v = "Tell me another solution for handling sleeping issues.";
        }
        else if (key === "g6"){
            ccheck = "12";
            response = "You may drink to have something to do with their hands and mouth or to cope with stress. Do you recognize yourself in this?";
        }
        else if (key === "g7"){
            ccheck = "13";
            var w = "People who smoke are prone to feeling anxious or depressed. They drink to alleviate the symptoms related to anxiety and depression. Do you relate to this?";
            var x = "However, drinking only alleviates these symptoms for a short period of time. Alcohol just stops you from feeling the discomfort of withdrawal rather than stopping you from feeling anxious or depressed.";
            var y = "There are may better ways to deal with these feelings. Be physically active, get out of the house everyday, connect with people who support and understand you and reward yourself by doing things you enjoy.";
            var z = "Tell me another solution for handling depressed or anxious feelings.";
        }
        con1 = "15";
    }

    else if (check === "15" && (ccheck === "7" || ccheck === "10" || ccheck === "12")){
        check = "16";
        if (ccheck === "7"){
            check = "17";
            response = "Cravings will always pass and it is not necessary to give in to your cravings to make them pass. That would be a waste of your";
            response1 = "In any case, if your withdrawal symptoms feel unmanageable or you are not feeling better after a couple of weeks, go to your doctor or healthcare provider.";
            response2 = "If you want to read more of my advice about coping with withdrawal symptoms. If you want to repeat for some other topic from the above listed say yes or no";
            con1 = "17";
        }
        if (ccheck === "10"){
            check = "17";
            response = "The lack of alcohol you experience during a quit attempt makes it possible that you can't fully concentrate. This is terribly problematic. After all, the brain is not being provided with an extra depressant anymore.";
            response1 = "Cut yourself some relaxed when you can't concentrate the first couple days after beginning your quit attempt.";
            response2 = "In any case, if your withdrawal symptoms feel unmanageable or you are not feeling better after a couple of weeks, go to your doctor or healthcare provider.";
            response3 = "If you want to read more of my advice about coping with withdrawal symptoms. If you want to repeat for some other topic from the above listed say yes or no";
            con1 = "17";
        }
        if (ccheck === "12"){
            response = "To counter this need, keep your hands and mouth bust with a toothpick or low-calorie snacks such as celery sticks or sugar free mints.";
            response1 = "Make a point of removing distracting during your meal, so you can focus on your body when it signals that you are full, so you don't overeat.";
            response2 = "Bonus reason to quit-food is tastier when your senses of smell and taste are not dulled by the drink. Sounds, pretty good, doesn't it?";
            con1 = "16";
        }
    }

    else if ((check === "15" && (ccheck === "8" || ccheck === "9" || ccheck === "11" || ccheck === "13" )) || (check === "16" && ccheck === "12")){
        check = "17";
        response1 = "In any case, if your withdrawal symptoms feel unmanageable or you are not feeling better after a couple of weeks, go to your doctor or healthcare provider.";
        response2 = "If you want to read more of my advice about coping with withdrawal symptoms. If you want to repeat for some other topic from the above listed say yes or no";
        con1 = "17";
    }

    else if (check === "17"){
        if (key === "k2"){
            check = "18";
            var r1 = "Alright, I think that I have given you enough food for thought for today. Thank you for your input. I hope you have learned something from me, and that you feel motivated to quit drinking sometime soon.";
            var r2 = "Remember, 1,40,000 people die every year due to drinking related health problems. A briefly lasing shot of alcohol is no worth that suffering.";
            var r3 = "If you need some guidance from me, I am available 24 hours a day, 7 days, per week. For professional medical guidance and advice, you should contact your doctor or healthcare provider.";
            var r4 = "I wish you a nice day and good luck with you quit attempt. Bye! Bye!";
            con1 = "18";
        }
        else if (key === "k1"){
            check = "14";
            response = "I will now present you with a list of symptoms. Since I am the expert here, I will tell you what to do when you are experiencing symptoms.";
            response1 = "Which topic do you want to receive my expert advice on?";
            response2 = "Urges and cravings/ Feeling irritated/ Feeling restless/ Difficulty in concentrating/ Feeling exhausted/ Feeling hungry and weight gain/ Smoking issues";
            con1 = "14";
        }
    }

    // returning appropriate response 
    console.log("key: "+key+" con1: "+con1+" check: "+check+" temp: "+temp);
    if (con1 === "17"){
        check === "15";
        if (ccheck === "10"){
            if (temp === 41){
                return response;
            }
            else if (temp === 42){
                return response1;
            }
            else if (temp === 43){
                return response2;
            }
            else if (temp === 44){
                check = "17";
                return response3;
            }
        }
    }
    if (ccheck === "8" || ccheck === "9" || ccheck === "11" || ccheck === "13"){
        if (temp === 41){
            return response1;
        }
        else if (temp === 42){
            check = "17";
            return response2;
        }
    }
    if (con1 === "18" && key === "k2"){
        check = "17";
        if (temp === 51){
            return r1;
        }
        else if (temp === 52){
            return r2;
        }
        else if (temp === 53){
            return r3;
        }
        else if (temp === 54){
            check = "18";
            return r4;
        }
    }
    else if (con1 === "14" && key === "k1"){
        if (con1 === "14"){
            check = "13";
            if (temp === 26){
                return response;
            }
            else if (temp === 27){
                return response1;
            }
            else if (temp === 28){
                check = "14";
                return response2;
            }
        }
    }
    if (con1 === "16" || con1 === "17"){
        if (ccheck = "12"){
            if (temp === 41){
                return response;
            }
            else if (temp === 42){
                return response1;
            }
            else if (temp === 43){
                check = "17";
                return response2;
            }
        }
    }
    else if (con1 === "17"){
        check = "15";
        if (ccheck === "7"){
            if (temp === 41){
                return response;
            }
            else if (temp === 42){
                return response1;
            }  
            else if (temp === 43){
                check = "17";
                return response2;
            }
        }
        else if (ccheck === "10"){
            if (temp === 41){
                return response;
            }
            else if (temp === 42){
                return response1;
            }
            else if (temp === 43){
                return response2;
            }
            else if (temp === 44){
                check = "17";
                return aa;
            }
        }
    }
    if (con1 === "15" && key === "g6"){
        return response;
    }
    else if (con1 === "17" && (ccheck === "8" || ccheck === "9" || ccheck === "11" || ccheck === "13" ) || ccheck === "12"){
        check = "15";
        if (ccheck === "8" || ccheck === "9" || ccheck === "11" || ccheck === "13"){
            if (temp === 41){
                return response1;
            }
            else if (temp === 42){
                check = "17";
                return response2;
            }
        }
        else if (ccheck === "12"){
            if (temp === 46){
                return response1;
            }
            else if (temp === 47){
                return response2;
            }
        }
    }
    else if (key !== "1" && con1 !== "4" && con1 !== "6" && con1 !== "8" && con1 !== "9" && con1 !== "10" && con1 !== "11" && con1 !== "12" && con1 !== "14" && con1 !== "15" && con1 !== "16" && con1 !== "17" && con1 !== "18") {
        return response;
    }
    else if (key === "1"){
        if (temp === 1){
            return a;
        }
        else if (temp === 2){
            return b;
        }
        else if (temp === 3){
            key = "2";
            return c;
        }
    }
    else if (con1 === "4"){
        check = "3";
        if (temp === 4){
            return d;
        }
        else if (temp === 5){
            return e;
        }
        else if (temp === 6){
            return f;
        }
        else  if (temp === 7){
            return g;
        }
        else if (temp === 8){
            return h;
        }
        else if (temp === 9){
            return i;
        }
        else  if (temp === 10){
            return j;
        }
        else if (temp === 11){
            return k;
        }
        else if (temp === 12){
            check = "4";
            return l;
        }
    }
    else if (con1 === "6"){
        if (ccheck === "4"){
            temp = 14;
            return response;
        }
        else if (temp === 13 && (ccheck === "5" || ccheck === "6")){
            return response1;
        }
        else if (temp === 14 && (ccheck === "5" || ccheck === "6")){
            return response2;
        }
    }
    else if (con1 === "8"){
        check = "7";
        if (temp === 15){
            return response1;
        }
        else if (temp === 16){
            check = "8";
            return response2;
        }
    }
    else if (con1 === "9"){
        check = "8";
        if (temp === 17){
            return response1;
        }
        else if (temp === 18){
            check = "9";
            return response2;
        }
    }
    else if (con1 === "10"){
        check = "9";
        if (temp === 19){
            return response;
        }
        else if (temp === 20){
            return response1;
        }
        else if (temp === 21){
            check = "10";
            return response2;
        }
    }
    else if (con1 === "11"){
        check = "10";
        if (temp === 22){
            return response1;
        }
        else if (temp === 23){
            check = "11";
            return response2;
        }
    }
    else if (con1 === "12"){
        check = "11";
        if (temp === 24){
            return response1;
        }
        else if (temp === 25){
            check = "12";
            return response2;
        }
    }
    else if (con1 === "14"){
        check = "13";
        if (temp === 26){
            return response;
        }
        else if (temp === 27){
            return response1;
        }
        else if (temp === 28){
            check = "14";
            return response2;
        }
    }
    else if (con1 === "15"){
        check = "14";
        if (key === "g1"){
            if (temp === 29){
                return response;
            }
            else if (temp === 30){
                return response1;
            }
            else if (temp === 31){
                check = "15";
                return response2;
            }
        }
        else if (key === "g2"){
            if (temp === 29){
                return m;
            }
            else if (temp === 30){
                return n;
            }
            else if (temp === 31){
                return o;
            }
            else if (temp === 32){
                return p;
            }
            else if (temp === 33){
                check = "15";
                return q;
            }
        }
        else if (key === "g3"){
            if (temp === 29){
                return response;
            }
            else if (temp === 30){
                return response1;
            }
            else if (temp === 31){
                check = "15";
                return response2;
            }
        }
        else if (key === "g4"){
            check = "15";
            return response;
        }
        else if (key === "g5"){
            if (temp === 29){
                return r;
            }
            else if (temp === 30){
                return s;
            }
            else if (temp === 31){
                return t;
            }
            else if (temp === 32){
                return u;
            }
            else if (temp === 33){
                check = "15";
                return v;
            }
        }
        else if (key === "g6"){
            check = "15";
            return response;
        }
        else if (key === "g7"){
            if (temp === 29){
                return w;
            }
            else if (temp === 30){
                return x;
            }
            else if (temp === 31){
                return y;
            }
            else if (temp === 32){
                check = "15";
                return z;
            }
        }
    }
    else if (con1 === "17"){
        check = "15";
        if (ccheck === "7"){
            if (temp === 41){
                return response;
            }
            else if (temp === 42){
                return response1;
            }
            else if (temp === 43){
                check = "17";
                return response2;
            }
        }
        else if (ccheck === "10"){
            if (temp === 41){
                return response;
            }
            else if (temp === 42){
                return response1;
            }
            else if (temp === 43){
                return response2;
            }
            else if (temp === 44){
                check = "17";
                return aa;
            }
        }
    }
}
  
function evaluateInput(input){
    var text = String(input);
    
    if (con1 === "0") {
      if (text.includes("30") || text.includes("30 mins") || text.includes("30 minutes")) {
        key = "Condition1";
        con1 = "2";
      } 
      
      if (text.includes("less") || text.includes("less than 30")) {
        key = "Condition2";
        con1 = "2";
      } 
  
      if (text.includes("more") || text.includes("more than 30")) {
        key = "Condition3";
        con1 = "2";
      }
      
    }
    
    if (con1 === "2") {
        if (text.includes("yes")||text.includes("yeah")||text.includes("defenitely")||text.includes("Yes")||text.includes("YES")){
            key = "a";
        }
        else if (text.includes("no")||text.includes("not really")||text.includes("nah")||text.includes("No")||text.includes("NO")){
            key = "b";
        }
    }

    if (con1 === "4"){
        if (text.includes("1")||text.includes("2")||text.includes("3")){
            key = "c1";
        }
        if (text.includes("4")||text.includes("5")||text.includes("6")){
            key = "c2";
        }
        if (text.includes("7")||text.includes("8")||text.includes("9")||text.includes("10")){
            key = "c3";
        }
    }

    if (con1 === "12"){
        if (text.includes("yes")||text.includes("yeah")||text.includes("yes i am")){
            key = "z";
        }
        else if (text.includes("no")||text.includes("not really")||text.includes("nah")){
            key = "y";
        }
    }

    if (con1 === "14"){
        if (text.includes("Urges and cravings")||text.includes("urges")||text.includes("cravings")){
            key = "g1";
        }
        else if (text.includes("Feeling irritated")||text.includes("irritated")){
            key = "g2";
        }
        else if (text.includes("Feeling restless")||text.includes("restless")){
            key = "g3";
        }
        else if (text.includes("Difficulty in concentrating")||text.includes("concentrating")||text.includes("concentration")){
            key = "g4";
        }
        else if (text.includes("Feeling exhausted")||text.includes("exhausted")){
            key = "g5";
        }
        else if (text.includes("Feeling hungry or weight gain")||text.includes("hungry")||text.includes("weight gain")){
            key = "g6";
        }
        else if (text.includes("Smoking issues")||text.includes("Smoking")){
            key = "g7";
        }
    }

    if (con1 === "17"){
        if (text.includes("yes")||text.includes("yeah")||text.includes("yes i am")){
            key = "k1";
        }
        else if (text.includes("no")||text.includes("not really")||text.includes("nah")){
            key = "k2";
        }
    }
    return key;
}