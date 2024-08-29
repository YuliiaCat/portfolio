import { Outlet } from 'react-router'
import './App.css'
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const cursorCircle = document.getElementById('cursor-circle');
      if (cursorCircle) {
        cursorCircle.style.left = `${event.clientX}px`;
        cursorCircle.style.top = `${event.clientY}px`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <main>
      <Outlet />
      <div id="cursor-circle"></div>
    </main>
  )
}

export default App
