import React, { useState, useEffect } from 'react';

export const Watermark = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Check if user has dismissed watermark before
    const dismissed = localStorage.getItem('watermarkDismissed');
    if (dismissed === 'true') {
      setIsVisible(false);
    }
  }, []);

  const dismissWatermark = () => {
    setIsVisible(false);
    localStorage.setItem('watermarkDismissed', 'true');
  };

  if (!isVisible) return null;

  return (
    <div 
      id="watermark" 
      style={{
        zIndex: 2147483647,
        position: 'fixed',
        bottom: '24px',
        left: '50%',
        transform: 'translateX(-50%)',
        width: 'fit-content',
        maxWidth: 'none',
        backgroundColor: 'rgb(255, 255, 255)',
        borderStyle: 'solid',
        borderWidth: '1px',
        borderRadius: '999px',
        borderColor: 'rgba(0, 10, 36, 0.08)',
        padding: '12px 20px',
        boxShadow: 'rgba(9, 10, 20, 0.06) 0px 8px 12px 0px',
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div 
        id="close-button" 
        style={{
          position: 'absolute',
          top: '-12px',
          right: '-12px',
          width: '32px',
          height: '32px',
          backgroundColor: 'rgb(255, 255, 255)',
          borderRadius: '50%',
          borderStyle: 'solid',
          borderWidth: '1px',
          borderColor: 'rgba(0, 10, 36, 0.08)',
          cursor: 'pointer',
          boxShadow: 'rgba(9, 10, 20, 0.06) 0px 8px 12px 0px',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        onClick={dismissWatermark}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2D303D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="6" x2="6" y2="18"/>
          <line x1="6" y1="6" x2="18" y2="18"/>
        </svg>
      </div>
      <div style={{ color: 'rgb(93, 93, 93)', fontFamily: 'Geist', fontSize: '14px', lineHeight: '20px', fontWeight: '600', whiteSpace: 'nowrap', marginRight: '0px' }}>
        This Website is Made with
      </div>
      <img 
        src="https://public.readdy.ai/gen_page/watermark.png" 
        style={{ width: '92px', height: 'auto', paddingLeft: '8px', flexShrink: '0' }} 
      />
      <div style={{ color: 'rgb(93, 93, 93)', fontFamily: 'Geist', fontSize: '14px', lineHeight: '20px', fontWeight: '600', whiteSpace: 'nowrap', marginRight: '12px' }}>
        . You can also get one like this in minutes
      </div>
      <div 
        id="generate-button" 
        style={{
          padding: '8px 16px',
          background: 'linear-gradient(rgb(167, 151, 255) 0%, rgb(112, 87, 255) 100%)',
          borderRadius: '999px',
          border: 'none',
          gap: '6px',
          cursor: 'pointer',
          marginLeft: '12px',
          whiteSpace: 'nowrap',
          width: 'auto',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="16" height="16" viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M4.87 4.94c.227-.71 1.21-.723 1.456-.02l1.177 3.378 3.101 1.013c.708.231.714 1.216.01 1.455l-3.183 1.082-1.105 3.17c-.245.704-1.23.69-1.455-.02l-.989-3.107-3.367-1.203c-.702-.25-.68-1.234.04-1.455l3.282-1.016 1.043-3.277Z" fill="#FFF"/>
          <path fillRule="evenodd" d="M12.238 1.3c.167-.667 1.1-.667 1.266 0l.388 1.551 1.55.388c.666.166.667 1.1 0 1.266l-1.55.388-.388 1.55c-.167.666-1.1.667-1.266 0l-.388-1.55-1.55-.388c-.667-.166-.667-1.1 0-1.266l1.55-.388.388-1.551Z" fill="#FFF"/>
        </svg>
        <span style={{ color: 'rgb(255, 255, 255)', fontFamily: 'Geist', fontSize: '18px', fontWeight: '600', lineHeight: '20px' }}>Get one for FREE</span>
      </div>
    </div>
  );
};