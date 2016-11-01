function createGuid()
	{
	    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
	        var r = Math.random()*16|0, v = c === 'x' ? r : (r&0x3|0x8);
	        return v.toString(16);
	    });
	}
	var appGuid = createGuid();
	var sameApp = 1;
	function whichApp(){
		sameApp = Math.floor(Math.random() * apps.length);
		return sameApp;
	}
	function rUserAgent(){
		return userAgent[Math.floor(Math.random() * userAgent.length)];
	}
	
	function setUserAgent(window, userAgent) {
    if (window.navigator.userAgent != userAgent) {
        var userAgentProp = { get: function () { return userAgent; } };
        try {
            Object.defineProperty(window.navigator, 'userAgent', userAgentProp);
        } catch (e) {
            window.navigator = Object.create(navigator, {
                userAgent: userAgentProp
            });
        }
    }
}

var getRandomNum = Math.random() + "";
var randomNum = getRandomNum * 10000000000000;

function randURL() {
	return(Math.floor(Math.random() * 7));
	}

vastURL1 = "http://serve.vdopia.com/adserver/html5/inwapads/?ak=4b2fa936f5cbd0fa1451b118488f63fc&category=IAB9&type=app&adFormat=preappvideo&sleepAfter=0&version=1.1&requester=revolution&appName=Solitaire&appBundle=com.mobilityware.solitaire&appDomain=mobilityware.com&appStoreURL=https%3A%2F%2Fitunes.apple.com%2Fus%2Fapp%2Fsolitaire%2Fid359917414%3Fmt%3D8&dif=dpid&dnt=0&size=720x480&output=vast&cb="+randomNum+"&di="+appGuid+"&ua="+rUserAgent();
vastURL2 = "http://serve.vdopia.com/adserver/html5/inwapads/?ak=94b98b1e1dfa507da8c06a547783439e&cb="+randomNum+"&category=IAB1-6&type=app&adFormat=preappvideo&sleepAfter=0&version=1.1&requester=revolution&appName=Slacker%20Radio&appBundle=com.slacker.radio&appDomain=slacker.com&appStoreURL=http%3A%2F%2Fitunes.apple.com%2Fapp%2Fslacker-radio%2Fid298307011%3Fuo%3D5&dif=dpid&di="+appGuid+"&width=720&height=480&dnt=0&output=vast&ua="+rUserAgent();
vastURL3 = "http://serve.vdopia.com/adserver/html5/inwapads/?ak=80649f83af470f5a3578a940c4f5dd85&category=IAB9&type=app&adFormat=preappvideo&sleepAfter=0&version=1.1&requester=revolution&appName=Bejeweled%20Classic&appBundle=com.ea.gp.bej3&appDomain=eamobile.com&appStoreURL=https%3A%2F%2Fitunes.apple.com%2Fus%2Fapp%2Fbejeweled-classic%2Fid479536744%3Fmt%3D8&dif=dpid&di="+appGuid+"&dnt=0&size=720x480&output=vast&cb="+randomNum+"&ua="+rUserAgent();
function VAST() {
        var getURLNum = randURL();
        if (getURLNum == 1) {
			return (vastURL3);
		} else if (getURLNum == 2) {
			return (vastURL2);
		} else {
			return (vastURL1);
		}
		
}