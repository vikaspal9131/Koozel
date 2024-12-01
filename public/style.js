const bgContainer = document.getElementById('background-lines');
        const verticalLines = 10; 
        const horizontalLines = 5; 
      
        // Generate vertical lines
        for (let i = 0; i < verticalLines; i++) {
          const line = document.createElement('div');
          line.style.backgroundColor = '#E1E5EA'; 
          line.className = 'absolute h-full w-[1px]';
          line.style.left = `${(i / verticalLines) * 100}%`; 
          bgContainer.appendChild(line);
        }
      
        // Generate horizontal lines
        for (let i = 0; i < horizontalLines; i++) {
          const line = document.createElement('div');
          line.style.backgroundColor = '#E1E5EA'; 
          line.className = 'absolute w-full h-[1px] ';
          line.style.top = `${(i / horizontalLines) * 100}%`; 
          bgContainer.appendChild(line);
        }


// const bgContainer = document.getElementById('background-lines');

//   // Number of vertical and horizontal lines
//   const verticalLines = 10; // Change this to the desired number of vertical lines
//   const horizontalLines = 5; // Change this to the desired number of horizontal lines

//   // Generate vertical lines
//   for (let i = 0; i < verticalLines; i++) {
//     const line = document.createElement('div');
//     line.className = 'absolute h-full w-[1px]';
//     line.style.backgroundColor = '#E1E5EA'; // Set the line color
//     line.style.left = `${(i / verticalLines) * 100}%`; // Space evenly across the width
//     bgContainer.appendChild(line);
//   }

//   // Generate horizontal lines
//   for (let i = 0; i < horizontalLines; i++) {
//     const line = document.createElement('div');
//     line.className = 'absolute w-full h-[1px]';
//     line.style.backgroundColor = '#E1E5EA'; // Set the line color
//     line.style.top = `${(i / horizontalLines) * 100}%`; // Space evenly across the height
//     bgContainer.appendChild(line);
//   }