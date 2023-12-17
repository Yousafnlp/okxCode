import React, { useState, useEffect } from 'react';
import Header from './Header';
import HeaderMob from './HeaderMob';


function ResponsiveHeaders() {
  const [isMobileOrTablet, setIsMobileOrTablet] = useState(
    window.innerWidth <= 1180 // Adjust the breakpoint as needed
  );

  useEffect(() => {
    const handleWindowSizeChange = () => {
      setIsMobileOrTablet(window.innerWidth <= 1180); // Adjust the breakpoint as needed
    };

    window.addEventListener('resize', handleWindowSizeChange);

    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, []);

  return (
    <>
      <div>
        {isMobileOrTablet ? (
          // Component to show on mobile or tablet
          <>
<HeaderMob/>
          </>) : (
          // Component to show on laptop or large screens
          <>
          
          <Header/>
          </>
        )}
      </div>
    </>
  );
}

export default ResponsiveHeaders;
