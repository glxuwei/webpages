var WAY=function()
{
	this.doms = {};
	this.getAllWayNodes(document.body);
}

WAY.prototype.set = function(selector, value)
{
	//console.log(selector);
	var ele = this.doms[selector]
	if(ele)
	{
		if(ele.nodeName == 'IMG' || ele.nodeName == 'IMAGE')
		{
			ele.setAttribute('src', value);
		}
		else
		{
			ele.innerHTML = value;
		}
		
	}
	
}

WAY.prototype.getAllWayNodes = function(ele)
{
	if(!ele || !ele.getAttribute)
	{
		return;
	}
	var selectorName = ele.getAttribute('way-data');
	if(selectorName)
	{
		this.doms[selectorName] = ele;
		//console.log(selectorName);
	}

	var eles = ele.childNodes;
	var len = eles.length;

	for(var i = 0; i < len; i++)
	{
		this.getAllWayNodes(eles[i]);
	}
}


