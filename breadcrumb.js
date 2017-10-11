//******************//
//**** Author: Cédric Boetens
//**** License: Exsited BVBA
//**** Date: 11/10/17
//******************//

class Breadcrumb {

	// constructor
	constructor(container, divider, cssClass) {
		this.container = container;
		this.divider = divider;
		this.cssClass = cssClass;
	}

	extractHostname(url) {
	    var hostname;
	    //find & remove protocol (http, ftp, etc.) and get hostname

	    if (url.indexOf("://") > -1) {
	        hostname = url.split('/')[2];
	    }
	    else {
	        hostname = url.split('/')[0];
	    }

	    //find & remove port number
	    hostname = hostname.split(':')[0];
	    //find & remove "?"
	    hostname = hostname.split('?')[0];

	    return hostname;
	}

	
	extractPagename(url) {
		var pagename;

		if(url.indexOf('/nl/')) {
			pagename = url.substring(url.indexOf('/nl/') + 4);
		}

		return pagename;
	}

	// function
	init() {
		var URL = document.location.href // of document.URL

		// prep URL
		var hostname = this.extractHostname(URL);
		var page = this.extractPagename(URL);

		// uitvoer
			
		// create list
		var list = document.createElement('ul');

		var listItem_hostname = document.createElement('li');
		var listItem_pagename = document.createElement('li');
		var listItem_divider = document.createElement('li');

		var link_hostname = document.createElement('a');
		var link_pagename = document.createElement('a');

		// add href to a + innerText
		link_hostname.href = '/';
		link_pagename.href = '/nl/' + page;

		link_hostname.innerHTML = 'Home';
		link_pagename.innerHTML = page;

		
		// append childs
		listItem_hostname.appendChild(link_hostname);
		listItem_divider.innerHTML= this.divider;

		// add space before & after divider
		listItem_divider.style.marginLeft="15px";
		listItem_divider.style.marginRight="15px";

		listItem_pagename.appendChild(link_pagename);

		// append parent
		list.appendChild(listItem_hostname);
		list.appendChild(listItem_divider);
		list.appendChild(listItem_pagename);

		if(this.cssClass) {
			list.classList.add(this.cssClass);
		}

		var cont = document.getElementsByClassName(this.container)[0];

		cont.appendChild(list);

	}




}