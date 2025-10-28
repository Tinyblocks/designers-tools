import React, { useRef, useState, useCallback, useEffect } from 'react';
import styles from './HorizontalScroll.module.css';

function HorizontalScroll({ children, onScroll }) {
  const scrollRef = useRef(null);
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftStart, setScrollLeftStart] = useState(0);
  const velocityRef = useRef(0);
  const lastMoveXRef = useRef(0);
  const lastMoveTimeRef = useRef(0);
  const animationFrameRef = useRef(null);

  const smoothScroll = useCallback(() => {
    if (!scrollRef.current) return;
    
    scrollRef.current.scrollLeft += velocityRef.current;
    velocityRef.current *= 0.95;
    
    if (Math.abs(velocityRef.current) > 0.5) {
      animationFrameRef.current = requestAnimationFrame(smoothScroll);
    } else {
      velocityRef.current = 0;
    }
  }, []);

  const handleMouseDown = (e) => {
    e.preventDefault();
    setIsDown(true);
    setStartX(e.pageX);
    setScrollLeftStart(scrollRef.current.scrollLeft);
    velocityRef.current = 0;
    lastMoveXRef.current = e.pageX;
    lastMoveTimeRef.current = Date.now();
    
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }
  };

  const handleMouseLeave = () => {
    setIsDown(false);
    if (Math.abs(velocityRef.current) > 1) {
      animationFrameRef.current = requestAnimationFrame(smoothScroll);
    }
  };

  const handleMouseUp = () => {
    setIsDown(false);
    if (Math.abs(velocityRef.current) > 1) {
      animationFrameRef.current = requestAnimationFrame(smoothScroll);
    }
  };

  const handleMouseMove = (e) => {
    if (!isDown) return;
    
    e.preventDefault();
    const x = e.pageX;
    const walk = (x - startX) * 2.5;
    scrollRef.current.scrollLeft = scrollLeftStart - walk;
    
    const now = Date.now();
    const dt = now - lastMoveTimeRef.current;
    
    if (dt > 0) {
      const dx = x - lastMoveXRef.current;
      velocityRef.current = (dx / dt) * 16;
    }
    
    lastMoveXRef.current = x;
    lastMoveTimeRef.current = now;
  };

  const handleWheel = (e) => {
    if (e.target.closest('.scrollContainer')) {
      e.preventDefault();
      scrollRef.current.scrollLeft += e.deltaY * 0.8;
    }
  };

  // Equalize card heights
  useEffect(() => {
    const equalizeHeights = () => {
      if (!scrollRef.current) return;
      
      const cards = scrollRef.current.children;
      if (cards.length === 0) return;
      
      // Reset heights first
      Array.from(cards).forEach(card => {
        card.style.height = 'auto';
      });
      
      // Find max height
      let maxHeight = 0;
      Array.from(cards).forEach(card => {
        const height = card.offsetHeight;
        if (height > maxHeight) {
          maxHeight = height;
        }
      });
      
      // Apply max height to all cards
      Array.from(cards).forEach(card => {
        card.style.height = `${maxHeight}px`;
      });
    };
    
    const waitForImagesAndEqualize = () => {
      if (!scrollRef.current) return;
      
      const images = scrollRef.current.querySelectorAll('img');
      
      if (images.length === 0) {
        // No images, equalize immediately
        equalizeHeights();
        return;
      }
      
      let loadedCount = 0;
      const totalImages = images.length;
      
      const checkComplete = () => {
        loadedCount++;
        if (loadedCount === totalImages) {
          // All images loaded, equalize heights
          equalizeHeights();
        }
      };
      
      images.forEach(img => {
        if (img.complete) {
          checkComplete();
        } else {
          img.addEventListener('load', checkComplete);
          img.addEventListener('error', checkComplete); // Handle broken images
        }
      });
    };
    
    // Initial equalization attempt
    equalizeHeights();
    
    // Wait for images and re-equalize
    waitForImagesAndEqualize();
    
    // Fallback timeout
    const timer = setTimeout(() => {
      equalizeHeights();
    }, 500);
    
    // Re-run on window resize
    window.addEventListener('resize', equalizeHeights);
    
    return () => {
      window.removeEventListener('resize', equalizeHeights);
      clearTimeout(timer);
    };
  }, [children]);

  useEffect(() => {
    const handleScrollUpdate = () => {
      if (scrollRef.current && onScroll) {
        onScroll(scrollRef.current.scrollLeft);
      }
    };

    const scrollContainer = scrollRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleScrollUpdate);
      return () => {
        scrollContainer.removeEventListener('scroll', handleScrollUpdate);
      };
    }
  }, [onScroll]);

  return (
    <div
      ref={scrollRef}
      className={styles.scrollContainer}
      onMouseDown={handleMouseDown}
      onMouseLeave={handleMouseLeave}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
      onWheel={handleWheel}
    >
      {children}
    </div>
  );
}

export default HorizontalScroll;
