# Foolproof Interview Exercise

## Overview

After looking at the mock api, I decided that the most likely application of the data was in a building maintence capacity, as having up to date information on temperature and carbon dioxide levels across an office block would be an important part of health and safety compliance. Therefore my app would look to display the data in a way that would be useful to a person working in that industry.

## Goal & Planning

I decided that I would primarily design for tablet and mobile viewports, as from my experience, building managers tend not to spend alot of time at a desk and are often moving about between floors.  

As this is information that the user would need at a glance, it would need to fit comfortably onto a tablet, be arranged in a grid format and have clear visual status indicators. The intended viewport size is 810 x 1080 (iPad size) and 428 x 926 (larger iPhones).

I drew a quick wireframe in Excalidraw for a reference point and sketched out some rough control flow in JavaScript (Get data > Store Data > Transform data > Show data)

## Development

### JavaScript & Control Flow
 The first thing I did was access the mock data array which returned from the getData function. I used an the async/await pattern to allow the initial getData function to run and return the data, before storing the returning array in a new array called resut. The .then() method was another viable candiate here, but I am more comfortable with await functions.

 Then it was a matter of working out how I wanted to display the information. Having decided to arrange it by floor in my wireframe, I used the result array to filter & map 4 new arrays which would return a div containing the information for each floor. 

 I also added some ternary operators in the div to decide what units of measurement to append to the data, as well as which class to assign the online/offline status.

 From here, it was a case of joining these mapped arrays to their corresponding html elements via the DOM.

 ### HMTL & CSS

I decided to mostly use my own markup, as I had a clear idea of the visual design. I used semntic HTML, deciding that articles were probably the best fit for the floor information sections.

 I relied heavily on flexbox for the layout, as I like the way it simplifies building grids in CSS. When I'd approximated the wireframe and made it fit comfortably and clearly on a tablet, I applied a fairly neutral color scheme, which from experience I feel is appropriate to the facilities management industry.

 I also added a phone view, arranging the floor information into a smaller space (opting for flex columns over flex rows), before finally adding some box shadowing to make sure that the information was clear on all devices.

 ### Future Additions
I had intially wanted to have the app update in real time, and attempted this in jQuery. However this gave me errors which I was unable to solve in time. 

A rough solution to this would be to have a page reload on a setTimeout, but I didn't like how intensive that was.

I looked into using jQuery to target a certain element and refresh that information every 30 seconds, but the solutions I tried for this (lines 185-187 in the app.js), ran into XML parsing errors, which I was unable to find solutions for. With some additional time I'm sure I could have implemented this feature.

