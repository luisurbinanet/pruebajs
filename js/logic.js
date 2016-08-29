		// On Load of the window
		window.onload = function() {
			
			// Start calendar
			var c = new Calendar("divCalendar");			
			c.showCurrent();
			
			// Bind next and previous button clicks
			getId('btnNext').onclick = function() {
				c.nextMonth();
			};
			getId('btnPrev').onclick = function() {
				c.previousMonth();
			};
		}
		
		// Get element by id
		function getId(id) {
			return document.getElementById(id);
		}