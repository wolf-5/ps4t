function consolecheck(){
	
	var isPlaystation4 = false;
	
	var ua = navigator.userAgent;
	var fwVersionp34 = ua.substring(ua.indexOf('5.0 (') + 19, ua.indexOf(") Apple"));
		
	
	switch (navigator.platform) {
		
		case "PlayStation 4":
			isPlaystation4 = true;
			break;
		
		default:
			alert("Unfortunately, your device does not support this feature");
			
			window.stop();
			
			isPlaystation4 = false;
			break;
	}


	if (isPlaystation4) {
		switch (fwVersionp34) {
			
			case ps4fwCompat[0]:
			   
				document.location.href="r505/index.html"
			    break;

			case ps4fwCompat[1]:
			   
				document.location.href="r505/index.html"
			    break;
				
			case ps4fwCompat[2]:
			   document.location.href="r672/index.html"
				break;
				
			case ps4fwCompat[3]:
			    document.location.href="702.html"
				break;

			case ps4fwCompat[4]:
			   
				document.location.href="702.html"
			    break;
			
			case ps4fwCompat[5]:
			   document.location.href="755.html.html"
				break;
				
			case ps4fwCompat[6]:
			    document.location.href="755.html.html"
				break;
				
			case ps4fwCompat[7]:
			    document.location.href="755.html.html"
				break;
				
			default:
				document.location.href=""
				break;
		}
	}

	
}
