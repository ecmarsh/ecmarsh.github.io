// React to return the JSX
import React, { Fragment } from 'react';

const iconData = {
  arrowDown: {
    viewBox: '0 0 455.27 166.54',
    tag: 'polygon',
    path: '454.77 32.52 229.19 165.96 0.85 37.33 0.51 5.06 230.63 133.98 454.43 0.87 454.77 32.52',
  },
  checkmark: {
    viewBox: '0 0 50 50',
    tag: 'circle',
    path: 'M14.1 27.2l7.1 7.2 16.7-16.8',
  },
  linkedin: {
    viewBox: '0 0 307.41 307.41',
    tag: 'g',
    path: (
      <Fragment>
        <path
          d="M227.66,199.25h.3v-.45C227.86,199,227.74,199.11,227.66,199.25Zm0,0h.3v-.45C227.86,199,227.74,199.11,227.66,199.25ZM208.71,72a153.71,153.71,0,1,0,153.7,153.71A153.71,153.71,0,0,0,208.71,72ZM156.36,317.81H110.27V179.15h46.09Zm-23-157.58H133c-15.46,0-25.48-10.66-25.48-24,0-13.61,10.32-23.95,26.09-23.95s25.47,10.34,25.78,23.95C159.4,149.57,149.4,160.23,133.32,160.23ZM276.49,317.81V243.63c0-18.64-6.66-31.36-23.35-31.36-12.73,0-20.31,8.57-23.65,16.86-1.21,3-1.53,7.09-1.53,11.24v77.44H181.85s.62-125.64,0-138.66H228V198.8c6.12-9.43,17.06-22.91,41.55-22.91,30.34,0,53.08,19.82,53.08,62.41v79.51ZM228,199.25v-.45c-.1.15-.22.31-.3.45Z"
          transform="translate(-55 -72)"
        />
      </Fragment>
    ),
  },
  github: {
    viewBox: '0 0 307.41 302.92',
    tag: 'g',
    path: (
      <Fragment>
        <path
          d="M362.41,226.71A153.75,153.75,0,0,1,257.33,372.56a13,13,0,0,1-.83-4.92c0-12.32.09-24.64,0-37-.06-5.93.44-11.86-.88-17.79a58,58,0,0,0-2.48-8.81,26.53,26.53,0,0,0-6.11-9.24,1.41,1.41,0,0,1-.46-1.11c.07-.26.66-.47,1-.52,2.15-.26,4.3-.11,6.47-.74s4.64-.55,7-.81a4.94,4.94,0,0,0,1.35-.33,21.23,21.23,0,0,1,2-1c2.33-.69,4.72-1.21,7-2a87.05,87.05,0,0,0,17-7.69,56.19,56.19,0,0,0,17.89-15.5,70.26,70.26,0,0,0,10.27-21.77c.67-2.27,1-4.65,1.48-7a50.52,50.52,0,0,0,1.32-6c.49-5.52,1-11.06,1.07-16.59A104.88,104.88,0,0,0,319.7,201a40.43,40.43,0,0,0-1.76-7.3,82.35,82.35,0,0,0-3.26-9.37,56.88,56.88,0,0,0-10.13-15.19,2.13,2.13,0,0,1-.45-1.68c.87-3.84,1.87-7.65,2.77-11.48a33,33,0,0,0,.49-3.31,18.49,18.49,0,0,0,.42-3.36,36.08,36.08,0,0,0-.66-3.83c-.2-1.3-.27-2.62-.53-3.91-.45-2.29-.89-4.58-1.51-6.82q-1.21-4.37-2.72-8.64a3,3,0,0,0-1.56-1.61,14.65,14.65,0,0,0-3.07-.39c-3.42-.44-6.57.85-9.71,1.76a98.19,98.19,0,0,0-11,4.22c-2.56,1.08-5,2.44-7.51,3.69a15.14,15.14,0,0,0-1.59.84c-3.35,2.16-6.67,4.37-10.05,6.49a2.67,2.67,0,0,1-1.78.29c-1.12-.24-2.18-.79-3.3-1-3.19-.67-6.43-1.11-9.59-1.89a39.08,39.08,0,0,0-7.9-1.12c-1.7-.07-3.39-.43-5.09-.67s-3.29-.72-4.89.23c-.2.12-.6-.08-.89-.16a5,5,0,0,0-1.12-.39c-2.42-.15-4.85-.36-7.28-.35q-5.08,0-10.17.35c-4.85.3-9.73.41-14.47,1.68-1,.25-2,.29-3,.47-2.58.46-5.17.92-7.75,1.45-1.09.22-2.12.78-3.21.91s-2.26.86-3.47.11c-2.58-1.58-5.15-3.18-7.8-4.63-3.85-2.1-7.7-4.23-11.68-6.06-4.84-2.22-9.76-4.37-15.06-5.31-2.19-.39-4.41-.65-6.62-.84a2.43,2.43,0,0,0-2.84,1.69,1.26,1.26,0,0,1-.55.76c-1.12.43-1.13,1.51-1.51,2.39a39,39,0,0,0-3,12,98.26,98.26,0,0,0-.37,13.4,55.77,55.77,0,0,0,1.52,8.9c.28,1.36.91,2.64,1.26,4a2.08,2.08,0,0,1-.17,1.56c-1.67,2.33-3.48,4.56-5.13,6.89a52.35,52.35,0,0,0-4.07,6.33,44.85,44.85,0,0,0-4.74,12.72c-.45,2.54-.31,5.1-.92,7.65-.67,2.85.24,5.88-.7,8.86-.64,2-.45,4.34-.45,6.53s.32,4.14.32,6.21c0,5.28,1.41,10.33,2.45,15.43a47.09,47.09,0,0,0,2.07,6.73c1.29,3.47,2.55,7,4.1,10.33a52.36,52.36,0,0,0,16.14,19.77,50.05,50.05,0,0,0,9.06,5.56c3.14,1.45,6.17,3.15,9.34,4.55a49,49,0,0,0,6.11,2c3.19.93,6.37,2,9.63,2.65,4.37.88,8.81,1.44,13.23,2.12,1.22.18,1.59.65,1,1.47s-1.24,1.65-1.87,2.47A35.55,35.55,0,0,0,176.65,309c-.47,1.6-.71,3.27-1.08,4.9-.2.83-.21,1.79-1.25,2.16-2.63.93-5.21,2-7.89,2.76a39.09,39.09,0,0,1-5.55.84c-1.8.24-3.45,1.11-5.47.44a24.06,24.06,0,0,0-6.26-.72c-3.74-.18-6.71-2.23-9.78-4-4.51-2.53-7.57-6.57-10.18-10.91-3.65-6.06-7.74-11.61-14.25-15-3.67-1.89-7.07-4.23-11.52-4.21-2.18,0-4.31-.38-6.47.39-1.91.69-2.26,1.14-1.59,3a2.94,2.94,0,0,0,.53,1.06c1.63,1.63,3.29,3.24,5,4.84.16.16.44.19.64.32a45.21,45.21,0,0,1,5.67,3.91,38.58,38.58,0,0,1,5.84,7.51,72.42,72.42,0,0,1,6.94,13.86,24.07,24.07,0,0,0,1.29,2.83,19.81,19.81,0,0,0,5.13,6.55c1.5,1.17,2.75,2.69,4.3,3.77a29.61,29.61,0,0,0,13.94,5.34c3.68.38,7.34,1,11,1.29,6,.49,11.85-.51,17.74-1.28,1.41-.19,1.56-.16,1.56,1.2,0,9.84,0,19.68,0,29.52a7.62,7.62,0,0,1-3.24,6.49,153.74,153.74,0,1,1,190.7-149.21Z"
          transform="translate(-55 -73)"
        />
        <path d="M228,200.12h-.3c.08-.14.2-.3.3-.45Z" transform="translate(-55 -73)" />
      </Fragment>
    ),
  },
};

export default iconData;
