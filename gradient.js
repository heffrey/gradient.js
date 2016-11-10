
 function Gradient() { 
			
	this.nextPoint = new Object();
	this.prevPoint = new Object();
	
	this.hex = '#FFFFFF';
	this.r = 255;
	this.g = 255;
	this.b = 255;
	
	this.setColorPoints = function(pointsArr) {
		this.colorPoints = pointsArr;
		this.colorPoints.sort(function(a,b) {return a.point - b.point});
	};

	this.setColorPoints([{point:0, r:255, g:0, b: 0}, {point:400, r:255, g:255, b: 0}, {point:800, r:0, g:255, b:0}]);

	
	this.getHex = function(getVal) { 
		
		this.hex = '#FFFFFF';
		var onPoint = false;
		// TODO: snap to max or min point 
	
		// if we are on a point 
		for (itr = 0; itr < this.colorPoints.length; itr++) { 
			if (getVal == this.colorPoints[itr].point) { 
				this.prevPoint = this.colorPoints[itr];
				this.nextPoint = this.colorPoints[itr];
				onPoint = true;
 
				this.r = this.colorPoints[itr].r;
				this.g = this.colorPoints[itr].g;
				this.b = this.colorPoints[itr].b;
				
				this.hex = toHex(this.r, this.g, this.b);
				return this.hex;
			} 
		} 
		
		// we are not on a point 
		if (onPoint == false) { 
		
		// determine next and previous 
			for (itr = 0; itr < this.colorPoints.length; itr++) { 
				if (getVal > this.colorPoints[itr].point) { 
					this.prevPoint = this.colorPoints[itr];
				} 
			} 
			
			for (itr = this.colorPoints.length-1; itr > 0; itr--) { 
				if (getVal < this.colorPoints[itr].point) { 
					this.nextPoint = this.colorPoints[itr];
				}
			} 
			
			distanceNext = this.nextPoint.point - getVal;
			distancePrev = getVal - this.prevPoint.point;
			distanceTot = distanceNext + distancePrev;
 
			this.r = (distanceTot - distanceNext) / distanceTot * this.nextPoint.r + (distanceTot - distancePrev) / distanceTot * this.prevPoint.r;
			this.g = (distanceTot - distanceNext) / distanceTot * this.nextPoint.g + (distanceTot - distancePrev) / distanceTot * this.prevPoint.g;
			this.b = (distanceTot - distanceNext) / distanceTot * this.nextPoint.b + (distanceTot - distancePrev) / distanceTot * this.prevPoint.b;
			this.hex = toHex(this.r, this.g, this.b);
			return this.hex;
		} 
	};
 } 
 
 function toHex(r,g,b) { return '#' + padHex(Math.round(r)) + padHex(Math.round(g)) + padHex(Math.round(b)); } 
 
 function padHex(value) { 
	if (value < 16) return '0' + value.toString(16);
	else return value.toString(16);
 }
